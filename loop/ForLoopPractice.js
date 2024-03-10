const names=["Sujan", "Pradeep", "Harry New", "Mandy", "Handerson", "Pradeep"];

// print only names which start with "Ha" AND(&&) letter size is more than 5. 
// names[indexNumber], at(indexNumber)

for(let i=0;i<names.length;i++){

    let str=names.at(i); 

    if(str.startsWith("Ha") && str.length > 5){
        console.log(str);
    }

}

// console.log(i); // runtime time error. since i is local variable for the loop. 

let school='Techtorial'; 
// 1. console.log(school[i]); , 
// 2. console.log(school.at(i));
// 3.  console.log(school.charAt(i));

for(let i=0; i<school.length; i++){

    console.log(school[i]);

}


const newNames=["Sujan", "Pradeep", "Harry New", "Mandy", "Handerson", "Pradeep"];


for(let i=0;i<newNames.length;i++){

    let str=newNames.at(i); 

    if(str === "Pradeep"){
        console.log(str);
    }
}









