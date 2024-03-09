import express from 'express';

import { createUser, editUser, login } from '../controllers/usersController.js';

const router = express.Router();

router.post('/', createUser);
router.patch('/:id', editUser);
router.post('/login', login);

export default router;