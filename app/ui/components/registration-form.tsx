
import Register from '@/app/ui/registration.module.css'

import Link from 'next/link' // this might be removed in the future

export default function RegForm(){


    return(

        <div>
            <form className={` flex justify-center p-6 m-6 `}>
                <fieldset className={`${Register.form} outline p-3 m-3`}>
                    <legend className='p-2 '>Registration Form</legend>
                    <label htmlFor='name'>Name</label><br />
                    <input type='text'id='name'/><br /><br />
                    <label htmlFor='address'>Address</label><br />
                    <input type='text'id='address'/><br /><br />
                    <label htmlFor='city'>City</label><br />
                    <input type='text' id='city'/><br /><br />
                    <label htmlFor='state'>State</label><br />
                    <input type='text'id='state'/><br /><br />
                    <label htmlFor='zip'>Zip</label><br />
                    <input type='text'id='zip'/><br /><br />
                    <label htmlFor='email'>Email</label><br />
                    <input type='text'id='email'/><br /><br />
                    <label htmlFor='password'>Password</label><br />
                    <input type='text' id='password'/><br /><br />
                    {/* <input className={`${Register.submitBtn} `} type='submit' value='Complete Order' /> */}
                    
                    <Link className={`${Register.submitBtn} `}
                    href='/'>
                        <button>Complete Registration</button>
                    </Link>

                    

                </fieldset>
    

            </form>
        </div>
    )
}