import React from "react";
import ListItem from "@/components/ListItem"
export const MoreFromUs = () => {
  return (
    <div className="text-black p-5">
      <h1 className="text-black text-5xl font-bold p-3 mb-12 text-center">More From Us</h1>
      <div className="flex justify-center items-center">
        <div className="flex justify-around items-center bg-[#eee] pt-16 pb-16 pl-28 pr-28 rounded-md gap-40">
          <div>
            <h2 className="font-bold text-4xl mb-16 text-green-500"><span className="text-black">Krishi</span>&nbsp;Krew</h2>
            <div className="flex flex-col justify-center items-evenly gap-5">
            <ListItem text="We are better"/>
            <ListItem text="We are better"/>
            <ListItem text="We are better"/>
            <ListItem text="We are better"/>
            <ListItem text="We are better"/>
            </div>
            
          </div>
          <div>
            <h2 className="font-bold text-4xl mb-16">Other Solutions</h2>
            <div className="flex flex-col justify-center items-evenly gap-5">
            <ListItem text="They are shit"/>
            <ListItem text="They are shit"/>
            <ListItem text="They are shit"/>
            <ListItem text="They are shit"/>
            <ListItem text="They are shit"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
