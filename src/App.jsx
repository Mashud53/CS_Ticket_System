
import { Suspense } from "react"
import Banner from "./Components/Banner/Banner"
import Footer from "./Components/Footer/Footer"
import Navbar from "./Components/Navbar/Navbar"
import TicketsContents from "./Components/TicketsContent/TicketsContents"

const fetchData = async ()=>{
  const res= await fetch('/tickets.json')
  return res.json()
}
const ticketsPromise = fetchData()
function App() {
  

  return (
    <div className="">
      <Navbar/>
      <Banner/>
      <Suspense fallback={<div className="flex items-center justify-center"><span className="loading loading-bars loading-xl "></span></div>}>
        <TicketsContents ticketsPromise={ticketsPromise}/>
      </Suspense>
      <Footer/>
    </div>
  )
}

export default App
