const jwt = require('jsonwebtoken')
const JWT_SECRET = process.env.JWT_SECRET || 'secret'

module.exports = function (req, res, next) {
  // Expect token in "Authorization" header as "Bearer <token>"
  const authHeader = req.headers.authorization
  const token = authHeader && authHeader.split(' ')[1]

  if (!token) {
    return res.status(401).json({ message: 'No token, authorization denied' })
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET)
    req.user = decoded // Attach user info to the request object
    next()
  } catch (err) {
    res.status(401).json({ message: 'Token is not valid' })
  }
}
