import React, { useState } from 'react';
import { students } from '../json-file/StudentResult';
const StudentResult = () => {
    const [rolnumber, setrolnumber] = useState('')
    const [student, setstudent] = useState(null)
    const [searched, setSearched] = useState(false);

    const searchresult = () => {
        const result = students.find(s => s.rollno === Number(rolnumber));
        setstudent(result );
        setSearched(true)
    }
    return (
        <>
            <section>
                <div className='rslt-container' >
                    <div style={{ textAlign: 'center', padding: "20px 0" }}>
                        <h1>Student Examination Results</h1>
                        <p style={{ padding: '20px' }}>View your latest examination results and track your academic performance. <br />
                            Stay updated with your scores and progress throughout the semester.</p>
                    </div>
                    <div className='rslt-inputbox'>
                        <div>
                            <input type='number' value={rolnumber} onChange={(e) => { setrolnumber(e.target.value) }} placeholder='ENter Roll NO.' />
                            <button type='search' onClick={searchresult}>Search Result </button>
                        </div>
                    </div>
                        {student && (
                         <div className='result'>
                            <table
                                style={{
                                    borderCollapse: "collapse",
                                    width: "60%",
                                    margin: "20px auto",
                                    textAlign: "center",
                                }}
                            >
                                <caption style={{ fontSize: "20px", fontWeight: "bold", marginBottom: "10px" }}>
                                    Student Result
                                </caption>

                                <tbody>
                                    <tr>
                                        <td style={{ border: "1px solid black", padding: "10px" }}>University</td>
                                        <td style={{ border: "1px solid black", padding: "10px" }}>XYZ University</td>
                                    </tr>

                                    <tr>
                                        <td style={{ border: "1px solid black", padding: "10px" }}>Name</td>
                                        <td style={{ border: "1px solid black", padding: "10px" }}>{student.name}</td>
                                    </tr>

                                    <tr>
                                        <td style={{ border: "1px solid black", padding: "10px" }}>Roll No.</td>
                                        <td style={{ border: "1px solid black", padding: "10px" }}>{student.rollno}</td>
                                    </tr>

                                    <tr>
                                        <td style={{ border: "1px solid black", padding: "10px" }}>Math</td>
                                        <td style={{ border: "1px solid black", padding: "10px" }}>{student.subjects.Math}</td>
                                    </tr>

                                    <tr>
                                        <td style={{ border: "1px solid black", padding: "10px" }}>Physics</td>
                                        <td style={{ border: "1px solid black", padding: "10px" }}>{student.subjects.Physics}</td>
                                    </tr>

                                    <tr>
                                        <td style={{ border: "1px solid black", padding: "10px" }}>Chemistry</td>
                                        <td style={{ border: "1px solid black", padding: "10px" }}>{student.subjects.Chemistry}</td>
                                    </tr>

                                    <tr>
                                        <td style={{ border: "1px solid black", padding: "10px" }}>English</td>
                                        <td style={{ border: "1px solid black", padding: "10px" }}>{student.subjects.English}</td>
                                    </tr>

                                    <tr>
                                        <td style={{ border: "1px solid black", padding: "10px" }}>Computer</td>
                                        <td style={{ border: "1px solid black", padding: "10px" }}>{student.subjects.Computer}</td>
                                    </tr>

                                    <tr>
                                        <td style={{ border: "1px solid black", padding: "10px" }}>Hindi</td>
                                        <td style={{ border: "1px solid black", padding: "10px" }}>{student.subjects.Hindi}</td>
                                    </tr>

                                    <tr>
                                        <td style={{ border: "1px solid black", padding: "10px", fontWeight: "bold" }}>Total Marks</td>
                                        <td style={{ border: "1px solid black", padding: "10px" }}>{student.total_marks}</td>
                                    </tr>

                                    <tr>
                                        <td style={{ border: "1px solid black", padding: "10px", fontWeight: "bold" }}>Percentage</td>
                                        <td style={{ border: "1px solid black", padding: "10px" }}>{student.percentage}%</td>
                                    </tr>
                                </tbody>
                            </table>
                            </div>
                        )}

                        {!student && searched && (
                            <p style={{textAlign :'center'}}>No student found for roll number {rolnumber}.</p>
                        )}
                </div>

                <p style={{padding : '20px'}}>Note: The demo roll numbers provided here start from 1 up to 100. So, when searching for a roll number, ensure it falls within this range.</p>
            </section>
        </>
    );
};

export default StudentResult;