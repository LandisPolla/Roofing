
import PageLayout from '@/components/PageLayout';
import RoofingHero from '@/components/RoofingHero';
import RoofingAbout from '@/components/RoofingAbout';
import RoofingServices from '@/components/RoofingServices';
import RoofingTestimonials from '@/components/RoofingTestimonials';
import RoofingMap from '@/components/RoofingMap';
import RoofingContact from '@/components/RoofingContact';
import SEO from '@/components/SEO';

const Index = () => {
  return (
    <PageLayout showContact={false}>
      <SEO 
        title="Storm Line Roofing Stantonbury - 24/7 Emergency Roofing Services" 
        description="Professional roofing services in Milton Keynes. From emergency leak repairs to complete roof installations. ⭐ 5.0 rated ⭐ Call 01908 966122"
        imageUrl="/lovable-uploads/52b73825-b41a-4013-a32a-70cd763acb1f.png"
        keywords={['roofing services', 'roof repairs', 'Milton Keynes roofers', 'emergency roof repair', 'Stantonbury roofing', 'roof replacement', 'gutter repairs']}
      />
      <RoofingHero />
      <div id="about">
        <RoofingAbout />
      </div>
      <RoofingServices />
      <div id="testimonials">
        <RoofingTestimonials />
      </div>
      <RoofingMap />
      <RoofingContact />
    </PageLayout>
  );
};

export default Index;
