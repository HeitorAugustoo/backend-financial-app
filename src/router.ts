import { Router } from 'express'

import { CreateUserController } from './controllers/user/CreateUserController';
import { AuthUserController } from './controllers/user/AuthUserController';
import { DetailUserController } from './controllers/user/DetailUserController';

import { isAuthenticated } from './middlewares/isAuthenticated';

import { CreateCategoryController } from './controllers/category/CreateCategoryController';
import { ListCategoryController } from './controllers/category/ListCategoryController';
import { AddExpanseController } from './controllers/expanse/AddExpanseController';
import { ListExpansesController } from './controllers/expanse/ListExpansesController';

const router = Router();

router.post('/users', new CreateUserController().handle)

router.get('/session', new AuthUserController().handle)

router.get('/me', isAuthenticated, new DetailUserController().handle)

router.post('/category', isAuthenticated,  new CreateCategoryController().handle)

router.get('/categories', isAuthenticated,  new ListCategoryController().handle)

router.post('/expanse', isAuthenticated,  new AddExpanseController().handle)

router.get('/expanses', isAuthenticated, new ListExpansesController().handle)

export { router }