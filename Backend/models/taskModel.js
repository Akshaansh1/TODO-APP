const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
    id : {type : Number , required : true},
    title : {type : String , required : true},
    description : {type : String},
    done : {type : Boolean , required : true , default : false}
});

const taskModel = new mongoose.model("Task" , taskSchema);

module.exports = {
    taskModel
}