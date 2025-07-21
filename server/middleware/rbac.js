

const roles = require('../auth/roles')
const jwt = require('jsonwebtoken');


const authorize = (requiredPermissions) => {
    return(req,res,next) => {
        const userRole = req.user.role
        if (!roles[userRole] || !requiredPermissions.every(perm => roles[userRole].includes(perm))) {
        return res.status(403).json({ message: 'Forbidden' });
    }

    next();

    }
}

const authenticate = (req, res, next) => {
  const token = req.header('Authorization');
  if (!token) return res.status(401).json({ message: 'Access Denied' });
  try {
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    req.user = verified;
    next();
  } catch (err) {
    res.status(400).json({ message: 'Invalid Token' });
  }
};

module.exports = {authorize,authenticate}