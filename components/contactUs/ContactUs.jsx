"use client";
import React, { useState } from "react";
import JoinCommunity from "../JoinCommunity";

function ContactUs() {
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    subject: "",
    enquiryBody: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <div className="mb-48">
        {/* Contact Us Section with Image */}
        <div className="flex justify-center items-center">
          <div className="flex justify-center items-center pt-0 pb-0 pr-0 p-16 bg-[#eee] ml-32 mr-32 mt-16 mb-16 rounded-[28.36px] w-fit gap-60">
            <h1 className="text-black text-7xl text-center font-bold">
              Contact Us
            </h1>
            <img src="/gareebOne.png" alt="" />
          </div>
        </div>

        {/* Forms */}
        <div className="flex items-center justify-center mx-auto">
          <div className="grid grid-cols-2 gap-8 p-8 w-full max-w-4xl">
            {/* Left Section */}
            <div className="space-y-4">
              <div>
                <label htmlFor="fullName" className="text-lg text-black">
                  Full Name
                </label>
                <input
                  type="text"
                  name="fullName"
                  id="fullName"
                  className="w-full bg-[#F5F5F5] p-4 rounded-lg"
                  placeholder="John Doe"
                  value={formData.fullName}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label htmlFor="phoneNumber" className="text-lg text-black">
                  Phone Number
                </label>
                <input
                  type="text"
                  name="phoneNumber"
                  id="phoneNumber"
                  className="w-full bg-[#F5F5F5] p-4 rounded-lg"
                  placeholder="08012345678"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label htmlFor="email" className="text-lg text-black">
                  Email
                </label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  className="w-full bg-[#F5F5F5] p-4 rounded-lg"
                  placeholder="johndoe@gmail.com"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Right Section */}
            <div className="flex flex-col h-full">
              <div className="mb-4">
                <label htmlFor="subject" className="text-lg text-black">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  className="w-full bg-[#F5F5F5] p-4 rounded-lg"
                  placeholder="Enter subject of enquiry"
                  value={formData.subject}
                  onChange={handleChange}
                />
              </div>

              <div className="flex-1">
                <label htmlFor="enquiryBody" className="text-lg text-black">
                  Enquiry Body
                </label>
                <textarea
                  name="enquiryBody"
                  id="enquiryBody"
                  className="w-full h-full bg-[#F5F5F5] p-4 rounded-lg resize-none"
                  placeholder="Add your queries over here..."
                  value={formData.enquiryBody}
                  onChange={handleChange}
                  style={{
                    height: `calc(100% - 52px)`, // 52px to account for the subject field
                  }}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center mb-48">
          <button className="bg-[#218225] text-2xl pr-8 pl-8 pt-1 pb-1 rounded-lg w-[20%]">
            Send
          </button>
        </div>
      </div>
      <JoinCommunity></JoinCommunity>
    </div>
  );
}

export default ContactUs;
