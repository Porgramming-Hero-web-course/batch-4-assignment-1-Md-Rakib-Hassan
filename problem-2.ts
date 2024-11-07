//By using builtin functions or data structures

function removeDuplicates(num: Array<number>): Array<number> {
    return Array.from(new Set<number>(num));
}


// console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));






//////// By using multiple functions///////////

// function removeDuplicates(num: Array<number>): Array<number> {
//     let unique: Array<number>=[];
//     num.forEach((n:number):number => unique.find((element:number):boolean => element == n) ?? unique.push(n));
//     return unique;
// }




///////Manually implemented //////


// function removeDuplicates(num: Array<number>): Array<number> { 

//     let unique: Array<number> = [];
    
//     for (let i:number = 0; i < num.length; i++){
//         let duplicate:boolean = false;
//         for (let j: number = i-1; j >=0; j--) { 
//             if (num[i] === num[j]) {
//                 duplicate = true;
//                 break;
//             }
//         }
//         if(!duplicate)unique.push(num[i]);
//     }


//     return unique;
// }
