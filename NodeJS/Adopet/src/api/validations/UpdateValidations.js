const { body, validationResult } = require("express-validator");

exports.validationBodyRules = [
    body('name', 'nome é obrigatorio').exists().isLength({ min: 5}).withMessage('campo nome deve ter no minimo 5 caracteres'),
    body('email', 'email é obrigatorio').isEmail(),
    body('password', 'senha é obrigatorio').exists().isLength({ min: 5}).withMessage('campo senha deve ter no minimo 5 caracteres')
],

exports.checkRules = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }
    next();
}