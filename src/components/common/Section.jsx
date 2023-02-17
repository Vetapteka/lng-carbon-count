import React from 'react';

const Section = ({ title, children }) => {
    return (
        <section>
            <h2 style={{ textTransform: 'uppercase', marginBottom: '10px' }}>
                {title}
            </h2>
            {children}
        </section>
    );
};

export default Section;
