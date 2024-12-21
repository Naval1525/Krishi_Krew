import GetLocation from "@/components/GetLocation";
import { Fertilizer } from "../components/fertilizerprediction/Fertilizer";
import { Crop } from "../components/cropprediction/Crop";
import Cards from "@/components/generalComponents/Cards";
import { MoreFromUs } from "../components/MoreFromUs";
import Navbar from "../components/generalComponents/Navbar";
import Landing from "../components/Landing";
import ContactUs from "@/components/contactUs/ContactUs"
import App from "../components/App"
import Elearning from "@/components/Elearning";
import CropPredictor from "@/components/CropPredictor"
import AboutUs from "@/components/AboutUs"

import GovernmentSchemesHoverEffect from "@/components/schemes/GovernmentSchemesHoverEffect";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      {/* <GetLocation /> */}
      <Landing />
      
      {/* <AboutUs/> */}
      {/* <Crop></Crop>  */}
      {/* <ContactUs/> */}
      {/* <Fertilizer></Fertilizer> */}
      {/* <Cards></Cards> */}
      {/* <MoreFromUs /> */}
      {/* <OurServices /> */}
      {/* <CropPredictor/> */}
    </div>
  );
}
