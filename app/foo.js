/**
 * Created by Maurice on 7/3/2015.
 */

var state={};

module.exports = {
    greet: function(){
        alert('Hello '  + state.name);
    },
    setName: function(name){
        state.name = name;
    }
}