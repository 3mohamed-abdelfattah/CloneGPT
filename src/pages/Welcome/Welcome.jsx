import { Link } from "react-router-dom";
import { GPTLogo } from "../../utils/icons.util";

export const Welcome = () => {
  return (
    <div className="min-h-screen w-full flex justify-center items-center">
      <div>
        <div className="text-white flex justify-center mb-5">
          <GPTLogo />
        </div>
        <div className="text-white text-[15px] font-medium text-center">
          Welcome to ChatGPT
        </div>
        <div className="text-white text-[15px] font-medium text-center mt-[5px]">
          Log in with your OpenAI account to continue
        </div>
        <div className="flex justify-center gap-3 mt-[14px]">
          <Link
            to="login"
            className="bg-primary text-sm rounded text-white font-medium px-[14px] py-[9px]"
          >
            Log in
          </Link>
          <Link
            to="signup"
            className="bg-primary text-sm rounded text-white font-medium px-[14px] py-[9px]"
          >
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
};
