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
  
export default function CustomerProfile({customer}: {customer: Customer}){
    console.log('here is customer in the customer profile compoenent....\n',customer)
    const items = customer.buyHistory
    console.log('here is itemssssssssssssssssss', items)



    return(
        <div className="md:grid grid-cols-5 ">
            <section className="outline p-6 m-6 md:col-start-2 md:col-span-3  flex justify-around items-center"
            key={customer.user_id}
            >
                <Image 
                  src= '/images/600x600ph.jpg' // {customer.image} // image needs to be added to user table
                  width={200}
                  height={200}
                  alt={`This is the profile picture for ${customer.user_name}`}
                />
                <h1 className="text-2xl">{customer.user_name}</h1>

            </section>

            <form className="outline p-6 m-6 md:col-start-3 ">
                <fieldset className="text-xl">
                    <legend>Customer Information</legend>
                    <label htmlFor='name'>Name</label><br />
                    <input type='text'id='name'value={customer.user_name} readOnly></input><br /><br />
                   
                    <label htmlFor='address'>Address</label><br />
                    <input type='text'id='address'value={customer.user_address} readOnly></input><br /><br />
                   
                    <label htmlFor='city'>City</label><br />
                    <input type='text' id='city'value={customer.user_city} readOnly></input><br /><br />
                   
                    <label htmlFor='state'>State</label><br />
                    <input type='text'id='state'value={customer.user_state} readOnly></input><br /><br />
                   
                    <label htmlFor='zip'>Zip</label><br />
                    <input type='text'id='zip'value={customer.user_zip} readOnly></input><br /><br />
                   
                    <label htmlFor='email'>Email</label><br />
                    <input type='text'id='email'value={customer.user_email} readOnly></input><br /><br />

                </fieldset>
            </form>

            <div className="outline  p-2 m-2 md:col-start-2 md:row-start-3 md:col-span-3">
                <h1 className=" text-2xl text-center p-2 m-2">Purchase History</h1>
                <div className="flex flex-col justify-center justify-around">
                    <div className="p-2 m-2 flex justify-around">
                        {items.map((item: any ) => {
                        console.log('here is a single item***********************************', item)
                            return (
                            <div className="p-2 " key={item.product_id}>
                            <PurchasedItem
                                   
                                    props={item}
                            />
                            </div>

                        
                        
                            );
                        })}
                    </div>
                    
                

                </div>
                
            </div>
          
        </div>
    )
}