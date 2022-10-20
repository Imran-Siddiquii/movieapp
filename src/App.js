import './App.css';
import React, { useEffect, useState } from 'react';
import Home from './Home'
import {Row,Col,Card, Button, Modal} from  'antd';
const { Meta } = Card;
function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [movies,setMovie]=useState([])
  const [search,setSearch]=useState( )
  const [idMovie,setIdMovie]=useState([])

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
const onChangehandler=e=>{
  const filter=movies.filter((val)=>val.release_date.slice(0,4)==e.target.value)
  if(filter.length==0){
    console.log("hello")
  }
  setSearch(filter)
  console.log("filter by year",filter)
}
  return (
    <>
    <h3 className='text-center'>Movies List</h3>
    <h5 className='text-center py-1'><input className='' onChange={onChangehandler}/></h5>
  <div className='container border border-1'>
    <Row className='justify-content-center' gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} >
  {(search || movies)?(search||movies).map((list,key)=>(
    <div key={list.id}>
      <Col className="" span={6}>
      <Card
    hoverable
    style={{
      width: 240,
    }}>
  <img src={`${"https://image.tmdb.org/t/p/original/"+list.poster_path}`} alt="example" width="100%" height="175px" />
  <p className='my-1'>Movie Name : {list.title}</p>
  <p>Movie language : {list.original_language}</p>
  <p>Release : {list.release_date
}</p>
  <Button type="primary" onClick={()=>{
    setIsModalOpen(true)
    setIdMovie(list)
  }
  }>
        More Info
        click me
      </Button>
  </Card>
      </Col>
      </div>
  )):(search.length===0)?<div>
      <Col className="" span={6}>
      <Card
    hoverable
    style={{
      width: 240,
    }}>
  
        <p>hello</p>
  </Card>
      </Col>
      </div>:null}
</Row>     
</div>
       <Home data={idMovie} open={isModalOpen} onOk={handleOk} onCancel={handleCancel}/>
    
    </>
  );
}

export default App;
