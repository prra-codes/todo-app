export function Header(props) {
  const { todos } = props;

  const todosLength = todos.length;

  const isTasksPlurals = todos.length != 1;

  const tasksOrTasks = isTasksPlurals ? 'tasks' : 'task';

  return (
    <header className="text-gradient">
      You have {todosLength} open {tasksOrTasks}.
    </header>
  );
}
