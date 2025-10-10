import React from 'react';
import { useTranslation } from 'react-i18next'

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
  const { t } = useTranslation();
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
        {t('TodoForm.tsx_button_0')}
      </button>
    </form>
  );
};

export default TodoForm;