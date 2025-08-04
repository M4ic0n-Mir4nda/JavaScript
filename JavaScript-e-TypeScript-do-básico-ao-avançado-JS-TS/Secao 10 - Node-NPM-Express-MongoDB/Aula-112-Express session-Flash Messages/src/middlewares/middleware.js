exports.middlewareGlobal = (req, res, next) => {    
    // if(req.body.cliente) {
    //     req.body.cliente = req.body.cliente.replace('Miranda', 'NAO USE MIRANDA')
    //     console.log();
    //     console.log(`Vi que você postou ${req.body.cliente}`);
    //     console.log();
    // };
    next();
}

exports.outroMiddlewareGlobal = (req, res, next) => {    
    next();
}