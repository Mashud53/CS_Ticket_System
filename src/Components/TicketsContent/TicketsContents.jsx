import React, { use } from 'react';

const TicketsContents = ({ticketsPromise}) => {
    const ticketData= use(ticketsPromise)
    console.log(ticketData)
    return (
        <div className='grid cols-1 md:grid-cols-2 lg:grid-cols-3 px-2 lg:px-10 '>
            <div className='lg:col-span-2'>
                <h2>Customer Tickets</h2>

            </div>
            <div className='lg:col-span-1'>
                <h2>Task Status</h2>

            </div>
        </div>
    );
};

export default TicketsContents;