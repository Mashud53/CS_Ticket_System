
import { Suspense, useState } from "react"
import Banner from "./Components/Banner/Banner"
import Footer from "./Components/Footer/Footer"
import Navbar from "./Components/Navbar/Navbar"
import TicketsContents from "./Components/TicketsContent/TicketsContents"
import Swal from "sweetalert2"

const fetchData = async () => {
  const res = await fetch('/tickets.json')
  return res.json()
}
const ticketsPromise = fetchData()
function App() {
  const [taskStatus, setTaskStatus] = useState([])
  const [taskResolved, setTaskResolved] = useState([])

  const addToTaskStatus = (ticket) => {
    const addToTask = [...taskStatus, ticket]
    setTaskStatus(addToTask)
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Your issue Submitted",
      showConfirmButton: false,
      timer: 1500
    });

  }

  const handleResolve = (task) => {
    const resolvedTaskes = [...taskResolved, task]
    setTaskResolved(resolvedTaskes)
    const resolvedTask = taskStatus.filter(tasks => tasks.id !== task.id)
    setTaskStatus(resolvedTask)
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Your issue Resolved",
      showConfirmButton: false,
      timer: 1500
    });


  }



  return (
    <div className="">
      <Navbar />
      <Banner taskStatus={taskStatus}
        taskResolved={taskResolved} />
      <Suspense fallback={<div className="flex items-center justify-center"><span className="loading loading-bars loading-xl "></span></div>}>
        <TicketsContents
          ticketsPromise={ticketsPromise}
          addToTaskStatus={addToTaskStatus}
          taskStatus={taskStatus}
          handleResolve={handleResolve}
          taskResolved={taskResolved}
        />
      </Suspense>
      <Footer />
    </div>
  )
}

export default App
