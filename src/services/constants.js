import axios from 'axios'
// import { useState,useEffect } from 'react'
// import searchZip from '../components/Input'

const CLIENT_URL = 'https://api.openweathermap.org/data/2.5/weather?zip='
const API_KEY =',us&units=imperial&appid=98733ddebed42102b5231859c94a327a'

const fetchData = async (inputValue) => {
  //axios call
  try{
  const response = await axios.get(`${CLIENT_URL}${inputValue}${API_KEY}`)
  // console.log(response.data)
  // const { results } = response.data;
    return response.data
  }catch(error){
      console.log(error)
  }
}

export default fetchData
