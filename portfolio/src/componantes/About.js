import React from 'react'
import about from '../img/about.jpeg'
const About = () => {
  return (
    <div id="about" class="section">

    <div class="container">

        <div class="row">

            <div class="col-md-5">
                <img class="aboutImage" src={about}/>
            </div>

            <div class="col-md-7">


                <h4>My name is BACHIR AHMED RACHID</h4>

                <p>I consider myself as a high potential learner, my passion is to know and to gain everything about programming languages, using this passion as a skill in my life allows me to reach several achievements, and to be in some sort of good problems solver mentality.</p>
                <p>
                    My background diplomas are remarkable for some in my age, as a web developer and fully qualified logistics and optimisation engineer additional to many years experience in different tasks as projects creator and qualified developer, in both sides
                </p>
                <p>Let me add one point, i have a good three years electrical engineering diploma.</p>
            </div>

        </div>

    </div>

</div>
  )
}

export default About