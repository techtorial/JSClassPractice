
for(let i=0;i<=10; i++){

    console.log(i);
    if(i==5){
        
        break;// one break is executed nearest loop will stop executing. 
    }

}

for(let i=0;i<=10; i++){

     // 0,1,2,3,4,6,7,8,9,10
    if(i==5){
        
        continue; // will skip the current iteration and continue from the next iteration. 
    }
    console.log(i);
}



