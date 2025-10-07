import React from 'react';

interface TodoFormProps {
  input: string;
  onInputChange: (value: string) => void;
  onSubmit: () => void;
}

const TodoForm: React.FC<TodoFormProps> = ({ input, onInputChange, onSubmit }) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <form onSubmit={handleSubmit} className="input-section">
      <input
        type="text"
        value={input}
        onChange={e => onInputChange(e.target.value)}
        placeholder="What needs to be done?"
        className="todo-input"
        onKeyDown={e => e.key === 'Enter' && onSubmit()}
      />
      <button type="submit" className="btn btn-primary">
        Add Todo
      </button>
    </form>
  );
};

export default TodoForm;