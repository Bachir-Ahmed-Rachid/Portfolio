import React from 'react'
import {Col,Row} from 'react-bootstrap'

const Work = () => {
  return (
    <>
       <><span ><i className="d-inline fa-solid fa-briefcase fa-3x"></i></span><h2 className='d-inline '>EMPLOYMENT</h2></>
    <Row className='mt-5'>
    
    <Col md={9}><h5>React web development</h5><p>IST PARTNER</p></Col>
    <Col md={3}><h6 className='p-3 mb-2 bg-danger text-white rounded-pill text-center'>2022-</h6></Col>
    <hr/>
    <Col md={9}><h5>System information consulting</h5><p>IST PARTNER</p></Col>
    <Col md={3}><h6 className='p-3 mb-2 bg-danger text-white rounded-pill text-center'>2022-</h6></Col>
   
    <hr/>
    <Col md={8}><h5>Freight transport planning</h5><p>Anderson Logistics</p></Col>
    <Col md={4}><h6 className='p-3 mb-2 bg-danger text-white rounded-pill text-center'> Mars-Mai 2022</h6></Col>
     <hr/>
    <Col md={9}><h5>Logistic and distribution service</h5><p>NAFTAL SPA</p></Col>
    <Col md={3}><h6 className='p-3 mb-2 bg-danger text-white rounded-pill text-center'>Mars 2021</h6></Col>


     <hr/>
  </Row>
  </>
  )
}

export default Work