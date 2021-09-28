const BarValoration = require("../models/barValorationModel");

module.exports.create_valoration = async(req, res) => {
    try {
        var new_rate = req.body.rate;
        if (new_rate > 5) {
            new_rate = 5;
        } else if (new_rate < 1) {
            new_rate = 1;
        }

        var valoration = {
            id_user: req.body.id_user,
            rate: new_rate,
            descr: req.body.descr,
            date: new Date()
        }

        await BarValoration.updateOne({ id_bar: req.body.id_bar }, { $push: { valorations: valoration } });

        res.json("Valoracion creada correctamente");
    } catch (error) {
        console.log(error);
        res.status(500).send('ERROR 500');
    }
}