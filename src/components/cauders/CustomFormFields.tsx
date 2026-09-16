import React, { forwardRef } from 'react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
 Select,
 SelectContent,
 SelectItem,
 SelectTrigger,
 SelectValue,
} from '@/components/ui/select';
import { FormControl } from '@/components/ui/form';
import { cn } from '@/lib/utils';

export const CustomInput = forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
 ({ className, ...props }, ref) => {
 return (
 <Input
 ref={ref}
 className={cn(
 "h-12 bg-white/20 border-white/10 text-white placeholder:text-white rounded-xl focus:border-primary focus-visible:ring-0 focus-visible:ring-offset-0 focus:bg-white/30 transition-colors",
 className
 )}
 {...props}
 />
 );
 }
);
CustomInput.displayName = 'CustomInput';

export const CustomTextarea = forwardRef<HTMLTextAreaElement, React.ComponentProps<"textarea">>(
 ({ className, ...props }, ref) => {
 return (
 <Textarea
 ref={ref}
 className={cn(
 "min-h-[120px] resize-none bg-white/20 border-white/10 text-white placeholder:text-white rounded-xl focus:border-primary focus-visible:ring-0 focus-visible:ring-offset-0 focus:bg-white/30 transition-colors p-4",
 className
 )}
 {...props}
 />
 );
 }
);
CustomTextarea.displayName = 'CustomTextarea';

interface CustomSelectProps {
 value?: string;
 onValueChange?: (value: string) => void;
 defaultValue?: string;
 placeholder?: string;
 options: { label: string; value: string }[];
 className?: string;
}

export function CustomSelect({
 value,
 onValueChange,
 defaultValue,
 placeholder,
 options,
 className,
}: CustomSelectProps) {
 return (
 <Select value={value} onValueChange={onValueChange} defaultValue={defaultValue}>
 <FormControl>
 <SelectTrigger 
 className={cn(
 "h-12 bg-white/20 border-white/10 text-white data-[placeholder]:text-white rounded-xl focus:border-primary focus:ring-0 focus:ring-offset-0 focus-visible:ring-0 focus-visible:ring-offset-0 focus:bg-white/30 transition-colors outline-none",
 className
 )}
 >
 <SelectValue placeholder={placeholder} />
 </SelectTrigger>
 </FormControl>
 <SelectContent>
 {options.map((option) => (
 <SelectItem key={option.value} value={option.value}>
 {option.label}
 </SelectItem>
 ))}
 </SelectContent>
 </Select>
 );
}
