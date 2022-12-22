import { axiosIns, CREATE_STUDENT, DELETE_STUDENT, GET_ALL_STUDENTS } from "../config/api"

export const getAllStudentsReq = async ({ pageSize = 10, pageIndex = 1 }) => {
  try {
    const res = await axiosIns().get(GET_ALL_STUDENTS, {
      params: {
        pageSize,
        pageIndex
      }
    })
    const { data } = res
    return { status: 1, data }
  } catch (error) {
    return { status: 0, data: null }
  }
}

export const deleteStudentReq = async ({ id }) => {
  try {
    const res = await axiosIns().delete(`${DELETE_STUDENT}/${id}`)
    console.log(`${DELETE_STUDENT}/${id}`)
    const { data } = res
    return { status: 1, data }
  } catch (error) {
    return { status: 0, data: null }
  }
}

export const addNewStudentReq = async ({ name, studentCode, className, email, address }) => {
  try {
    const res = await axiosIns().post(CREATE_STUDENT, {
      studentCode,
      name,
      className,
      email,
      address
    })
    const { data } = res
    return { status: 1, data }
  } catch (error) {
    return { status: 0, data: null }
  }
}