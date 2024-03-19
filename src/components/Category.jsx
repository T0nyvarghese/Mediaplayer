import { faPen, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react'
import { Col, Form, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import VideoCard from './VideoCard';
import { addCategory, deleteCategory, getCategory, getVideoApi, updateCategory} from '../sevices/allApI';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




function Category() {

  //state to store the category name
  const [categoryName, setCategoyName]=useState("")
  const [allCategory, setAllCategory]=useState([])
  const [addCategoryStatus , setAddCategoryStatus]=useState(false) // add without refresh
  const [deleteCategoryStatus, setDeleteCategoryStatus]=useState(false)

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  console.log(categoryName);

  //function to add category
  const handleAddCategory = async()=>{

    if(categoryName){
      let reqBody={
        category:categoryName,
        allVideos:[]
      }
      const response = await addCategory(reqBody)
      console.log(response);
      if(response.status>=200 && response.status<300){
        toast.success("category added successsfully")
        setAddCategoryStatus(true)

        handleClose()
      }else{
        alert('something went wrong')
      }
    }
    else{
      toast.error('please enter the Category name')
    }
  }

  //function to get category
  const getAllCategory = async()=>{
    const response =await getCategory()
    setAllCategory(response.data)
  }

//function to delete category
const handleDeleteCategory =async(id)=>{
  await deleteCategory(id)
  setDeleteCategoryStatus(true)
}

  console.log(allCategory);

  //function to prevent the data loss on drag
  const dragOver =(e)=>{
    e.preventDefault()
  }

   //function for drop
  const videoDrop = async(e,categoryId)=>{
    console.log(`card with id is ${categoryId}`);
    //to get the video id sent from the videocard component
  const videoid=  e.dataTransfer.getData("videoId")
    console.log(`video id ${videoid}`);
 
//api call to get a details of a particular video that is dragged

const {data} = await getVideoApi(videoid)
console.log(data);

//selected category
const selectedCategory = allCategory.find((item)=>item.id==categoryId)
console.log(selectedCategory);
selectedCategory.allVideos.push(data)

//function to update category
await updateCategory(categoryId,selectedCategory)
getAllCategory()

  }
  

//function to delete from category
const dragStart = (e,categoryId,videoId)=>{
  console.log(`category id is ${categoryId}`);
  console.log(`video id is ${videoId}`);
 
  let dataShared ={
    categoryId,videoId
  }
  e.dataTransfer.setData("dataShared",JSON.stringify(dataShared))
}

console.log(allCategory);

    useEffect(()=>{
      getAllCategory()
      setAddCategoryStatus(false)
      setDeleteCategoryStatus(false)
    },[addCategoryStatus,deleteCategoryStatus])

  return (
    <>
    <div className='d-flex justify-content-center align-items-center'>
      <button className='btn btn-warning w-100'onClick={handleShow}>Add new category</button>
    </div>

    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title><FontAwesomeIcon icon={faPen} className='me-2 text-warning' />Add new cateogry</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form className='border border-secondary rounded p-3'>
          <Form.Group className='mb-3'>
            <p>Category Name</p>
          <Form.Control type="text" placeholder="Enter the category name" onChange={(e)=>setCategoyName(e.target.value)}/>
        </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="warning" onClick={handleAddCategory}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>


      {allCategory?.length>0?
      allCategory?.map((item)=>(
      <div className='border border-secondary w-100 p-3 rounded mt-3' droppable onDragOver={(e)=>dragOver(e)} onDrop={(e)=>videoDrop(e,item.id)}>
      <div className='d-flex justify-content-center align-items-center'>
        <p>{item.category}</p>
        <button onClick={()=>handleDeleteCategory(item.id)} className='btn btn-danger ms-auto'><FontAwesomeIcon icon={faTrashCan} /></button>
      </div>
      <Row>
        {item.allVideos.length>0?
        item.allVideos.map((card)=>(<Col sm={12} draggable onDragStart={(e)=>dragStart(e, item.id, card.id)} >
          <VideoCard displayVideo={card} isPresent={true}/>
        </Col>))
        :null}
      </Row>
    </div>))
        :<p className='text-danger'>No Category Add</p>}
              <ToastContainer position='top-center'theme='light' autoClose={2000} />

    </>
  )
}

export default Category