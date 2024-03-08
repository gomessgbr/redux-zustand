import {Provider as ReduxProvider} from 'react-redux'
import { AddTodo } from "./components/Addtodo";
import { TodoList } from "./components/TodoList";
import { store } from './store';


export function App() {


  return (
    <ReduxProvider store={store}>
      <div>
        <h1>Hello</h1>
        <TodoList/>
        <AddTodo/>
      </div>
    </ReduxProvider>
  )
}


