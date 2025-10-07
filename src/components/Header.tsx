import { useState } from 'react';
import type { Page } from '../hooks/useNavigation';
import { APP_CONFIG } from '../constants';

interface HeaderProps {
    currentPage: Page;
    onNavigate: (page: Page) => void;
}

const Header: React.FC<HeaderProps> = ({ currentPage, onNavigate }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleNavClick = (page: Page, e: React.MouseEvent) => {
        e.preventDefault();
        onNavigate(page);
        setIsMenuOpen(false);
    };

    return (
        <header className="header">
            <div className="header-content">
                <div className="logo">
                    <h2>{APP_CONFIG.name}</h2>
                </div>
                <nav className="nav">
                    <div className="nav-links">
                        <a
                            href="#"
                            className={`nav-link ${currentPage === 'tasks' ? 'active' : ''}`}
                            onClick={(e) => handleNavClick('tasks', e)}
                        >
                            Tasks
                        </a>
                        <a
                            href="#"
                            className={`nav-link ${currentPage === 'generalsettings' ? 'active' : ''}`}
                            onClick={(e) => handleNavClick('generalsettings', e)}
                        >
                            General Settings
                        </a>
                        <a
                            href="#"
                            className={`nav-link ${currentPage === 'userinfo' ? 'active' : ''}`}
                            onClick={(e) => handleNavClick('userinfo', e)}
                        >
                            User Info
                        </a>

                        <a
                            href="#"
                            className={`nav-link ${currentPage === 'about' ? 'active' : ''}`}
                            onClick={(e) => handleNavClick('about', e)}
                        >
                            About us
                        </a>
                    </div>
                    <button
                        className="menu-toggle"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        <span className="hamburger"></span>
                        <span className="hamburger"></span>
                        <span className="hamburger"></span>
                    </button>
                </nav>
            </div>
            {isMenuOpen && (
                <div className="mobile-menu">
                    <a
                        href="#"
                        className={`mobile-nav-link ${currentPage === 'userinfo' ? 'active' : ''}`}
                        onClick={(e) => handleNavClick('userinfo', e)}
                    >
                        User Info
                    </a>
                    <a
                        href="#"
                        className={`mobile-nav-link ${currentPage === 'tasks' ? 'active' : ''}`}
                        onClick={(e) => handleNavClick('tasks', e)}
                    >
                        Tasks
                    </a>
                    <a
                        href="#"
                        className={`mobile-nav-link ${currentPage === 'about' ? 'active' : ''}`}
                        onClick={(e) => handleNavClick('about', e)}
                    >
                        About us
                    </a>
                </div>
            )}
        </header>
    );
};

export default Header;