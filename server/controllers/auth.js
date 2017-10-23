import jwt from 'jsonwebtoken';

import config from '../modules/config';

const authController = {
  login(req, res) {
    if (req.body.login === 'login' && req.body.password === 'password') {
      const userToken = jwt.sign({
        login: req.body.login,
        type: 'user',
      }, config.jwtSecret, {});
      return res.json({
        user: {
          name: 'Test user',
          type: 'user',
        },
        userToken,
      });
    }
    return res.send(401);
  },

  authApi(userType) {
    return (req, res, next) => {
      const token = req.get('Authorization');
      jwt.verify(token, config.jwtSecret, (err, decoded) => {
        if (err || decoded.type !== userType) return res.status(401).json({ error: 'You are not authorized to view this content.' });
        return next();
      });
    };
  },

  authApp(userType) {
    return (req, res, next) => {
      const token = req.cookies.userToken;
      jwt.verify(token, config.jwtSecret, (err, decoded) => {
        if (err || decoded.type !== userType) return res.redirect('/login');
        return next();
      });
    };
  },

};

export default authController;
