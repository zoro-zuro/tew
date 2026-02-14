import Hero from '../components/Hero';
import AboutSection from '../components/AboutSection';
import CapabilitiesSection from '../components/Services';
import Testimonials from '../components/Testimonials';
import ContactSection from '../components/ContactSection';
import FAQSection from '../components/FAQSection';
import NextStepSection from '../components/NextStepSection';

const Home = () => {
    return (
        <div className='w-full'>
            <Hero />
            <AboutSection />
            <CapabilitiesSection />
            <Testimonials />
            <ContactSection />
            <FAQSection />
            <NextStepSection /></div>
    )
}

export default Home