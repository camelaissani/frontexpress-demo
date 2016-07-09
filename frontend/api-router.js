import frontexpress from 'frontexpress';
import menu from './menu';

const router = frontexpress.Router(/^\/api\//);

// Fill content page
router.get((req, res, next) => {
    document.querySelector('.content').innerHTML = res.responseText;
    next();
});

// On update content select the corresponding menu
router.get((req, res, next) => {
    menu.selection(req.uri);
    next();
});

export default router;