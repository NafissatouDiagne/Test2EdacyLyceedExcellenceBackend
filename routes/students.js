const router = require('express').Router();
const { catchErrors } = require('../handlers/errorHandlers');
const studentController= require('../controller/studentControllers');

router.post('/student',catchErrors(studentController.register));
router.get('/allStudents',catchErrors(studentController.allStudents));
router.put('/updateStudent/:_id',catchErrors(studentController.updateStudent));
router.delete('/deleteStudent/:_id',catchErrors(studentController.deleteStudent));
module.exports = router;