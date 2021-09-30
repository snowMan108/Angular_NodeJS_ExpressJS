const { json } = require("body-parser");
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

module.exports.getBarValorations = async(req, res) => {
    try {

        var skip = req.params.limit - 10;

        var valorations = await BarValoration.aggregate([
            { "$match": { "id_bar": "83f57211cac87cdba57eb41041bf5a23aa2cd20d2cbb4a42a55d01556cd213b999b8dc51262de1d8c10c0774ae9aa5646ecb7c14eb5866f126d795c67af51fc0" } },
            { "$unwind": "$valorations" },
            { "$sort": { "valorations.rate": -1 } },
            { "$project": { "_id": 0, "id_user": "$valorations.id_user", "rate": "$valorations.rate", "descr": "$valorations.descr", "date": "$valorations.date" } },
            { "$skip": skip },
            { "$limit": 10 }
        ]);

        if (!valorations) {
            res.status(404).json({ msg: 'No existe el Bar' });
        }

        res.json(valorations);

    } catch (error) {
        console.log(error);
        res.status(500).send('ERROR 500');
    }
}