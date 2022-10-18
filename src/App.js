import './App.css';
import React, { useEffect, useState } from 'react';
import Home from './Home'
import {Row,Col,Card, Button, Modal} from  'antd';
const { Meta } = Card;
function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [movies,setMovie]=useState([])



  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
useEffect(()=>{
  fetch('https://movie-task.vercel.app/api/popular?page=1').then(res=>res.json()).then(json=>{
  console.log(json.data.results)  
  setMovie(json.data.results)})
},[])
  return (
    <>
    <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} style={{display:"flex"}}>
  {movies.map((list,key)=>(
    <div key={list.id}>
      <Col className=""  span={6}>
      <Card
    hoverable
    style={{
      width: 240,
    }}>
  {/* <img src=`${list.poster_path}` alt="example" /> */}
    <Meta title="Europe Street beat" description="www.instagram.com" />
  </Card>
      </Col>
      </div>
  ))}
</Row>     





      <Button type="primary" onClick={showModal}>
        Open Modal
      </Button>
      <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal> <Home/>
    
    </>
  );
}

export default App;
