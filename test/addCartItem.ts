import axios from 'axios'

const BASE_URL = 'http://localhost:3000'

const productId = 2;

async function main() {
    const requestBody = {
        username: 'alext',
        password: 'password'
    }
    const tokenResponse = await axios.post(`${BASE_URL}/login`, requestBody)
    const token = tokenResponse.data.token

    const requestBody2 = {
        productId: productId
    }

    const userResponse = await axios.post(`${BASE_URL}/cart`, requestBody2, { headers: { token }})
    const user = userResponse.data
    console.log(JSON.stringify(user, null, 2))
}


main()