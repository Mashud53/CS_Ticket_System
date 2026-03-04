import React from 'react';

const TicketsContents = () => {
    return (
        <div className='grid cols-1 md:grid-cols-2 lg:grid-cols-3'>
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