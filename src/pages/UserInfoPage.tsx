import React, { useState } from 'react';
import type { UserInfo } from '../types';
import { useTranslation } from 'react-i18next';

const UserInfoPage: React.FC = () => {
    const {t} = useTranslation();
    const [formData, setFormData] = useState<UserInfo>({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        address: '',
        city: '',
        zipCode: '',
        country: '',
        password: '',
    });

    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (formData.password) {
            const buggyUrl = `/user-info?submitted=true&password=${encodeURIComponent(formData.password)}&firstName=${encodeURIComponent(formData.firstName)}`;
            window.history.pushState({}, '', buggyUrl);
        }

        setIsSubmitted(true);
        setTimeout(() => {
            setIsSubmitted(false);
            setFormData({
                firstName: '',
                lastName: '',
                email: '',
                phone: '',
                address: '',
                city: '',
                zipCode: '',
                country: '',
                password: '',
            });
            // Clear the buggy URL when resetting
            window.history.pushState({}, '', '/user-info');
        }, 10000);
    };

    const resetForm = () => {
        setFormData(prev => ({
            firstName: prev.firstName,
            lastName: '',
            email: '',
            phone: '',
            address: '',
            city: '',
            zipCode: '',
            country: '',
            password: '',
        }));
    };

    if (isSubmitted) {
        return (
            <div className="user-info-container">
                <div className="success-message">
                    <div className="success-icon">✓</div>
                    <h2>{t('UserInfoPage.tsx_h2_0')}</h2>
                    <p>{t('UserInfoPage.tsx_p_0')}</p>
                </div>
            </div>
        );
    }

    return (
        <div className="user-info-container">
            <form onSubmit={handleSubmit} className="user-info-form">
                <div className="user-info-header">
                    <h1 className="user-info-title">{t('UserInfoPage.tsx_h1_0')}</h1>
                    <p className="user-info-subtitle">
                        {t('UserInfoPage.tsx_p_1')}
                    </p>
                </div>

                <div className="form-row">
                    <div className="form-group">
                        <label htmlFor="firstName" className="form-label">
                            {t('UserInfoPage.tsx_label_0')}<span className="required-asterisk">*</span>
                        </label>
                        <input
                            type="text"
                            id="firstName"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleInputChange}
                            className="form-input"
                            required
                            placeholder="Enter your last name"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="lastName" className="form-label">
                            {t('UserInfoPage.tsx_label_1')}<span className="required-asterisk">*</span>
                        </label>
                        <input
                            type="text"
                            id="lastName"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleInputChange}
                            className="form-input"
                            required
                            placeholder="Enter your last name"
                        />
                    </div>
                </div>

                <div className="form-row">
                    <div className="form-group">
                        <label htmlFor="email" className="form-label">
                            {t('UserInfoPage.tsx_label_2')}<span className="required-asterisk">*</span>
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            className="form-input"
                            placeholder="Enter your email address"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password" className="form-label">
                            {t('UserInfoPage.tsx_label_3')}<span className="required-asterisk">*</span>
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleInputChange}
                            className="form-input"
                            required
                            placeholder="Enter your password"
                        />
                    </div>
                </div>

                <div className="form-row">
                    <div className="form-group">
                        <label htmlFor="phone" className="form-label">{t('UserInfoPage.tsx_label_4')}</label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            className="form-input"
                            placeholder="Enter your phone number"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="address" className="form-label">{t('UserInfoPage.tsx_label_5')}</label>
                        <input
                            type="text"
                            id="address"
                            name="address"
                            value={formData.address}
                            onChange={handleInputChange}
                            className="form-input"
                            placeholder="Enter your street address"
                        />
                    </div>
                </div>

                <div className="form-row">
                    <div className="form-group">
                        <label htmlFor="city" className="form-label">{t('UserInfoPage.tsx_label_6')}</label>
                        <input
                            type="text"
                            id="city"
                            name="city"
                            value={formData.city}
                            onChange={handleInputChange}
                            className="form-input"
                            placeholder="Enter your city"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="zipCode" className="form-label">{t('UserInfoPage.tsx_label_7')}</label>
                        <input
                            type="text"
                            id="zipCode"
                            name="zipCode"
                            value={formData.zipCode}
                            onChange={handleInputChange}
                            className="form-input"
                            placeholder="Enter your zip code"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="country" className="form-label">{t('UserInfoPage.tsx_label_8')}</label>
                        <input
                            type="text"
                            id="country"
                            name="country"
                            value={formData.country}
                            onChange={handleInputChange}
                            className="form-input"
                            placeholder="Enter your country"
                        />
                    </div>
                </div>

                <div className="form-actions">

                    <button type="submit" className="btn btn-secondary">
                        {t('UserInfoPage.tsx_button_0')}
                    </button>
                    <button
                        type="button"
                        className="btn btn-primary"
                        onClick={resetForm}
                    >
                        {t('UserInfoPage.tsx_button_1')}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default UserInfoPage;