import React, { useState } from 'react';
import type { GeneralSettings } from '../types';

const GeneralSettingsPage: React.FC = () => {
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
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        setIsSubmitted(true);
        setTimeout(() => {
            setIsSubmitted(false);
            setFormData({
                language: '',
                timezone: '',
                country: '',
                session: false,
                notifications: false,
                marketing: false,
            });
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
                    <h2>Settings Saved Successfully!</h2>
                    <p></p>
                </div>
            </div>
        );
    }

    return (
        <div className="general-settings-container">
            <form onSubmit={handleSubmit} className="general-settings-form">
                <div className="general-settings-header">
                    <h1 className="general-settings-title">📋 General Settings</h1>
                    <p className="general-settings-subtitle">
                        Please fill in your General Settings below
                    </p>
                </div>

                <div className="form-row">
                    <div className="form-group">
                        <label htmlFor="language" className="form-label">Language</label>
                        <select
                            id="language"
                            name="language"
                            value={formData.language}
                            onChange={handleInputChange}
                            className="form-input"
                        >
                            <option value="">Select Language</option>
                            <option value="english">English</option>
                            <option value="norwegian">Norwegian</option>
                            <option value="swedish">Swedish</option>
                            <option value="danish">Danish</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label htmlFor="country" className="form-label">Country</label>
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
                        <label htmlFor="timezone" className="form-label">Timezone</label>
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
                            Enable Notifications
                        </label>
                    </div>

                    <div className="form-group">
                        <label className="form-label">
                            <input
                                type="checkbox"
                                name="sessionEmails"
                                checked={formData.session}
                                onChange={handleInputChange}
                            />
                            Receive Session Emails
                        </label>
                    </div>

                    <div className="form-group">
                        <label className="form-label">
                            <input
                                type="checkbox"
                                name="marketingEmails"
                                checked={formData.marketing}
                                onChange={handleInputChange}
                            />
                            Receive Marketing Emails
                        </label>
                    </div>
                </div>

                <div className="form-actions">
                    <button
                        type="button"
                        className="btn btn-secondary"
                        onClick={resetForm}
                    >
                        Reset Form
                    </button>
                    <button type="submit" className="btn btn-primary">
                        Save Information
                    </button>
                </div>
            </form>
        </div>
    );
};

export default GeneralSettingsPage;