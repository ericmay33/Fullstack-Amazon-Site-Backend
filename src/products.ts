import { loadJsonFromFile } from './utils.js'

export interface Product {
  id: number
  name: string
  description: string
  category: string
  sellerName: string
  numberOfRatings: number
  ratingAverage: number
  price: number
  images: string[]
  discount: number
}

export async function getAll(): Promise<Product[]> {
  return await loadJsonFromFile<Product[]>('./data-store/products.json')
}

export async function getById(id: number): Promise<Product | null> {
  const products = await loadJsonFromFile<Product[]>('./data-store/products.json')
  const product = products.find(product => product.id === id)
  if (!product) {
    return null
  }
  return product
}

