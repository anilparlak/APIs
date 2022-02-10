
const mongoose = require("../database");

const schema = new mongoose.Schema(
    {
      title: {
        
        type: String,
        required: true,
        unique:false
      },
      description: {   
          
          type:String,
          required:false,
          unique:false
      }
    },
    {
      strict: true,
      versionKey: false,
      timestamps: { createdAt: "createdAt", updatedAt: "updatedAt" },
    }
  );
  
  module.exports = mongoose.model("todoschemas", schema);