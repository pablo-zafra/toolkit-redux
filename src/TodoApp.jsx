import { useState } from "react";
import { useGetTodoQuery } from "./store/apis/todosApi"

export const TodoApp = () => {

     const [ todoId, setTodoId ] = useState( 1 );

    const { data: todo, isLoading } = useGetTodoQuery( todoId );
    // console.log( todo );

    const nextTodo = () => {
        setTodoId( todoId + 1 );
    };

    
    const previousTodo = () => {
        todoId > 1 && setTodoId( todoId - 1 );
    };


  return (
    <>
        <h1>Todos - RTK Query</h1>
        <hr />
        <h4>isLoading: { isLoading ? 'true' : 'false' }</h4>

        <pre>{ JSON.stringify( todo ) } </pre>

        {/* <ul>
            {
                todos.map( todo =>
                    <li key={ todo.id }>
                        <strong>{ todo.completed ? 'DONE' : 'Pending' }: </strong>{ todo.title}
                    </li>
                )
            }
        </ul> */}

        {

        }

        <button onClick={ nextTodo }>
            Next Todo
        </button>

        <button onClick={ previousTodo }>
            Previus Todo
        </button>
    </>
  )
}
