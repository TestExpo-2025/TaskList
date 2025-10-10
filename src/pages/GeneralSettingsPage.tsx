import React, { useState, useEffect } from 'react';
import type { GeneralSettings } from '../types';
import { useTranslation } from 'react-i18next';
import { setLocalization } from '../hooks/useLocalization';

const GeneralSettingsPage: React.FC = () => {
    const { t } = useTranslation();
    const [formData, setFormData] = useState<GeneralSettings>({
        language: '',
        timezone: '',
        country: '',
        session: false,
        notifications: false,
        marketing: false,
    });

    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, type } = e.target;
        const value = type === 'checkbox' ? (e.target as HTMLInputElement).checked : e.target.value;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };
    useEffect(() => { setLocalization(formData.language); }, [formData.language]);
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        setIsSubmitted(true);
        setTimeout(() => {
            setIsSubmitted(false);
            // Clear the buggy URL when resetting
            window.history.pushState({}, '', '/general-settings');
        }, 3000);
    };

    const resetForm = () => {
        setFormData({
            language: '',
            timezone: '',
            country: '',
            session: false,
            notifications: false,
            marketing: false,
        });
    };

    if (isSubmitted) {
        return (
            <div className="general-settings-container">
                <div className="success-message">
                    <div className="success-icon">✓</div>
                    <h2>{t('GeneralSettingsPage.tsx_h2_0')}</h2>
                    <p></p>
                </div>
            </div>
        );
    }

    return (
        <div className="general-settings-container">
            <form onSubmit={handleSubmit} className="general-settings-form">
                <div className="general-settings-header">
                    <h1 className="general-settings-title">{t('GeneralSettingsPage.tsx_h1_0')}</h1>
                    <p className="general-settings-subtitle">
                        {t('GeneralSettingsPage.tsx_p_1')}
                    </p>
                </div>

                <div className="form-row">
                    <div className="form-group">
                        <label htmlFor="language" className="form-label">{t('GeneralSettingsPage.tsx_label_0')}</label>
                        <select
                            id="language"
                            name="language"
                            value={formData.language}
                            onChange={handleInputChange}
                            className="form-input"
                        >
                            <option value="">Select Language</option>
                            <option value="en">English</option>
                            <option value="no">Norwegian</option>
                            <option value="se">Swedish</option>
                            <option value="da">Danish</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label htmlFor="country" className="form-label">{t('GeneralSettingsPage.tsx_label_1')}</label>
                        <select
                            id="country"
                            name="country"
                            value={formData.country}
                            onChange={handleInputChange}
                            className="form-input"
                        >
                            <option value="">Select Country</option>
                            <option value="sweden">Sweden</option>
                            <option value="norway">Norway</option>
                            <option value="denmark">Denmark</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label htmlFor="timezone" className="form-label">{t('GeneralSettingsPage.tsx_label_2')}</label>
                        <select
                            id="timezone"
                            name="timezone"
                            value={formData.timezone}
                            onChange={handleInputChange}
                            className="form-input"
                        >
                            <option value="">Select Timezone</option>
                            <option value="Europe/Stockholm">Europe/Stockholm (Sweden)</option>
                            <option value="Europe/Oslo">Europe/Oslo (Norway)</option>
                            <option value="Europe/Copenhagen">Europe/Copenhagen (Denmark)</option>
                        </select>
                    </div>
                </div>

                <div className="form-row">
                    <div className="form-group">
                        <label className="form-label">
                            <input
                                type="checkbox"
                                name="notifications"
                                checked={formData.notifications}
                                onChange={handleInputChange}
                            />
                            {t('GeneralSettingsPage.tsx_label_3')}
                        </label>
                    </div>

                    <div className="form-group">
                        <label className="form-label">
                            <input
                                type="checkbox"
                                name="session"
                                checked={formData.session}
                                onChange={handleInputChange}
                            />
                            {t('GeneralSettingsPage.tsx_label_4')}
                        </label>
                    </div>

                    <div className="form-group">
                        <label className="form-label">
                            <input
                                type="checkbox"
                                name="marketing"
                                checked={formData.marketing}
                                onChange={handleInputChange}
                            />
                            {t('GeneralSettingsPage.tsx_label_5')}
                        </label>
                    </div>
                </div>

                <div className="form-actions" style={{ justifyContent: "space-between" }}>
                    <button
                        type="button"
                        className="btn btn-secondary"
                        onClick={resetForm}
                    >
                        {t('GeneralSettingsPage.tsx_button_0')}
                    </button>
                    <button type="submit" className="btn btn-primary" style={{ "color": "#006699" }}>
                        {t('GeneralSettingsPage.tsx_button_1')}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default GeneralSettingsPage;