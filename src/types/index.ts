export interface ProductSpec {
  dimensions: string;
  thickness: string;
  grade?: string;
  finish?: string;
  warranty: string;
  applications: string[];
  features: string[];
}

export interface ProductItem {
  id: string;
  name: string;
  category: 'Plywood' | 'Laminates' | 'Hardware' | 'Modular';
  categoryLabel: string;
  shortDescription: string;
  tag: string;
  availability: string;
  image: string;
  fallbackGradient: string;
  specs: ProductSpec;
}

export interface GalleryItem {
  id: string;
  title: string;
  category:
    | 'Modular Kitchens'
    | 'Luxury Wardrobes'
    | 'Custom Wooden Furniture'
    | 'Architectural Hardware & Fittings'
    | 'Sofa Fabrics & Upholstery'
    | 'Calibrated Plywood & Core Boards'
    | 'Curtains & High-End Drapes'
    | 'Designer Entrance & Room Doors';
  categoryKey: string;
  description: string;
  image: string;
  specsHighlight: string;
  materialUsed: string;
}

export interface CategoryCard {
  id: string;
  name: string;
  tag: string;
  description: string;
  features: string[];
  image: string;
  categoryKey: 'Plywood' | 'Laminates' | 'Hardware' | 'Modular';
}
