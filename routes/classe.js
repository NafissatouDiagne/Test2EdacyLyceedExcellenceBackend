const router = require('express').Router();
const { catchErrors } = require('../handlers/errorHandlers');

const classeController = require('../controller/classeController')
router.post('/classes',catchErrors(classeController.registerClass));
router.get('/allClasses',catchErrors(classeController.allclasses));

router.put('/updateClasse/:_id',catchErrors(classeController.updateClasse));
router.delete('/deleteClasse/:_id',catchErrors(classeController.deleteClasse));
module.exports = router;