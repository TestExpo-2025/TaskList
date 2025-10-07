import React, { useState } from 'react';
import TodoForm from '../components/TodoForm';
import TodoList from '../components/TodoList';
import type { Todo } from '../types';

interface TasksPageProps {
  todos: Todo[];
  addTodo: (text: string) => void;
  toggleTodo: (id: string) => void;
  removeTodo: (id: string) => void;
  markAllDone: () => void;
  markAllUndone: () => void;
  clearCompleted: () => void;
}

const TasksPage: React.FC<TasksPageProps> = ({
  todos,
  addTodo,
  toggleTodo,
  removeTodo,
  markAllDone,
  markAllUndone,
  clearCompleted,
}) => {
  const [input, setInput] = useState('');

  const handleAddTodo = () => {
    addTodo(input);
    setInput('');
  };

  return (
    <div className="tasks-page">
      <div className="tasks-header">
        <h1 className="tasks-title">✅ My Todo List</h1>
        <p className="tasks-subtitle">Manage your tasks efficiently</p>
      </div>
      <TodoForm
        input={input}
        onInputChange={setInput}
        onSubmit={handleAddTodo}
      />
      <TodoList
        todos={todos}
        onToggleTodo={toggleTodo}
        onRemoveTodo={removeTodo}
        onMarkAllDone={markAllDone}
        onMarkAllUndone={markAllUndone}
        onClearCompleted={clearCompleted}
      />
    </div>
  );
};

export default TasksPage;