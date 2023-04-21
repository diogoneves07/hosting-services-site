import jsonServer from 'json-server'
import jwt from 'jsonwebtoken'
import cors from 'cors'

const server = jsonServer.create()
const router = jsonServer.router('./api-dev/db.json')
const middlewares = jsonServer.defaults()

const SECRET_KEY = 'secret'

server.use(cors())

server.use(middlewares)
server.use(jsonServer.bodyParser)

server.post('/auth/login', (req, res) => {
  const { username, password } = req.body
  const user = router.db.get('users').find({ username, password }).value()
  console.log(username, password)
  if (!user) {
    return res.status(401).json({ message: 'Invalid email or password' })
  }

  const token = jwt.sign({ sub: user.id }, SECRET_KEY)
  return res.json({ token })
})

server.post('/users', (req, res) => {
  const { username, password, name, tel, siteName } = req.body
  const id = router.db.get('users').size().value() + 1

  router.db.get('users').push({ id, username, password, name, tel, siteName }).write()

  const token = jwt.sign({ sub: id }, SECRET_KEY)
  return res.json({ token })
})

server.use((req, res, next) => {
  const authHeader = req.headers.authorization
  if (!authHeader) {
    return res.status(401).json({ message: 'Authorization header not found' })
  }

  const token = authHeader.split(' ')[1]
  try {
    const decoded = jwt.verify(token, SECRET_KEY)
    req.user = decoded
    next()
  } catch (err) {
    return res.status(401).json({ message: 'Invalid token' })
  }
})

server.use(router)

server.listen(3000, () => {
  console.log('JSON Server is running')
})
