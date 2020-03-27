/*
let firstName = 'John';
console.log(firstName);
console.log();
*/

// Coding challenge

// let markMass = 78;
// let markHeight = 179;
// let johnMass = 73;
// let jonhHeight = 177;

// let markBMI = markMass / (markHeight * markHeight);
// console.log(markBMI);


// let johnBMI = johnMass / (jonhHeight * jonhHeight);
// console.log(johnBMI);


// let winnerResult = markBMI < johnBMI;

// console.log("Is Mark's BMI higher than John's? " + winnerResult);



// Cod Chall 2 

// let johnTeamFirst = 209;
// let johnTeamSecond = 120;
// let johnTeamThird = 103;

// let johnAvg = (johnTeamFirst + johnTeamSecond + johnTeamThird) / 3;


// let mikeTeamFirst = 116;
// let mikeTeamSecond = 94;
// let mikeTeamThird = 183;

// // let mikeTeamFirst = 89;
// // let mikeTeamSecond = 120;
// // let mikeTeamThird = 103;

// let mikeAvg = (mikeTeamFirst + mikeTeamSecond + mikeTeamThird) / 3;

// let maryTeamFirst = 97;
// let maryTeamSecond = 134;
// let maryTeamThird = 105;

// // let maryTeamFirst = 89;
// // let maryTeamSecond = 120;
// // let maryTeamThird = 103;

// let maryAvg = (maryTeamFirst + maryTeamSecond + maryTeamThird) / 3;

// if (johnAvg > mikeAvg && johnAvg > maryAvg ){
//     console.log('John\'s team is winner with the score of ' + johnAvg);
// }else if(mikeAvg > johnAvg && mikeAvg > maryAvg){
//     console.log('Mike\'s team is winner with the score of ' + mikeAvg);
// }else if (maryAvg > johnAvg && maryAvg > mikeAvg){
//     console.log('Mary\'s team is winner with the score of ' + maryAvg)
// }else {
//     console.log('Oppppssss. it\'s a draw');
// }


// Cod Chall 3 (Arrays)Tip calculator
//  function tipCalculator(checkAmount){
//     let tipAmount = 0;
//     let tipArr = [];
//     let finalAmountArr = [];

//     checkAmount.forEach(element => {
//         if(element < 50){
//             tipAmount = element * 0.2;
//             tipArr.push(tipAmount);
//             finalAmountArr.push(element + tipAmount);
//         }else if(element >= 50 && element <= 200){
//             tipAmount = element * 0.15;
//             tipArr.push(tipAmount);
//             finalAmountArr.push(element + tipAmount);
//         }else {
//             tipAmount = element * 0.1;
//             tipArr.push(tipAmount);
//             finalAmountArr.push(element + tipAmount);
//         }
//     });
//     return [tipArr, finalAmountArr];
// };

// console.log(tipCalculator([124, 48, 268]));


// Cod Chall 4 (Object)

// let markData = {
//     name: 'Mark',
//     mass: 82,
//     height: 175,
//     calcBMI: function(){
//         this.bmi = this.mass / (this.height * this.height);
//         return this.bmi;
//     }
// };

// let jonhData = {
//     name: 'Jonh',
//     mass: 76,
//     height: 182,
//     calcBMI: function(){
//         this.bmi = this.mass / (this.height * this.height);
//         return this.bmi;
//     }
// };


// !!!! Don't forget to call method!!!!
// markData.calcBMI();
// jonhData.calcBMI();
// console.log(jonhData, markData);



// if(jonhData.bmi > markData.bmi){
//     console.log( jonhData.name + ' has biggest BMI here and it counts in' + jonhData.bmi);
// }else if(markData.bmi > jonhData.bmi){
//     console.log( markData.name + ' has biggest BMI here and it counts in' + markData.bmi);
// }else {
//     console.log('Opps. It\'s draw...');
// }


// Loops training

// let john = ['John', 'Smith', 1990, 'designer', false];

// for loop
// for(var i = 0; i < john.length; i++){
//     console.log('Here is array item ' + john[i]);
// }

// while loop
// let i = 0;
// while(i < john.length){
//     console.log('Here is array item ' + john[i]);
//     i++;
// }

// continue and break statements

// let john = ['John', 'Smith', 1990, 'designer', false];

// for(let i = 0; i < john.length; i++){
//     // continue instead of regular if 
//     if(typeof john[i] !== 'string') continue;
//     console.log('Here is array item ' + john[i]);
// }

// for(let i = 0; i < john.length; i++){
//     // break instead of regular if
//     if(typeof john[i] !== 'string') break;
//     console.log('Here is array item ' + john[i]);
// }

// visa versa iteration in for loop

// for(let i = john.length - 1; i >= 0; i--){
//     console.log(john[i]);
// }


// Cod Chall 4 Advanced Tip calculator
// Cod Chall 4 + additional task
let johnExpenses = {
    billValues: [124, 48, 268, 180, 42],
    calcTips: function(){
        this.tipArr = [];
        this.finalAmountArr = [];
            
        for (let i = 0; i < this.billValues.length; i++) {
            let tipPercent;
            let currentBill = this.billValues[i];

            if(currentBill < 50){
                tipPercent = 0.2;
            }else if(currentBill >= 50 && currentBill <= 200){
                tipPercent = 0.15;
            }else {
                tipPercent = 0.1;
            }

            this.tipArr.push(currentBill * tipPercent);
            this.finalAmountArr.push(currentBill + this.tipArr[i]);
        }
    }
}

let markExpenses = {
    billValues: [77, 375, 110, 45],
    calcTips: function(){
        this.tipArr = [];
        this.finalAmountArr = [];
            
        for (let i = 0; i < this.billValues.length; i++) {
            let tipPercent = 0;
            let currentBill = this.billValues[i];

            if(currentBill < 100){
                tipPercent = 0.2;
            }else if(currentBill >= 100 && currentBill <= 300){
                tipPercent = 0.1;
            }else {
                tipPercent = 0.25;
            }

            this.tipArr.push(currentBill * tipPercent);
            this.finalAmountArr.push(currentBill + this.tipArr[i]);
        }
    }
}

// Do the calculations 
johnExpenses.calcTips();
markExpenses.calcTips();
console.log(johnExpenses, markExpenses);

function calcAvg(tipArr){
    let tipsSumm = 0;
    
    for (let i = 0; i < tipArr.length; i++) {
        tipsSumm += tipArr[i];
    }

    return tipsSumm / tipArr.length;
}

// write average property
johnExpenses.average = calcAvg(johnExpenses.tipArr);
markExpenses.average = calcAvg(markExpenses.tipArr);
console.log(johnExpenses, markExpenses);


if(johnExpenses.average > markExpenses.average) {
    console.log('John\'s family paid more tips on average --> ' + johnExpenses.average);
}else if(markExpenses.average > johnExpenses.average){
    console.log('Mark\'s family paid more tips on average --> ' + markExpenses.average);
}else {
    console.log('Ooops. It\'s a draw...');
}





 
