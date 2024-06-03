import React from 'react';
import { TbBinaryTree } from "react-icons/tb";
import { BsDatabaseFillCheck } from "react-icons/bs";
import { RiJavaLine } from "react-icons/ri";
import { DiJavascript } from "react-icons/di";
import { FaComputer } from "react-icons/fa6";
import { BiSolidFileHtml } from "react-icons/bi";
import { BiSolidFileCss } from "react-icons/bi";
import { RiReactjsLine } from "react-icons/ri";

function Experience() {
  return (
    <div name="Experience"
     className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20 text-left">
      <h1 className="font-bold text-3xl text-green-600 underline mb-8">Experience</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
        <div className="flex flex-col items-center space-y-2">
          <RiJavaLine className="text-6xl" />
          <span className="text-2xl">Java</span>
        </div>
        <div className="flex flex-col items-center space-y-2">
          <TbBinaryTree className="text-6xl" />
          <span className="text-2xl">Data Structures</span>
        </div>
        <div className="flex flex-col items-center space-y-2">
          <BsDatabaseFillCheck className="text-6xl" />
          <span className="text-2xl">Databases</span>
        </div>
        <div className="flex flex-col items-center space-y-2">
          <DiJavascript className="text-6xl" />
          <span className="text-2xl">JavaScript</span>
        </div>
        <div className="flex flex-col items-center space-y-2">
          <FaComputer className="text-6xl" />
          <span className="text-2xl">Operating Systems</span>
        </div>
        <div className="flex flex-col items-center space-y-2">
          <BiSolidFileHtml className="text-6xl" />
          <span className="text-2xl">HTML</span>
        </div>
        <div className="flex flex-col items-center space-y-2">
          <BiSolidFileCss className="text-6xl" />
          <span className="text-2xl">CSS</span>
        </div>
        <div className="flex flex-col items-center space-y-2">
          <RiReactjsLine className="text-6xl" />
          <span className="text-2xl">ReactJs</span>
        </div>
      </div>
    </div>
  );
}

export default Experience;
