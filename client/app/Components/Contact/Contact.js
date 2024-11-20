import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PhoneCallbackIcon from '@mui/icons-material/PhoneCallback';
import LocationOnIcon from '@mui/icons-material/LocationOn';

export default function Contact() {
  return (
    <div className="bg-white bg-gradient-to-r from-white to-[#b2fff8] w-[80vw] h-[95vh] mt-[10vh] ml-[20vh] mb-[10vh] rounded-[30px] shadow-md flex">
      <div className="w-1/2 p-[50px]">
        <div
          className="bg-cover bg-center bg-no-repeat h-[80vh] w-[30vw] rounded-[20px]"
          style={{ backgroundImage: "url('/Assets/Profile Picture.jpg')" }}
        ></div>
      </div>
      <div className="w-1/2 p-[3vw_0]">
        {/* <h1 className="text-[30px] font-semibold">Get in touch with me 👋</h1> */}
        <h2 className="mt-[2vh] text-[35px]">John Doe</h2>
        <h4 className="font-[cursive] mb-[3vh]">1985-06-15</h4>
        <h3 className="text-[20px] italic">Tech Solutions Inc</h3>
        <h3 className="text-[20px] italic">Chief Technology Officer</h3>

        <div className="grid grid-cols-2 gap-2 mt-[1vw]">
          <div className="w-[18vw] h-[12vw] bg-[rgba(248,248,248,0.479)] rounded-[20px] transition-colors duration-300 hover:bg-[rgba(194,194,194,0.6)]">
            <MailOutlineIcon className="text-[30px] mt-[10px] ml-[10px]" />
            <h3 className="text-[15px] mt-[2vh] ml-[10px]">Email</h3>
            <p className="text-[12px] ml-[10px]">johndoe@techsolutions.com</p>
            <button className="bg-black text-white py-[5px] px-[10px] rounded-[20px] mt-[3vh] ml-[10px]">
              CONTACT
            </button>
          </div>
          <div className="w-[18vw] h-[12vw] bg-[rgba(248,248,248,0.479)] rounded-[20px] transition-colors duration-300 hover:bg-[rgba(194,194,194,0.6)]">
            <PhoneCallbackIcon className="text-[30px] mt-[10px] ml-[10px]" />
            <h3 className="text-[15px] mt-[2vh] ml-[10px]">Phone</h3>
            <p className="text-[12px] ml-[10px]">+1-234-567-890</p>
            <button className="bg-black text-white py-[5px] px-[10px] rounded-[20px] mt-[3vh] ml-[10px]">
              CALL
            </button>
          </div>
          <div className="w-[18vw] h-[12vw] bg-[rgba(248,248,248,0.479)] rounded-[20px] transition-colors duration-300 hover:bg-[rgba(194,194,194,0.6)]">
            <LocationOnIcon className="text-[30px] mt-[10px] ml-[10px]" />
            <h3 className="text-[15px] mt-[2vh] ml-[10px]">Address</h3>
            <p className="text-[12px] ml-[10px]">
              1234 Elm Street, Springfield, IL, 62701
            </p>
            <button className="bg-black text-white py-[5px] px-[10px] rounded-[20px] mt-[3vh] ml-[10px]">
              LOCATE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
