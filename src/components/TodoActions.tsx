import React from 'react';
import { useTranslation } from 'react-i18next'

interface TodoActionsProps {
  onMarkAllDone: () => void;
  onMarkAllUndone: () => void;
  onClearCompleted: () => void;
  hasCompletedTodos: boolean;
}

const TodoActions: React.FC<TodoActionsProps> = ({ 
  onMarkAllDone, 
  onMarkAllUndone, 
  onClearCompleted, 
  hasCompletedTodos 
}) => {
  const { t } = useTranslation();
  return (
    <div className="todo-actions">
      <button onClick={onMarkAllDone} className="btn btn-action">
        {t('TodoActions.tsx_button_0')}
      </button>
      <button onClick={onMarkAllUndone} className="btn btn-action">
        {t('TodoActions.tsx_button_1')}
      </button>
      <button 
        onClick={onClearCompleted} 
        className="btn btn-action btn-danger"
        disabled={!hasCompletedTodos}
      >
        {t('TodoActions.tsx_button_2')}
      </button>
    </div>
  );
};

export default TodoActions;