import TodoItem from './components/TodoItem';
import {useState} from 'react';
import './styles/App.css';

interface TodoItem {
  id: number;
  text: string;
}

function App() {

  const [taskText, setTaskText] = useState<string>('');
  const [todoItems, setTodoItems] = useState<TodoItem[]>([]);

  const handleChangeInput = (e: React.FormEvent<HTMLInputElement>) => {
    setTaskText(e.currentTarget.value);
  }

  const handleAddTodo = () => {
    if(taskText) {
      setTodoItems([...todoItems, {id: Math.random() * 1234, text: taskText}]);
      setTaskText('');
    }
  }

  const handleDeleteTodo = (id: number) => {
    setTodoItems(todoItems.filter((item) => item.id !== id))
  }

  return (
    <div className='todo-list'>
      <div className='todo-list__inner'>
        <h1 className='todo-list__title'>ToDo List</h1>
        <div className='todo-list__add-item'>
          <input value={taskText} onChange={handleChangeInput} className='todo-list__add-item__input' type='text' placeholder='What do you wanna do?'></input>
          <button onClick={handleAddTodo} className='todo-list__add-item__button'>Add Task</button>
        </div>
        <div className='todo-list__items'>
          {todoItems.map((item) => (<TodoItem key={item.id} id={item.id} text={item.text} handleDeleteTodo={handleDeleteTodo}/>))}
        </div>
      </div>
    </div>
  )
}

export default App
