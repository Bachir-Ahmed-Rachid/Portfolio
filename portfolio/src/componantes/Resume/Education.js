import React from 'react'
import {Col,Row} from 'react-bootstrap'
const Education = () => {
  return (
    <>
   <><span ><i className="d-inline fa-solid fa-graduation-cap fa-3x"></i></span><h2 className='d-inline '>Education</h2></>
   
    <Row className='mt-5'>
      <Col md={9}><h5>Supply chain Engineering</h5><p>Technology national school of Algeria</p></Col>
      <Col md={3}><h6 className='p-3 mb-2 bg-danger text-white rounded-pill text-center'>2019-2022</h6></Col>
      <hr/>
      <Col md={9}><h5>Full Stack Web Development</h5><p>Udemy Full stack web development onlineCourse</p></Col>
      <Col md={3}><h6 className='p-3 mb-2 bg-danger text-white rounded-pill text-center'>2019-2022</h6></Col>
      <hr/>
      <Col md={8}><h5>Google Project Management</h5><p>GOOGLE Coursera Online Course</p></Col>
      <Col md={4}><h6 className='p-3 mb-2 bg-danger text-white rounded-pill text-center'>September 2022</h6></Col>
       <hr/>
      <Col md={9}><h5>Data Analytics for Lean Six Sigma</h5><p>University of Amsterdam Coursera Online Course</p></Col>
      <Col md={3}><h6 className='p-3 mb-2 bg-danger text-white rounded-pill text-center'>August 2022</h6></Col>
  

       <hr/>
    </Row>
    </>
  )
}

export default Education