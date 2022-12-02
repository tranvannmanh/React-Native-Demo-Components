import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

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
    baseURL: 'http://localhost:5000',
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

export const getListPointByStudentReq = async (studentId) => {
  try {
    const token = await getToken()
    const res = await axiosIns(token).get(`/api/student/get-list-point/${studentId}`)
    const { status, data } = res
    return { status, data }
  } catch (error) {
    console.error(error)
  }
}

export const updatePointReq = async (studentId, subjectId, point) => {
  try {
    const token = await getToken()
    const res = await axiosIns(token).patch('/api/student/update-point', {
      studentId,
      subjectId,
      point
    })
    const { status, data } = res
    return { status, data }
  } catch (error) {
    console.error(error)
  }
}

export const studentAddSubjectReq = async (subjectId, studentId) => {
  try {
    const token = await getToken()
    const res = await axiosIns(token).patch('/api/student/add-subject', {
      params: {
        subjectId,
        studentId
      }
    })
    const { status, data } = res
    return { status, data }
  } catch (error) {
    console.error(error)
  }
}

export const studentDeleteSubjectReq = async (subjectId, studentId) => {
  try {
    const token = await getToken()
    const res = await axiosIns(token).delete('/api/student/delete-subject', {
      params: {
        subjectId,
        studentId
      }
    })
    const { status, data } = res
    return { status, data }
  } catch (error) {
    console.error(error)
  }
}