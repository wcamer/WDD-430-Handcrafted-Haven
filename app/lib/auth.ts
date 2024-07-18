'use server';

import { sql } from '@vercel/postgres';
import { z } from 'zod';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import bcrypt from 'bcrypt';
import { v4 as uuidv4 } from 'uuid';
//login
import { signIn, signOut } from '@/auth';
import { AuthError } from 'next-auth';

const FormSchema = z.object({
  user_id: z.string(),
  user_address: z.string(),
  user_city: z.string(),
  user_state: z.string(),
  user_zip: z.string(),
  user_name: z.string(),
  user_email: z.string(),
  user_password: z.string(),
});

const CreateUser = FormSchema.omit({user_id:true});

export async function createUser(formData: FormData) {
    console.log('this is the formdata ', formData);
  let {
    user_address,
    user_city,
    user_state,
    user_zip,
    user_name,
    user_email,
    user_password,
  } = CreateUser.parse({
    user_address: formData.get('user_address'),
    user_city: formData.get('user_city'),
    user_state: formData.get('user_state'),
    user_zip: formData.get('user_zip'),
    user_name: formData.get('user_name'),
    user_email: formData.get('user_email'),
    user_password: formData.get('user_password'),
  });
  let user_id = uuidv4();
  const hashedPassword = await bcrypt.hash(user_password , 10);
  user_password = hashedPassword;
 
    const newUser =
      await sql`INSERT INTO users (user_id, user_name, user_email, user_password, user_city, user_state, user_address, user_zip)
        VALUES (${user_id}, ${user_name}, ${user_email}, ${user_password}, ${user_city}, ${user_state}, ${user_address}, ${user_zip})
        ON CONFLICT (user_id) DO NOTHING;
      `;
    console.log('user created! ', newUser);

    //clean the cache
    revalidatePath('/successRegister');
    //redirect user to invoices
    redirect('/successRegister');

}


export async function authenticate(
    prevState: string | undefined,
    formData: FormData,
  ) {
    try {
      await signIn('credentials', formData);
        //clean the cache
        console.log('redirect!');
        revalidatePath('/profile');
        redirect('/profile');
    } catch (error) {
      if (error instanceof AuthError) {
        switch (error.type) {
          case 'CredentialsSignin':
            return 'Invalid credentials.';
          default:
            return 'Something went wrong.';
        }
      }
      throw error;
    }
  }

export async function logoutSession(){
    try {
       await signOut();
         //redirect user to invoices 
       revalidatePath('/login');
       redirect('/login');
    } catch (error) {
        if (error instanceof AuthError) {
            switch (error.type) {
              case 'CredentialsSignin':
                return 'Invalid credentials.';
              default:
                return 'Something went wrong.';
            }
          }
          throw error;
    }
}