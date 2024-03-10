import express from 'express';

import { getAllUsers, getSingleUser, createUser, editUser, login } from '../controllers/usersController.js';

const router = express.Router();

router.get('/', getAllUsers);
router.get('/:id', getSingleUser);
router.post('/', createUser);
router.patch('/:id', editUser);
router.post('/login', login);

export default router;