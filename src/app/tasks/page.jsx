import AddTask from "@/components/AddTask";
import TasksCard from "@/components/TasksCard";
import { getTasks } from "@/lib/tasks";


const TasksPage = async() => {
    const tasks = await getTasks();
    return (
        <div className="container mx-auto">
            <h2>Tasks: {tasks.length}</h2>
            <AddTask></AddTask>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-10"> 
                {
                    tasks.map(task => <TasksCard key={task.id} task={task}></TasksCard>)
                }
            </div>
        </div>
    );
};

export default TasksPage;