"use client";
import { IoCopyOutline } from "react-icons/io5";
import { TfiReload } from "react-icons/tfi";
import { useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";

const notify = () =>
  toast("Copied to clipboard!", {
    icon: "🙌",
    style: {
      borderRadius: "20px",
    },
  });

export default function Home() {
  const [password, setPassword] = useState("");

  function generatePassword() {
    const length = 16;
    const charset =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()-=_+[]{}|;:'\",.<>/?";

    let randomPassword = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      randomPassword += charset.charAt(randomIndex);
    }

    setPassword(randomPassword);
  }
  useEffect(() => {
    generatePassword();
  }, []);

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-3xl font-bold mb-7">Password Generator</h1>
          <button className="btn btn-success mb-6" onClick={generatePassword}>
            Generate Password <TfiReload />
          </button>
          <div className="mockup-code">
            <pre data-prefix="$">
              <code>{password}</code>
              <button
                className="btn btn-outline btn-success ml-3"
                onClick={() => {
                  notify();
                  navigator.clipboard.writeText(password);
                }}
              >
                <IoCopyOutline />
              </button>
              <Toaster />
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
}
