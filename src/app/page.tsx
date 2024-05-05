import Hero from '@/components/hero';
import Footer from '@/components/footer';
import TopBanner from '@/components/topbanner.tsx';
import DarkCTA from '@/components/darkcta.tsx';
import CustomerLogos from '@/components/customerlogos.tsx';
import LargeFeature from '@/components/LargeFeature.tsx';
import FeatureLeft from '@/components/FeatureLeft.tsx';
import FeatureRight from '@/components/FeatureRight.tsx';
import FeatureList from '@/components/FeatureList.tsx';
import SteppedStats from '@/components/SteppedStats.tsx';
import Nav from '@/components/nav.tsx';


export const metadata = {
  title: 'Blue | Simple Online Project Management', // Custom page title
  description: 'Learn more about our company and our mission.', // Custom page description
};

export default function HomePage() {
  return (
    <div>
    <TopBanner /> 
    <Nav /> 
      <Hero
        title="The project management system your team will actually use."
        subtitle="Blue is simple and powerful —so you finally have everything in one organised place."
        ctaText="Get started"
        ctaLink="#"
        isNewRelease={true}
        newReleaseText="Just shipped v1.0"
        newReleaseLink="#"
        screenshotSrc="https://tailwindui.com/img/component-images/project-app-screenshot.png"
        screenshotAlt="App screenshot"
      />
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