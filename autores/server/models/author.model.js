const {Schema, model} = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');

const AuthorSchema = new Schema({
    name:{
        type: String,
        require: [true, 'Campo nombre es requerido'],
        minlength: [4, 'Este campo debe contener mínimo 3 caracteres']
    }
}, {timestamp: true});
AuthorSchema.pre('findOneAndUpdate', function(next){
    this.getOptions.runValidators = true;
    next();
});
AuthorSchema.plugin(uniqueValidator,{message:"El campo {PATH} debe ser único. '{VALUE}' ya existe"});
const Author = model('Author', AuthorSchema);
module.exports = Author;