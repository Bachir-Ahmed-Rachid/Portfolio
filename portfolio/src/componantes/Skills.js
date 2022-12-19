import React from 'react'
const Skills = () => {
    const skills=[
        {dataPercent:80,percent:80,skill:'ReactJs/Redux',description:'Used to develope the frontend of all my projects' },
        {dataPercent:70,percent:70,skill:'Bootstrap/Ant design',description:'Used in most of my web based projects' },
        {dataPercent:80,percent:80,skill:'JavaScript/NodeJs',description:'Used to develop all my applications' },
        {dataPercent:70,percent:70,skill:'Python/Pyomo',description:'Used in most of my optimization applications' },
        {dataPercent:65,percent:65,skill:'Mongo DB/MySQL',description:'Used in my data base' },
        {dataPercent:40,percent:40,skill:'Microsoft Excel',description:'Used to manipulate data in forme of tables' },
        {dataPercent:50,percent:50,skill:'Git/Github',description:'to save and share my projects'},
        {dataPercent:30,percent:30,skill:'Solidity',description:'A new skill I am learning' },]
  return (
    <div id="skills" className="skillsSection section">

            <div className="container">

                <div className="row">

                    <div className="col-md-12 text-center">
                        <h2>TECHNICAL SKILLS</h2>
                        <p>My proficiency in each skill (drag to scroll)</p>
                    </div>


                    <div className="owl-carousel owl-theme">

                    {skills.map(skill=>(
                        <div className="skill">
                        <span className="chart" data-percent={`${skill.dataPercent}`}>
                            <span className="percent">{skill.percent}</span>
                            <canvas height="152" width="152"></canvas>
                        </span>
                        <h4>{skill.skill}</h4>
                        <p>{skill.description}</p>
                    </div>
                    ))}
                    


                       


                    </div>


                </div>

            </div>

        </div>
  )
}

export default Skills