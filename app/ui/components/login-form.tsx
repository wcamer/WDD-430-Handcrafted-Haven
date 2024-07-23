'use client';
import Login from '@/app/ui/login.module.css'

import { useActionState } from 'react';
import { authenticate } from '@/app/lib/auth';

export default function LoginForm(){
    const [errorMessage, formAction, isPending] = useActionState(
        authenticate,
        undefined,
      );

      

    return(

        <div>
            <form action={formAction} className={` flex justify-center p-6 m-6 `}>
                <fieldset className={`${Login.form} outline p-3 m-3`}>
                    <legend className='p-2 '>Login Form</legend>
                    <label htmlFor='email'>Email</label><br />
                    <input type='text' id='email' name='email'/><br /><br />
                    <label htmlFor='password'>Password</label><br />
                    <input type='text' id='password' name='password'/><br /><br />
                  
                    {/* <input className={`${Register.submitBtn} `} type='submit' value='Complete Order' /> */}
 
                        <button className={`${Login.submitBtn} `}>Login</button>
                        {errorMessage && (
            <>
             
              <p className="text-sm text-red-500">{errorMessage}</p>
            </>
          )}

                </fieldset>
    

            </form>
           
        </div>
    )
}