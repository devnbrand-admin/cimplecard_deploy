import { useEffect, useState } from "react";

const useWindowWidth = () => {
    const [windowWidth, setWindowWidth] = useState(null); 
  
    useEffect(() => {
      const handleResize = () => {
        setWindowWidth(window.innerWidth);
      };
  
      handleResize();
  
      window.addEventListener("resize", handleResize);
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, []);
  
    return windowWidth;
  };
  
  export default useWindowWidth;
  