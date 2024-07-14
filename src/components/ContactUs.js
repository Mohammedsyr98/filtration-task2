import mail from "../images/mail.svg";
import call from "../images/call.svg";
import { useEffect, useState } from "react";

export default function ContactUs({ contactRef }) {
  const [userinformation, setUserInformation] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [errors, setErrors] = useState({
    name: false,
    email: false,
    phone: false,
  });

  function submit(e) {
    e.preventDefault();

    let hasError = false;
    const updatedErrors = {};

    if (userinformation.name === "") {
      updatedErrors.name = true;
      hasError = true;
    } else {
      updatedErrors.name = false;
    }
    if (userinformation.email === "") {
      updatedErrors.email = true;
      hasError = true;
    } else {
      updatedErrors.email = false;
    }
    if (userinformation.phone === "") {
      updatedErrors.phone = true;
      hasError = true;
    } else {
      updatedErrors.phone = false;
    }

    if (hasError) {
      setErrors(updatedErrors);
    } else {
      setErrors({
        name: false,
        email: false,
        phone: false,
      });
      sendFormData();
      console.log(userinformation);
    }
  }

  function sendFormData() {
    fetch("http://upskilling-egypt.com:3001/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userinformation),
    }).then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    });
  }

  return (
    <div
      ref={contactRef}
      style={{ minHeight: "540px" }}
      className="contact mt-5">
      <span className="text-custom1 flex justify-center pt-5 text-5xl lg:text-8xl font-black text-center py-12 ">
        CONTACT US
      </span>
      <div className="content flex container flex-col items-stretch xl:flex-row xl:items-end justify-between">
        <div className="form basis-2/4">
          <form className="flex flex-col" onSubmit={submit}>
            <input
              style={{
                background: "#FFD39F",
                borderColor: errors.name ? "red" : "#FFD39F",
              }}
              value={userinformation.name}
              onChange={(e) =>
                setUserInformation({ ...userinformation, name: e.target.value })
              }
              className="pl-5 py-3 focus:outline-custom1 rounded-full placeholder-custom1"
              type="text"
              placeholder={errors.name ? "Name cannot be empty" : "Full Name"}
            />
            <input
              style={{
                background: "#FFD39F",
                borderColor: errors.email ? "red" : "#FFD39F",
              }}
              value={userinformation.email}
              onChange={(e) =>
                setUserInformation({
                  ...userinformation,
                  email: e.target.value,
                })
              }
              className="pl-5 mt-3 focus:outline-custom1 py-3 rounded-full placeholder-custom1"
              type="text"
              placeholder={errors.email ? "Email cannot be empty" : "Email"}
            />
            <input
              style={{
                background: "#FFD39F",
                borderColor: errors.phone ? "red" : "#FFD39F",
              }}
              value={userinformation.phone}
              onChange={(e) =>
                setUserInformation({
                  ...userinformation,
                  phone: e.target.value,
                })
              }
              className="pl-5 mt-3 focus:outline-custom1 py-3 rounded-full placeholder-custom1"
              type="text"
              placeholder={
                errors.phone ? "Phone Number cannot be empty" : "Phone Number"
              }
            />
            <button
              className="px-16 hover:bg-custom1 hover:text-white transition-all py-3 self-center max-w-max mt-3 rounded-full border-1 border-custom1 placeholder-custom1 font-bold"
              type="submit">
              SEND
            </button>
          </form>
        </div>
        <div className="contact-info pt-12 xl:pt-0 pb-32">
          <ul>
            <li>
              <a href="#" className="flex flex-row">
                <img className="pr-5" src={mail} alt="mail" />
                <span>upskilling.eg1@gmail.com</span>
              </a>
            </li>
            <li className="pt-8">
              <a href="#" className="flex flex-row">
                <img className="pr-5" src={call} alt="call" />
                <span>+20 115 493 2137</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
