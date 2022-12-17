import React from 'react'
const Skills = () => {
  return (
    <div id="skills" className="skillsSection section">

            <div className="container">

                <div classNameName="row">

                    <div className="col-md-12 text-center">
                        <h2>TECHNICAL SKILLS</h2>
                        <p>My proficiency in each skill (drag to scroll)</p>
                    </div>


                    <div className="owl-carousel owl-theme">

                        <div className="skill">
                            <span className="chart" data-percent="70">
                                <span className="percent">70</span>
                                <canvas height="152" width="152"></canvas>
                            </span>
                            <h4>Python/Pyomo</h4>
                            <p>Used in most of my optimization applications</p>
                        </div>


                        <div className="skill">
                            <span className="chart" data-percent="65">
                                <span className="percent">65</span>
                                <canvas height="152" width="152"></canvas>
                            </span>
                            <h4>JavaScript/NodeJs</h4>
                            <p>Used to develop all my applications</p>
                        </div>


                        <div className="skill">
                            <span className="chart" data-percent="75">
                                <span className="percent">75</span>
                                <canvas height="152" width="152"></canvas>
                            </span>
                            <h4>Mongo DB/MySQL
                            </h4>
                            <p>Used in my data base</p>
                        </div>


                        <div className="skill">
                            <span className="chart" data-percent="40">
                                <span className="percent">40</span>
                                <canvas height="152" width="152"></canvas>
                            </span>
                            <h4>Microsoft Excel
                            </h4>
                            <p>Used to manipulate data in forme of tables</p>
                        </div>

                        <div className="skill">
                            <span className="chart" data-percent="30">
                                <span className="percent">30</span>
                                <canvas height="152" width="152"></canvas>
                            </span>
                            <h4>ReactJs/NextJs</h4>
                            <p>A new skill I am learning</p>
                        </div>


                        <div className="skill">
                            <span className="chart" data-percent="60">
                                <span className="percent">60</span>
                                <canvas height="152" width="152"></canvas>
                            </span>
                            <h4>HTML/CSS/BootStrap</h4>
                            <p>Used in most of my web based projects</p>
                        </div>


                        <div className="skill">
                            <span className="chart" data-percent="30">
                                <span className="percent">30</span>
                                <canvas height="152" width="152"></canvas>
                            </span>
                            <h4>Solidity
                            </h4>
                            <p>A new skill I am learning</p>
                        </div>


                    </div>


                </div>

            </div>

        </div>
  )
}

export default Skills