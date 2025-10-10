import React, { useRef, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

interface NotFoundPageProps {
  onNavigateHome?: () => void;
}

const NotFoundPage: React.FC<NotFoundPageProps> = ({ onNavigateHome }) => {
  const {t} = useTranslation();
  const containerRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [position, setPosition] = useState({ top: 100, left: 220 });

  const goCrazy = () => {
    if (containerRef.current && buttonRef.current) {
      const container = containerRef.current;
      const button = buttonRef.current;

      const maxLeft = container.clientWidth - button.clientWidth;
      const maxTop = container.clientHeight - button.clientHeight;

      const offsetLeft = Math.random() * maxLeft;
      const offsetTop = Math.random() * maxTop;

      setPosition({ top: offsetTop, left: offsetLeft });
    }
  };

  useEffect(() => {
    const button = buttonRef.current;
    if (button) {
      button.addEventListener('mouseenter', goCrazy);
    }
    return () => {
      if (button) {
        button.removeEventListener('mouseenter', goCrazy);
      }
    };
  }, []);

  return (
    <div className="container">
      <div className="not-found-container">
        <div className="not-found-content">
          <div className="not-found-icon">🐛</div>
          <h1 className="not-found-title">404</h1>
          <h2 className="not-found-subtitle">{t('NotFoundPage.tsx_h2_0')}</h2>

          <div className="not-found-message">
            <p>{t('NotFoundPage.tsx_p_0')}</p>
          </div>

          <div
            className="not-found-actions"
            ref={containerRef}
            style={{
              position: 'relative',
              width: '100%',
              height: '200px', // Adjust as needed
              overflow: 'hidden',
              marginTop: '2rem',
            }}
          >
            <button
              ref={buttonRef}
              className="btn btn-primary"
              onClick={onNavigateHome}
              style={{
                position: 'absolute',
                top: position.top,
                left: position.left,
                transition: 'top 0.3s, left 0.3s',
              }}
            >
              {t('NotFoundPage.tsx_button_0')}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;