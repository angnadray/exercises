/* # The Cashier Problem 

Create a program that helps a cashier give adequate change to customers. 
The program should return the amount of notes and coins for the customer's change. 

Example: If the price is €3.75 and the paid amount is €50, then the client should 
receive €46.25 back in change. 
* The expected output should be: 
* 2 x €20 // 2 twenty euro notes
* 1 x €5 // 1 five euro note
* 1 x €1 // 1 euro
* 1 x €0.2 // 1 twenty cent coin
* 1 x €0.05 // 1 five cent coin

Example: Price: €4.50, Paid amount: €20, Change: 15.50
* Expected output: 
* 1 x €10
* 1 x €5
* 1 x €0.5

* Notes
* Include outputs for exceptions e.g. price: €4, paid amount: €3.  */



    /*  function cashier(price, paid) {

        let cashCounter = [
        {20:10}, {10:10}, {5:10}, {2:10}, {1:10}, {0.5:10}, {0.20:10}, {0.10:10}, {0.05:10}, 
        {0.02:10}, {0.01:10} ];

           cashCounter.forEach(item => {
            for(let key in item){
                while(change >= Number(key)){
                    change = change -Number(key);
                    --item[key];
                }
            }
        }) */

//__________________________________________________________

    function cashier(price, paid) {
        let changetocustomer = [
            {20:0}, {10:0}, {5:0}, {2:0}, {1:0}, {0.5:0}, {0.20:0}, {0.10:0}, {0.05:0}, 
            {0.02:0}, {0.01:0} ];
        let change = paid - price;
     
        changetocustomer.forEach(item => {
        /* to run a loop on every item of the array */

            for(let key in item){
                /* to loop through the key inside of every the objects in the array */

                while(change.toFixed(2) >= Number(key)){
                    /* toFixed is used to round up a decimal */
                    change = change - Number(key);
                    item[key]++; 
                }
                /* to check inside the object to find out if change is greater or equal
                than the object key or move forward to the next key if it is not */
            }
        });

        let result = changetocustomer.filter(item => {
            for(let key in item) {
               return item[key] != 0;
            }
            /* to filter items that don't equal 0 and have to be given as exchange to 
            the costumer */
        })
        console.log(result);  
    }
    cashier(47.89, 100);