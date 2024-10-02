"use client"; // Form.tsx
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaArrowRight } from "react-icons/fa";
import { ToastContainer, toast, Bounce } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const Form = () => {
  const { register, handleSubmit, reset } = useForm<FormData>();
  const messegeSentAlert = () =>
    toast.success("Message sent successfully!", {
      position: "bottom-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
  const messegeFailedAlert = () =>
    toast.warn("Message Sending Failed", {
      position: "bottom-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
  const onSubmit = async (formData: FormData) => {
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        messegeFailedAlert();
      } else {
        messegeSentAlert();
        reset();
      }
    } catch {
      messegeFailedAlert();
    }
  };

  const [hover, setHover] = useState(false);

  return (
    <div className="relative h-screen w-full px-2">
      <h1 className="my-5 text-3xl font-black tracking-wider">Reach to us</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex w-full flex-col items-center justify-center gap-7 font-montserrat sm:absolute sm:left-1/2 sm:top-1/2 sm:w-1/2 sm:-translate-x-[50%] sm:-translate-y-[50%]"
      >
        <div className="w-full">
          <label
            className="text-sm font-normal text-neutral-600 md:text-xl"
            htmlFor="name"
          >
            YOUR NAME
          </label>
          <input
            {...register("name")}
            className="w-full border-b border-black py-1 text-base font-normal outline-none hover:border-b-2 focus:border-b-2"
            type="text"
            id="name"
            name="name"
            autoComplete="off"
            required
          />
        </div>
        <div className="w-full">
          <label
            className="text-sm font-normal text-neutral-600 md:text-xl"
            htmlFor="email"
          >
            EMAIL ADDRESS
          </label>
          <input
            {...register("email")}
            className="w-full border-b border-black py-1 text-base font-normal outline-none hover:border-b-2 focus:border-b-2"
            type="email"
            id="email"
            name="email"
            autoComplete="off"
            required
          />
        </div>
        <div className="w-full">
          <label
            className="text-sm font-normal text-neutral-600 md:text-xl"
            htmlFor="subject"
          >
            SUBJECT
          </label>
          <input
            {...register("subject")}
            className="w-full border-b border-black py-1 text-base font-normal outline-none hover:border-b-2 focus:border-b-2"
            type="text"
            id="subject"
            name="subject"
            autoComplete="off"
            required
          />
        </div>
        <div className="w-full">
          <label
            className="text-sm font-normal text-neutral-600 md:text-xl"
            htmlFor="message"
          >
            MESSAGE
          </label>
          <textarea
            {...register("message")}
            className="h-28 w-full resize-none border-b border-black py-1 text-base font-normal outline-none hover:border-b-2 focus:border-b-2"
            id="message"
            name="message"
            autoComplete="off"
            required
          ></textarea>
        </div>
        <button
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          type="submit"
          onSubmit={handleSubmit(onSubmit)}
          className="flex h-14 w-fit flex-row items-center gap-4 border-b border-black px-2 py-3 text-base font-semibold outline-none hover:border-b-2"
        >
          Submit Message
          <div className="relative flex h-full w-11 items-center overflow-hidden">
            <span
              className={`absolute transition-all duration-500 ease-in-out ${
                hover ? "right-0" : "right-12"
              }`}
            >
              <FaArrowRight size={"0.9em"} color="black" />
            </span>
            <span
              className={`absolute transition-all duration-500 ease-in-out ${
                hover ? "-right-12" : "right-0"
              }`}
            >
              <FaArrowRight size={"0.9em"} color="black" />
            </span>
          </div>
        </button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Form;
