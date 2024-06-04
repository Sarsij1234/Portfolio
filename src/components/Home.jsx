import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaReact } from "react-icons/fa6";
import { FaDatabase } from "react-icons/fa";
import { AiFillAndroid } from "react-icons/ai";
import { RiJavascriptFill } from "react-icons/ri";
import { ReactTyped } from "react-typed";
import pic from "../../public/IMG_20240603_231600.jpg"

function Home() {
  return (
    <>
    <div name="Home"
    className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20 ">
        <div className="flex flex-col md:flex-row">
             <div className="md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1">
                <div className="text-left font-bold text-2xl underline text-black">Welcome In My Feed</div>
                <div className="flex space-x-1 text-2xl md:text-4xl ">
                 <h6 className="text-2xl md:text-3xl">Hello,I'm a </h6>
                 {/* <span className=" bg-red-600 font-bold">Developer</span> */}
                 <ReactTyped className=" text-red-600 font-bold text-2xl md:text-3xl"
         
          strings={["Coder","Programmer","Developer"]}
          typeSpeed={40}
          backSpeed={50}
          loop={true}
        />
                </div>
            <br/>
             <p className=" md:text-md text-justify"> Hello! I'm a passionate frontend developer with 1 years of experience crafting visually stunning, user-friendly,
                 and highly responsive websites and applications. I specialize in HTML, CSS, and JavaScript, leveraging modern frameworks
                  like React and Vue to bring dynamic and engaging interfaces to life. With a strong focus on responsive design, performance 
                  optimization, and intuitive UI/UX, I am dedicated to turning innovative ideas into seamless digital experiences. Let's
                   collaborate to create something amazing!
                   </p>
                   <br/>
                   {/* social media */}
                   <div className="flex flex-col  md:flex-row items-center justify-between space-y-6 md:space-y-0">
                    <div className="space-y-2">
                     <h1 className="font-bold text-xl text-center md:text-left">Available On</h1>
                   <ul className="flex space-x-5 text-2xl cursor-pointer">
                    <li>
                      <a href="https://www.linkedin.com/in/sarsij-upadhyay-946699193/" target="_Blank">
                       
                         <FaLinkedin />
                      </a>
                        </li>
                    <li><a href="https://www.facebook.com/" target="_blank"><FaFacebookF  /></a></li>
                    <li> 
                      <a href='https://www.instagram.com/upadhyay4110/?next=%2F&hl=en' target="_blank">
                         <FaInstagramSquare />
                      </a>
                     </li>
                    <li>
                      <a href='https://github.com/' target='_blank'>
                        <FaGithub />
                      </a>
                      </li>
                   </ul>
                   </div>
                  
                  <div className>
                     <h1 className="font-bold text-xl items-center "> Working On..</h1>
                   <div className="flex space-x-5 text-2xl cursor-pointer">
                   <FaReact />
                   <FaDatabase />
                 
                   <AiFillAndroid />
                   <RiJavascriptFill />
                   </div>
                 
                  </div>
                   </div>
                   
                  
             </div>
              
             <div className="md:w-1/2 md:ml-48 md:mt-20 order-1">
                <img src={pic} className="rounded-full md:w-[400px] md:h-[400px]" alt="" />
             </div>
            
        </div>
        <br /><br />
        <br /><br />
        <br /><br />
     <hr/>
    </div>
    
    </>
  )
}

export default Home
