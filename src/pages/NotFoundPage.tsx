import React, { useRef, useEffect, useState } from 'react';

interface NotFoundPageProps {
  onNavigateHome?: () => void;
}

const NotFoundPage: React.FC<NotFoundPageProps> = ({ onNavigateHome }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [position, setPosition] = useState({ top: 3, left: 3 });

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
          <h2 className="not-found-subtitle">Oops! This page seems to be broken...</h2>

          <div className="not-found-message">
            <p>Congratulations! You've discovered our hidden 404 page! 🎉</p>
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
              🏠 Take Me Home
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;