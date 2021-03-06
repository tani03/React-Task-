import Header from './components/Header'
import Footer from './components/Footer'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import {useState} from 'react'

import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import MainHeader from './components/MainHeader'
function App() {
  
  const[showAddTask,setShowAddTask] = useState
  (false)

  
  const deleteTask=(id)=>{
    setTasks(tasks.filter((task)=>task.id!==id))
  }


  //toggle reminder
  const toggleReminder=(id)=>{
    setTasks(tasks.map((task)=>task.id==id?{...task,reminder:!task.reminder}:task))
  }

  //Add Task
  const addTask=(task)=>{
    const id=Math.floor(Math.random()*1000)+1
    const newTask={id, ...task}
    setTasks()
 
  }

  const [tasks,setTasks]=useState(
    [
        {
            id:1,
            text: 'Doctors Appointment',
            day:'Feb 5th at 2:30pm',
            reminder:true,
         },
         {
            id:2,
            text: 'Meeting at school',
            day:'Feb 6th at 1:30pm',
            reminder:true,
        },
        {
            id:3,
            text: 'Food Shopping',
            day:'Feb 5th at 2:30pm',
            reminder:true,
        }
     
    ]
  )

  return (

    <div>
      <MainHeader />
      <Header title='Task Tracker' onAdd={()=>setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
      {showAddTask && <AddTask onAdd={addTask}/>}
      {tasks.length>0 ?
        (<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />)
        : (
          'No Tasks to Show'
        )
      }
        
      <Footer />
    </div> 
    
  );
}

export default App;
