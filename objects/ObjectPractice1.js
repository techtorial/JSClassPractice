
let student={

    fName:'David', 
    lName:'Turan',
    phone: '2234456677',
    location:{
        city:'Houston',
        state:['TX', 'IL']
    }, 
    writeCode: function(){
        console.log("Hello World!");
    }
}
// STUDENT is an OBJECT. 
console.log(student.lName);
console.log(student.location.city);
console.log(student.location.state[1]);
student.writeCode();















