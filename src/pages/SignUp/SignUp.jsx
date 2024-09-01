import { Link, useNavigate } from "react-router-dom";
import { GPTLogo, Google, Microsoft } from "@/utils/icons.util";
import { useState } from "react";

export const SignUp = () => {

  const [mail, setMail] = useState('')
  const navigate = useNavigate();

  const handleMailChange = (e) => {
    const value = e.target.value;
    setMail(value);
  };

  const handleClick = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (mail === '') {
      alert('Enter your email');
    } else if (!emailRegex.test(mail)) {
      alert('Please enter a valid email address');
    } else {
      navigate('/ChatGPT/start');
    }
  };

  return (
    <div className="min-h-screen w-fill flex justify-center items-center bg-white">
      <div className="flex flex-col items-center gap-14 w-fill">
        <GPTLogo />

        <div className="sm:w-96 w-full px-7">
          <div className="text-[#2E3339] text-[31px] font-bold text-center	">
            Welcome To ChatGPT
          </div>

          <form className="mt-6 flex flex-col gap-3">
            <div className="flex flex-col gap-1">
              <label htmlFor="email" className="text-[#6d6e70]">
                Email address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={mail}
                onChange={handleMailChange}
                className="border-[#C3C8CF] border rounded p-4 focus:outline-primary"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="email" className="text-[#6d6e70]">
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                className="border-[#C3C8CF] border rounded p-4 focus:outline-primary"
              />
            </div>
            <button
              type="button"
              className="text-white text-[15px] font-medium bg-primary w-full py-3 px-2 rounded hover:bg-emerald-700"
              onClick={handleClick}
            >
              Continue
            </button>
          </form>

          <div className="text-sm text-[#2E3339] font-medium text-center mt-[14px]">
            have an account?{" "}
            <Link to="/ChatGPT/signup" className="text-primary">
              Login
            </Link>
          </div>

          <div className="h-[1px] bg-[#C3C8CF] mt-7 relative">
            <span className="text-[#2E3339] text-xs absolute left-1/2 -translate-x-1/2 -top-5 bg-white p-3">
              OR
            </span>
          </div>

          <div className="mt-7 flex flex-col gap-2">
            <button className="flex items-center border border-[#C3C8CF] px-5 py-3 rounded w-full gap-4">
              <Google /> Continue with Google
            </button>
            <button className="flex items-center border border-[#C3C8CF] px-5 py-3 rounded w-full gap-4">
              <Microsoft /> Continue with Microsoft Account
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}