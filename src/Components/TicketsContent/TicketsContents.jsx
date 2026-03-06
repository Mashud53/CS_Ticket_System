
import React, { use } from 'react';
import TicketCard from '../TicketCard/TicketCard';

const TicketsContents = ({ ticketsPromise, addToTaskStatus, taskStatus, handleResolve, taskResolved }) => {
    const ticketData = use(ticketsPromise)

    return (
        <div className='grid cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-2 lg:px-10 mb-12 '>
            <div className='lg:col-span-2'>
                <h2 className='text-xl font-semibold mb-8'>Customer Tickets</h2>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                    {
                        ticketData.map(ticket => <TicketCard ticket={ticket} key={ticket.id} addToTaskStatus={addToTaskStatus}></TicketCard>)
                    }
                </div>


            </div>
            <div className='lg:col-span-1'>
                <div>
                    <h2 className='text-xl font-semibold'>Task Status</h2>
                    <div className=' mt-8'>
                        {
                            taskStatus.length>0 ? <> {taskStatus.map(task => <div className='shadow-lg p-4 mb-4 rounded-xl' key={task.id}>
                                <h2 className='text-base font-bold'>{task.problem_title}</h2>
                                <button onClick={()=>{handleResolve(task)}} className='w-full mt-4 bg-green-600 py-2 rounded-lg text-white text-lg cursor-pointer'>Complete</button>
                            </div>) }
                            </>: <p>Select a ticket to add Task Status </p>
                        }
                       
                    </div>

                </div>
                <div className='mt-8'>
                    <h2 className='text-xl font-semibold'>Resolved Task</h2>
                    <div className=' mt-8'>
                        {
                            taskResolved.length>0 ? <> {taskResolved.map(task => <div className='shadow-lg p-4 mb-4  rounded-xl bg-[#E0E7FF]' key={task.id}>
                                <h2 className='text-base font-bold'>{task.problem_title}</h2>
                               
                            </div>) }
                            </>: <p>No resolved task yet.</p>
                        }
                       
                    </div>
                    
                </div>

            </div>
        </div>
    );
};

export default TicketsContents;