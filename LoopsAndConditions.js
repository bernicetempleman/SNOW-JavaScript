//if statements
const time=new Date().getHours();
console.log(time);
if(time<10)
    console.log("Good Morning")
else if (time <20)
    console.log("Good Afternoon")
else
    console.log("Good Evening")

    const day=new Date().getDay();
    console.log(day)
    //sunday=0, etc
    if(day==3)
    console.log("Wednesday");
    //better to use switch
    switch(day){
        case 0: 
            console.log("Sunday");
            break;
        case 1: 
            console.log("Monday");
            break;
        case 2: 
            console.log("Tuesday");
            break;
        case 3: 
            console.log("Wednesday");
            break;
        case 4: 
            console.log("Thursday");
            break;
        case 5: 
            console.log("Friday");
            break;
        case 6: 
            console.log("Saturday");
            break;
    }
    //loop for repetitive task
    for(i=0;i<10;i++)
        console.log("for: " + i);

    j=0;
    while(j<10){
        console.log("while: " + j);
        j++;
    }
    //do while
    k=0;
    do{
        console.log("do while: " + k);
        k++;
    } while (k<-1)

    //functions/ reusability
    

    
    