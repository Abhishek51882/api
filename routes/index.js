const express = require('express');

const Router = express.Router();

const home_controller = require('../controllers/student_controller');

Router.get('/', home_controller.getStudents);
Router.get('/student/:id', home_controller.getStudent);
Router.get('/student', home_controller.fun);
Router.post('/create', home_controller.create);

module.exports = Router;