import type React from 'react';

export type MediaType = 'instagram' | 'video';

export interface GalleryItem {
  type: MediaType;
  url: string;
  poster?: string;
}

export interface GalleryContent {
  title: string;
  description: React.ReactNode;
  items: GalleryItem[];
}

export interface HeroContent {
  subtitle?: string;
  title: React.ReactNode;
  description: string;
  primaryBtn: string;
  secondaryBtn: string;
}

export interface AboutContent {
  title: string;
  text: React.ReactNode;
}

export interface ContactContent {
  title: string;
  description: string;
}

export interface PainPoint {
  icon: React.ReactNode;
  text: string;
}

export interface PainPointsContent {
  title: string;
  subtitle: string;
  description: React.ReactNode;
  points: PainPoint[];
}

export interface FoundationItem {
  title: string;
  desc: string;
  icon: React.ReactNode;
  color: string;
  subtitle?: string;
  features?: string[];
}

export type TrackFeature = string | { title: string; desc: string };

export interface TrackItem {
  title: string;
  target: string;
  features: TrackFeature[];
  buttonText: string;
  isPrimary: boolean;
}

export interface ProcessContent {
  foundationsTitle: string;
  foundationsDesc: string;
  foundations: FoundationItem[];
  tracksTitle: string;
  tracksDesc: string;
  tracks: TrackItem[];
}

export interface BusinessTestimonial {
  text: string;
  author: string;
  role: string;
}
