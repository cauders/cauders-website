import React from 'react';
import StandardizedHeading from './StandardizedHeading';
import ScrollFadeIn from './ScrollFadeIn';
import { PenTool, Code, Bot, Clock, CheckCircle2, Heart, Shield, Settings2, Wallet, Brain, Zap } from 'lucide-react';
import ContainerCard from './ContainerCard';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function HowWeDoIt() {
 const steps = [
 {
 icon: PenTool,
 title: 'We Lead with Design',
 intro: 'Our team of designers, skilled in product design, UI/UX, and accessibility, create experiences that are:',
 points: [
 { icon: Clock, title: 'Timely', desc: 'We design at the pace users need, with rapid learning and iteration built in.' },
 { icon: CheckCircle2, title: 'Useful', desc: 'Success is measured by how easily users achieve their goals.' },
 { icon: Heart, title: 'Delightful', desc: 'We create thoughtful experiences that feel worthwhile.' }
 ]
 },
 {
 icon: Code,
 title: 'We Leverage Open Source',
 intro: 'With thousands of contributions to dozens of open-source projects, we have deep expertise that translates into:',
 points: [
 { icon: Shield, title: 'Sovereignty', desc: 'Avoid vendor lock-in and securely deploy on-premises or in private clouds.' },
 { icon: Settings2, title: 'Flexibility', desc: 'Customize source code and choose licensing that fits your requirements.' },
 { icon: Wallet, title: 'Economy', desc: 'Reduce hosting, maintenance, and development costs through free, adaptable, AI-ready open-source technologies at greater scale.' }
 ]
 },
 {
 icon: Bot,
 title: 'We Accelerate with AI',
 intro: 'We have been working with generative AI for over a decade, applying it to:',
 points: [
 { icon: Brain, title: 'Build Smarter Software', desc: 'We integrate agentic workflows using LangGraph, open-weight, and frontier models tailored to user needs, prioritizing sovereignty and adaptability.' },
 { icon: Zap, title: 'Build It Faster Than Ever', desc: 'Our teams use Codex, Claude, and multi-agent workflows while managing security, performance, cost, and governance without compromising speed or quality.' }
 ]
 }
 ];

 return (
 <section className="py-16 md:py-20 bg-background relative overflow-hidden">
 <div className="container mx-auto px-4 sm:px-6 lg:px-8">
 <div className="max-w-4xl mx-auto text-center mb-20">
 <ScrollFadeIn>
 <StandardizedHeading lines={["How We Do It"]} />
 </ScrollFadeIn>
 </div>

 <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
 {steps.map((step, index) => (
 <ScrollFadeIn key={index} delay={index * 0.1}>
 <ContainerCard hoverEffect className="rounded-3xl p-8 md:p-10 h-full">
 <div className="w-16 h-16 rounded-2xl bg-zinc border border-primary/20 flex items-center justify-center mb-8">
 <step.icon className="w-8 h-8 text-white" strokeWidth={1.5} />
 </div>
 <h3 className="text-2xl font-headline font-medium text-foreground mb-4">
 {step.title}
 </h3>
 <p className="text-foreground/80 mb-8 leading-relaxed">
 {step.intro}
 </p>
 <ul className="space-y-6">
 {step.points.map((point, i) => (
 <li key={i} className="flex flex-col">
 <div className="flex items-center gap-3 mb-2">
 <div className="flex-shrink-0 bg-zinc rounded-full p-2 border border-primary/20 flex items-center justify-center">
 <point.icon className="w-4 h-4 text-white" strokeWidth={2} />
 </div>
 <h4 className="text-lg font-medium text-foreground">{point.title}</h4>
 </div>
 <p className="text-sm text-foreground/80 leading-relaxed pl-11">{point.desc}</p>
 </li>
 ))}
 </ul>
 </ContainerCard>
 </ScrollFadeIn>
 ))}
 </div>
 <div className="mt-16 text-center">
 <Button asChild variant="zinc" size="lg">
 <Link href="#contact">
 Discuss Your Project
 </Link>
 </Button>
 </div>
 </div>
 </section>
 );
}
