
//By using builtin functions
function sumArray(num: number[]): number { 
    const sum:number=num.reduce((acc:number, val:number):number => acc + val, 0);
    return sum;
}

// console.log(sumArray([1, 2, 3, 4, 5]));





///////Manually implemented //////

// function sumArray(num: number[]): number { 
//     let sum:number = 0;
//     num.forEach((val:number):number => sum += val)
//     return sum;
// }



