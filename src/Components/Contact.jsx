import React from "react";
import { Label } from "./ui/label";
import { Input, Textarea } from "./ui/input";
import { cn } from "../lib/utils";

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    formData.append("access_key", "df52ec6d-e4fd-43b8-9472-2366152ccc32");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      });

      const data = await res.json();

      if (data.success) {
        alert("Message sent successfully!");
        console.log("Success:", data);
        event.target.reset(); // Clear the form
      } else {
        alert("Failed to send message. Please try again.");
        console.error("Error:", data);
      }
    } catch (error) {
      alert("An error occurred. Please try again.");
      console.error("Fetch error:", error);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 pt-24">
      <section className="text-white content-center overflow-x-hidden">
        <div className="justify-items-center mb-8">
          <div>
            <h1 className="font-primaryBold text-3xl lg:text-5xl text-center">Contact</h1>
            <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-4 h-[1px] w-full" />
          </div>
          <h2 className="font-primaryMedium text-lg mt-2 lg:text-xl text-center">
            Submit the form to get in touch with me.
          </h2>
        </div>
        <div className="flex items-center justify-center pb-20">
          <div className="mx-auto w-full max-w-[550px]">
            <form className="my-8" onSubmit={onSubmit}>
              <LabelInputContainer className="mb-4">
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  name="name" // Added name attribute
                  placeholder="Your Full Name"
                  type="text"
                  required
                />
              </LabelInputContainer>

              <LabelInputContainer className="mb-4">
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  name="email" // Added name attribute
                  placeholder="Your Email"
                  type="email"
                  required
                />
              </LabelInputContainer>

              <LabelInputContainer className="mb-4">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  className="h-36"
                  id="message"
                  name="message" // Added name attribute
                  placeholder="Type your message"
                  required
                />
              </LabelInputContainer>

              <button
                className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
                type="submit"
              >
                Send me a message &rarr;
                <BottomGradient />
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({ children, className }) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};

export default Contact;
