import axios from "axios";

export const commonAPI = async (httpmethod,url,reqBody)=>{//commomAPI an its arguments can be changed

    let reqConfig ={ //reqConfig can be changed
        method:httpmethod,
        url,
        data:reqBody,
        Headers:{
            'Content-Type':'application/json'
        }
    }

    return await axios(reqConfig).then((result)=>{
        return result
    }).catch((error)=>{
        return error
    })
}