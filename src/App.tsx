import TaskBoard from './components/TaskBoard';
import type { Task } from './types';

const tasks: Task[] = [
  { id: 1, title: 'Изучить JSX', isCompleted: true },
  { id: 2, title: 'Разобраться с props', isCompleted: true },
  { id: 3, title: 'Сделать условный рендеринг', isCompleted: false },
  { id: 4, title: 'Сдать задание 1.4', isCompleted: false },
];

// Для проверки пустого состояния раскомментируй:
// const tasks: Task[] = [];

function App() {
  return (
    <div style={{ maxWidth: 500, margin: '40px auto', fontFamily: 'sans-serif' }}>
      <h1>Task Board</h1>
      <TaskBoard tasks={tasks} />
    </div>
  );
}

export default App;