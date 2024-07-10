import Image from "next/image"


export default async function CustomerProfile(){


    return(
        <div className="md:grid grid-cols-5 ">
            <div className="outline p-6 m-6 md:col-start-2 md:col-span-3  flex justify-around items-center">
                <Image 
                  src='/images/600x600ph.jpg'
                  width={200}
                  height={200}
                  alt="placeholder image"
                />
                <h1>Customer Profile here</h1>

            </div>
            <form className="outline p-6 m-6 md:col-start-3 ">
                <fieldset className="">
                    <legend>Customer Information</legend>
                    <label htmlFor='name'>Name</label><br />
                    <input type='text'id='name'value='Just filler text'/><br /><br />
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

                </fieldset>
            </form>
          
        </div>
    )
}