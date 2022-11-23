import axios from "axios";

export const axiosIns = axios.create({
  baseURL: 'http://localhost:5000/api/student/',
  // headers: {
  //   Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxIiwibmFtZSI6Im1hbmgiLCJ1c2VyX3R5cGUiOiIxIiwiZXhwIjoxNjY5Mjc5ODc5LCJpc3MiOiJkZW1vLmlzc3VlciIsImF1ZCI6ImRlbW8uYXVkaWVuY2UifQ.tDERCidF014NGXWc3jBN_XDPqOCSuDnPGFvrzbHTwoM'
  // }
})

export const getStudentsReq = async () => {
  try {
    const res = await axiosIns.get('get-all?pageSize=12&pageIndex=1')
    // console.log('res...', res.data.items)
    // if (res) {
    //   setStudentds(res.data.items)
    // }
    return res.data.items
  } catch (error) {
    console.error(error)
  }
}