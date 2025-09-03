import React from 'react';

export interface NavLink {
  name: string;
  path: string;
}

export interface Service {
  icon: React.FC;
  title: string;
  description: string;
  details: string;
}

export interface Testimonial {
  quote: string;
  author: string;
}

export interface Faq {
  question: string;
  answer: string;
}
