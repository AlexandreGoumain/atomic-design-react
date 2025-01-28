import Button from "@components/atoms/button";
import DeleteButton from "@components/atoms/button/DeleteButton";
import UpdateButton from "@components/atoms/button/UpdateButton";
import Title from "@components/atoms/title";
import {
    useCreateTodoMutation,
    useDeleteTodoMutation,
    useUpdateTodoMutation,
} from "@hooks/mutations";
import { useTodoQuery } from "@hooks/queries";
import { Status } from "@types";
import { useState } from "react";

interface Todo {
    id: number;
    title: string;
    completed?: boolean;
}

export default function TodoList() {
    const { data, isLoading, isError, error, refetch } = useTodoQuery();
    const { mutate: createTodo } = useCreateTodoMutation();
    const { mutate: deleteTodo } = useDeleteTodoMutation();
    const { mutate: updateTodo } = useUpdateTodoMutation();

    const [status, setStatus] = useState<Status>({ value: 1, label: "Todo" });
    const [newTodoTitle, setNewTodoTitle] = useState("");

    if (isLoading) return <div>Loading...</div>;
    if (isError) return <div>Error: {error.message}</div>;

    return (
        <div className="flex flex-col gap-4">
            <Title title="Todo List" />
            <Button label="Refetch" onClick={() => refetch()} />

            <hr />
            <Title title="Create Todo" />
            <hr />

            <div className="flex flex-col gap-4 bg-gray-100 p-4 rounded-md">
                <input
                    type="text"
                    placeholder="Todo"
                    value={newTodoTitle}
                    onChange={(e) => setNewTodoTitle(e.target.value)}
                />
                <select
                    value={status.value}
                    onChange={(e) =>
                        setStatus({
                            value: Number(e.target.value),
                            label: e.target.options[e.target.selectedIndex]
                                .text,
                        })
                    }
                >
                    <option value="1">Todo</option>
                    <option value="2">In Progress</option>
                    <option value="3">Done</option>
                </select>
                <Button
                    label="Create"
                    onClick={() => {
                        if (newTodoTitle.trim()) {
                            createTodo({
                                title: newTodoTitle,
                                id: data?.data.length + 1,
                                status: status,
                            });
                            setNewTodoTitle("");
                        }
                    }}
                />
            </div>

            <ul className="flex flex-col gap-4">
                {data?.data.map((todo: Todo) => (
                    <li
                        key={todo.id}
                        className="flex justify-between items-center"
                    >
                        <div className="flex flex-col gap-2">
                            <div>{todo.title}</div>
                            <div>{todo.completed ? "Done" : "Not Done"}</div>
                        </div>

                        <div className="flex gap-2">
                            <UpdateButton
                                onClick={() =>
                                    updateTodo({
                                        ...todo,
                                        status: status,
                                    })
                                }
                                label="Update"
                            />
                            <DeleteButton
                                onClick={() => deleteTodo(todo.id)}
                                label="Delete"
                            />
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}
