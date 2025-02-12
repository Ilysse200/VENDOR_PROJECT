import React from 'react'
import {useForm} from 'react-hook-form';
import axios from 'axios'; 
import '../styles/productHome.css'
function HomeProduct() {
     const{register, handleSubmit} = useForm();
     const send=(data)=>{

        //product attribute names
        const{productTitle, images, productPrice, productContent}=data;
        

        const formData=new FormData();
        try{
            formData.append('productTitle', productTitle);
            formData.append('images', images[0]);
            formData.append('productPrice', productPrice);
            formData.append('productContent', productContent);

            const results = axios.post('https://botiga-kvf9.onrender.com/product/createProduct', formData,

                
                {
                    headers:{
                        "Content-Type": "multipart/form-data",
                    }
                    
                }
            )

        }catch(error){}
     }

     //contact form logic

     const{register: registerContact, handleSubmit: handleSubmitContact} = useForm();

     // contact form data to be sent 
     const sendContact=(data2)=>{

        // contact inputs names
        const{names, email, subject, message}=data2;
        const formData2 = new FormData();

        try{
            formData2.append('names', names);
            formData2.append('email', email);
            formData2.append('subject', subject);
            formData2.append('message', message);


            const result = axios.post("https://botiga-kvf9.onrender.com/contact/createContact", formData2,
                {
                    headers:{
                        "Content-Type": "application/json",
                    }
                })

        }catch(error){}

        
     }

  return (
    <div className='product-container'>
        <form className='form-style'onSubmit={handleSubmit(send)}>
            <input type='text' placeholder='Product title' name='productTitle'
            {...register('productTitle', {required:true})}
            />
            <input type='file' placeholder='Product Images' name='images'
            {...register('images', {required:true})}
            />
            <input type='text' placeholder='Product Content' name='productContent'
            {...register('productContent', {required:true})}
            />
            <input type='text' placeholder='Product Price' name='productPrice'
            {...register('productPrice', {required:true})}
            />
            {/* <input type='text' placeholder='Product title' name='productTitle'/> */}
            <button type='submit' className='categories-button'>Create Product</button>
        </form>

        <form className='form-contact' onSubmit={handleSubmitContact(sendContact)}>
            <h1>Contact Form</h1>
            <input type='text' placeholder='User names' name='names'
            {...registerContact('names', {required:true})}
            />

            <input type='email' placeholder='email' name='email' 
            {...registerContact('email', {required:true})}
            />

            <input type='text' placeholder='email subject' name='subject'
            {...registerContact('subject',{required:true})}
            />

            <input type='text' placeholder='email message' name='message'
            {...registerContact('message', {required:true})}
            />
            <button type='submit' className='categories-button'>Send Message</button>
        </form>
    </div>
  );
}

export default HomeProduct