
import React, { use } from 'react';
import TicketCard from '../TicketCard/TicketCard';

const TicketsContents = ({ticketsPromise}) => {
    const ticketData= use(ticketsPromise)
    console.log(ticketData)
    return (
        <div className='grid cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-2 lg:px-10 mb-12 '>
            <div className='lg:col-span-2'>
                <h2 className='text-2xl font-semibold mb-8'>Customer Tickets</h2>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                  {
                    ticketData.map(ticket =><TicketCard ticket={ticket} key={ticket.id}></TicketCard>)
                }
              </div>
                

            </div>
            <div className='lg:col-span-1'>
                <div>
                    <h2 className='text-2xl font-semibold'>Task Status</h2>
                    <p>Select a ticket to add Task Status </p>
                </div>
                <div className='mt-8'>
                    <h2 className='text-2xl font-semibold'>Resolved Task</h2>
                    <p>No resolved task yet.</p>
                </div>

            </div>
        </div>
    );
};

export default TicketsContents;