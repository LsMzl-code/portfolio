"use client";

import Image from "next/image";
import React from "react";

import Link from "next/link";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import { MousePointerClick } from "lucide-react";
import { GitHubLogoIcon } from "@radix-ui/react-icons";

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  link: string;
  github: string;
  iconLists: string[];
}

export function ProjectCard({ title, description, imageUrl, link, imageAlt, github, iconLists }: ProjectCardProps) {
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-gray-950/[.01] relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-gray-50/[.10] dark:border-gray-50/[.1] border-gray-950/[.1] w-auto h-auto rounded-xl p-3 sm:p-6 border  ">
        {/* Titre */}
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
          {title}
        </CardItem>
        {/* Description */}
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          {description}
        </CardItem>
        {/* Image */}
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src={imageUrl}
            height="300"
            width="500"
            className="h-40 sm:h-52 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt={imageAlt}
            priority
          />
        </CardItem>
        {/* Technologies */}
        <div className="flex items-center justify-between mt-7 mb-3">
          <div className="flex items-center">
            {iconLists.map((icon, index) => (
              <div
                key={icon}
                className="border border-white/[0.2] rounded-full bg-gray-500 dark:bg-gray-700 lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                style={{
                  transform: `translateX(-${5 * index * 2
                    }px)`,
                }}
              >
                <Image src={icon} alt={icon} className="p-2" width="40" height="40" />
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-between items-center mt-5">
          <CardItem
            translateZ={20}
            as={Link}
            href={github}
            target="__blank"
            className="px-4 py-1.5 rounded-md border border-foreground/10 hover:bg-foreground/10 hover:shadow-md"
            title="Voir le projet sur Github"
          >
            <GitHubLogoIcon className="h-5 w-5" />
          </CardItem>
          <CardItem
            translateZ={20}
            as={Link}
            href={link}
            className="px-4 py-2 rounded-md bg-indigo-500 hover:bg-indigo-500/80 text-white text-sm font-bold flex items-center hover:shadow-md"
            title="Visiter le site"
          >
            Visiter
            <MousePointerClick className="h-5 w-5 ml-2" />
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}
