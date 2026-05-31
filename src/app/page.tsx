import React from 'react';
import Navbar from '@/components/landing/Navbar';
import Hero from '@/components/landing/Hero';
import Steps from '@/components/landing/Steps';
import WhyClusters from '@/components/landing/WhyClusters';
import WhoItsFor from '@/components/landing/WhoItsFor';
import Features from '@/components/landing/Features';
import Testimonials from '@/components/landing/Testimonials';
import Categories from '@/components/landing/Categories';
import Contact from '@/components/landing/Contact';
import Cta from '@/components/landing/Cta';
import Footer from '@/components/landing/Footer';

export default function CodeClusterLanding() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 antialiased selection:bg-indigo-500 selection:text-white font-sans overflow-x-hidden">
      {/* Floating, side-trimmed nav bar setup 
        Remains locked on screen using CSS sticky/fixed configurations as you scroll 
      */}
      <Navbar />

      {/* Main Assembly Structural Node Blocks */}
      <main>
        <Hero />
        <Steps />
        <WhyClusters />
        <WhoItsFor />
        <Features />
        <Testimonials />
        <Categories />
        <Contact />
        <Cta />
      </main>

      {/* Global Application Footer Component */}
      <Footer />
    </div>
  );
}