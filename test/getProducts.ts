import axios from 'axios'

const BASE_URL = 'http://localhost:3000'

async function main() {
    const response = await axios.get(`${BASE_URL}/products`)
    const products = response.data
    console.log(JSON.stringify(products, null, 2))
}


main()