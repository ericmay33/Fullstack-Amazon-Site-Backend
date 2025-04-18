import axios from 'axios'

const BASE_URL = 'http://localhost:3000'

async function main() {
    const requestBody = {
        username: 'alext',
        password: 'password'
    }
    const response = await axios.post(`${BASE_URL}/login`, requestBody)
    const token = response.data
    console.log(JSON.stringify(token, null, 2))
}


main()