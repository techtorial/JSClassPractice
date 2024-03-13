let count=0; 

for(let i=100; i<=200; ){
    count++; 
    if(i % 11 === 0){
        console.log(i);
        i=i+11; 
        continue; 
    }
    i++;
}

console.log(count++);






