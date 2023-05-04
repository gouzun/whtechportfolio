
import express from 'express';
import * as dotenv from 'dotenv';

import ProjectList from '../mongodb/model/projectmodel.js';

dotenv.config();

const router = express.Router();

router.route('/').get(async (req, res) => {
    // console.log("herere");
    try {
        const list = await ProjectList.find({});
        res.status(200).json({ success: true, data: list });
    } catch (err) {
        res.status(500).json({ success: false, message: 'Fetching posts failed, please try again' });
    }
});




export default router;