
//rest operator ...
    function add(...num){
        sum=0;
        for(i=0;i<num.length;i++){
        sum =sum+num[i];}
        return sum;
    }
    console.log(add(10,20));
    console.log(add(10,20,30));

    //max of array
    console.log(Math.max(3,2,5));

    let arr = [13,15,1];
    console.log(Math.max(arr)); //NaN max oes not accept array

    console.log(Math.max(...arr)); //slide esg

