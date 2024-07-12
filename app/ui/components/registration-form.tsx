import { createUser } from '@/app/lib/auth';
import Register from '@/app/ui/registration.module.css';


export default function RegForm() {
  
  return (
    <div>
      <form className={` m-6 flex justify-center p-6 `} action={createUser}>
        <fieldset className={`${Register.form} m-3 p-3 outline`}>
          <legend className="p-2 ">Registration Form</legend>
          <label htmlFor="name">Name</label>
          <br />
          <input type="text" id="name" 
          name='user_name'
          required
          />
          <br />
          <br />
          <label htmlFor="address">Address</label>
          <br />
          <input type="text" id="address"
          name='user_address'
          required
          />
          <br />
          <br />
          <label htmlFor="city">City</label>
          <br />
          <input type="text" id="city"
          name='user_city'
          required
          />
          <br />
          <br />
          <label htmlFor="state">State</label>
          <br />
          <input type="text" id="state"
          name='user_state'
          required />
          <br />
          <br />
          <label htmlFor="zip">Zip</label>
          <br />
          <input type="text" id="zip"
          name='user_zip'
          required />
          <br />
          <br />
          <label htmlFor="email">Email</label>
          <br />
          <input type="text" id="email"
          name='user_email'
          required
          />
          <br />
          <br />
          <label htmlFor="password">Password</label>
          <br />
          <input type="text" id="password"
          name='user_password'
          required />
          <br />
          <br />
          {/* <input className={`${Register.submitBtn} `} type='submit' value='Complete Order' /> */}

          <button className={`${Register.submitBtn}`}>
            Complete Registration
          </button>
        </fieldset>
      </form>
    </div>
  );
}



// 'use client';


// import Register from '@/app/ui/registration.module.css';
// import { User } from '@/app/lib/definitions';

// import { useState } from 'react';
// import { signUp } from '@/app/lib/auth_services';
// import { createUser } from '@/app/lib/auth';

// export default function RegForm() {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     password: '',
//     address: '',
//     city: '',
//     state: '',
//     zip: '',
//   });

//   const handleSubmit = async (e: any) => {
//     e.preventDefault();
//     console.log('Form data submitted:', formData);
//     const newUser: User = {
//       user_id: 'd',
//       user_address: formData.address,
//       user_city: formData.city,
//       user_state: formData.state,
//       user_zip: formData.zip,
//       user_name: formData.name,
//       user_email: formData.email,
//       user_password: formData.password,
//     };

//     console.log('this is the new user ', newUser);
//     try {
//         await createUser(newUser);
//     } catch (error) {
//         console.log("Create error ",error)
//     }
  

//   };

//   const handleChange = (e: any) => {
//     const { name, value } = e.target;
//     setFormData((prevFormData) => ({
//       ...prevFormData,
//       [name]: value,
//     }));
//   };

//   return (
//     <div>
//       <form className={` m-6 flex justify-center p-6 `} onSubmit={handleSubmit}>
//         <fieldset className={`${Register.form} m-3 p-3 outline`}>
//           <legend className="p-2 ">Registration Form</legend>
//           <label htmlFor="name">Name</label>
//           <br />
//           <input type="text" id="name" 
//           name='name'
//           value={formData.name}
//           onChange={handleChange}
//           required
//           />
//           <br />
//           <br />
//           <label htmlFor="address">Address</label>
//           <br />
//           <input type="text" id="address"
//           name='address'
//           value={formData.address}
//           onChange={handleChange}
//           required
//           />
//           <br />
//           <br />
//           <label htmlFor="city">City</label>
//           <br />
//           <input type="text" id="city"
//           name='city'
//           value={formData.city}
//           onChange={handleChange}
//           required
//           />
//           <br />
//           <br />
//           <label htmlFor="state">State</label>
//           <br />
//           <input type="text" id="state"
//           name='state'
//           value={formData.state}
//           onChange={handleChange}
//           required />
//           <br />
//           <br />
//           <label htmlFor="zip">Zip</label>
//           <br />
//           <input type="text" id="zip"
//           name='zip'
//           value={formData.zip}
//           onChange={handleChange}
//           required />
//           <br />
//           <br />
//           <label htmlFor="email">Email</label>
//           <br />
//           <input type="text" id="email"
//           name='email'
//           value={formData.email}
//           onChange={handleChange}
//           required
//           />
//           <br />
//           <br />
//           <label htmlFor="password">Password</label>
//           <br />
//           <input type="text" id="password"
//           name='password'
//           value={formData.password}
//           onChange={handleChange}
//           required />
//           <br />
//           <br />
//           {/* <input className={`${Register.submitBtn} `} type='submit' value='Complete Order' /> */}

//           <button className={`${Register.submitBtn}`}>
//             Complete Registration
//           </button>
//         </fieldset>
//       </form>
//     </div>
//   );
// }
