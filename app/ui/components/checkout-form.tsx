import Checkout from '@/app/ui/checkout.module.css'
import Link from 'next/link'


export default function CheckoutForm(){

    return(
        <div>
            <form className={` flex justify-center p-6 m-6 `}>
                <fieldset className={`${Checkout.form} outline p-3 m-3`}>
                    <legend className='p-2 '>Purchase Form</legend>
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
                   
                    {/* <input className={`${Checkout.submitBtn} `} type='submit' value='Complete Order' /> */}
                    
                    <Link className={`${Checkout.submitBtn} `}
                     href='/cart/checkout/confirmation'>
                        <button>Fake Complete Order</button>
                    </Link>

                    

                </fieldset>
        

            </form>
        </div>
        

    )

}

