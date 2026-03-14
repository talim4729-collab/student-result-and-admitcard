import React, { useState } from 'react';
import { studentadmitcard } from '../json-file/Studentadmitcard';
import  admitcardphoto  from '../assets/admitcard.png'
const StudentACard = () => {
    const [rolnumber, setrolnumber] = useState('')
    const [student, setstudent] = useState(null)
    const [searched, setSearched] = useState(false);

    const searchresult = () => {
        const result = studentadmitcard.find(s => s.rollno === Number(rolnumber));
        setstudent(result);
        setSearched(true)
    }
    return (
        <>
            <section>
                <div className='rslt-container' >
                    <div style={{ textAlign: 'center', padding: "20px 0" }}>
                        <h1>XYZ University</h1>
                        <h2>Examination Admit Card</h2>
                        <p>Session 2025 - 2026</p>
                    </div>
                    <div className='rslt-inputbox'>
                        <div>
                            <input type='number' value={rolnumber} onChange={(e) => { setrolnumber(e.target.value) }} placeholder='ENter Roll NO.' />
                            <button type='search' onClick={searchresult}>Search Admit Card </button>
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
                                <caption style={{ fontSize: "20px", fontWeight: "bold", marginBottom: "10px", alignItems : 'center' }}>
                                    Admit Card
                                </caption>

                                <tbody>
                                    
                                    <tr>
                                        <td style={{ border: "1px solid black", padding: "10px" }}><span> <img height="50px" src={admitcardphoto} /></span> </td>
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
                                        <td style={{ border: "1px solid black", padding: "10px" }}>Father Name</td>
                                        <td style={{ border: "1px solid black", padding: "10px" }}>{student.father}</td>
                                    </tr>

                                    <tr>
                                        <td style={{ border: "1px solid black", padding: "10px" }}>course</td>
                                        <td style={{ border: "1px solid black", padding: "10px" }}>B.Sc</td>
                                    </tr>

                                    <tr>
                                        <td style={{ border: "1px solid black", padding: "10px" }}>semester</td>
                                        <td style={{ border: "1px solid black", padding: "10px" }}>{student.semester}</td>
                                    </tr>

                                    <tr>
                                        <td style={{ border: "1px solid black", padding: "10px" }}>exam center</td>
                                        <td style={{ border: "1px solid black", padding: "10px" }}>xyz collage, jaipur</td>
                                    </tr>

                                    <tr>
                                        <td style={{ border: "1px solid black", padding: "10px" }}>subjects</td>
                                        <td style={{ border: "1px solid black", padding: "10px" }}>Mathematics, Physics, Chemistry, English, Computer Science, Hindi </td>
                                    </tr>

                                    <tr>
                                        <td style={{ border: "1px solid black", padding: "10px" }}>exam_date:</td>
                                        <td style={{ border: "1px solid black", padding: "10px" }}>15 May 2026</td>
                                    </tr>

                                    <tr>
                                        <td style={{ border: "1px solid black", padding: "10px", fontWeight: "bold" }}>Signature</td>
                                        <td style={{ border: "1px solid black", padding: "10px" }}>{student.name}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    )}

                    {!student && searched && (
                        <p style={{ textAlign: 'center' }}>No student found for roll number {rolnumber}.</p>
                    )}
                </div>

                <p style={{ padding: '20px' }}>Note: The demo roll numbers provided here start from 1 up to 100. So, when searching for a roll number, ensure it falls within this range.</p>
            </section>
        </>
    );
};

export default StudentACard;