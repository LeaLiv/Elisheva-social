import React from 'react';

export interface ServiceItem {
  id: number;
  title: string;
  description: string;
  icon?: React.ReactNode;
}

export interface GalleryItem {
  id: number;
  url: string;
  alt: string;
  category: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  text: string;
}