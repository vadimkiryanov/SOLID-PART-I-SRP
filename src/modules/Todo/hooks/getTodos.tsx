import axios from 'axios';
export const getTodos = async () => {
  const res = await axios.get('https://rickandmortyapi.com/api/character');

  return res.data;
};
