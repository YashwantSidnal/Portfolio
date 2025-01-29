import React, { useState } from "react";
import emailjs from "emailjs-com";
import {
  AiOutlineCheckCircle,
  AiOutlineLoading3Quarters,
} from "react-icons/ai";
import panda from "../assets/panda.png";
import Title from "../components/Title";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
    if (error) setError(""); // Clear error when user types
  };

  const validateForm = () => {
    if (!formData.name || !formData.email || !formData.message) {
      setError("All fields are required.");
      return false;
    }
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setError("Please enter a valid email address.");
      return false;
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setLoading(true);
      const emailData = {
        to_name: "Abhishek Sidnal",
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
      };

      emailjs
        .send(serviceId, templateId, emailData, publicKey)
        .then(() => {
          setSubmitted(true);
          setLoading(false);
          setFormData({ name: "", email: "", message: "" });
        })
        .catch((error) => {
          console.error("Email sending error:", error);
          setLoading(false);
          setError("Failed to send message. Please try again.");
        });
    }
  };

  return (
    <section className="p-4 sm:p-20 max-w-7xl mx-auto h-full lg:h-screen flex flex-col justify-center items-center ">
      <Title title="Contact" />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div className="space-y-3 text-center lg:text-left">
          <p className="text-lg sm:text-xl text-dark-subtext leading-relaxed">
            Have a question, an exciting project, or just want to say hi? Feel
            free to reach out!
          </p>
          <img
            src={panda}
            alt="Panda"
            className="w-64 mx-auto mt-32 lg:w-80 animate-sleep"
          />
        </div>

        {/* Right Section */}
        <div className="p-1 rounded-lg contactForm">
          {!submitted && (
            <h3 className="relative z-10 text-xl text-center mt-10 font-extrabold text-dark-highlight leading-tight">
              Leave a Message
            </h3>
          )}

          {!submitted ? (
            <form
              onSubmit={handleSubmit}
              className="space-y-6 z-10 relative p-5 rounded-xl"
            >
              <div>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-dark-background text-dark-text border border-dark-highlight focus:outline-none"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-dark-background text-dark-text border border-dark-highlight focus:outline-none"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  className="w-full px-4 py-3 rounded-lg bg-dark-background text-dark-text border border-dark-highlight focus:outline-none"
                  placeholder="Enter your message"
                />
              </div>
              <button
                type="submit"
                className={`w-full py-3 rounded-lg font-medium flex justify-center items-center ${
                  loading
                    ? "bg-dark-accent text-white opacity-75 cursor-not-allowed"
                    : "bg-dark-highlight text-white hover:bg-dark-accent transition duration-300"
                }`}
              >
                {loading ? (
                  <div className="flex items-center justify-center gap-2">
                    <AiOutlineLoading3Quarters className="animate-spin" />
                    Sending...
                  </div>
                ) : (
                  "Send Message"
                )}
              </button>

              {error && (
                <p className="text-red-500 text-center mt-2">{error}</p>
              )}
            </form>
          ) : (
            <div className="flex flex-col items-center space-y-4 z-10 relative p-10">
              <AiOutlineCheckCircle size={50} className="text-dark-accent" />
              <p className="text-base sm:text-lg text-center">
                Thank you! Your message has been sent successfully. I will get
                back to you soon.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="px-4 py-2 bg-dark-highlight text-white rounded-lg font-semibold hover:bg-dark-accent transition duration-300"
              >
                Send Another Message
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
