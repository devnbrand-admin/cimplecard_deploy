import { useState, useEffect, useRef } from "react";

const Header = () => {
  const [activeLink, setActiveLink] = useState("Profile");

  const links = ["Profile", "Services", "About", "Testimonials", "Contact"];

  const observerRefs = useRef({});

  useEffect(() => {
    // Create an IntersectionObserver to track sections
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveLink(entry.target.id);
          }
        });
      },
      {
        root: null, // Use the viewport as the root
        threshold: 0.6, // Trigger when 60% of the section is visible
      }
    );

    // Observe each section
    links.forEach((link) => {
      const section = document.getElementById(link);
      if (section) {
        observer.observe(section);
        observerRefs.current[link] = section;
      }
    });

    // Cleanup observer on component unmount
    return () => {
      links.forEach((link) => {
        const section = observerRefs.current[link];
        if (section) {
          observer.unobserve(section);
        }
      });
    };
  }, [links]);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div className="right-0 left-0 fixed" style={{ zIndex: 10 }}>
      <div className="bg-white m-2 w-fit mx-auto rounded-lg shadow-md px-5 py-2 flex justify-center mt-3 space-x-6">
        {links.map((link) => (
          <div key={link}>
            <button
              className={`text-lg ${
                activeLink === link ? "text-green-500" : "text-gray-500"
              }`}
              onClick={() => scrollToSection(link)}
            >
              {link}
            </button>
            {activeLink === link ? (
              <img
                src="/Assets/MedicalAssets/line.png"
                alt="doctor img"
                className="w-10"
              />
            ) : (
              ""
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Header;
