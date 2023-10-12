const { Person } = require('../models/person.model');

module.exports.index = (request, response) => {
    response.json({
        message: "Hello World"
    });
}

module.exports.findAllPerson = (req, res) => {
    Person.find()
        .then((allDaPeople) => {
            res.json({ Person: allDaPeople })
            console.log(allDaPeople)
        })
        .catch((err) => {
            res.json(err)
        });
}
    // The method below is new
module.exports.createPerson = (request, response) => {
    const { firstName, lastName } = request.body;
    Person.create({
        firstName,
        lastName
    })
        .then(person => response.json(person))
        .catch(err => response.json(err));
}

module.exports.deleteAnExistingPerson = (req, res) => {
    Person.deleteOne({ _id: req.params.id })
        .then(result => {
            res.json({ result: result })
            
        })
        .catch((err) => {
            res.json(err)
        });}

