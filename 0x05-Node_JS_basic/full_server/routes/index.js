const express = require('express');
const router = express.Router();

import app_controller from '../controllers/app_controller';
import student_controller from '../controllers/student_controller';

router.get('/', (req, res) => app_controller.getHomepage(req, res));
router.get('/students', (req, res) => students_controller.getAllStudents(req, res));
router.get('/students/:major', (req, res) => student_controller.getAllStudentsByMajor(req, res));

export default router;
module.exports = router;