import type { NavLink, Service, Testimonial } from './types';
import { AssessmentIcon, CommunityIcon, IEPIcon, SupportIcon } from './components/Icons';

export const NAV_LINKS: NavLink[] = [
  { name: 'Home', path: '/' },
  { name: 'About Opeyemi', path: '/about' },
  { name: 'Our Services', path: '/services' },
  { name: 'Contact Us', path: '/contact' },
];

export const SERVICES: Service[] = [
    {
        icon: AssessmentIcon,
        title: 'Initial Child Assessment',
        description: 'A comprehensive evaluation to understand your child\'s unique strengths and challenges.',
        details: 'Our process begins with a thorough and compassionate assessment. We observe, interact with, and evaluate your child in a comfortable setting to identify their specific learning needs, social skills, and developmental stage. This forms the foundation for all future support.'
    },
    {
        icon: IEPIcon,
        title: 'Individualized Education Plan (IEP) Development',
        description: 'Crafting a personalized roadmap for your child’s educational and developmental success.',
        details: 'Based on the initial assessment, we collaborate with you to create a detailed Individualized Education Plan (IEP). This document outlines specific, measurable goals and the strategies we will use to achieve them, ensuring everyone involved in your child\'s education is working together.'
    },
    {
        icon: SupportIcon,
        title: 'One-on-One Support Sessions',
        description: 'Dedicated, focused sessions to help your child build skills and confidence.',
        details: 'We provide tailored one-on-one therapy and educational sessions. These sessions are designed to address the goals in the IEP, focusing on academic improvement, behavior management, social skills, and building self-esteem in a supportive environment.'
    },
    {
        icon: CommunityIcon,
        title: 'Community Reintegration Programs',
        description: 'Guiding your child to confidently participate in school and community life.',
        details: 'Our goal is to help your child thrive in all environments. We develop programs that focus on practical life skills and social integration, preparing them for successful participation in mainstream schools and the wider community, fostering independence and a sense of belonging.'
    }
];

export const TESTIMONIALS: Testimonial[] = [
    {
        quote: "Opeyemi's guidance was a turning point for our family. Her expertise and compassionate approach helped our son find his voice and confidence. We are forever grateful.",
        author: "Adeola, mother of a 5-year-old"
    },
    {
        quote: "The IEP developed for our daughter was incredibly detailed and insightful. For the first time, we have a clear, actionable plan that addresses her specific needs. Mr. Elumelu is a true professional.",
        author: "Mr. Chidi, father of a 9-year-old"
    },
    {
        quote: "Finding a specialist in Nigeria we could trust was overwhelming. Opeyemi's professionalism and warmth put us at ease immediately. We've seen remarkable progress in just a few months.",
        author: "Funke, mother of a 7-year-old"
    }
];
