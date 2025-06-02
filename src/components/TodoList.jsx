import { TodoCard } from './TodoCard';

export function TodoList(props) {
  const { todos, selectedTab, handleDeleteTodo } = props;

  const filterTodoList =
    selectedTab === 'All'
      ? todos
      : selectedTab === 'Completed'
      ? todos.filter((val) => val.complete)
      : todos.filter((val) => !val.complete);

  // If the tab is "All", assign all the todos to filterTodoList

  // If the tab is "Completed", assign only the completed todos to filterTodoList (i.e. where complete = true)

  // If the tab is "Open" assign only the todos that aren't completed yet to filterTodolist (i.e. where complete = false)
  return (
    <>
      {filterTodoList.map((todo, todoIndex) => {
        return (
          <TodoCard
            key={todoIndex}
            todoIndex={todos.findIndex((val) => val.input === todo.input)}
            todo={todo}
            {...props}
          />
        );
      })}
    </>
  );
}
