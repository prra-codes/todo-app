import { useState } from 'react';

export function TodoInput(props) {
  const { handleAddTodo } = props;
  const [inputValue, setInputValue] = useState('');
  return (
    <div className="input-container">
      <input placeholder="Add task" />
      <button onClick={() => {}}>
        <i className="fa-solid fa-plus"></i>
      </button>
    </div>
  );
}
