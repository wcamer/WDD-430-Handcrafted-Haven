'use server'
import { createUser } from "@/app/lib/auth";
import { User } from "@/app/lib/definitions";
import bcrypt from 'bcrypt';

export async function signUp(user: User){
    const hashedPassword = await bcrypt.hash(user.user_password, 10);
    user.user_password = hashedPassword;
    return await createUser(user);
}


export async function login(){

}