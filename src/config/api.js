import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

export const GET_ALL_STUDENTS = '/api/student/1534164/get-all'
export const DELETE_STUDENT = '/api/student/1534164'
export const CREATE_STUDENT = '/api/student/1534164/create'

export const setToken = async (token) => {
  await AsyncStorage.setItem('token', token)
}

export const getToken = async () => {
  const token = await AsyncStorage.getItem('token')
  return token
}

export const axiosIns = (token = '') => {
  let headers = {}
  if (token) {
    headers = {
      Authorization: `Bearer ${token}`
    }
  }
  return axios.create({
    baseURL: 'http://kiemtra.stecom.vn:8888',
    headers
  })
}

export const createAccountReq = async (username = '', password = '', userType = 1) => {
  try {
    const res = await axiosIns().post('/api/user/create', {
      username,
      password,
      userType
    })
    const { status, data } = res
    return { status, data }
  } catch (error) {
    console.error(error)
  }
}

export const getStudentsReq = async () => {
  try {
    const token = await getToken()
    const res = await axiosIns(token).get('/api/student/get-all?pageSize=12&pageIndex=1')
    // console.log('res...', res.data.items)
    // if (res) {
    //   setStudentds(res.data.items)
    // }
    return res.data.items
  } catch (error) {
    console.error(error)
  }
}

export const getSubjectReq = async (pageSize = 10, pageIndex = 1, keyword = '') => {
  try {
    const token = await getToken()
    const res = await axiosIns(token).get('/api/subject/get-all', {
      params: {
        pageSize,
        pageIndex,
        keyword
      }
    })
    const { data, status } = res
    return { data, status }
  } catch (error) {
    console.error(error)
  }
}

export const createSubjectReq = async (SubjectName = '', SubjectCode = '', NumberOfCredit = 1) => {
  try {
    const bodyFormData = new FormData()
    bodyFormData.append('SubjectName', SubjectName)
    bodyFormData.append('SubjectCode', SubjectCode)
    bodyFormData.append('NumberOfCredit', NumberOfCredit)
    const token = await getToken()
    const res = await axiosIns(token).post('/api/subject/create', bodyFormData)
    const { status, data } = res
    return { status, data }
  } catch (error) {
    console.error(error)
  }
}
