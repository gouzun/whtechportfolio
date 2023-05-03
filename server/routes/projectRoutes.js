
import express from 'express';
import * as dotenv from 'dotenv';

import ProjectList from '../mongodb/model/projectmodel.js';

dotenv.config();

const router = express.Router();

router.route('/').get(async (req, res) => {
    try {
        const list = await ProjectList.find({});
        res.status(200).json({ success: true, data: list });
    } catch (err) {
        res.status(500).json({ success: false, message: 'Fetching posts failed, please try again' });
    }
});

// router.route('/').post(async (req, res) => {
//     try {
//         const { pImg, pAlt, pTitle, pDesc, pLink } = req.body;
//         const newProj = await Post.create({
//             pImg, pAlt, pTitle, pDesc, pLink
//         });

//         res.status(200).json({ success: true, data: newProj });
//     } catch (err) {
//         res.status(500).json({ success: false, message: 'Unable to create a project, please try again' });
//     }
// });


export default router;