const { body, validationResult } = require('express-validator');

exports.validationBodyRules = [
  body('name', 'nome é obrigatorio').exists(),
  body('user_id', 'id de abrigo é obrigatório').exists(),
  body('age', 'idade é obrigatorio').exists(),
  body('bearing', 'porte é obrigatorio').exists(),
  body('temperament', 'temperamento é obrigatório').exists(),
  body('adopted_pet', 'status incorreto').isIn([0, 1]),
  body('UF', 'UF é obrigatório').exists(),
  body('city', 'cidade é obrigatório').exists(),
],

exports.checkRules = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};
