"use client";

import Container from "@/components/custom/Container";
import React, { useState } from "react";
import bgImage from "../../assets/img/footer-bg.png";
import contactImg from "../../assets/img/contact-img.svg";
import { motion } from "framer-motion";
import sendMail from "@/sendEmail";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    description: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<null | "success" | "error">(
    null
  );

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Replace with your actual API endpoint
      const response = await sendMail(formData);

      if (response) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", description: "" });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      className="h-screen bg-cover bg-center bg-no-repeat "
      style={{ backgroundImage: `url(${bgImage.src})` }}
      id="contact"
    >
      <Container>
        <section className="banner w-full min-h-screen flex items-center from-gray-900 to-gray-800 px-6 pt-10">
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-17 items-center">
            <div className="hidden sm:flex justify-center md:justify-end ">
              <motion.img
                src={contactImg.src}
                alt="Header Img"
                className="drop-shadow-lg w-auto h-[300px] rounded-full md:h-[300px] lg:h-[400px] object-cover"
                animate={{
                  y: [0, -20, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </div>
            <div className=" rounded-3xl p-6 sm:p-10 mt-10 sm:-mt-15">
              <div className="flex flex-col justify-center items-center gap-6">
                <h2 className="text-3xl font-bold">Contact</h2>

                <form
                  onSubmit={handleSubmit}
                  className="w-full max-w-md space-y-6"
                >
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-300 mb-1"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-white placeholder-gray-400 transition duration-200"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-300 mb-1"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-white placeholder-gray-400 transition duration-200"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="description"
                      className="block text-sm font-medium text-gray-300 mb-1"
                    >
                      Message
                    </label>
                    <textarea
                      id="description"
                      name="description"
                      rows={4}
                      value={formData.description}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-white placeholder-gray-400 transition duration-200"
                      placeholder="Your message..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-3 px-4 rounded-lg font-medium cursor-pointer transition duration-200 ${isSubmitting
                      ? "bg-gradient-to-r from-blue-400 to-purple-500 cursor-not-allowed"
                      : "bg-gradient-to-r from-blue-400 to-purple-500 hover:bg-blue-700"
                      } text-white`}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </button>

                  {submitStatus === "success" && (
                    <div className="p-3 text-sm rounded-lg bg-green-900/50 text-green-300">
                      Message sent successfully!
                    </div>
                  )}

                  {submitStatus === "error" && (
                    <div className="p-3 text-sm rounded-lg bg-red-900/50 text-red-300">
                      Failed to send message. Please try again.
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </section>
      </Container>
    </div>
  );
}
