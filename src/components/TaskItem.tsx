import type { Task } from '../types';

interface TaskItemProps {
  task: Task;
}

function TaskItem({ task }: TaskItemProps) {
  return (
    <li
      style={{
        padding: '8px 12px',
        marginBottom: '6px',
        border: '1px solid #ccc',
        borderRadius: '6px',
        textDecoration: task.isCompleted ? 'line-through' : 'none',
        color: task.isCompleted ? '#888' : '#000',
        background: task.isCompleted ? '#f5f5f5' : '#fff',
        listStyle: 'none',
      }}
    >
      {task.title}
    </li>
  );
}

export default TaskItem;