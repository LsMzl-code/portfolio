import {
  BellIcon,
  GitHubLogoIcon,
  LinkedInLogoIcon,
} from "@radix-ui/react-icons";
import { BentoCard, BentoGrid } from "../ui/bento-grid";
import { MailIcon, UserIcon } from "lucide-react";
import { AnimatedListDemo } from "../animated-list-demo";



const features = [
  {
    Icon: UserIcon,
    name: "Qui suis-je ?",
    description: "Search through all your files in one place.",
    href: "/",
    cta: "Learn more",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:col-start-1 lg:col-end-3 lg:row-start-1 lg:row-end-3",
  },
  {
    Icon: MailIcon,
    name: "Email",
    description: "Supports 100+ languages and counting.",
    href: "/",
    cta: "Learn more",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4",
  },
  {
    Icon: LinkedInLogoIcon,
    name: "LinkedIn",
    description: "Supports 100+ languages and counting.",
    href: "/",
    cta: "Learn more",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:col-start-2 lg:col-end-3 lg:row-start-3 lg:row-end-4",
  },
  {
    Icon: GitHubLogoIcon,
    name: "Github",
    description: "Use the calendar to filter your files by date.",
    href: "/",
    cta: "Learn more",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2",
  },
  {
    Icon: BellIcon,
    name: "Notifications",
    description:
      "Get notified when someone shares a file or mentions you in a comment.",
    href: "/",
    cta: "Learn more",
    background: (<AnimatedListDemo className="absolute right-2 top-4 h-[300px] w-full border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-105" />),
    className: "lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-4",
  },
];

export async function Presentation() {
  return (
    <BentoGrid className="lg:grid-rows-3 my-20">
      {features.map((feature) => (
        <BentoCard key={feature.name} {...feature} />
      ))}
    </BentoGrid>
  );
}
