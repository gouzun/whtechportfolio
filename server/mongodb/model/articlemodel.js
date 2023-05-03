import mongoose from 'mongoose';

const MainCollection = new mongoose.Schema({
    aImg: { type: String, required: true },
    aTitle: { type: String, required: true },
    aDesc: { type: String, required: true },
    aDate: { type: String, required: true },
});


const MainSchema = mongoose.model('Articles', MainCollection);

export default MainSchema;
