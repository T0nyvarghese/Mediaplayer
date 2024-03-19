import React, { useState } from 'react'
import Add from '../components/Add'
import {Link} from 'react-router-dom'
import View from '../components/View'
import Category from '../components/Category'
import './Home.css'

function Home() {
    const [uploadVideoStatus, setUploadVideoStatus]= useState({})

  return (
    <>
    <div className='container d-flex justify-content-between align-items-center mt-4'>
      <Add setUploadVideoStatus={setUploadVideoStatus} />
      <Link  id='link' to={'/watchHistory'}>Watch History</Link>
    </div>
    <div className='row'>
      <div className='col-md-9 px-5'>
        <h4 className='mt-4'>All Videos</h4>
        <View  uploadVideoStatus={uploadVideoStatus} />
      </div>
      <div className='col-md-3 px-5'>
        <Category/>
      </div>

    </div>
    </>
  )
}

export default Home