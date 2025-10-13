import { Hero } from '../../components/organisms/Hero';
import { About } from '../../components/organisms/About';
import { Projects } from '../../components/organisms/Projects';
import { Footer } from '../../components/organisms/Footer';
import { Experience } from '../../components/organisms/Experience';
import { Certifications } from '../../components/organisms/Certifications';

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
