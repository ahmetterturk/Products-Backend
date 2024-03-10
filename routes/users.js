import express from 'express';

import { getAllUsers, createUser, editUser, login } from '../controllers/usersController.js';

const router = express.Router();

router.get('/', getAllUsers);
router.post('/', createUser);
router.patch('/:id', editUser);
router.post('/login', login);

export default router;