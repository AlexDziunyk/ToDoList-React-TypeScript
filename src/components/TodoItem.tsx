import {useState} from 'react';
import { RxCross2 } from "react-icons/rx";
import { RxCheck } from "react-icons/rx";
import '../styles/TodoItem.css';

interface ToDoItemProps {
  id: number;
  text: string;
  handleDeleteTodo: (id:number) => void;
}

function TodoItem({id, text, handleDeleteTodo}: ToDoItemProps) {

  const [isTodoDone, setIsTodoDone] = useState<boolean>(false);

  const handleDoneTodo = () => {
    setIsTodoDone(!isTodoDone);
  }

  return (
    <div className={`todo-item ${isTodoDone ? 'todo-item_done' : ''}`}>
      <p className={`todo-item__text ${isTodoDone ? 'todo-item__text_done' : ''}`}>{text}</p>
      <div className="todo-item__buttons">
        <button onClick={handleDoneTodo} className="todo-item__button todo-item__button_done">
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

