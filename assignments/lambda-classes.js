// CODE here for your Lambda Classes

class Person {
    constructor(persAttrs) {
        this.name = persAttrs.name;
        this.age = persAttrs.age;
        this.location = persAttrs.location;
    }
    speak() {
        return `Hello, my name is ${this.name}, I am from ${this.location}.`;
    }
}

class Instructor extends Person {
    constructor(instAttrs) {
        super(instAttrs);
        this.specialty = instAttrs.specialty;
        this.favLanguage = instAttrs.favLanguage;
        this.catchPhrase = instAttrs.catchPhrase;       
    }
    demo(subject) {
        return `Today we are learning about ${subject}`;
    }
    grade(student, subject) {
        return `${student.name} receives a perfect score on ${subject}`;
    }
}

class Student extends Person {
    constructor(stuAttrs) {
        super(stuAttrs);
        this.previousBackground = stuAttrs.previousBackground;
        this.className = stuAttrs.className;
        this.favSubjects = stuAttrs.favSubjects;
    }
    listsSubjects() {
        return `${this.favSubjects}`;
    }
    PRAssignment(subject) {
        return `${this.name} has submitted a PR for ${subject}.`;
    }
    sprintChallenge(subject) {
        return `${this.name} has begun sprint challenge on ${subject}.`;
    }
}

class TeamLead extends Instructor {
    constructor(tlAttrs) {
        super(tlAttrs);
        this.gradClassName = tlAttrs.gradClassName;
        this.favInstructor = tlAttrs.favInstructor;
    }
    standUp(channel) {
        return `${this.name} announces to ${channel}, @Channel standy times!`;
    }
    debugsCode(student, subject) {
        return `${this.name} debugs ${student.name}'s code on ${subject}`;
    }
}

let teacher = new Instructor({
    name: 'Mario',
    location: 'NY',
    age: '42',
    specialty: 'Plumbing',
    favLanguage: 'JavaScript',
    catchPhrase: "It's-a me! Mario!",
})

let apprentice = new Student({
    name: 'Luigi',
    location: 'NY',
    age: '38',
    previousBackground: 'Little Brother',
    className: 'WEBPT11',
    favSubjects: ['HTML', 'CSS', 'JavaScript'],
})

let mentor = new TeamLead({
    name: 'Toad',
    location: 'Mushroom Kingdom',
    age: '100',
    specialty: 'Being annoying',
    favLanguage: 'PHP',
    catchPhrase: "Thank you Mario, but our princess is in another castle!",
    gradClassName: 'WEBPT 3',
    favInstructor: 'Mario',
})

console.log(teacher.speak());
console.log(apprentice.speak());
console.log(mentor.speak());
console.log(teacher.demo('JavaScript'));
console.log(teacher.grade(apprentice, 'Advanced CSS'));
console.log(apprentice.listsSubjects());
console.log(apprentice.PRAssignment('HTML'));
console.log(apprentice.sprintChallenge('JavaScript'));
console.log(mentor.standUp('#webpt11'));
console.log(mentor.debugsCode(apprentice, 'JavaScript'));
console.log(mentor.demo('PHP'));
console.log(mentor.grade(apprentice, 'JavaScript'));