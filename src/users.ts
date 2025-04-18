import { loadJsonFromFile, writeFile} from './utils.js'

export interface User {
  id: number
  username: string
  passwordHash: string
  firstName: string
  lastName: string
  cart: number[]
}

export async function getUserByCredentials(username: string, passwordHash: string): Promise<User | null> {
    const users = await loadJsonFromFile<User[]>('./data-store/users.json')
    const user = users.find(user => user.username === username && user.passwordHash === passwordHash)
    if (!user) {
      return null
    }
    return user
}

export async function getUserById(id: number): Promise<User | null> {
    const users = await loadJsonFromFile<User[]>('./data-store/users.json')
    const user = users.find(user => user.id === id)
    if (!user) {
      return null
    }
    return user
}

export async function addUserCartItem(userId: number, productId: number): Promise<void> {
    const users = await loadJsonFromFile<User[]>('./data-store/users.json');

    users.forEach(user => {
      if (user.id === userId) {
        user.cart.push(productId);
      }
    });

    await writeFile('./data-store/users.json', JSON.stringify(users, null, 2));
}