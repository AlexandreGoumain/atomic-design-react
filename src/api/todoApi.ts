import { Todo } from "@types";
import axios from "axios";

const API_URL = "https://jsonplaceholder.typicode.com/todos";

export const todoApi = async () => {
    const response = await axios.get(API_URL);
    return response;
};

export const createTodo = async (todo: Todo) => {
    const response = await axios.post(API_URL, todo);
    console.log(response.data);
    return response;
};

export const deleteTodo = async (id: number) => {
    const response = await axios.delete(`${API_URL}/${id}`);
    return response;
};

export const updateTodo = async (todo: Todo) => {
    const response = await axios.put(`${API_URL}/${todo.id}`, todo);
    return response;
};
