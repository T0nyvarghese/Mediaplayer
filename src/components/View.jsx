import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import VideoCard from './VideoCard'
import { getCategory, getuploadVideoApi, updateCategory } from '../sevices/allApI'


function View({uploadVideoStatus}) {

     const [video,setVideo]= useState([])

     const [deleteVideoStatus, setDeleteVideoStatus] = useState(false)

  const getVideos = async()=>{
    const response = await getuploadVideoApi()
/*     console.log(response); */
       const {data} = response
/*        console.log(data); */

         setVideo(data)
  }

   console.log(video);
   
   const dragOver= (e)=>{
    e.preventDefault()
   } 

   const videoDrop = async(e)=>{
    const {categoryId,videoId}=e.dataTransfer.getData("dataShared")
    console.log(categoryId,videoId);

    //get all category
  const {data} = await getCategory()
  //avess the object with thecategory id frm all category
  let selectedCategory = data.find((item)=>item.id==categoryId)
  //filtering the category object by removing the video object from the allvideos
  let newCategory = selectedCategory.allVideos.filter.filter((item)=>item.id!==videoId)
  console.log(newCategory);
  //updating the category
/*   await updateCategory(categoryId,newCategory) */
   }

  useEffect(()=>{ // to handle side effect
    getVideos()
    setDeleteVideoStatus(false)
  },[uploadVideoStatus,deleteVideoStatus]) //dependency -[]- content will be fetched when the page loads

  return (
    <>
    <Row className='w-100' droppable="true" onDragOver={(e)=>dragOver(e)} onDrop={(e)=>videoDrop(e)}>

      { video?.length>0? //ternery opertaion
        video?.map((item)=>( //map
        <Col sm={12} md={6} lg={4} xl={3}>
        <VideoCard displayVideo={item} setDeleteVideoStatus={setDeleteVideoStatus}/>
      </Col>
      )):<p className='text-warning fs-3'>No Videoes uploaded yet</p>
}
      
    </Row>
    </>
  )
}

export default View