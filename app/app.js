/**
 * Created by Maurice on 7/3/2015.
 */

var foo = require('./foo');

foo.setName('Joe')
foo.greet();


var data = [1, 2, 3];

data.forEach(function (n) {
    console.log(n);
});

data.forEach(n =>  console.log(n));



