'use client'

import Image from "next/image"
import PurchasedItem from "./purchased-item";

interface Customer {
    user_id: string;
    user_name: string;
    user_email: string;
    user_city: string;
    user_state: string;
    user_address: string;
    user_zip: string;
    buyHistory: any;

  }
  
export default async function CustomerProfile({customer}: {customer: Customer}){
    console.log('here is customer in the customer profile compoenent....\n',customer)
    const items = customer.buyHistory
    console.log('here is itemssssssssssssssssss', items)



    return(
        <div className="md:grid grid-cols-5 ">
            <section className="outline p-6 m-6 md:col-start-2 md:col-span-3  flex justify-around items-center">
                <Image 
                  src= '/images/600x600ph.jpg' // {customer.image} // image needs to be added to user table
                  width={200}
                  height={200}
                  alt={`This is the profile picture for ${customer.user_name}`}
                />
                <h1 className="text-2xl">{customer.user_name}</h1>

            </section>

            <form className="outline p-6 m-6 md:col-start-3 ">
                <fieldset className="">
                    <legend>Customer Information</legend>
                    <label htmlFor='name'>Name</label><br />
                    <input type='text'id='name'value={customer.user_name}></input><br /><br />
                   
                    <label htmlFor='address'>Address</label><br />
                    <input type='text'id='address'value={customer.user_address}></input><br /><br />
                   
                    <label htmlFor='city'>City</label><br />
                    <input type='text' id='city'value={customer.user_city}></input><br /><br />
                   
                    <label htmlFor='state'>State</label><br />
                    <input type='text'id='state'value={customer.user_state}></input><br /><br />
                   
                    <label htmlFor='zip'>Zip</label><br />
                    <input type='text'id='zip'value={customer.user_zip}></input><br /><br />
                   
                    <label htmlFor='email'>Email</label><br />
                    <input type='text'id='email'value={customer.user_email}></input><br /><br />

                </fieldset>
            </form>

            <section className="outline">
                <h1>history compoenent</h1>
                <div>
                <section className="p-2 m-2 md:grid grid-cols-3 lg:grid-cols-5">
                    {items.map((item: any) => {
                      console.log('here is a single item', item)
                        return (
                        <div className="p-2 ">
                          <PurchasedItem
                                props={item}
                          />
                        </div>

                     
                    
                        );
                    })}
                </section>
                
            

                </div>
                
            </section>
          
        </div>
    )
}