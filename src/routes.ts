import * as express from 'express';
import UserController from './controllers/userController';

export default class Routes {
    private router: express.Router;
    
    public constructor (router: express.Router) {
        this.router = router;
    }

    public register () {
        this.router.get('/users', (req: express.Request, res: express.Response) => {
            let userController: UserController = new UserController();
            res.json(userController.getUsers());
        });
    }
}