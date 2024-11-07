
function countWordOccurrences(sentence: string, word: string): number {
    sentence = sentence.toLowerCase();
    word = word.toLowerCase();
    const words: Array<string> = sentence.split(' ');
    let count:number = 0;

    words.forEach((ch:string):void => { 
        if (ch === word) count++;
    })
    return count;
}

// console.log(countWordOccurrences("I love typescript", "typescript"));











/////////// This is for partially matched with overlapping ///////////////

// function countWordOccurrences(sentence: string, word: string): number {
//     sentence = sentence.toLowerCase();
//     word = word.toLowerCase();
//     let count: number = 0;

//     for (let i: number = 0; i < sentence.length; i++){
//         if (sentence.substring(i, i + word.length) === word) count++;
//     }
//     return count;
// }
