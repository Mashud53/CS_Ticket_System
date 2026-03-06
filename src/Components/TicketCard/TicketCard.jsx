import React from 'react';
import calender from '../../assets/icon/calender.png'
import yellow from '../../assets/icon/yellow.png'
import green from '../../assets/icon/green.png'

const TicketCard = ({ticket, addToTaskStatus}) => {
    return (
        <div onClick={()=>{addToTaskStatus(ticket)}} className='shadow-xl p-4 cursor-pointer rounded-xl'>
                    <div className='flex justify-between items-start'>
                        <h2 className='font-bold text-sm w-auto md:max-w-52'>{ticket.problem_title}</h2>
                        <div className={`${ticket.status == "Open" ? "bg-green-300": "bg-yellow-200"} flex items-center px-4 py-1 rounded-full`}>
                           {ticket.status == "Open" ?  <img src={green} alt="" className='w-6 h-6'/>: <img src={yellow} alt="" className='w-6 h-6'/>}
                            <h2 className='text-sm w-full'>{ticket.status}</h2>
                        </div>
                           
                    </div>
                    <div>
                        <p className='text-sm text-gray-700 mt-2'>{ticket.description}</p> 
                    </div>
                    <div className='flex justify-between items-center mt-4 text-xs text-[#627382]'>
                       <div className='flex justify-around items-center gap-4'>
                         <p>{ticket.id}</p>
                        <p className={`${ticket.priority == "High" ? "text-red-500" : `${ticket.priority =="Medium" ? "text-yellow-400" :"text-green-400"}`} uppercase font-semibold text-xs`}>{ticket.priority} Priority</p>
                       </div>
                        <div className='flex items-center gap-2'>
                            <p>{ticket.customer_name}</p>
                        <div className='flex justify-between items-center gap-1'>
                            <img src={calender} alt="date" className='w-4 h-4'/>
                            <p>{ticket.created_date}</p>
                        </div>
                        </div>
                    </div>
                </div>
    );
};

export default TicketCard;