function task() {
    return new Promise(function (resolve, reject) {
        reject();
    });
}

task().then(function () {
    console.log("Success 1");
}).then(function () {
    console.log("Success 2");
}).then(function () {
    console.log("Success 3");
}).catch(function () {
    console.log("Error 1");
}).then(function () {
    console.log("Success 4");
})


var Person = function (firstName, lastName, dateOfBirth, measurements) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dateOfBirth = dateOfBirth;
    this.measurements = measurements;
}

person = new Person("Wonder", "Woman", new Date(2017, 4, 15), {
    weight: "58kg"
})

personClone = JSON.parse(JSON.stringify(person))


function after5s(x) {
    return new Promise((res) => {
        setTimeout(() => {
            res(x)
        }, 5000)
    })
}
async function mult(input) {
    const f = await after5s(3)
    const g = await after5s(4)
    return input * f * g
}

mult(2).then((value) => {
    console.log(value)
})

async function second_mult(input) {
    const f = after5s(3)
    const g = after5s(4)
    return input * await f * await g;
}

second_mult(2).then((value) => {
    console.log(value)
})


function f(x) { x += 1 }
function g(x) { x.value *= 5 }
var a;
var b = 1;
var c = { value: 2};
var d = c;
f(a);
f(b);
g(c);

console.log(a, b, c.value, d.value);


var studentId = "ab73"
function Student() {
    this.studentId = "b0e1"
}
console.log(new Student().studentId);
Student.prototype.studentId = "kj18"; Student.prototype.classId = "5e";
console.log(new Student().classId); console.log(new Student().studentId);