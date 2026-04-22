import Topbar from '@/components/Topbar';
import Navbar from '@/components/Navbar';
import VideoHero from '@/components/VideoHero';
import FeatureStrip from '@/components/FeatureStrip';
import CategoryGrid from '@/components/CategoryGrid';
import Marquee from '@/components/Marquee';
import TrendingProducts from '@/components/TrendingProducts';
import AboutSection from '@/components/AboutSection';
import BrandStrip from '@/components/BrandStrip';
import Newsletter from '@/components/Newsletter';
import Footer from '@/components/Footer';

export default function HomePage() {
  return (
    <>
      <Topbar />
      <Navbar />
      <VideoHero />
      <FeatureStrip />
      <CategoryGrid />
      <Marquee />
      <TrendingProducts />
      <AboutSection />
      <BrandStrip />
      <Newsletter />
      <Footer />
    </>
  );
}
