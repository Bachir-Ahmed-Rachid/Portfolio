import React from 'react'
import { Progress } from 'antd';
import {Col,Row} from 'react-bootstrap'


const Language = () => {
  return (
    <>
   <><span ><i class="d-inline fa-solid fa-language fa-3x"></i></span><h2 className='d-inline'>Language</h2></>
    <Row  className='mt-5'>
    <Col md={12}><h5>Arab</h5></Col>
    <Col md={9}><Progress percent={90} showInfo={false} strokeColor={'#e74c3c'} /></Col>
    <Col md={12}><h5>English</h5></Col>
    <Col md={9}><Progress percent={80} showInfo={false} strokeColor={'#e74c3c'} /></Col>
   
    <Col md={12}><h5>French</h5></Col>
    <Col md={9}><Progress percent={70} showInfo={false} strokeColor={'#e74c3c'} /></Col>

  </Row>
  </>
  )
}

export default Language