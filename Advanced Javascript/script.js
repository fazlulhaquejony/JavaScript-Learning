//function constructor
/*
var john = {
    name: 'John',
    yearOfBirth: 1990,
    job: 'teacher',
    
};

var Person = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

Person.prototype.calculateAge = function() {
    console.log(2016 - this.yearOfBirth);
};

Person.prototype.lastName = 'smith';

var john = new Person('John', 1990, 'teacher');

var jane = new Person('Jane', 1969, 'designer');

var mark = new Person('mark', 1988, 'retired');

john.calculateAge();

jane.calculateAge();

mark.calculateAge();

console.log(john.lastName);

console.log(jane.lastName);

console.log(mark.lastName);
*/

//Object.create
/*
var personProto = {
    calculateAge: function() {
        
        console.log(2016 - this.yearOfBirth);
    }
};

var john = Object.create(personProto);
john.name = 'john';
john.yearOfBirth = 1990;
john.job = 'teacher';

var java =Object.create(personProto,
{
    name: { value: 'Jane'},
    yearOfBirth: { value: 1990 },
    job: { value: 'designer'}
       
});
*/

//primitives vs objects
/*
//primitives
var a = 28;
var b = a;
a = 78;
console.log(a);
console.log(b);



//objects
var obj1 = {
    name: 'John',
    age: 34
    
};

var obj2 = obj1;
obj1.age = 45;

console.log(obj1.age);
console.log(obj2.age);

//Function
var age =27;
var obj = {
    name: 'Jonas',
    city: 'Lisbon'
};

function change(a, b) {
    a = 45;
    b.city = 'Sun Francisco' ;
    
}

change(age , obj);

console.log(age);
console.log(obj.city);
*/
/*
var years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr, fn) {
    var arrRes = [];

    for(var i = 0; i < arr.length; i++)
        {
         
            arrRes.push(fn(arr[i]));
        }
    return arrRes;
}

function calculateAge(el) {
    return 2016 - el;
}

function isFullAge(el) {
    
    return el >= 18;
}

function maxHeartRate(el) {
    
    if(el >= 18 && el <= 81){
        
        return Math.round(206.9 - (0.67 * el));
        
    } else {
        return -1;
    }
    
}

console.log(years);

var ages = arrayCalc(years, calculateAge);
console.log(ages);

var fullAges = arrayCalc(ages, isFullAge);
console.log(fullAges);

var rates = arrayCalc(ages, maxHeartRate);

console.log(rates);
*/

// nested function call
/*
function interviewQuestion(job) {
    
    if(job === 'designer') {
        return function(name)
        {
            console.log(name + ', explain about the UX design please');
        }
    } else if (job == 'teacher')
        {
            return function(name)
            {
                console.log('what subject' + name + 'do you teach');
            }
        } else {
            return function(name) {
                console.log('Hello ! What do you do ?' + name);
            }
        }
}

var teacherQuestion = interviewQuestion('teacher');
var designQuestion = interviewQuestion('desinger');
teacherQuestion('john');
designQuestion('John');
designQuestion('Mark');
teacherQuestion('Mike');

interviewQuestion('teacher')('Jony');
*/

//IIFE
/*
function game() {
    var score = Math.random * 10;
    console.log(score >= 5);
}

game();

(function () {
    var score = Math.random() * 10;
    console.log(score >= 5);
})();

//console.log(score);

(function (goodLuck) {
 
 var score = Math.random() * 10;
console.log(score >= 5 - goodLuck);
 })(5);
 
 */

//clousre
function retirement(retirementAge) {
    var a = 'years left until retirement';
    
    return function(yearOfBirth){
        var age = 2016 - yearOfBirth;
        console.log((retirementAge - age) + a);
    }
}

var retirementUs = retirement(66);
retirementUs(1990);

var retirementUk = retirement(34);
var retirementUAE = retirement(37);
var retirementUse = retirement(30);

retirementUk(1980);
retirementUAE(1960);
retirementUse(1690);

retirement(66)(1992);

function interviewQuestion(job) {
    
    if(job === 'designer') {
        return function(name)
        {
            console.log(name + ', explain about the UX design please');
        }
    } else if (job == 'teacher')
        {
            return function(name)
            {
                console.log('what subject' + name + 'do you teach');
            }
        } else {
            return function(name) {
                console.log('Hello ! What do you do ?' + name);
            }
        }
}

var retirementUs = interviewQuestion('teacher');
retirementUs('John');