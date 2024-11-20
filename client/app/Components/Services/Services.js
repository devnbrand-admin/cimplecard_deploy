export default function Services() {
    return (
        <div className="w-full text-center">
            <h1 className="text-5xl font-semibold">Our Services</h1>
            <div className="grid grid-cols-3 grid-rows-2 gap-4 mt-10 ml-[5vw]">
                {Array(6)
                    .fill(0)
                    .map((_, index) => (
                        <div
                            key={index}
                            className="relative flex justify-center items-center w-[26vw] h-[28vw] bg-gradient-to-br from-white to-cyan-200 rounded-2xl overflow-hidden shadow-lg group hover:bg-black/60 transition duration-300"
                        >
                            <img
                                src="/Assets/(3d) - Content web development.png"
                                alt="Web Development"
                                className="absolute w-[23vw] z-10 transition-opacity duration-300 group-hover:opacity-0"
                            />
                            <h1 className="absolute text-black text-2xl font-semibold opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                Web Development
                            </h1>
                        </div>
                    ))}
            </div>
        </div>
    );
}
