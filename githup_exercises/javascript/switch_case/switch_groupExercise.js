/* Task for group 3
Create the game "I pack my suitcase and I take with me .... "
The input is corresponding to the items in the suitcase.
packMySuitCase(1) =>"I pack my suitcase and take with me my red shirt."
packMySuitCase(4) =>"I pack my suitcase and take with me my red shirt, toy car, toothbrush, phone."
packMySuitCase(0) =>"Your suitcase is empty!"
packMySuitCase(7) =>"Your suitcase is full!" */

const suitCase = 5;
let output = 'I pack my suitcase and I take with me my ';

switch (suitCase) {
    case 6:
        output += 'phone' + ", ";  
    case 5:
        output += 'toy car' + ", ";
    case 4:
        output += 'toothbrush' + ", ";
    case 3:
        output += 'book' + ", ";
    case 2:
        output += 'red shirt';
        console.log(output);
        break;
    case 1:
        console.log('Your suitcase is full');
        break;
    case 0:
        console.log('Your suitcase is empty');
        break;
    default:
        console.log('Please pick a number from 0 to 6!');
}