import React from 'react';

interface NotFoundPageProps {
  onNavigateHome?: () => void;
}

const NotFoundPage: React.FC<NotFoundPageProps> = ({ onNavigateHome }) => {
  return (
    <div className="container">
      <div className="not-found-container">
        <div className="not-found-content">
          <div className="not-found-icon">🐛</div>
          <h1 className="not-found-title">404</h1>
          <h2 className="not-found-subtitle">Oops! This page seems to be broken...</h2>

          <div className="not-found-message">
            <p>
              Congratulations! You've discovered our hidden 404 page! 🎉
            </p>

          </div>

          <div className="not-found-actions">
            <button
              className="btn btn-primary"
              onClick={onNavigateHome}
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