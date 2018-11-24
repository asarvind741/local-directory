import Category from '../models/category';
import fs from 'fs';

import {
    sendResponse,
    SendMail
} from './functions';
import Constants from './constant';

async function createCategory(req, res) {
    try {
        let category = await new Category(req.body);
        sendResponse(res, 200, 'Category created Successfully.', category);
    } catch (e) {
        console.log(e);
        sendResponse(res, 500, 'Unexpected error', e);
    }
}

module.exports = {
    createCategory
};