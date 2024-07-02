import Checkout from '@/app/ui/checkout.module.css'
import Link from 'next/link'


export default function CheckoutForm(){

    return(
        <div>
            <form className={` flex justify-center p-6 m-6 `}>
                <fieldset className={`${Checkout.form} outline p-3 m-3`}>
                    <legend className='p-2 '>Purchase Form</legend>
                    <label>Name</label><br />
                    <input /><br /><br />
                    <label>Address</label><br />
                    <input /><br /><br />
                    <label>City</label><br />
                    <input /><br /><br />
                    <label>State</label><br />
                    <input /><br /><br />
                    <label>Zip</label><br />
                    <input /><br /><br />
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

