import React, { useState } from 'react';
import { Navbar } from './components/Navbar.tsx';
import { Hero } from './components/Hero.tsx';
import { AboutSection } from './components/AboutSection.tsx';
import { CategoriesSection } from './components/CategoriesSection.tsx';
import { FeaturedProductsSection } from './components/FeaturedProductsSection.tsx';
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

  const handleCategoryExplore = (catKey: 'Plywood' | 'Laminates' | 'Hardware' | 'Modular') => {
    setSelectedCatalogCategory(catKey);
    const targetElement = document.getElementById('products');
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#14161B] selection:bg-[#EADBBE] selection:text-[#5E3B14] flex flex-col font-sans">
      {/* 3-Zone Navigation Header with Top Status Ticker */}
      <Navbar onOpenQuote={() => handleOpenQuote()} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Visual Hero */}
        <Hero onOpenQuote={() => handleOpenQuote()} />

        {/* Editorial About Showroom */}
        <AboutSection onOpenQuote={() => handleOpenQuote()} />

        {/* 4 Primary Categories */}
        <CategoriesSection
          onSelectCategory={handleCategoryExplore}
          onOpenQuoteWithCategory={(cat) => handleOpenQuote('', cat)}
        />

        {/* Curated Products Catalog */}
        <FeaturedProductsSection
          selectedCategory={selectedCatalogCategory}
          onSelectCategory={setSelectedCatalogCategory}
          onSelectProductForDetail={(prod) => setSelectedProduct(prod)}
          onOpenQuoteWithProduct={(prodName, cat) => handleOpenQuote(prodName, cat)}
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
