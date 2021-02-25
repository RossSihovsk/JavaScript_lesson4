//1
console.log("Завдання 1");
var arr = [1,-7,14,-33,-25,42,65,234,76,-143,432,-94,0,-43,-23,10,23,993,-233];
console.log(arr);

console.log("Сортування по спаданню");
arr.sort(function (a,b){return b-a});
console.log(arr);

console.log("Сортування по зростанню");
arr.sort(function (a,b){return a-b});
console.log(arr);


//2
console.log("Завдання 2");
console.log("Фільтруєммо лише відємні значення в новий масив:");
var arr2 = arr.filter(function (a){
    return a<0
});
console.log(arr2);

console.log("Фільтруєммо лише додатні значення в новий масив:");
var arr3 = arr.filter(function (a){
    return a>=0;
});
console.log(arr3);


//3
console.log("Завдання 3")

class Student {
     constructor(yearOfStuding, groupName) {
         this.yearOfStuding = yearOfStuding;
         this.groupName = groupName;
     }
 }
var students = [new Student(1,"Computer science"),
    new Student(3,"Foreign language"),
    new Student(2,"Jurisprudence"),
    new Student(4,"Computer science"),
    new Student(1,"Jurisprudence"),
    new Student(3,"Computer science"),
    new Student(2,"Foreign language"),
    new Student(2,"Computer science"),
    new Student(5,"Jurisprudence"),
    new Student(3,"Foreign language"),
];

console.log(students)

function  customFunctionForMakingNewArray(array){
    let newArray =[];
    array.forEach(element =>{newArray.push(element.groupName); })
    return newArray;
}

console.log("Масив із значень groupName масиву обьектів students");
console.log(customFunctionForMakingNewArray(students));



function  customFunctionForCountSummary(array){
    let summa =0;
    array.forEach(element => {summa+=element.yearOfStuding});
    return summa;
}
console.log("Сумарне значення yearOfStuding для всіх об'єктів = "+customFunctionForCountSummary(students))