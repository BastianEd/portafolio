import { Hero } from '../../components/organisms/Hero/Hero';
import { About } from '../../components/organisms/About/About';
import { Projects } from '../../components/organisms/Projects/Projects';
import { Footer } from '../../components/organisms/Footer/Footer';
import { Experience } from '../../components/organisms/Experience/Experience';
import { Certifications } from '../../components/organisms/Certifications/Certifications';

export default function Home() {
    return (
        <>
            <Hero />
            <Experience />
            <Certifications />
            <Projects />
            <About />
            <Footer />
        </>
    );
}
