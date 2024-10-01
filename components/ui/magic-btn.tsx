import React from "react";
interface MagicBtnProps {
   title: string;
   icon: React.ReactElement;
   position: string;
   handleClick?: () => void;
   className?: string;
   otherClasses?: string;
}

export const MagicBtn: React.FC<MagicBtnProps> = ({
   title,
   icon,
   position,
   handleClick,
   className,
   otherClasses,
}) => {
   return (
      <button
         className="relative w-fit inline-flex py-2.5 animate-shimmer items-center justify-center rounded-2xl border border-indigo-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-4 font-medium text-slate-200 transition-colors focus:outline-none md:w-60 md:mt-10"
         onClick={handleClick}
      >
         <span className="mr-2">{position === "left" && icon}</span>
         {title}
         <span className="ml-2">{position === "right" && icon}</span>
      </button>
   );
};
