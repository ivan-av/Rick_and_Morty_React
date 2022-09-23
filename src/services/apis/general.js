import axios from 'axios'

export const getNextPageAxios = async (nextPage) => {
  const response = await axios.get(`${nextPage}`)
  return response.data
}
export const getPreviousPageAxios = async (previousPage) => {
  const response = await axios.get(`${previousPage}`)
  return response.data
}
