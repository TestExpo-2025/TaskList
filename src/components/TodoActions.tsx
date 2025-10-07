import React from 'react';

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
  return (
    <div className="todo-actions">
      <button onClick={onMarkAllDone} className="btn btn-action">
        ✅ Mark All Done
      </button>
      <button onClick={onMarkAllUndone} className="btn btn-action">
        🔄 Mark All Undone
      </button>
      <button 
        onClick={onClearCompleted} 
        className="btn btn-action btn-danger"
        disabled={!hasCompletedTodos}
      >
        🗑️ Clear Completed
      </button>
    </div>
  );
};

export default TodoActions;