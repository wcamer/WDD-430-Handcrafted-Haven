import Login from '@/app/ui/login.module.css'

import Link from 'next/link' // this might be removed in the future

export default function LoginForm(){


    return(

        <div>
            <form className={` flex justify-center p-6 m-6 `}>
                <fieldset className={`${Login.form} outline p-3 m-3`}>
                    <legend className='p-2 '>Login Form</legend>
                    <label htmlFor='email'>Email</label><br />
                    <input type='text' id='email'/><br /><br />
                    <label htmlFor='password'>Password</label><br />
                    <input type='text' id='password'/><br /><br />
                  
                    {/* <input className={`${Register.submitBtn} `} type='submit' value='Complete Order' /> */}
                    
                    <Link className={`${Login.submitBtn} `}
                    href='/'>
                        <button>Login</button>
                    </Link>

                    

                </fieldset>
    

            </form>
           
        </div>
    )
}