export function Tabs(props) {
  const { todos } = props;
  const tabs = ['All', 'Open', 'Completed'];

  return (
    <nav className="tab-container">
      {tabs.map((tab, tabIndex) => {
        const numOfTasks =
          tab === 'All'
            ? todos.length
            : tab === 'Open'
            ? todos.filter((val) => !val.complete).length
            : todos.filter((val) => val.complete).length;

        // If the tab is equal to All, we get the length of the entire todos

        // If the tab is equal to open, we check all the todos where complete is false (i.e. the task is open) and get the length (number of tasks that aren't complete)

        // If the tab is equal to complete, we check all the todos where complete is true (i.e. the task is complete) and get the length (number of tasks that aren complete)

        return (
          <button key={tabIndex} className="tab-button">
            <h4>
              {tab} <span>{numOfTasks}</span>
            </h4>
          </button>
        );
      })}
    </nav>
  );
}
