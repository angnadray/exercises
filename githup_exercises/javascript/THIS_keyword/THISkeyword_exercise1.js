// Objects converted to Function using the THIS Keyword

/* 1. Write a program to list the properties of an object. 
E.g.
const student = { 
firstName: "John", 
lastName: "Smith", 
class: 12 };
Expected Output: firstName, lastName, class */

/* let client = {
    userName: "Lila19",
    plan: "Gold",
    contract: "2 years",
}
for(const key in client) {
    console.log(client[key]);   
} */

/* 
Lila19
Gold
2 years
 */
let client = {
    userName: "Lila19",
    plan: "Gold",
    contract: "2 years",
}
function data() {
    const values = Object.values(this);
    console.log(values);
    
}
data.call(client); // [ 'Lila19', 'Gold', '2 years' ]

/* 2. Create a person object. Include the person's first and last name, age, job, city etc. 
Then print text by retrieving data from the object e.g. "John Smith is a 41 year old engineer 
living in France". */ 

let person = {
    firstName: "Lila",
    lastName: "Moon",
    age: "23",
    job: "Dancer",
    city: "Berlin",
}

function retrieve() {
    const values = Object.values(this);
    console.log(`${values[0]} ${values[1]} is a ${values[2]} year old ${values[3]} living in ${values[4]}`);
}

retrieve.call(person); // Lila Moon is a 23 year old Dancer living in Berlin.

/* 3. Write a JavaScript program to delete the "class" property (or last property) from the 
previous object. */

delete person.city;
console.log(person); // { firstName: 'Lila', lastName: 'Moon', age: '23', job: 'Dancer' }


/* 4. Write a program to get the length of a JavaScript object. */

console.log(Object.keys (person).length); // 4


/* 5. Write a program to display the reading status (i.e. display book name, author name and reading 
status) of the following books.
const library = [ 
   {
       author: 'J.K. Rowling',
       title: 'Harry Potter and the Chamber of Secrets',
       readingStatus: true
   },
   {
       author: 'Homer',
       title: 'The Odyssey',
       readingStatus: true
   },
   {
       author: 'Harper Lee',
       title:  'To Kill a Mockingbird', 
       readingStatus: false
   }];
E.g. Output: 
Already read Harry Potter and the Chamber of Secrets by J.K. Rowling
Already read The Odyssey by Homer
You still need to read To Kill a Mockingbird by Harper Lee */

let library = [ 
    {
        author: 'J.K. Rowling',
        title: 'Harry Potter and the Chamber of Secrets',
        readingStatus: true,
    },
    {
        author: 'Homer',
        title: 'The Odyssey',
        readingStatus: true,
    },
    {
        author: 'Harper Lee',
        title:  'To Kill a Mockingbird', 
        readingStatus: false,
    }
];

for (let i = 0; i < library.length; i++) 
   {
    let book = `${library[i].title} by ${library[i].author}`;
    if (library[i].readingStatus) {
      console.log(`Already read ${book}`);
    } else
    {
     console.log(`You still need to read ${book}`);
    }
   }
    /* Already read Harry Potter and the Chamber of Secrets by J.K. Rowling
    Already read The Odyssey by Homer
    You still need to read To Kill a Mockingbird by Harper Lee
     */