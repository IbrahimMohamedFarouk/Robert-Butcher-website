import { useState } from "react"
import emailjs from '@emailjs/browser';
import {toast,Toaster} from "react-hot-toast"
const ContactForm = () => {
  const [formData,setFormData]=useState({
    name: "",
    email: "",
    message:""
  })
  const [errors,setErrors]=useState({})
  const [IsSending,setIsSending]=useState(false)
  const handleChange = (e)=>{
    const {name,value}= e.target;
    setFormData({
      ...formData,
      [name]: value
    })
  }
  const validate= ()=>{
    const errors ={}
    if(!formData.name) errors.name = "Name is reqiured" ;
    if(!formData.email) {errors.email = "Email is reqiured" }
    else if(!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(formData.email)){
      errors.email = "Invalid email"
    }
    if(!formData.message) errors.message = "Message is reqiured" ;
    return errors ;
    
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validate();
    if (Object.keys(errors).length > 0) {
      setErrors(errors);
    } else {
      setErrors({});
      setIsSending(true);
      emailjs.send(
        "service_vsqe8yz",
        "template_59sp0ue",
        formData,
        "fOnmQytkmLln5CdDm"
      )
        .then((response) => {
          console.log("SUCCESS!!", response.status, response.text);
          toast.success("Message sent successfully!");
          setFormData({
            name: "",
            message: "",
            email: "",
          });
        })
        .catch((error) => {
          console.log("FAILED!!", error);
          toast.error("Failed to send message, please try again!!");
        })
        .finally(() => {
          setIsSending(false);
        });
    }
  };
  return (
    <div>
      <div className="container text-center my-3 mx-auto" id='contact'>
        <Toaster />
        <h3 className="text-3xl mt-20 font-normal mb-4 text-center tracking-wide">Contact With Me</h3>
        <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center">
          <div className="flex felx-col items-center justify-between w-1/2">
            <input 
            type="text"
            id="name"
            name="name"
            value={formData.name}
            placeholder="Name"
            onChange={handleChange}
            className="mt-4 w-full rounded-lg border border-gray-900 appearance-none text-sm focus:border-gray-300 py-3 px-2 bg-transparent "
            />
            {errors.name && (
              <p className="text-sm text-red-600">{errors.name}</p>
            )}

          </div>
          <div className="flex felx-col items-center justify-between w-1/2">
            <input 
            type="text"
            id="email"
            name="email"
            value={formData.email}
            placeholder="Email"
            onChange={handleChange}
            className="mt-4 w-full rounded-lg border border-gray-900 appearance-none text-sm focus:border-gray-300 py-3 px-2 bg-transparent"
            />
            {errors.email && (
              <p className="text-sm text-red-600">{errors.email}</p>
            )}
            
          </div>
          <div className="flex felx-col items-center justify-between w-1/2">
            <textarea 
            type="text"
            id="message"
            name="message"
            value={formData.message}
            placeholder="Message"
            onChange={handleChange}
            rows={4}
            className="mt-4 w-full rounded-lg border border-gray-900 appearance-none text-sm focus:border-gray-300 py-3 px-2 bg-transparent"
            />
            {errors.message && (
              <p className="text-sm text-red-600">{errors.message}</p>
            )}
            
          </div>
          <button type="submit" className={`text-md font-semibold bg-yellow-500 text-center w-1/2 rounded-lg px-4 py-3 my-6 tracking-wide ${
            IsSending ? "cursor-not-allowed opacity-50" : ""
          }`} >{
            IsSending ? "Sending..." :"send"
          }</button>
        </form>
    </div>
    </div>
  )
}

export default ContactForm