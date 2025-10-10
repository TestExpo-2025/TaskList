import React from 'react';
import { useTranslation } from 'react-i18next';

interface AboutUsPageProps {
    onNavigateToNotFound?: () => void;
}

const AboutUsPage: React.FC<AboutUsPageProps> = ({ onNavigateToNotFound }) => {
    const {t} = useTranslation();
    return (
        <div className="about-us">
            <div className="about-content">
                <div className="about-hero">
                    <h1 className="about-title">{t('AboutUsPage.tsx_h1_0')}</h1>
                    <p className="about-subtitle">
                        {t('AboutUsPage.tsx_p_0')}
                    </p>
                </div>

                <div className="about-section">
                    <h2>{t('AboutUsPage.tsx_h2_0')}</h2>
                    <p>
                        {t('AboutUsPage.tsx_p_1')}
                    </p>
                </div>

                <div className="about-features">
                    <h2>{t('AboutUsPage.tsx_h2_1')}</h2>
                    <div className="features-grid">
                        <div className="feature-card">
                            <div className="feature-icon">✨</div>
                            <h3>{t('AboutUsPage.tsx_h3_0')}</h3>
                            <p>{t('AboutUsPage.tsx_p_2')}</p>
                        </div>
                        <div className="feature-card">
                            <div className="feature-icon">⚡</div>
                            <h3>{t('AboutUsPage.tsx_h3_1')}</h3>
                            <p>{t('AboutUsPage.tsx_p_3')}</p>
                        </div>
                        <div className="feature-card">
                            <div className="feature-icon">📱</div>
                            <h3>{t('AboutUsPage.tsx_h3_2')}</h3>
                            <p>{t('AboutUsPage.tsx_p_4')}</p>
                        </div>
                    </div>
                </div>

                <div className="about-cta">
                    <h2>{t('AboutUsPage.tsx_h2_2')}</h2>
                    <p>{t('AboutUsPage.tsx_p_5')}</p>
                    <button
                        className="btn btn-go"
                        onClick={onNavigateToNotFound}
                    >
                        {t('AboutUsPage.tsx_button_0')}
                    </button>
                </div>

            </div>
        </div>
    );
};

export default AboutUsPage;