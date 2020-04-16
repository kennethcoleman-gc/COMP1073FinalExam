// JavaScript Document

// This program overall defines two classes and defines two objects for the first, and one for the second.
// And that's about it.... zzzzZzzzz....

// This is an ES6 definition for a class, in this case representing a person
class Person {
  // The constructor accepts 4 parameters when instantiated... well, now 5 after fixing a boo boo...
  // see below
  constructor(name, age, gender, classes, interests) {
    // Parameters are assigned to class properties

    // this.name is actually not assigned to anything... oops
    // Fixed that for ya!
    // this.name;
    this.name = name;
    this.age = age;
    this.gender = gender;

    // Another boo boo in the code... the parameter 'classes' was is passed but in in the constructor
    // but nothing is done with it. Fixed that.
    this.classes = classes;

    // interests is assigned interests, but interests isn't a
    // defined parameter in the constructor... fixed that too!
    this.interests = interests;
  }

  // Class method to display a personalized message to the console
  greeting() {
    console.log(`Hi! I'm ${this.name}`);
  };

  // Class method to display a customized farewell message
  bye() {
    // There is a boo boo in this too- this.name should not have an extra dot after it
    // Fixed that for you too ;)
    // console.log(`${this.name.} has left the building. Bye for now!`);
    console.log(`${this.name} has left the building. Bye for now!`);
  };
}

// Instantiates a new instance of the of the person object with information and assigns it a variable reference
// for future user
let parth = new Person('Parth', 20, 'male', ['JavaScript', 'Java', 'PHP'], '["fun", "bacon"]');
// Same same
let harmanpreet = new Person('Harmanpreet', 22, 'male', ['JavaScript', 'C#', 'Relational DataBase'], ["harman with harmony"]);

// Creates a class definition for a Teacher class that inherits from Person
class Teacher extends Person {
  // The constructor
  constructor(name, last, age, gender, classes, interests, subject, grade) {
    // Added a classes parameter to match the parent class, even though it is never assigned
    // The constructor of the super class is called and assigned the parameters it is expecting...
    // most of them anyway
    super(name, age, gender, interests);
    // subject and grade are specific to Teacher
    // ... and are assigned to class properties
    this.subject = subject;
    this.grade = grade;
  }
}

// This is how to instantiate a new Teacher object
let jessica = new Teacher('Jessica',
    'Gilfillan',
    'thirtysomething',
    'female',
    [],
    [
        'cats',
        'cats',
        'cats',
        'cats',
        'cats',
        'cats',
        'cats',
        'cats',
        'cats',
        'cats',
        'cats',
        'cats',
        'cats',
        'cats',
        'cats',
        'cats'
        ],
    "Javascript", 'A+');