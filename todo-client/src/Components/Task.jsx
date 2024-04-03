import {useState} from "react";

function Task({ task }) {
    const [isChecked, setIsChecked] = useState(false)
    const handleIsChecked = ()=>{
        setIsChecked(v=>!v)
    }
    
  return (
    <ul>
      <li>
        <div>
          <input type='checkbox' className='scale-125' checked={isChecked} onChange={handleIsChecked} />
          <span className={`${isChecked ? 'line-through': ""} ml-2`}>{task.taskName}</span>
        </div>
      </li>
    </ul>
  );
}

export default Task;
