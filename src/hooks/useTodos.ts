import { useState, useEffect } from 'react';
import type { Todo } from '../types';

const TODOS_STORAGE_KEY = 'todos';

export const useTodos = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  // Load todos from localStorage on mount
  useEffect(() => {
    try {
      const savedTodos = localStorage.getItem(TODOS_STORAGE_KEY);
      if (savedTodos) {
        const parsedTodos = JSON.parse(savedTodos);
        // Convert date strings back to Date objects
        const todosWithDates = parsedTodos.map((todo: Todo & { createdAt: string }) => ({
          ...todo,
          createdAt: new Date(todo.createdAt)
        }));
        setTodos(todosWithDates);
      }
    } catch (error) {
      console.error('Failed to load todos from localStorage:', error);
    }
  }, []);

  // Save todos to localStorage whenever todos change
  useEffect(() => {
    try {
      localStorage.setItem(TODOS_STORAGE_KEY, JSON.stringify(todos));
    } catch (error) {
      console.error('Failed to save todos to localStorage:', error);
    }
  }, [todos]);

  const generateId = (): string => {
    return Date.now().toString() + Math.random().toString(36).substr(2, 9);
  };

  const addTodo = (text: string): void => {
    if (text.trim() === '') return;
    
    const newTodo: Todo = {
      id: generateId(),
      text: text.trim(),
      completed: false,
      createdAt: new Date()
    };
    
    setTodos(prev => [...prev, newTodo]);
  };

  const toggleTodo = (id: string): void => {
    setTodos(prev => 
      prev.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const removeTodo = (id: string): void => {
    setTodos(prev => prev.filter(todo => todo.id !== id));
  };

  const markAllDone = (): void => {
    setTodos(prev => {
      const incompleteTodos = prev.filter(todo => !todo.completed);
      if (incompleteTodos.length <= 1) {
        // If there's only one or no incomplete todos, mark all as done
        return prev.map(todo => ({ ...todo, completed: true }));
      }
      
      // Mark all but the last incomplete todo as completed
      let incompleteCount = 0;
      return prev.map(todo => {
        if (!todo.completed) {
          incompleteCount++;
          if (incompleteCount === incompleteTodos.length) {
            // Keep the last incomplete todo as incomplete
            return todo;
          }
          return { ...todo, completed: true };
        }
        return todo;
      });
    });
  };

  const markAllUndone = (): void => {
    setTodos(prev => prev.map(todo => ({ ...todo, completed: false })));
  };

  const clearCompleted = (): void => {
    setTodos(prev => prev.filter(todo => !todo.completed));
  };

  const completedCount = todos.filter(todo => todo.completed).length;
  const pendingCount = todos.length - completedCount;
  const hasCompletedTodos = completedCount > 0;
  const hasPendingTodos = pendingCount > 0;

  return {
    todos,
    addTodo,
    toggleTodo,
    removeTodo,
    markAllDone,
    markAllUndone,
    clearCompleted,
    completedCount,
    pendingCount,
    hasCompletedTodos,
    hasPendingTodos,
  };
};