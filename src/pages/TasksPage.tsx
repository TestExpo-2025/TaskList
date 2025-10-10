import React, { useState } from 'react';
import TodoForm from '../components/TodoForm';
import TodoList from '../components/TodoList';
import type { Todo } from '../types';
import { useTranslation } from 'react-i18next'

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
  const { t } = useTranslation();
  const [input, setInput] = useState('');

  const handleAddTodo = () => {
    addTodo(input);
    setInput('');
  };

  return (
    <div className="tasks-page">
      <div className="tasks-header">
        <h1 className="tasks-title">{t('TasksPage.tsx_h1_0')}</h1>
        <p className="tasks-subtitle">{t('TasksPage.tsx_p_0')}</p>
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