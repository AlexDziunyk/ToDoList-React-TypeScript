import {useState} from 'react';
import { RxCross2 } from "react-icons/rx";
import { RxCheck } from "react-icons/rx";
import '../styles/TodoItem.css';

interface ToDoItemProps {
  id: number;
  text: string;
  handleDeleteTodo: (id:number) => void;
  handleDoneTodo: (id: number) => void;
  isDone: boolean;
}

function TodoItem({id, text, handleDoneTodo, handleDeleteTodo, isDone}: ToDoItemProps) {

  const [isTodoDone, setIsTodoDone] = useState<boolean>(isDone);

  const handleDoneTodoLocal = () => {
    setIsTodoDone(!isTodoDone);
    handleDoneTodo(id)
  }

  return (
    <div className={`todo-item ${isTodoDone ? 'todo-item_done' : ''}`}>
      <p className={`todo-item__text ${isTodoDone ? 'todo-item__text_done' : ''}`}>{text}</p>
      <div className="todo-item__buttons">
        <button onClick={handleDoneTodoLocal} className="todo-item__button todo-item__button_done">
          <RxCheck size={25} />
        </button>
        <button onClick={() => handleDeleteTodo(id)} className="todo-item__button todo-item__button_delete">
          <RxCross2 size={25} />
        </button>
      </div>
    </div>
  )
}

export default TodoItem;

