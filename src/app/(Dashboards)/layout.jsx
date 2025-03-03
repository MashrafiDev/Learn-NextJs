import React from 'react';

const dashboardLayout = ({ children }) => {
    return (
        <div className='grid grid-cols-12'>
            <div className='grid-cols-3'>
                ui list
            </div>
            <div className='grid-cols-9'>{children}dashboardLayout</div>
        </div>
    );
};

export default dashboardLayout;