import { cn } from "@/lib/utils";
import Marquee from "@/components/magicui/marquee";

const reviews = [
    {
        name: "Community",
        username: "",
        body: "Our Fertilizer Prediction tool uses machine learning to recommend the best fertilizer based on conditions like temperature, humidity, and soil type.This helps farmers maximize crop yields and promote sustainable farming.",
        img: "/13063787.png",
    },
    {
        name: "Government Schemes",
        username: "",
        body: "We provide accurate information about the live government schemes helpful for farmers so that they can avail benefits. These programs aim to enhance agricultural productivity, support sustainable practices, and ensure fair access to essential inputs.",
        img: "/2997592.png",
    },
    {
        name: "E-Learning",
        username: "",
        body: "Not sure what sustainable farming is? Too confused about choosing the right practices for your farms? We are providing E-resources including live videos, government schemes, Youtube Video. All of that in little cost of 0 ruppees.",
        img: "/10236800.png",
    },
    {
        name: "Shop at low prices ",
        username: "",
        body: "I'm at a loss for words. This is amazing. I love it.",
        img: "/10236800.png",
    },
    {
        name: "Government and NGO",
        username: "",
        body: "I'm at a loss for words. This is amazing. I love it.",
        img: "/10236800.png",
    },
    {
        name: "Weather Prediction",
        username: "",
        body: "Our Weather Prediction tool utilizes live location data and advanced APIs to provide accurate, real-time weather forecasts. This helps farmers plan their activities efficiently, ensuring better crop management and promoting sustainable farming practices.",
        img: "/1374369.png",
    },
];

const firstRow = reviews.slice(0, reviews.length / 2);

const ReviewCard = ({
    img,
    name,
    username,
    body,
}: {
    img: string;
    name: string;
    username: string;
    body: string;
}) => {
    return (
        <figure
            className={cn(
                "relative w-96 cursor-pointer overflow-hidden rounded-xl border p-4",
                // light styles
                "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
                // dark styles
                "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
            )}
        >
            <div className="flex flex-row items-center gap-2">
                <img className="rounded-full" width="40" height="40" alt="" src={img} />
                <div className="flex flex-col">
                    <figcaption className="text-2xl font-bold text-green-600 ">
                        {name}
                    </figcaption>
                    <p className="text-xs font-medium dark:text-white/40">{username}</p>
                </div>
            </div>
            <blockquote className="mt-2 text-xl p-3 ">{body}</blockquote>
            <button className="mt-6 p-2 bg-yellow-400 rounded-full hover:bg-yellow-500 flex items-center justify-center">
                <svg
                    className="w-5 h-5 text-black"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 12h14M12 5l7 7-7 7"
                    ></path>
                </svg>
            </button> 
        </figure>
        
    );
};

export function MarqueeDemo() {
    return (
        <div className="relative flex h-[500px] bg-[#e8f1ee] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
            <Marquee pauseOnHover className="[--duration:20s]">
                {firstRow.map((review) => (
                    <ReviewCard key={review.username} {...review} />
                ))}
            </Marquee>
            
            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background "></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
        </div>
    );
}
