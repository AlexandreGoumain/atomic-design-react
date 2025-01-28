import TodoList from "./TodoList";

export default function HomePage() {
    return (
        <div className="flex flex-col items-center justify-center gap-4">
            <TodoList />
        </div>
    );
}
