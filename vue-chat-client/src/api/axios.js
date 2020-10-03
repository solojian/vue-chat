import axios from 'axios'

export default function({url,data={},type='GET'}) {
    const instance = axios.create({
        baseURL:'localhost:3000',
        timeout: 5000
    })
    return instance({url,data,type})
}

