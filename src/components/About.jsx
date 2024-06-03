import React from 'react'

function About() {
  return (
    <div name="About" 
    className="max-w-screen-2xl container mx-auto px=4 md:px-20 my-20 text-left">
     <h1 className='  font-bold text-3xl text-green-600'>About</h1>
     <br/>
     <p className="text-justify">Passionate and skilled Frontend Developer with 1 years of experience in designing and implementing responsive, user-friendly web interfaces. Proficient in HTML, CSS, JavaScript, and modern frameworks like React and Angular. Adept at collaborating with cross-functional teams to deliver high-quality, scalable web solutions. Strong problem-solving skills and a keen eye for detail, committed to creating seamless and engaging user experiences.</p> 
     <h1 className="text-green-600 font-bold text-3xl  my-7">Education</h1>   
     <ul >
       <li><h1 className="font-semibold my-0">Bachelor's of Technology:</h1>
       Harcourt Butler Technical University,Kanpur <br/>Electronics And Communication</li> 
       <br/>
       <li className=""><h1 className="font-semibold my-0">Intermediate:</h1>Raj Madhav Shree Inter Collge, Ayodhya 
       <br/>Physics, Chemistry, Maths [PCM]</li>
       <br/>
       <li className=""><h1 className="font-semibold my-0">High School:</h1>Raj Madhav Shree Inter Collge, Ayodhya 
       <br/>Physics, Chemistry, Maths [PCM]</li>
      
        </ul> 
        <br/>
        <h1 className="text-green-600 text-3xl font-bold">Work Experience</h1><h1 className="font-semibold"><br/>Software Trainee-8ASE(Remote)</h1>
        
        <p className="text-justify my-3"> As a dedicated Frontend Developer, I specialize in creating dynamic and responsive web
         applications using HTML, CSS, JavaScript, and ReactJS. My passion lies in crafting intuitive and visually appealing 
         user interfaces that provide seamless experiences across devices. With a strong foundation in web development, I have
          successfully delivered numerous projects, leveraging my expertise in modern frontend technologies to build scalable and
           efficient solutions. My commitment to clean code and continuous learning ensures that I stay at the forefront of industry
            trends, consistently bringing innovative ideas to life.</p>
          <br/>
          <h1 className="text-green-600 font-bold text-3xl">Skills & Experties</h1>
          <span className="font-bold">Java, Data Structures And Algorithms, OOPS, DataBase, Operating Systems,<br/> Javascript, HTML, CSS, ReactJS</span>
          <br/>
          <br/>
          <h1 className="text-3xl font-bold text-green-600 my-0">Achievements And Awards</h1>
          <p className="my-0">Got Inspire Scholarship in 2018.</p>
          <p> School topperin Intermediate.</p>
          <p>School topperin HighSchool.</p>
          <p>3 Stars at CodeChef.</p>
          <br/>
          <br/>
          <hr/>

    </div>
    
  )
}

export default About
