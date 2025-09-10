import React from 'react'
import './contact.css'
import Button2 from './button2.jsx'

import Footer from './footer.jsx'
import { useForm } from "react-hook-form"



const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm()

  const delay = (d) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve()
      }, d * 1000)
    })
  }
  const [isSuccess, setIsSuccess] = React.useState(false)

  React.useEffect(() => {
    if (isSuccess) {
      const timer = setTimeout(() => setIsSuccess(false), 3000)
      return () => clearTimeout(timer)
    }
  }, [isSuccess])

  const onSubmit = async (data) => {
    await delay(2)
    try {
      const response = await fetch("https://script.google.com/macros/s/AKfycbyYzyfSGMW7idWymoaWted1UrUu1T_NS2wHOm8o9BssnIcBK3yWM-5F6B4pFmBiuzHMgw/exec", {
        method: "POST",
        mode: "no-cors",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });


      setIsSuccess(true);

      reset();
    } catch (error) {
      console.error("Error submitting to Google Sheets:", error);
    }
  }

  return (
    <>
      <div className="contactTopic">
        <h2>Get in Touch</h2>
        <p>We believe that every great journey is shaped not only by invention but also by the voices that inspire it. This page is where you can connect with us, share your thoughts, and become a part of our story. Whether you have a question about the engines we feature, a suggestion to improve our library, or simply want to leave your impressions, we’d love to hear from you.

          The review form below is designed for more than just feedback—it’s a space for conversation. Tell us what excites you, what you’d like to see next, or how these timeless machines inspire you. Every message, no matter how small, adds value to the work we do and helps us grow this project into something even more meaningful.

          Engines represent progress, collaboration, and innovation. In the same way, your input fuels our vision. By sharing your thoughts, you become part of the community that keeps this pulse alive.

          So go ahead—fill out the form, leave your review, and let’s keep this dialogue running. Because just like engines, ideas are meant to move forward.</p>


        <div className="contact">
          <form className='contact-form' onSubmit={handleSubmit(onSubmit)}>
            <h3>We appreciate your feedback!</h3>
            <input type="text" {...register("name", { required: "Name is required and should be between 3 and 100 characters", minLength: { value: 3, message: "Name should be at least 3 characters" }, maxLength: { value: 100, message: "Name should be at most 100 characters" } })} placeholder="Name" />
            {errors.name && <span style={{ color: "red" }}>{errors.name.message}</span>}
            <input type="email" {...register("email", { required: "Email is required" })} placeholder="Email" />
            {errors.email && <span style={{ color: "red" }}>{errors.email.message}</span>}
            <textarea
              {...register("message", { required: "Message is required" })}
              placeholder="Message"
            ></textarea>
            {errors.message && (
              <span style={{ color: "red" }}>{errors.message.message}</span>
            )}
            <button type="submit" disabled={isSubmitting}>Submit</button>
            {isSubmitting && <span>Submitting...</span>}
            {isSuccess && (
              <span role="status">
                Submitted successfully!
              </span>
            )}
          </form>
          <div className="conclusion">
            <h2>Thank You!</h2>
            <p>Thank you for taking the time to reach out and share your thoughts with us. Your feedback is not just a message—it is the spark that helps us improve, evolve, and keep this journey alive. Every word matters, and we are grateful to have you as part of our community.</p>
          </div>
        </div>
      </div>
      <Button2 />
      <Footer />
    </>
  )
}

export default Contact