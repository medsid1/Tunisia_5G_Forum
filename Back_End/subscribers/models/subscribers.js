var mongoose = require('mongoose');
mongoose.connect('mongodb://MedSayadi:mylovechanta123456789@ds115874.mlab.com:15874/tunisia_5g_forum',{useNewUrlParser: true});
var dataSchema = new mongoose.Schema({
    date_up:Date,
    full_name:String,
    email:String,
  

} );
dataSchema.pre('save', function (next) {
    var todo = this;
    var currentDate = new Date();
    if (!todo.date_up) {
        todo.date_up = currentDate;
       
    }
    next();
} );
module.exports = mongoose.model('subscribers', dataSchema);