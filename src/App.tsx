import HomePage from "@components/pages/HomePage";
import TodoList from "@components/pages/TodoList";

function App() {
    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
            <HomePage />
            <TodoList />
        </div>
    );
}

export default App;
