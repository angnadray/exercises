// loops & nested loops

/* 1. Write a program to compute the sum and product of an array of integers. */

let r = [2, 4, 6, 8],
    s = 0,
    m = 1,
    i;
for (i = 0; i < r.length; i += 1) 
   {
    s += r[i];
    m *= r[i];
    }
console.log(`Sum : ${s} & Product : ${p}`); // Sum : 20 & Product : 384

/* 2. Write a program to create the following pattern: 
    *  
    * * 
    * * *  
    * * * *  
    * * * * * 
*/  
let a,b,c;
for(a=1; a <=6; a++)
{
  for (b=1; b < a; b++)
    {
   c=c+("*");
     }
console.log(c);
c='';
}

/* 3. Write a program which prints the elements of the following array: 
let arr = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];
Sample Output: 
"row 0" 
" 1" 
" 2" 
" 1"
" 24"
"row 1" */
let ar = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];
 
for (let i in ar) 
{
   console.log(`row ${i}`);
   for (let j in ar[i]) 
     {
      console.log(` ${ar[i][j]}`);
     }
}
    /*  row 0
        1
        2
        1
        24
        row 1
        8
        11
        9
        4
        row 2
        7
        0
        7
        27
        row 3
        7
        4
        28
        14
        row 4
        3
        10
        26
        7
    */

/* 4. Write a program that will output the following using loops: 
>1 1 1 2 2 2 3 3 3 4 4 4 */
let n = 4;
let x = 1;

for (let i = 0; i <= n; i++) {
    console.log(i);
    for (let j = 0; j < x; j++) {
        console.log(j);
    }
    for (let j = 0; j < x; j++) {
        console.log(j);
    }
}
	
/* 5. Write a program that will output the following using loops: 
>0 1 2 3 4 0 1 2 3 4 0 1 2 3 4 */