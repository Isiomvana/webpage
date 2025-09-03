import type { NavLink, Service, Testimonial, Faq } from './types';
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

export const FAQS: Faq[] = [
    {
        question: "What is an Individualized Education Plan (IEP)?",
        answer: "An IEP is a written document that's developed for each public school child who is eligible for special education. It is created through a team effort and reviewed periodically. The IEP outlines your child's learning needs, the services the school will provide, and how progress will be measured."
    },
    {
        question: "How do I know if my child needs an assessment?",
        answer: "You might consider an assessment if you notice persistent difficulties with learning, attention, behavior, or social skills compared to their peers. Common signs include trouble with reading or math, difficulty following instructions, hyperactivity, or challenges making friends. An assessment provides a clear picture of your child's strengths and areas where they may need support."
    },
    {
        question: "What age range do you work with?",
        answer: "We primarily work with children from early years through primary school, typically from ages 3 to 12. However, we can provide consultations for children outside this range. Please contact us to discuss your specific needs."
    },
    {
        question: "Where are your services located?",
        answer: "Our services are based in Nigeria. We offer both in-person consultations in select areas and virtual sessions to accommodate families across the country. Please get in touch to find out what's available for your location."
    },
    {
        question: "How long does the initial assessment process take?",
        answer: "The initial assessment is comprehensive. It typically involves an initial consultation with parents, one or two observation sessions with the child, and a feedback meeting. The entire process usually spans over one to two weeks to ensure a thorough and unhurried evaluation."
    },
     {
        question: "How do I book an assessment for my child?",
        answer: "The first step is to create an account on our website. Once you are logged in, you can access the booking form to request an assessment. We will then contact you to schedule the initial consultation. You can get started by visiting our registration page."
    }
];
