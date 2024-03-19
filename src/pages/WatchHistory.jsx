import { faArrowLeft, faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { deleteWatchHistory, getAllVideoHistory } from '../sevices/allApI'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function WatchHistory() {
     const [historyVideos, setHistoryVideos]=useState([])
     const [deleteVideoStatus ,setDeleteVideoStatus]=useState(false)

     //function to get all videos in history

  const getHistory = async()=>{
       const response = await getAllVideoHistory()
/*        console.log(response); */
       setHistoryVideos(response.data)
  }
  console.log(historyVideos);

  //function to delete video from all history
   const handleDelete =async(id)=>{
    const response = await deleteWatchHistory(id)
    console.log(response);
    if(response.status>=200 && response.status<300){
      setDeleteVideoStatus(true)
    }
    else{
      alert('something went wrong')
    }

   }

  useEffect(()=>{
    getHistory()
    setDeleteVideoStatus(false)
  },[deleteVideoStatus])
  return (
    <>    
      <div className='mt-5 d-flex justify-content-between align-items-center p-4'>
        <h3>Watch History</h3>
           <h6> <Link style={{textDecoration:'none',color:'white'}} to={'/home'}><FontAwesomeIcon icon={faArrowLeft} beat />Back to Home</Link> </h6>
      </div>

      <div className='mt-5 d-flex justify-content-between align-items-center mx-5 p-5'>
      {historyVideos?.length>0?
        <table className='table'>
        <thead>
          <tr>
            <th>#</th>
            <th>Caption</th>
            <th>Url</th>
            <th>Time Stamp</th>
            <th>Action</th>
          </tr>
        </thead>
          <tbody>
           {historyVideos.map((item,index)=>(
             <tr>
             <td>{index+1}</td>
             <td>{item.caption}</td>
             <td><a href={item.url} target='blank'>{item.url}</a></td> {/* target ='blank' for open link in another tab */}
             <td>{item.timeStamp}</td>
             <td>
               <button className='btn btn-danger' onClick={()=>handleDelete(item.id)}><FontAwesomeIcon icon={faTrashCan} /></button>
             </td>
           </tr>
           ))}
          </tbody>
      </table>:<p className='text-danger fs-4'>No Watch History</p>}
      </div>
      <ToastContainer position='top-center'theme='light' autoClose={2000} />

    </>
  )
}

export default WatchHistory