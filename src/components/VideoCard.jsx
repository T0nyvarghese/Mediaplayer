import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { AddToHistory, deleteVideo } from '../sevices/allApI';



function VideoCard({displayVideo,setDeleteVideoStatus, isPresent}) {
  console.log(displayVideo);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  // function to add to history
  const handleShow = async() => {
    setShow(true);
    let caption = displayVideo.caption
    let url = displayVideo.embedLink
    let time = new Date()
    let timeStamp =  new Intl.DateTimeFormat('en-GB', {year:'numeric',month:'2-digit',day:'2-digit',hour:'2-digit',minute:'2-digit',second:'2-digit'}).format(time)

/*     console.log(caption,url,timeStamp); */

   let reqBody = {
    caption,url,timeStamp
    }
    const response = await AddToHistory(reqBody)
    console.log(response);
  }

  // function to delete a video
  const handleDelete = async (id)=>{
    const response = await deleteVideo(id)
    console.log(response);
    setDeleteVideoStatus(true)
  }

  //function to drag
  const videoDrag =(e,id)=>{
    console.log(`card with id ${id} dragged`);
    e.dataTransfer.setData("videoId",id)
  }

  return (
    <>
      <Card onClick={handleShow} style={{ width: '100%' }} className='mt-4' draggable onDragStart={(e)=>videoDrag(e,displayVideo.id)}>
     {!isPresent && <Card.Img  variant="top" src={displayVideo?.imageUrl} width={'100%'} height={'300px'} />}
      <Card.Body className='d-flex'>
        <Card.Text>
          {displayVideo?.caption.slice(0,11)}
        </Card.Text>
        {!isPresent &&<Button variant="danger" onClick={()=>handleDelete(displayVideo?.id)} className='ms-auto'><FontAwesomeIcon icon={faTrashCan} /></Button>}
      </Card.Body>
    </Card>

    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>displayVideo?.caption</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <iframe width="100%" height="369" src={`${displayVideo?.embedLink}?autoplay=1`} title="Chayappattu | Sithara Krishnakumar | Muhsin Parari | High On Music @wonderwallmedia" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </Modal.Body>
    </Modal>
    </>
  )
}

export default VideoCard