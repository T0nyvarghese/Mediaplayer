import { faCloudArrowUp, faFilm } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import { uploadVideoApi } from '../sevices/allApI';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Add({setUploadVideoStatus}) {
  const [show, setShow] = useState(false);
  const [video,setVideo]= useState({
    id:'',
    caption:'',
    imageUrl:'',
    embedLink:'',
  })

  // https://youtu.be/qqrpMRDuPfc?si=M5M2eFC2aOCFGRk9

  //https://www.youtube.com/watch?v=qqrpMRDuPfc
  //https://www.youtube.com/embed/qqrpMRDuPfc?si=M5M2eFC2aOCFGRk9

  const getEmbedLink = (e)=>{
/*     console.log(e.target.value); */
    const text =e.target.value
    if(text.startsWith("https://www.youtube.com/watch?")){
      console.log(text.slice(-11));

      const Link=`https://www.youtube.com/embed/${text.slice(-11)}`
      setVideo({...video,embedLink:Link})

    }else{
      // console.log(text.slice(-11));
      console.log(text.slice(17,28));
      const Link=`https://www.youtube.com/embed/${text.slice(17,28)}`
      setVideo({...video,embedLink:Link})

      // https://www.youtube.com/watch?v=zLcrEO-eIOQ
      // https://www.youtube.com/embed/zLcrEO-eIOQ
      
      // https://youtu.be/zLcrEO-eIOQ?si=ISf1PTH_KOC_HpAP

    }
  }

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleUpload =async()=>{
    const{id ,caption, imageUrl ,embedLink}=video
    console.log(id ,caption, imageUrl ,embedLink);
    if(!id || !caption || !imageUrl || !embedLink){
    toast.info('please fill completely')
    }else{
      const response = await uploadVideoApi(video)
      console.log(response);
      if(response.status>=200 && response.status<300){
      toast.success('video uploaded successfully')
      setUploadVideoStatus(response.data)
      
    setVideo({
      id:"",
      caption:"",
      imageUrl:"",
      embedLink:""

    })
    handleClose()
  }
  else{
/*     console.log(response); */
    toast.error('something went wrong')
  }
    }
  }
  console.log(video);

  return (
    <>
      <div className='d-flex'>
        <h5 className='me-2 mt-2'>Upload New Videos</h5>
          <button onClick={handleShow} className='btn'><FontAwesomeIcon icon={faCloudArrowUp} size='xl' /></button>
      </div>
      <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title><FontAwesomeIcon icon={faFilm} className='me-2 text-warning' />Upload Videos</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Please fill the following details</p>
        <Form className='border rounded p-3 border-secondary'>

        <Form.Group className='mb-3'>
          <Form.Control type="text" placeholder="Enter the video ID" onChange={(e)=>setVideo({...video,id:e.target.value})}/>
        </Form.Group>

        <Form.Group className='mb-3'>
          <Form.Control type="text" placeholder="Enter the video caption" onChange={(e)=>setVideo({...video,caption:e.target.value})}/>
        </Form.Group>

        <Form.Group className='mb-3'>
          <Form.Control type="text" placeholder="Enter the video image Url" onChange={(e)=>setVideo({...video,imageUrl:e.target.value})}/>
        </Form.Group>

        <Form.Group className='mb-3'>
          <Form.Control type="text" placeholder="Enter the Youtube Video Link" onChange={(e)=>getEmbedLink(e)}/>
        </Form.Group>

        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cancel
        </Button>
        <Button variant="warning" onClick={handleUpload}>
          Upload
        </Button>
      </Modal.Footer>
    </Modal>
    <ToastContainer position='top-center'theme='light' autoClose={2000} />
    </>
    
  )
}

export default Add