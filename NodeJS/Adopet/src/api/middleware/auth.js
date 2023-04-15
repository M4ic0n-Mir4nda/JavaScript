const jwt = require('jsonwebtoken');

const config = process.env;

function verifyToken(req, res, next) {
  try {
    const token = req.cookies['x-access-token'];
    const { auth } = req.cookies;
    if (token && auth) {
      const decode = jwt.verify(token, config.SECRET);
      req.user = decode.id;
      next();
    } else {
      return res.status(404).json({ message: 'Token não autenticado' });
    }
  } catch (err) {
    return res.status(401).json({ message: 'Token invalido' });
  }
}

module.exports = verifyToken;
