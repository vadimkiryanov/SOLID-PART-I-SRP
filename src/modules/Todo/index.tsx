import React from 'react';
import TodoList from './components/TodoList';
import { useTodos } from './hooks/useTodos';

const TodoModule: React.FC = () => {
  const todos = useTodos();
  console.log(todos);

  return (
    <div>
      <h1 className="text-lg font-bold uppercase ">My todo</h1>
      <TodoList todos={todos} />
    </div>
  );
};

export default TodoModule;
