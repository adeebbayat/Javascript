const PersonController = require('../controllers/person.controller');
module.exports = function(app){
    app.get('/api', PersonController.index);
    app.get('/api/people',PersonController.findAllPerson);
    app.post('/api/people', PersonController.createPerson);
    app.delete('/api/people/:id', PersonController.deleteAnExistingPerson);
}

