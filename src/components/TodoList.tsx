import React from 'react';
import type { Todo } from '../types';
import TodoItem from './TodoItem';
import TodoActions from './TodoActions';

interface TodoListProps {
  todos: Todo[];
  onToggleTodo: (id: string) => void;
  onRemoveTodo: (id: string) => void;
  onMarkAllDone: () => void;
  onMarkAllUndone: () => void;
  onClearCompleted: () => void;
}

const TodoList: React.FC<TodoListProps> = ({
  todos,
  onToggleTodo,
  onRemoveTodo,
  onMarkAllDone,
  onMarkAllUndone,
  onClearCompleted
}) => {
  const completedTodosCount = todos.filter(todo => todo.completed).length;
  const remainingTodosCount = todos.length - completedTodosCount;
  const hasCompletedTodos = completedTodosCount > 0;

  if (todos.length === 0) {
    return (
      <div className="empty-state">
        <p>No todos yet. Add one above! 🚀</p>
      </div>
    );
  }

  return (
    <>
      <TodoActions
        onMarkAllDone={onMarkAllDone}
        onMarkAllUndone={onMarkAllUndone}
        onClearCompleted={onClearCompleted}
        hasCompletedTodos={hasCompletedTodos}
      />
      <ul className="todo-list">
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggle={onToggleTodo}
            onRemove={onRemoveTodo}
          />
        ))}
      </ul>
      <div className="stats">
        <span>{remainingTodosCount} of {todos.length} todos remaining</span>
      </div>
    </>
  );
};

export default TodoList;