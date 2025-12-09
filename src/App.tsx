import { TaskList } from "./components/TaskList/TaskList";
import { TaskFilter } from "./components/TaskFilter/TaskFilter";
import { useState } from "react";
import type { Task, TaskStatus } from "./components/types";

function App() {
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: "1",
      title: "Finish React Lab",
      description: "Complete the Lists, Keys, and Conditionals lab",
      priority: "high",
      dueDate: "2025-12-15",
      status: "in-progress",
    },
    {
      id: "2",
      title: "Buy groceries",
      description: "Milk, eggs, bread",
      priority: "medium",
      dueDate: "2025-12-10",
      status: "pending",
    },
    {
      id: "3",
      title: "Walk the dog",
      description: "Evening walk in the park",
      priority: "low",
      dueDate: "2025-12-08",
      status: "completed",
    },
  ]);

  const [filters, setFilters] = useState<{
    status?: TaskStatus;
    priority?: "low" | "medium" | "high";
  }>({});

  const handleStatusChange = (taskId: string, newStatus: TaskStatus) => {
    setTasks((prevTasks) =>
      prevTasks.map((t) => (t.id === taskId ? { ...t, status: newStatus } : t))
    );
  };

  const handleDelete = (taskId: string) => {
    setTasks((prevTasks) => prevTasks.filter((t) => t.id !== taskId));
  };

  return (
    <div className="p-4 bg-gray-900 min-h-screen">
      {/* Pass a function to update filters */}
      <TaskFilter
        onFilterChange={(newFilters) =>
          setFilters((prev) => ({ ...prev, ...newFilters }))
        }
      />

      {/* Pass the filtered tasks to TaskList */}
      <TaskList
        tasks={tasks.filter((t) => {
          if (filters.status && t.status !== filters.status) return false;
          if (filters.priority && t.priority !== filters.priority) return false;
          return true;
        })}
        onStatusChange={handleStatusChange}
        onDelete={handleDelete}
      />
    </div>
  );
}

export default App;