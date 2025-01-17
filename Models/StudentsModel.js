
const { default: mongoose, Model } = require("mongoose");
const StudentSchema = mongoose.Schema(
    {
        Email:{
            Type: String,
            required:[true, "Email is required"]
        },
        MatricNumber:{
            Type:String,
            required:[true,"Matric Number is required"]
        }
        },
        {
            timeStamp:true
        }
   
)

const Student = mongoose.model('Student', StudentSchema)
module.exports = Student