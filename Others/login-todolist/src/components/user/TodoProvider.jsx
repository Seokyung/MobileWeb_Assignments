import React, {useState, useMemo, createContext, useContext} from "react";

export const TodoContext = createContext();

function TodoProvider({children}) {
    const [todoList, setTodoList] = useState([]);

    // const actions = useMemo(
    //     () => ({
    //         changeTodoList(e) {
    //             setTodoList(e);
    //         },
    //     }),
    //     []
    // );

    const value = useMemo(() => [todoList, setTodoList]);

    return (
        <TodoContext.Provider value={value}>
            {children}
        </TodoContext.Provider>
    );
}

export function useTodoState() {
    const value = useContext(TodoContext);

    if(value === undefined) {
        throw new Error('useTodoState should be used withn TodoProvider');
    }

    return value;
}

export default TodoProvider;