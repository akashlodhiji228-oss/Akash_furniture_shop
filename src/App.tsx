import React, { useState } from 'react';
import { Navbar } from './components/Navbar.tsx';
import { Hero } from './components/Hero.tsx';
import { AboutSection } from './components/AboutSection.tsx';
import { ServicesSection } from './components/ServicesSection.tsx';
import { CompleteSolutionBanner } from './components/CompleteSolutionBanner.tsx';
import { FurnitureWorkSection } from './components/FurnitureWorkSection.tsx';
import { FeaturedProductsSection } from './components/FeaturedProductsSection.tsx';
import { CompleteRangeSection } from './components/CompleteRangeSection.tsx';
import { WhyChooseUsSection } from './components/WhyChooseUsSection.tsx';
import { GallerySection } from './components/GallerySection.tsx';
import { HowWeHelpSection } from './components/HowWeHelpSection.tsx';
import { ContactSection } from './components/ContactSection.tsx';
import { Footer } from './components/Footer.tsx';
import { ProductDetailModal } from './components/ProductDetailModal.tsx';
import { QuoteModal } from './components/QuoteModal.tsx';
import { FloatingWhatsApp } from './components/FloatingWhatsApp.tsx';
import { ProductItem } from './types/index.ts';

export default function App() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [quoteProduct, setQuoteProduct] = useState('');
  const [quoteCategory, setQuoteCategory] = useState('');
  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(null);
  const [selectedCatalogCategory, setSelectedCatalogCategory] = useState('All');

  const handleOpenQuote = (productName = '', category = '') => {
    setQuoteProduct(productName);
    setQuoteCategory(category);
    setIsQuoteOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#14161B] selection:bg-[#EADBBE] selection:text-[#5E3B14] flex flex-col font-sans">
      {/* 3-Zone Navigation Header with Top Status Ticker */}
      <Navbar onOpenQuote={() => handleOpenQuote()} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Visual Hero */}
        <Hero onOpenQuote={() => handleOpenQuote()} />

        {/* Editorial About Showroom: From Material to Finished Furniture */}
        <AboutSection onOpenQuote={() => handleOpenQuote()} />

        {/* 10 Services / Products Compact Grid (Master Prompt Requirement 2) */}
        <ServicesSection
          onOpenQuoteWithCategory={(cat) => handleOpenQuote('', cat)}
        />

        {/* "Everything You Need. Under One Roof." (Master Prompt Requirement 3) */}
        <CompleteSolutionBanner onOpenQuote={() => handleOpenQuote()} />

        {/* Dedicated Custom Furniture & Woodwork (Master Prompt Requirement 4) */}
        <FurnitureWorkSection
          onOpenQuoteWithCategory={(cat) => handleOpenQuote('', cat)}
        />

        {/* Curated Products Catalog */}
        <FeaturedProductsSection
          selectedCategory={selectedCatalogCategory}
          onSelectCategory={setSelectedCatalogCategory}
          onSelectProductForDetail={(prod) => setSelectedProduct(prod)}
          onOpenQuoteWithProduct={(prodName, cat) => handleOpenQuote(prodName, cat)}
        />

        {/* 19-Category Complete Product Spectrum & Materials Directory */}
        <CompleteRangeSection
          onOpenQuoteWithCategory={(cat) => handleOpenQuote('', cat)}
        />

        {/* 8-Category Architectural Gallery & Texture Explorer */}
        <GallerySection
          onOpenQuote={() => handleOpenQuote()}
          onOpenQuoteWithProduct={(prodName, cat) => handleOpenQuote(prodName, cat)}
        />

        {/* The AKASH Advantage */}
        <WhyChooseUsSection onOpenQuote={() => handleOpenQuote()} />

        {/* 4-Step Process & CTA Banner */}
        <HowWeHelpSection onOpenQuote={() => handleOpenQuote()} />

        {/* Showroom Contact, Map & Direct Inquiries */}
        <ContactSection />
      </main>

      {/* Comprehensive Footer */}
      <Footer />

      {/* Quick Specs Modal */}
      <ProductDetailModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onOpenQuoteWithProduct={(prodName, cat) => handleOpenQuote(prodName, cat)}
      />

      {/* Interactive Custom Quote Modal */}
      <QuoteModal
        isOpen={isQuoteOpen}
        onClose={() => setIsQuoteOpen(false)}
        initialProduct={quoteProduct}
        initialCategory={quoteCategory}
      />

      {/* Floating WhatsApp Quick Action Button */}
      <FloatingWhatsApp onOpenQuote={() => handleOpenQuote()} />
    </div>
  );
}
