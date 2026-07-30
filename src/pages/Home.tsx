import { HeroSection } from '../components/HeroSection';
import { ProjectsGrid } from '../components/ProjectsGrid';
import { ContactSection } from './Contact';

export function Home() {
    return (
        <div className="home-page">
            <HeroSection />
            <ProjectsGrid />
            <ContactSection />
        </div>
    )
}