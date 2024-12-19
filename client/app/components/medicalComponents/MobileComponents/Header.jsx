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
    <div
      className="fixed top-0 left-0 w-full h-screen bg-white flex flex-col items-center justify-center space-y-6 shadow-lg"
      style={{ zIndex: 10 }}
    >
      {links.map((link) => (
        <div key={link} className="flex flex-col items-center">
          <button
            className={`text-2xl font-medium ${
              activeLink === link ? "text-green-500" : "text-gray-500"
            }`}
            onClick={() => scrollToSection(link)}
          >
            {link}
          </button>
          {activeLink === link && (
            <img
              src="/Assets/MedicalAssets/line.png"
              alt="active link indicator"
              className="w-10 mt-2"
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default Header;
