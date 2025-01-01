/* eslint-disable react/no-unescaped-entities */

import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { MdAddCall } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import "./Contact.css";

const schema = yup
  .object({
    name: yup
      .string()
      .required("Name is required")
      .min(5, "Name must be at least 5 characters"),
    email: yup
      .string()
      .email("Invalid email format")
      .required("Email is required"),
    subject: yup
      .string()
      .required("subject is required")
      .min(6, "subject must be at least 6 characters"),
  
    message: yup
      .string()
      .required("Message is required")
      .min(12, "Message must be at least 12 characters"),
  })
  .required();

function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    reset();

    const formData = new FormData();
    formData.append("access_key", "fe288e1f-1a04-46f4-a179-d191c459f8ed");
    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("subject", data.subject);
    formData.append("whatsappNumber", data.whatsappNumber);
    formData.append("message", data.message);
    // whatsappNumber
    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(Object.fromEntries(formData)),
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message);
    }
  };

  return (
    <div
      id="contact"
      className="flex flex-col items-center justify-between mx-16 mt-20 mb-16 contact xl lg:gap-16 md:gap-7 font-Lora"
    >
      <h1 className="px-7 font-semibold leading-6 lg:text-7xl md:text-6xl max-[448px]:text-4xl max-[320px]:text-2xl whitespace-nowrap">
        Get in touch
      </h1>
      <div className="contact-section lg:flex md:block xl:gap-28 lg:gap-2">
        <div className="contact-left flex flex-col lg:gap-7 md:gap-4 max-[448px]:gap-3 md:mb-8 max-[448px]:p-5">
          <h2 className="max-[448px]:text-3xl lg:text-6xl md:text-5xl font-bold text-[#10bf62] whitespace-nowrap">
            Let's talk
          </h2>
          <p className="max-[448px]:text-base text-base	 leading-8 max-w-[530px] text-justify">
            I am Alfaz, I am a professional Creative & Minimalist Brand Identity
            & Logo Designer, I create logo designs strategies. 🙇🙇Completed
            450+ all projects in my 5+ years of experience. 😮😮😮 I create
            custom designs by understanding the client's needs. My goal is to
            satisfy you with high quality work.<br/> 👉👉👉Message me for your
            project, I am always ready to help you.🤝🤝🥰🥰
          </p>
          <div className="flex flex-col lg:gap-5 md:gap-3 text-[22px] max-[448px]:gap-2">
            <div className="flex items-center gap-5 ">
              <MdOutlineMarkEmailUnread className="max-[448px]:text-xl text-2xl" />
              <p className="max-[448px]:text-sm text-base">
                mdalfazahmed09@gmail.com
              </p>
            </div>
            <div className="flex items-center gap-5">
              <MdAddCall className="max-[448px]:text-xl text-2xl" />
              <a
                className="max-[448px]:text-sm text-base"
                href="tel:+8801968051412"
              >
                +880 1968-051412
              </a>
            </div>
            <div className="flex items-center gap-5">
              <FaLocationDot className="max-[448px]:text-xl text-2xl" />
              <p className="max-[448px]:text-sm text-base">Dhaka, Bangladesh</p>
            </div>
          </div>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col items-start gap-2 px-5 py-5 rounded-md shadow-sm bg-green-50"
        >
          <div className="md:flex max-[448px]:block gap-5 mb-2">
            <div className="max-[448px]:mb-4">
              <input
                {...register("name")}
                id="name"
                className="border-none w-[300px] max-[448px]:w-[250px] pl-5 rounded-[4px] md:py-5 max-[448px]:py-3 shadow-md text-base text-[#A0A0A0] font-Lora outline-none"
                type="text"
                placeholder="Enter your name"
              />
              <p className="text-xs text-red-600 ms-1">
                {errors.name?.message}
              </p>
            </div>
            <div>
              <input
                {...register("email")}
                id="email"
                className="border-none w-[300px] max-[448px]:w-[250px] pl-5 rounded-[4px] md:py-5 max-[448px]:py-3 shadow-md text-base text-[#A0A0A0] font-Lora outline-none"
                type="email"
                placeholder="Enter your email"
              />
              <p className="text-xs text-red-600 ms-1">
                {errors.email?.message}
              </p>
            </div>
          </div>
          <input
            {...register("subject")}
            id="subject"
            className="border-none w-[650px]  max-[448px]:w-[300px] pl-5 rounded-[4px] md:py-5 max-[448px]:py-3 shadow-md text-base text-[#A0A0A0] font-Lora outline-none"
            type="text"
            placeholder="Enter your Subject"
          />
          <p className="text-xs text-red-600 ms-1">{errors.subject?.message}</p>
          <input
            {...register("whatsappNumber")}
            id="whatsappNumber"
            className="border-none w-[650px]  max-[448px]:w-[300px] pl-5 rounded-[4px] md:py-5 max-[448px]:py-3 shadow-md text-base text-[#A0A0A0] font-Lora outline-none"
            type="text"
            placeholder="Enter your whatsapp Number"
          />
          <textarea
            {...register("message")}
            id="message"
            className="w-[650px]  max-[448px]:w-[300px] border-none p-6 rounded-[4px] text-base shadow-md text-[#A0A0A0] font-Lora outline-none"
            placeholder="Enter your message"
            rows={3}
          ></textarea>
          <p className="text-xs text-red-600 ms-1">{errors.message?.message}</p>
          <button
            className="contact-submit max-[448px]:text-xs max-[448px]:py-2 max-[448px]:px-7 py-5 px-14 rounded-[50px] text-xl border-none cursor-pointer text-fuchsia-100 shadow-md"
            type="submit"
          >
            Submit now
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
