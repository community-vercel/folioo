'use client';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useState } from 'react';
import Link from 'next/link';

const applications = [
  {
    title: 'Image Recognition',
    description: 'Identify objects, people, and patterns in salesforce with AI, transforming industries like retail, healthcare, and manufacturing.',
    image: '/salesforce/Detection-351x241.webp',
  },
  {
    title: 'Video Analytics',
    description: 'Enhance security with real-time detection of behaviors and anomalies in video feeds for smarter surveillance.',
    image: '/salesforce/Video-Analytics_-351x241.webp',
  },
  {
    title: 'Object Tracking',
    description: 'Track and count objects like vehicles or people in high-quality video, ideal for smart cities and logistics.',
    image: '/salesforce/Object-Detection-Tracking-and-Labeling_-351x241.webp',
  },
  {
    title: 'Brand Exposure Tracking',
    description: 'Measure ROI by tracking brand visibility in sports events or media using advanced vision models.',
    image: '/salesforce/Sponsorship-and-ROI-Tracking-526x360.webp',
  },
  {
    title: 'Solar Panel Inspection',
    description: 'Detect faults in solar panels using AI-powered drone footage, boosting efficiency and sustainability.',
    image: '/salesforce/Solar-panel-Inspection-2-526x360.webp',
  },
  {
    title: 'License Plate Recognition',
    description: 'Automate traffic and parking management with AI-driven license plate recognition using OCR technology.',
    image: '/salesforce/ALPR-526x360.webp',
  },
  {
    title: 'Logo Detection',
    description: 'Quantify brand presence in media and commercials with real-time logo recognition across video streams.',
    image: '/salesforce/Logo-Detection-526x360.webp',
  },
  {
    title: 'Visual Quality Inspection',
    description: 'Identify defects in manufacturing with AI vision models, ensuring precision and quality control.',
    image: '/salesforce/AI-Visual-Inspection-351x240.webp',
  },
  {
    title: 'Facial Analysis',
    description: 'Analyze faces for identity, sentiment, or demographics, enabling personalized experiences in security and marketing.',
    image: '/salesforce/Face-Detecrtion-526x360.webp',
  },
  {
    title: 'Food Monitoring',
    description: 'Track food for conservation or agriculture with AI vision, supporting sustainable management.',
    image: '/salesforce/shutterstock_1804460152-510x240.png',
  },
  {
    title: 'Drone Infrastructure Inspection',
    description: 'Inspect bridges, towers, and pipelines with AI-powered drones for enhanced safety and accuracy.',
    image: '/salesforce/AI-Drone-Inspection-526x360.webp',
  },
  {
    title: 'Activity Monitoring',
    description: 'Improve safety and efficiency by tracking human or machine activities in workplaces or sports.',
    image: '/salesforce/activity-detectionn-351x240.png',
  },
];

export default function ComputerVisionApplications() {
  const [isHovered, setIsHovered] = useState(false);

  // Select a subset of applications for the featured slider
  const featuredApps = applications.slice(0, 6);

  return (
    <section className="relative bg-gradient-to-b from-gray-50 to-white py-20 px-6 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-400 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl animate-pulse"></div>
      </div>

      <div className="max-w-6xl mx-auto text-center relative z-10">
        {/* Header */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600 animate-fade-in">
          Revolutionize Industries with AI Vision
        </h2>
        <p className="mt-4 text-lg text-gray-600 max-w-6xl mx-auto animate-fade-in delay-100">
          Discover how our advanced computer vision applications drive innovation across sectors, from healthcare to smart cities.
        </p>


       
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
          {applications.map((app, index) => (
            <div
              key={index}
              className="relative bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-t-2xl"></div>
              <div className="relative w-full h-32 mb-4 rounded-lg overflow-hidden">
                <Image
                  src={app.image}
                  alt={app.title}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{app.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{app.description}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 animate-slide-in">
          <Link href='/contact'>
          <button
            className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            Launch Your Vision Project
          </button>
          </Link>
        </div>
      </div>
    </section>
  )}