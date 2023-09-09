import Header from "../../components/Header";
import TodoForm from "./contents/TodoForm";
import TodoList from "./contents/TodoList";

const Todo = () => (
    <>
        <Header title='TodoList App' />
        <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-4">
            <TodoForm />
            <TodoList />
        </div>
    </>
)

export default Todo;