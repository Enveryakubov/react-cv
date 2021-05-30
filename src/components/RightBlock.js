import React from 'react'
import {motion} from "framer-motion"

const RightBlock = () => {
    return (
        <div className="rightBlock">
            <motion.div
                initial={{x: "100vw"}}
                animate = {{x:0}}
                transition={{ type: "spring", stiffness: 50, delay:1.5}} 
            >
                <h6>Profile</h6>
                <p>Active and passionate professional, always striving to learn something new and progress. </p>
            </motion.div>
            <motion.div
                initial={{x:-200, opacity:0}}
                animate={{x:0, opacity:1}}
                transition={{ type: "spring", stiffness: 50, delay:1.5}}
            >
                <h6>Employment History</h6>
                <p><b>English Language Instructor, METU NCC, Northern Cypruss, Morfu</b></p>
                <p className="muted">May, 2005 - Jun, 2006</p>
                <ul>
                    <li>Teaching English to beginners groups</li>
                </ul>
            </motion.div>
            <div className="effect">
                <p><b>Beginner`s Group Coordinator, METU NCC, Northern Cypruss, Morfu</b></p>
                <p className="muted">Jun, 2006 - Jun, 2008</p>
                <ul>
                    <li>Teaching Academic Writing to freshmen</li>
                    <li>Coordinating Teaching Process of Beginners group</li>
                    <li>Holding weekly meetings to analyze the learning process</li>
                </ul>
            </div>
            
            <div className="effect">
                <p><b>Regional Site Rental Manager, Huawei Ukraine, Simferpol</b></p>
                <p className="muted">Sep, 2009 - Aug, 2010</p>
                <ul>
                    <li>Conducting weekly meetings with subconstructors </li>
                    <li>Controlling site rental issues in the Crimean region</li>
                </ul>
            </div>

            <div className="effect">
                <p><b>Developing Local Tourism in Crimea, Crimea, Sudak</b></p>
                <p className="muted">May, 2011 - May, 2015</p>
                <ul>
                    <li>Running my own guest house</li>
                </ul>
            </div>

            <div className="effect">
                <p><b>Head of Booking Office, Pansionat "Massandra", Crimea, Yalta</b></p>
                <p className="muted">Feb, 2015 - Oct, 2017</p>
                <ul>
                    <li>Developing online booking system of the hotel </li>
                    <li>Automation and optimization of routine tasks </li>
                </ul> 
            </div>
            
            <div className="effect">
                <p><b>Enjoying Life, Crimea, Simferopol</b></p>
                <p className="muted">2018 - 2021</p>
                <ul>
                    <li>Improving my Python and Javascript expertise</li>
                    <li>Doing personal projects on web development</li>
                </ul>
            </div>

            <div className="effect">
                <h6>Education</h6>
                <p><b>High School, Tankovoye Boarding School for gifted students, Crimea, Bahchesaray</b></p>
                <p className="muted">Sep, 1994 - May, 2000</p>
                <p className="small">Graduated as an <em>honour student</em>. Active participant of Maths and English Language olympiads.</p>
                
                <p><b>Profeciency in Turkish Language, Turkish Language Center (TOMER), Turkey, Bursa</b></p>
                <p className="muted">Sep, 2000 - May, 2001</p>
                <p className="small">Graduated as an <em>honour student.</em></p>

                <p><b>Bachelor Degree, Middle East Technical University, Turkey, Ankara</b></p>
                <p className="muted">Sep, 2001 - May, 2005</p>
                <p className="small">Graduated from department of education, faculty of English Language Teaching as an <em>honour student.</em></p>
            </div>
        </div>
    )
}

export default RightBlock
