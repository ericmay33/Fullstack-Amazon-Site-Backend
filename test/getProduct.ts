import axios from 'axios'

const BASE_URL = 'http://localhost:3000'

const PRODUCT_ID = 1

async function main() {
    const response = await axios.get(`${BASE_URL}/products/${PRODUCT_ID}`)
    const product = response.data
    console.log(JSON.stringify(product, null, 2))
}


main()