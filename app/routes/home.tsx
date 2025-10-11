import { Hero } from '../../components/organisms/Hero';
import { About } from '../../components/organisms/About';
import { Projects } from '../../components/organisms/Projects';
import { Footer } from '../../components/organisms/Footer';
import { Experience } from '../../components/organisms/Experience';

export default function Home() {
    return (
        <>
            <Hero />
            <Experience />
            <Projects />
            <About />
            <Footer />
        </>
    );
}
