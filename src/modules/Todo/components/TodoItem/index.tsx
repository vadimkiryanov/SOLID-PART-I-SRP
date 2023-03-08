import React from 'react';

interface ITodoItem {
  title: string;
  id: number;
}

const TodoItem: React.FC<ITodoItem> = ({ title, id }) => {
  return <li>{`Имя персонажа: ${title} его id:${id}`}</li>;
};

export default TodoItem;
