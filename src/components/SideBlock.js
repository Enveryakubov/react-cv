import React from 'react'
import {motion} from "framer-motion"

const SideBlock = () => {
    return (
        <motion.div className="sideBlock"
            initial = {{opacity:0}}
            animate = {{ opacity: 1}}
            transition = {{ duration:2}}
        >
            <div style={{display:"flex", justifyContent:"center", alignItems:"center", paddingTop:"5vh", flexDirection:"column"}}>
                <motion.img 
                initial= {{scale:0}}
                animate={{scale:1}}
                transition = {{delay:1, duration:1}}
                src="./images/myPhoto.jpg" alt="myPhoto"/>
                <div style={{ borderBottom:"0.5px solid grey"}}>
                    <h6>Enver Yakubov</h6>
                </div>
                <p style={{textTransform:"uppercase"}}>Web developer</p>
            </div>
            <div className="details">
                <h6>Details</h6>
                <p>Kechkemetskaya str, 85</p>
                <p>Simferopol, 295022</p>
                <p>Russian Federation</p>
                <p><a type="tel" href="tel:+79788040343" style={{textDecoration:"none"}}>+79788040343</a></p>
                <p><a href="mailto:enveryakubov@gmail.com">enveryakubov@gmail.com</a></p>
                
                <h6 style={{color: "grey"}}>DATE OF BIRTH</h6>
                <p>06.04.1982</p>

                <h6>Skills</h6>
                <p>HTML & CSS</p>
                <div className="outer">
                    <div className="inner t1" style={{width:"95%"}} data-w="95%"></div>
                </div>

                <p>Javascript</p>
                <div className="outer">
                    <div className="inner t1" style={{width:"85%"}} data-w="85%"></div>
                </div>

                <p>Python</p>
                <div className="outer">
                    <div className="inner t1" style={{width:"90%"}} data-w="90%"></div>
                </div>

                <p>React</p>
                <div className="outer">
                    <div className="inner t1" style={{width:"70%"}} data-w="70%"></div>
                </div>

                <p>Django</p>
                <div className="outer">
                    <div className="inner t1" style={{width:"85%"}} data-w="85%"></div>
                </div>

                <p>Git</p>
                <div className="outer">
                    <div className="inner t1" style={{width:"65%"}} data-w="65%"></div>
                </div>

                <h6>Hobbies</h6>
                <p>Judo and Jogging</p>

                <h6>Languages</h6>
                <p>Russian</p>
                <div className="outer">
                    <div className="inner t1" style={{width:"100%"}} data-w="100%"></div>
                </div>

                <p>English</p>
                <div className="outer">
                    <div className="inner t1" style={{width:"95%"}} data-w="95%"></div>
                </div>

                <p>Turkish</p>
                <div className="outer">
                    <div className="inner t1" style={{width:"95%"}} data-w="95%"></div>
                </div>
                
            </div>
        </motion.div>
    )
}

export default SideBlock
