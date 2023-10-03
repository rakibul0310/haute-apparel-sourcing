import React from 'react';

const Container = ({children, cls}) => {
    return (
        <div className={`px-6 md:px-12 lg:px-32 ${cls}`}>
            {children}
        </div>
    );
};

export default Container;
