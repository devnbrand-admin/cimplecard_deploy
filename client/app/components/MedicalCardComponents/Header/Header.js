'use client'
import { useState, useEffect } from "react";
import axios from "axios";

export default function Header() {
    const [cardData, setCardData] = useState(null);

    useEffect(() => {
        // Fetch data from the API
        const fetchCardData = async () => {
            try {
                const response = await axios.get(
                    "https://cimple-card.onrender.com/api/card/get/1"
                );
                if (response.data.success) {
                    setCardData(response.data.card);
                }
            } catch (error) {
                console.error("Error fetching card data:", error);
            }
        };

        fetchCardData();
    }, []);

    if (!cardData) {
        return <div>Loading...</div>;
    }

    return (
        <div className="relative w-screen h-[80vh]">
            <div
                className="absolute w-full h-[80vh] bg-cover bg-center bg-no-repeat"
                style={{
                    clipPath: "polygon(0 0, 100% 0, 100% 68%, 0 48%)",
                    backgroundImage: `url('/Assets/Banner.avif')`,
                }}
            />
            <div className="absolute top-[40%] left-[5%] flex w-[43vw]">
                <div
                    className="w-[20vw] h-[20vw] rounded-full bg-cover bg-center shadow-[10px_9px_25px_-7px_rgba(204,204,204,1)]"
                    style={{
                        backgroundImage: "url('/Assets/Profile Picture.jpg')",
                    }}
                />
                <div className="ml-[2vw] w-1/2 px-2 py-[100px]">
                    <h1 className="text-[32px] leading-[2vw] mb-5 font-semibold">{cardData.title}</h1>
                    <h3 className="text-[20px]">{cardData.companyName}</h3>
                    <h3 className="text-[20px]">{cardData.jobTitle}</h3>
                </div>
            </div>
        </div>
    );
}
