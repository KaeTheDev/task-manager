import { TaskFilter } from "./components/TaskFilter/TaskFilter";
import { TaskItem } from "./components/TaskItem/TaskItem";
import type { Task, TaskStatus } from "./components/types";

function App() {
  const mockTask: Task = {
    id: "1",
    title: "Finish React Lab",
    description: "Complete the Lists, Keys, and Conditionals lab",
    priority: "high",
    dueDate: "2025-12-15",
    status: "in-progress" as TaskStatus,
  };

  const handleFilterChange = (filters: {
    status?: TaskStatus;
    priority?: "low" | "medium" | "high";
  }) => {
    console.log("Filter changed:", filters);
  };

  return (
    <>
      {/* <h2 className="text-2xl text-blue-500">KaeTheDev is the GREATEST!</h2> */}
      <TaskFilter onFilterChange={handleFilterChange} />


      <TaskItem
        task={mockTask}
        onStatusChange={(id, status) =>
          console.log("Status changed:", id, status)
        }
        onDelete={(id) => console.log("Task deleted:", id)}
      />

   
    </>
  );
}

export default App;
