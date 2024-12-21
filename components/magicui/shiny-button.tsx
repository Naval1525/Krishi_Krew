"use client";

import { motion, type AnimationProps } from "framer-motion";
import { cn } from "@/lib/utils";

const animationProps = {
  initial: { "--x": "100%" },
  animate: { "--x": "-100%" },
  transition: {
    repeat: Infinity,
    repeatType: "loop",
    duration: 3,
    ease: "linear",
  },
} as AnimationProps;

interface ShinyButtonProps {
  text: string;
  className?: string;
}

const ShinyButton = ({
  text = "shiny-button",
  className,
}: ShinyButtonProps) => {
  return (
    <motion.button
      {...animationProps}
      className={cn(
        "relative overflow-hidden rounded-lg px-6 py-2 font-medium text-black",
        "before:absolute before:inset-0 before:rounded-[inherit]",
        "before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent",
        "before:translate-x-[var(--x)] before:transition-transform",
        "hover:shadow-lg hover:shadow-green-500/25 transition-shadow duration-300",
        className
      )}
    >
      <span className="relative z-10">{text}</span>
    </motion.button>
  );
};

export default ShinyButton;