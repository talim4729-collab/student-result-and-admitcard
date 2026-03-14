import React from 'react';
import { Link } from 'react-router-dom';

const Bannar = () => {
    return (
        <>
            <div className='top-bannar'>
                <div className='heading'>
                    <h1>Welcome to Student Dashboard</h1>
                    <p>Access your courses, assignments, and results in one place. <br />
                        Stay updated with your academic progress and important announcements.
                    </p>
                    <div className='student-service'>
                        <Link to='result'> Student Result </Link>
                        <span>  OR </span>
                        <Link to='admitcard'> Student Admit Card </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Bannar;