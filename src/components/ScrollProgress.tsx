import { motion, useScroll, useSpring } from "motion/react";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 26, mass: 0.3 });
  return (
    <motion.div
      style={{ scaleX }}
      className="fixed left-0 top-0 z-50 h-0.5 w-full origin-left bg-gradient-to-r from-accent to-cyan"
    />
  );
}
