const { body, validationResult } = require('express-validator');

exports.validationBodyRules = [
  body('pet_id', 'id de pet é obrigatório').exists(),
  body('user_id', 'id de usuario é obrigatório').exists(),
];

exports.checkRules = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};
