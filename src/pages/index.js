import React from "react";
import SideNavBar from "@/components/SideNavBar";
import Header from "@/components/Header";
import Productivity from "@/components/Productivity";
import ProductivityGraph from "@/components/ProductivityGraph";
import Alarms from "@/components/Alarms";
import MachineStatus from "@/components/MachineStatus";
import Machine from "@/components/Machine";

const Page = () => {
  return (
    <div className="bg-gray-900 min-h-screen flex">
      <SideNavBar />

      <div className="flex-1 flex flex-col ">
        <div className="flex justify-end ">
          <h3 className="text-gray-400 mx-3 justify-end">Jonathan Wilson [Log Out]</h3>
        </div>

        <Header />
        <div className="grid lg:grid-cols-3 gap-3 mr-3 md:grid-cols-1 " >
        <Productivity />
        <ProductivityGraph/>
        <Alarms/>
        </div>
   <MachineStatus/>
        <Machine/>
      </div>
    </div>
  );
};

export default Page;
