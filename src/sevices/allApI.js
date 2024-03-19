import { commonAPI } from "./commomAPI"
import { serverURL } from "./serverURL"

// api for uploading video
export const uploadVideoApi = async(reqBody)=>{
 return  await commonAPI('POST',`${serverURL}/video`,reqBody)
}
 
//api to get uploaded video
export const getuploadVideoApi = async()=>{
    return  await commonAPI('GET',`${serverURL}/video`,"")
   }

   // api to delete a particular video

  export const deleteVideo = async(id)=>{
    return await commonAPI('DELETE',`${serverURL}/video/${id}`,{})
  }

  //api to add video in history

  export const AddToHistory = async(reqBody)=>{
    return await commonAPI('POST',`${serverURL}/history`,reqBody)
  }

  //api to get video from history

  export const getAllVideoHistory = async()=>{
    return await commonAPI('GET',`${serverURL}/history`,"")
  }

// api to delete watch history
export const deleteWatchHistory = async(id)=>{
  return await commonAPI('DELETE',`${serverURL}/history/${id}`,{})
}

//api to add a category
export const addCategory = async(reqBody)=>{
return  await commonAPI('POST',`${serverURL}/category`,reqBody)
}

//api to get category
export const getCategory = async()=>{
  return await commonAPI('GET',`${serverURL}/category`,"")
}

//api to delete category
export const deleteCategory = async(id)=>{
  return await commonAPI ('DELETE',`${serverURL}/category/${id}`,{})
}

//apito get single video frm videoz
export const getVideoApi = async(id)=>{
  return await commonAPI('GET',`${serverURL}/videos/${id}`,"")
}

// api to update category
export const updateCategory =async(id,reqBody)=>{
  return await commonAPI('PUT',`${serverURL}/category/${id}`,reqBody)
}