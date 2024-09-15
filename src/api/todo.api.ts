import axios from 'axios';

export const todoApi = {
  getTodoList: () => {
    return axios.get('https://jsonplaceholder.typicode.com/todos');
  },
};
