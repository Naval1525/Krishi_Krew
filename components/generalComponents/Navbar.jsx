"use client";
import React from "react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { RiArrowDropDownLine } from "react-icons/ri";

function Navbar() {
  const router = useRouter(); // Initialize useRouter here
  const handleNavigation = () => {
    window.location.href = "https://weatherapp-eta-topaz.vercel.app/";
  };

  return (
    <nav className="w-[90%] mx-auto text-black mt-4 mb-10 sticky top-4 z-50 backdrop-blur-lg bg-white/80 border-2 rounded-lg shadow-lg">
      <div className="flex items-center justify-between p-5">
        <h1
          className="text-5xl font-bold text-green-600 cursor-default"
          onClick={() => router.push("/")}
        >
          <span className="text-black">Krishi</span>&nbsp;Krew
        </h1>
        <div className="flex justify-center items-center gap-8">
          <a
            href="https://farmers-navy.vercel.app/"
            className="text-lg font-medium hover:text-green-500"
          >
            Community
          </a>

          <Dropdown backdrop="blur">
            <DropdownTrigger>
              <Button
                variant="light"
                color="success"
                className="text-lg font-medium"
              >
                Our Services{" "}
                <span className="text-3xl -mr-2">
                  <RiArrowDropDownLine />
                </span>
              </Button>
            </DropdownTrigger>
            <DropdownMenu variant="faded" aria-label="Static Actions">
              <DropdownItem
                onClick={() => router.push("/cropPrediction")}
                key="crop"
                className="text-black"
              >
                Crop Prediction
              </DropdownItem>
              <DropdownItem
                onClick={() => router.push("/fertilizerPrediction")}
                key="fertilizer"
                className="text-black"
              >
                Fertilizer Prediction
              </DropdownItem>
              <DropdownItem
                onClick={() =>
                  router.push("https://weatherapp-eta-topaz.vercel.app/")
                }
                key="weather"
                className="text-black"
              >
                Weather Prediction
              </DropdownItem>
              <DropdownItem
                onClick={() => router.push("/e-learning")}
                key="e-learning"
                className="text-black"
              >
                E-Learning
              </DropdownItem>
              <DropdownItem
                onClick={() => router.push("/shop")}
                key="shop"
                className="text-black"
              >
                Shop Products
              </DropdownItem>
              {/* <DropdownItem
                onClick={() =>
                  router.push("/schemes")
                }
                key="schemes"
                className="text-black"
              >
                Government Schemes
              </DropdownItem> */}
            </DropdownMenu>
          </Dropdown>
          <a
            href="#"
            className="text-lg font-medium hover:text-green-500"
            onClick={() => router.push("/schemes")}
          >
            Government Schemes
          </a>
          <button
            className="border-[#8AC653] border-2 rounded-full pt-2 pb-2 pr-5 pl-5"
            onClick={() => router.push("/contactus")}
          >
            <a href="#" className="text-2xl font-bold">
              Contact Us
            </a>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;









