import type { LucideIcon } from 'lucide-react';

export interface Testimonial {
  quote: string;
  name: string;
}

export interface ProcessStep {
  n: string;
  title: string;
  desc: string;
  image: string;
  imageAlt: string;
  Icon: LucideIcon;
}

export interface Recommendation {
  src: string;
  poster: string;
  label: string;
}

export interface CircleItem {
  image: string;
  label: string;
}

export interface InstagramReelData {
  id: string;
  views?: string;
}
