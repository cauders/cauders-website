"use client";

import { useRef, ReactNode } from 'react';
import { motion, useInView } from 'framer-motion';

interface ScrollSpyItemProps {
 children: ReactNode;
 className?: string;
}

export default function ScrollSpyItem({ children, className }: ScrollSpyItemProps) {
 const ref = useRef(null);
 const inView = useInView(ref, { margin: "-25% 0px -25% 0px" });

 return (
 <motion.div
 ref={ref}
 className={className}
 initial={{ opacity: 0.3, y: 20 }}
 animate={inView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0.3, y: 0, scale: 0.98 }}
 transition={{ duration: 0.5, ease: "easeOut" }}
 >
 {children}
 </motion.div>
 );
}
