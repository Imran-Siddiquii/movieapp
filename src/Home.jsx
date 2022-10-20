import React from 'react'
import {Modal} from 'antd'
const Home = ({props,data,open,onOk,onCancel}) => {
  return (
    <div>
        <Modal title={data.title} open={open} onOk={onOk} onCancel={onCancel}>
      <img src={`${"https://image.tmdb.org/t/p/original/"+data.poster_path}`} alt="example" width="100%" height="175px" />
  <p className='my-1'>Movie Name : {data.title}</p>
  <p>Movie language : {data.original_language}</p>
  <p>Description : {data.overview
}</p>
<p>Release Date : {data.release_date}</p>
<p>Vote : {data.vote_count}</p>



  <p>Popularity : {data.popularity}</p>
      </Modal>
    </div>
  )
}

export default Home