const http = require('http')

const products = [
  {
    id: 1,
    title: 'Product 1',
    description: 'This is the first product',
    price: 9.99,
    image: 'https://via.placeholder.com/300',
    category: 'category 1'
  },
  {
    id: 2,
    title: 'Product 2',
    description: 'This is the second product',
    price: 19.99,
    image: 'https://via.placeholder.com/300',
    category: 'category 2'
  }
]

const categories = [
  { id: 1, name: 'category 1' },
  { id: 2, name: 'category 2' },
  { id: 3, name: 'category 3' }
]

const users = [
  { id: 1, username: 'user1', password: 'password1', email: 'user1@example.com' },
  { id: 2, username: 'user1', password: 'password1', email: 'user1@example.com' },
  { id: 3, username: 'a', password: 'b', email: 'a' }
]

const server = http.createServer((req, res) => {
  if (req.method === 'OPTIONS') {
    res.writeHead(200, {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Max-Age': 8640 // 24 hours
    })
    res.end()
    return
  }
  if (req.url === '/products' && req.method === 'GET') {
    res.setHeader('Content-Type', 'application/json')
    res.write(JSON.stringify(products))
    res.end()
    return
  }

  if (req.url.startsWith('/products/') && req.method === 'GET') {
    const id = parseInt(req.url.split('/')[2])
    const product = products.find((p) => p.id === id)
    if (product) {
      res.setHeader('Content-Type', 'application/json')
      res.write(JSON.stringify(product))
    } else {
      res.statusCode = 404
    }
    res.end()
    return
  }

  if (req.url === '/categories' && req.method === 'GET') {
    res.setHeader('Content-Type', 'application/json')
    res.write(JSON.stringify(categories))
    res.end()
    return
  }

  if (req.url === '/users' && req.method === 'GET') {
    res.setHeader('Content-Type', 'application/json')
    res.write(JSON.stringify(users))
    res.end()
    return
  }

  if (req.url === '/products' && req.method === 'POST') {
    let body = ''
    req.on('data', (chunk) => (body += chunk))
    req.on('end', () => {
      const newProduct = JSON.parse(body)
      newProduct.id = products.length + 1
      products.push(newProduct)
      res.setHeader('Content-Type', 'application/json')
      res.statusCode = 201
      res.write(JSON.stringify(newProduct))
      res.end()
    })
    return
  }

  if (req.url === '/users/authenticate' && req.method === 'POST') {
    let body = ''
    req.on('data', (chunk) => (body += chunk))
    req.on('end', () => {
      const { email, password } = JSON.parse(body)
      const user = users.find((u) => u.email === email && u.password === password)
      if (user) {
        console.log('S')
        res.setHeader('Content-Type', 'application/json')
        res.statusCode = 200
        res.write(JSON.stringify({ token: 'fake-jwt-token' }))
      } else {
        console.log(email, password)

        res.statusCode = 400
      }
      res.end()
    })

    return
  }

  res.statusCode = 404
  res.end()
})

const port = 3000
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`)
})
