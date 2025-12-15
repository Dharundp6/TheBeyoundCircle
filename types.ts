import React from 'react';

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  image: string;
  quote: string;
}

export interface Feature {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface FaqItem {
  question: string;
  answer: string;
}