import TodoItem from './components/TodoItem';
import {useState, useEffect} from 'react';
import './styles/App.css';

interface TodoItem {
  id: number;
  text: string;
  isDone: boolean;
}

function App() {

  const [taskText, setTaskText] = useState<string>('');
  const [todoItems, setTodoItems] = useState<TodoItem[]>([]);

  const handleChangeInput = (e: React.FormEvent<HTMLInputElement>) => {
    setTaskText(e.currentTarget.value);
  }

  const handleAddTodo = () => {
    if(taskText) {
      setTodoItems([...todoItems, {id: Math.random() * 1234, text: taskText, isDone: false}]);
      setTaskText('');
    }
  }

  const handleDeleteTodo = (id: number) => {
    setTodoItems(todoItems.filter((item) => item.id !== id))
  }

  const handleDoneTodo = (id: number) => {
    setTodoItems(todoItems.filter((item) => {
      if(item.id === id) {
        item.isDone = true;
      }
      return item;
    }))
  }


  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem('todoItems') || '{}');
    if(todos.length > 0) {
      setTodoItems(todos);
    }
  }, [])

  
  useEffect(() => {
    localStorage.setItem('todoItems', JSON.stringify(todoItems));
  }, [todoItems]);

  return (
    <div className='todo-list'>
      <div className='todo-list__inner'>
        <h1 className='todo-list__title'>ToDo List</h1>
        <div className='todo-list__add-item'>
          <input value={taskText} onChange={handleChangeInput} className='todo-list__add-item__input' type='text' placeholder='What do you wanna do?'></input>
          <button onClick={handleAddTodo} className='todo-list__add-item__button'>Add Task</button>
        </div>
        <div className='todo-list__items'>
          {todoItems.map((item) => (<TodoItem key={item.id} id={item.id} text={item.text} handleDoneTodo={handleDoneTodo} isDone={item.isDone} handleDeleteTodo={handleDeleteTodo}/>))}
        </div>
      </div>
    </div>
  )
}

export default App
