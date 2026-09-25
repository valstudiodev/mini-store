import HeroImage from "@/assets/img/home/hero-image.webp";
import SaleImage from "@/assets/img/home/sale-image.webp";

interface HeroImageProps {
  title?: string;
  imageUrl?: string;
}

export const heroImages: HeroImageProps[] = [
  {
    title: 'smart-watch',
    imageUrl: HeroImage
  },
  {
    title: 'iphones',
    imageUrl: SaleImage
  }
]