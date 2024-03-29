"use client";

import Image from "next/image";
import SectionTitle from "./section-title";
import React, { useState } from "react";
import Modal from "./project-modal";
import Link from "next/link";

interface ProjectItemTallInterface {
  src: string;
  link: string;
  projectTitle: string;
}

const ProjectItemTall: React.FC<ProjectItemTallInterface> = ({
  src,
  projectTitle,
  link,
}) => {
  const [modal, setModal] = useState({ active: false });
  return (
    <div className="flex flex-col w-full items-start">
      <div
        onMouseEnter={() => {
          setModal({ active: true });
        }}
        onMouseLeave={() => {
          setModal({ active: false });
        }}
        className="relative w-full h-[600px] lg:h-[950px] cursor-none"
      >
        <Link href={link} className=" cursor-none">
          <Image
            quality={100}
            className="rounded-[20px] object-cover object-left lg:object-center"
            fill
            src={src}
            alt="Pclub.io"
          />
        </Link>
      </div>
      <div className="hidden md:block">
        <div className="flex flex-row gap-2.5 mt-8 md:gap-3">
          <SectionTitle text="Branding" />
          <SectionTitle text="Development" />
          <SectionTitle text="User Experience" />
        </div>
      </div>
      <div className="md:hidden">
        <div className="flex flex-col items-start justify-start mt-8 w-full">
          <div className="flex flex-row gap-2.5 md:gap-3">
            <SectionTitle text="Branding" />
            <SectionTitle text="Development" />
          </div>
        </div>
      </div>
      <h2 className=" font-clashDisplay text-4xl lg:text-6xl text-white font-medium mt-6 md:mt-8">
        {projectTitle}
      </h2>
      <Modal modal={modal} />
    </div>
  );
};

export default ProjectItemTall;
