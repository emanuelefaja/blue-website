import Nav from '@/components/nav';
import Hero from '@/components/hero';
import Footer from '@/components/footer';
import DarkCTA from '@/components/darkcta.tsx';
import CustomerLogos from '@/components/customerlogos.tsx';
import LargeFeature from '@/components/LargeFeature.tsx';
import FeatureLeft from '@/components/FeatureLeft.tsx';
import FeatureRight from '@/components/FeatureRight.tsx';
import FeatureList from '@/components/FeatureList.tsx';
import SteppedStats from '@/components/SteppedStats.tsx';
import HeroAbout from '@/components/HeroAbout.tsx';


export const metadata = {
  title: 'Blue | Simple Online Project Management', // Custom page title
  description: 'Learn more about our company and our mission.', // Custom page description
};

export default function HomePage() {
  return (
    <div>
    <Nav />
    <HeroAbout />
    <CustomerLogos />
    <SteppedStats />
    <LargeFeature />
    <DarkCTA />
    <FeatureRight />
    <FeatureLeft />
    <FeatureRight />
    <FeatureList />
    <DarkCTA />
    <Footer />
    </div>
  );
}