import CategoryController from '../controllers/cetagories';
import passport from 'passport';
module.exports = app => {
    let category = '/category/';
    console.log('test');
    app.post(`${category}create`, CategoryController.createCategory);
};