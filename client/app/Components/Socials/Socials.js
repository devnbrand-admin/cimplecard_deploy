import { SocialIcon } from "react-social-icons";

export default function Socials() {
  return (
    <div className="w-screen">
      <div className="flex w-full justify-center ">
        <div className="text-center px-[50px] my-[5vh]">
          <h1 className="text-[25px] mb-[1vh]">Connect with me</h1>
          <div className="flex justify-center">
            <SocialIcon
              className="ml-[2vw] transition-transform duration-300 ease-in-out hover:scale-110 hover:shadow-[0_0_10px_rgba(255,255,255,0.8)]"
              url="www.instagram.com"
            />
            <SocialIcon
              className="ml-[2vw] transition-transform duration-300 ease-in-out hover:scale-110 hover:shadow-[0_0_10px_rgba(255,255,255,0.8)]"
              url="www.linkedin.com"
            />
            <SocialIcon
              className="ml-[2vw] transition-transform duration-300 ease-in-out hover:scale-110 hover:shadow-[0_0_10px_rgba(255,255,255,0.8)]"
              url="www.facebook.com"
            />
          </div>
        </div>
        <div className="text-center px-[50px] my-[5vh]">
          <h1 className="text-[25px] mb-[1vh]">Connect with the company</h1>
          <div className="flex justify-center">
            <SocialIcon
              className="ml-[2vw] transition-transform duration-300 ease-in-out hover:scale-110 hover:shadow-[0_0_10px_rgba(255,255,255,0.8)]"
              url="www.instagram.com"
            />
            <SocialIcon
              className="ml-[2vw] transition-transform duration-300 ease-in-out hover:scale-110 hover:shadow-[0_0_10px_rgba(255,255,255,0.8)]"
              url="www.linkedin.com"
            />
            <SocialIcon
              className="ml-[2vw] transition-transform duration-300 ease-in-out hover:scale-110 hover:shadow-[0_0_10px_rgba(255,255,255,0.8)]"
              url="www.facebook.com"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
