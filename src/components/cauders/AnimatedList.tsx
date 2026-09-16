'use client';

import { useRef, useState, useEffect, useCallback, ReactNode } from 'react';
import { motion, useInView } from 'framer-motion';

interface AnimatedItemProps {
 children: ReactNode;
 delay?: number;
 index: number;
 onMouseEnter: () => void;
 onClick: () => void;
}

const AnimatedItem = ({ children, delay = 0, index, onMouseEnter, onClick }: AnimatedItemProps) => {
 const ref = useRef(null);
 const inView = useInView(ref, { amount: 0.5, once: true });
 return (
 <motion.div
 ref={ref}
 data-index={index}
 onMouseEnter={onMouseEnter}
 onClick={onClick}
 initial={{ scale: 0.8, opacity: 0 }}
 animate={inView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
 transition={{ duration: 0.5, delay: delay }}
 className="mb-4 cursor-pointer"
 >
 {children}
 </motion.div>
 );
};

interface AnimatedListProps<T> {
 items: T[];
 renderItem?: (item: T, index: number, isSelected: boolean) => ReactNode;
 onItemSelect?: (item: T, index: number) => void;
 showGradients?: boolean;
 enableArrowNavigation?: boolean;
 className?: string;
 displayScrollbar?: boolean;
 initialSelectedIndex?: number;
 disableLocalScroll?: boolean;
}

export default function AnimatedList<T>({
 items,
 renderItem,
 onItemSelect,
 showGradients = true,
 enableArrowNavigation = true,
 className = '',
 displayScrollbar = true,
 initialSelectedIndex = -1,
 disableLocalScroll = false
}: AnimatedListProps<T>) {
 const listRef = useRef<HTMLDivElement>(null);
 const [selectedIndex, setSelectedIndex] = useState(initialSelectedIndex);
 const [keyboardNav, setKeyboardNav] = useState(false);
 const [topGradientOpacity, setTopGradientOpacity] = useState(0);
 const [bottomGradientOpacity, setBottomGradientOpacity] = useState(1);

 const handleItemMouseEnter = useCallback((index: number) => {
 setSelectedIndex(index);
 }, []);

 const handleItemClick = useCallback(
 (item: T, index: number) => {
 setSelectedIndex(index);
 if (onItemSelect) {
 onItemSelect(item, index);
 }
 },
 [onItemSelect]
 );

 const handleScroll = useCallback((e: React.UIEvent<HTMLDivElement>) => {
 const target = e.target as HTMLDivElement;
 const { scrollTop, scrollHeight, clientHeight } = target;
 setTopGradientOpacity(Math.min(scrollTop / 50, 1));
 const bottomDistance = scrollHeight - (scrollTop + clientHeight);
 setBottomGradientOpacity(scrollHeight <= clientHeight ? 0 : Math.min(bottomDistance / 50, 1));
 }, []);

 // Update bottom gradient on mount in case list is short
 useEffect(() => {
 if (listRef.current) {
 const { scrollHeight, clientHeight } = listRef.current;
 if (scrollHeight <= clientHeight) {
 setBottomGradientOpacity(0);
 }
 }
 }, [items]);

 useEffect(() => {
 if (!enableArrowNavigation) return;
 const handleKeyDown = (e: KeyboardEvent) => {
 if (e.key === 'ArrowDown' || (e.key === 'Tab' && !e.shiftKey)) {
 e.preventDefault();
 setKeyboardNav(true);
 setSelectedIndex(prev => Math.min(prev + 1, items.length - 1));
 } else if (e.key === 'ArrowUp' || (e.key === 'Tab' && e.shiftKey)) {
 e.preventDefault();
 setKeyboardNav(true);
 setSelectedIndex(prev => Math.max(prev - 1, 0));
 } else if (e.key === 'Enter') {
 if (selectedIndex >= 0 && selectedIndex < items.length) {
 e.preventDefault();
 if (onItemSelect) {
 onItemSelect(items[selectedIndex], selectedIndex);
 }
 }
 }
 };

 window.addEventListener('keydown', handleKeyDown);
 return () => window.removeEventListener('keydown', handleKeyDown);
 }, [items, selectedIndex, onItemSelect, enableArrowNavigation]);

 useEffect(() => {
 if (!keyboardNav || selectedIndex < 0 || !listRef.current) return;
 const container = listRef.current;
 const selectedItem = container.querySelector(`[data-index="${selectedIndex}"]`) as HTMLElement;
 if (selectedItem) {
 const extraMargin = 50;
 const containerScrollTop = container.scrollTop;
 const containerHeight = container.clientHeight;
 const itemTop = selectedItem.offsetTop;
 const itemBottom = itemTop + selectedItem.offsetHeight;
 if (itemTop < containerScrollTop + extraMargin) {
 container.scrollTo({ top: itemTop - extraMargin, behavior: 'smooth' });
 } else if (itemBottom > containerScrollTop + containerHeight - extraMargin) {
 container.scrollTo({
 top: itemBottom - containerHeight + extraMargin,
 behavior: 'smooth'
 });
 }
 }
 setKeyboardNav(false);
 }, [selectedIndex, keyboardNav]);

 return (
 <div className={`relative w-full ${className}`}>
 <div 
 ref={listRef} 
 className={
 disableLocalScroll 
 ? "flex flex-col w-full" 
 : `max-h-[600px] overflow-y-auto px-2 pb-16`
 }
 onScroll={!disableLocalScroll ? handleScroll : undefined}
 >
 {items.map((item, index) => (
 <AnimatedItem
 key={index}
 delay={0.1}
 index={index}
 onMouseEnter={() => handleItemMouseEnter(index)}
 onClick={() => handleItemClick(item, index)}
 >
 {renderItem ? renderItem(item, index, selectedIndex === index) : (
 <div className={`p-4 rounded-xl ${selectedIndex === index ? 'bg-primary/10' : 'bg-card'}`}>
 <p className="text-foreground">{String(item)}</p>
 </div>
 )}
 </AnimatedItem>
 ))}
 </div>
 {showGradients && !disableLocalScroll && (
 <>
 <div 
 className="absolute top-0 left-0 right-0 h-12 bg-gradient-to-b from-[#f8fafc] to-transparent pointer-events-none transition-opacity duration-300 z-10" 
 style={{ opacity: topGradientOpacity }}
 />
 <div 
 className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#f8fafc] to-transparent pointer-events-none transition-opacity duration-300 z-10" 
 style={{ opacity: bottomGradientOpacity }}
 />
 </>
 )}
 </div>
 );
}
