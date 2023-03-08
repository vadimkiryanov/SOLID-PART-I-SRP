import { useEffect, useState } from 'react';
import { getTodos } from './getTodos';

export const useTodos = () => {
  const [todos, setTodos] = useState<any>([]);

  useEffect(() => {
    getTodos().then((data) => {
        setTodos(data);
    });
  }, []);

  return todos;
};
