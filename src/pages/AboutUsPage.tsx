import React from 'react';

interface AboutUsPageProps {
    onNavigateToNotFound?: () => void;
}

const AboutUsPage: React.FC<AboutUsPageProps> = ({ onNavigateToNotFound }) => {
    return (
        <div className="about-us">
            <div className="about-content">
                <div className="about-hero">
                    <h1 className="about-title">About Our Application</h1>
                    <p className="about-subtitle">
                        Building better digital experiences together
                    </p>
                </div>

                <div className="about-section">
                    <h2>Our Purpose</h2>
                    <p>
                        We are dedicated to creating innovative digital solutions that make
                        everyday tasks simpler and more efficient. Our focus is on delivering
                        user-friendly applications that enhance productivity and provide
                        exceptional user experiences.
                    </p>
                </div>

                <div className="about-features">
                    <h2>What We Offer</h2>
                    <div className="features-grid">
                        <div className="feature-card">
                            <div className="feature-icon">✨</div>
                            <h3>Modern Design</h3>
                            <p>Contemporary, user-centered interface design principles</p>
                        </div>
                        <div className="feature-card">
                            <div className="feature-icon">⚡</div>
                            <h3>High Performance</h3>
                            <p>Optimized applications built with cutting-edge technology</p>
                        </div>
                        <div className="feature-card">
                            <div className="feature-icon">📱</div>
                            <h3>Cross-Platform</h3>
                            <p>Seamless experience across all devices and platforms</p>
                        </div>
                    </div>
                </div>

                <div className="about-cta">
                    <h2>Interested in learning more?</h2>
                    <p>Explore additional information about our services and solutions.</p>
                    <button
                        className="btn btn-primary"
                        onClick={onNavigateToNotFound}
                    >
                        Read more
                    </button>
                </div>

            </div>
        </div>
    );
};

export default AboutUsPage;