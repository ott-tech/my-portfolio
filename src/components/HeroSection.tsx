import { ArrowDown } from 'lucide-react'

import './HeroSection.css'

export const HeroSection = () => {
    return (
        <section id="home" className="hero-container">
            <span className="hero-badge">
                Hi, I'm a developer
            </span>
            <h1 className="hero-title">
                Building digital experiences with precision.
            </h1>
            <p className="hero-description">
                Specializing in clean code and modern UI for high-performance applications
            </p>

            <div className="hero-button">
                <button className="hero-primary-button">
                    View Projects <ArrowDown/>
                </button>
            </div>
        </section>
    )
}