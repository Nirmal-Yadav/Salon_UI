import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "../css/Appointment.css";

function Appointment() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID", // e.g., service_xxxxxx
        "YOUR_TEMPLATE_ID", // e.g., template_yyyyyy
        form.current,
        "YOUR_PUBLIC_KEY" // e.g., fXyz123_abcDEF
      )
      .then(
        () => {
          alert("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          alert("Failed to send. Try again.");
          console.error(error);
        }
      );
  };

  return (
    <div className="appointment-container">
      <h2>Book an Appointment</h2>
      <form ref={form} onSubmit={sendEmail} className="appointment-form">
        <input type="text" name="user_name" placeholder="Full Name" required />
        <input
          type="tel"
          name="user_mobile"
          placeholder="Mobile Number"
          required
        />
        <select name="user_gender" required>
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
        <input
          type="email"
          name="user_email"
          placeholder="Your Email Address"
          required
        />
        <textarea
          name="message"
          rows="4"
          placeholder="Your Message"
          required
        ></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Appointment;
