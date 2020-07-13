var User = require('../models/users');

exports.user_create = function(req, res, next) {
    if (req.body) {
        let items = req.body
        User.create(items, function(err, newUsers){
            if(err) return res.json({ error: err });
            res.redirect('back'); //recarga página
            });
        

    } else {
        res.json({status: 'ERROR', message: 'Debe completar todos los campos'}); 
    }
}

exports.user_display = async (req, res, next) => {
    var listadousers = await User.find({}).exec();
    res.render('index', {users: listadousers, title: 'Listado'});
    
}

//ordenar alfabeticamente por primer nombre
exports.user_alfa = async (req, res, next) => {
    var listadousers = await User.find({}).exec();
    var alfalistado = JSON.parse(JSON.stringify(listado));
    alfalistado = alfalistado.sort((a, b) => a.nombres.localeCompare(b.nombres, "es"));
    res.render('index', {users_alfa: listadousers, title: "Listado"});
}

