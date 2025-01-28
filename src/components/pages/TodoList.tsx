import Title from "@components/atoms/title";
import {
    useCreateTodoMutation,
    useDeleteTodoMutation,
    useUpdateTodoMutation,
} from "@hooks/mutations";
import { useTodoQuery } from "@hooks/queries";

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

    if (isLoading) return <div>Loading...</div>;
    if (isError) return <div>Error: {error.message}</div>;

    return (
        <div className="flex flex-col gap-4">
            <Title title="Todo List" />
            <button
                onClick={() => refetch()}
                className="bg-blue-500 text-white px-4 py-2 rounded-md"
            >
                Refetch
            </button>
            <ul className="flex flex-col gap-4">
                {data?.data.map((todo: Todo) => (
                    <li
                        key={todo.id}
                        className="flex justify-between items-center"
                    >
                        {todo.title}
                        <div>
                            <button
                                onClick={() =>
                                    updateTodo({
                                        ...todo,
                                        completed: !todo.completed,
                                    })
                                }
                                className="bg-green-500 text-white px-4 py-2 rounded-md"
                            >
                                Update
                            </button>
                            <button
                                onClick={() => deleteTodo(todo.id)}
                                className="bg-red-500 text-white px-4 py-2 rounded-md"
                            >
                                Delete
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
            <div className="flex flex-col gap-4">
                <input type="text" placeholder="Todo" />
                <button
                    onClick={() =>
                        createTodo({
                            title: "New Todo",
                            id: data?.data.length + 1,
                            completed: false,
                        })
                    }
                    className="bg-blue-500 text-white px-4 py-2 rounded-md"
                >
                    Create
                </button>
            </div>
        </div>
    );
}
