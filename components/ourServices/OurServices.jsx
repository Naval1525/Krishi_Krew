"use client";
import React from "react";
import Card from "@/components/generalComponents/Card";
import { useRouter } from "next/navigation";

function OurServices() {
  const router = useRouter();
  return (
    <div className="text-black bg-[#e8f1ee] p-8">
      <div className="flex justify-center items-center w-full bg-red">
        <div className="flex justify-center items-center gap-16">
          <div className="flex flex-col justify-center items-center gap-16">
            <Card
            logo="/13063787.png"
              heading="Community"
              description="Our Community Section is a dedicated space for farmers to connect, share knowledge, and collaborate on sustainable farming practices. Here, farmers can exchange tips, discuss challenges, and stay updated on the latest agricultural trends. By fostering a strong and supportive network."
              onClick={() => router.push("https://farmers-navy.vercel.app/")}
            />
            <Card logo="/2997592.png" heading="E-Learning" description="Empower yourself with knowledge on sustainable development. Our courses cover eco-friendly practices, green technologies, and strategies to create a sustainable future."
             onClick={() => router.push("/e-learning")}/>
          </div>
          <Card logo="/10236800.png" heading="Government Schemes" description="🌱 Empowering Farmers with Supportive Policies Explore various government schemes designed to provide financial assistance and resources for fertilizer use. These programs aim to enhance agricultural productivity, support sustainable practices, and ensure fair access to essential inputs."
            onClick={() => router.push("/schemes")}/>
        </div>
      </div>
    </div>
  );
}

export default OurServices;
