import axios from 'axios'
export default axios.create({
    baseURL:'https://mrissabackend.vercel.app/',
    headers:{
        'Content-Type':'application/json'
    }
})