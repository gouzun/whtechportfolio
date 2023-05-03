import mongoose from 'mongoose';

const Projects = new mongoose.Schema({
    pImg: { type: String, required: true },
    pAlt: { type: String, required: true },
    pTitle: { type: String, required: true },
    pDesc: { type: String, required: true },
    pLink: { type: String, required: true },
});


const ProjectSchema = mongoose.model('Projects', Projects);

export default ProjectSchema;
