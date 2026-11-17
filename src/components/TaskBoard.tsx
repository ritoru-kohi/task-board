import type { Task } from '../types';
import TaskItem from './TaskItem';

interface TaskBoardProps {
  tasks: Task[];
}

function TaskBoard({ tasks }: TaskBoardProps) {
  if (tasks.length === 0) {
    return <p>No Tasks</p>;
  }

  return (
    <ul style={{ padding: 0 }}>
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </ul>
  );
}

export default TaskBoard;