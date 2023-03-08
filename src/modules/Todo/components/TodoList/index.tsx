import React from 'react';
import { ICharacterFullResponse } from '../../types/api';
import TodoItem from '../TodoItem';

interface ITodoList {
  todos: ICharacterFullResponse;
}

const TodoList: React.FC<ITodoList> = ({ todos }) => {
  if (!todos?.results) {
    return <h2>Loading...</h2>;
  }

  return (
    <ul>
      {todos?.results?.map((todoItem, todoIndex) => (
        <TodoItem key={todoIndex} title={todoItem.name} id={todoIndex} />
      ))}
    </ul>
  );
};

export default TodoList;
