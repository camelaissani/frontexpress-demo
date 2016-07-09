import frontexpress from 'frontexpress';
import menu from './menu';

const router = frontexpress.Router();

// On homepage view page1
router.get('/', (req, res, next)  => {
    menu.select('page1');
    next();
});

// On page select the corresponding menu
router.get(/^\/page\d/, (req, res, next) => {
    menu.selection(req.uri);
    next();
});

export default router;