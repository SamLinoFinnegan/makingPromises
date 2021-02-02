
const posts = [
    { title: 'promise one: ', body: 'Always make my bed' },
    { title: 'promise two: ', body: 'Always clean my room' },
    { title: 'promise three: ', body: 'Always do my homework' },
    { title: 'promise four: ', body: 'Always take out the trash' }
]


function getPosts() {
    setTimeout(() => {
        let outPut = '';
        posts.forEach(post => {
            outPut += `<li>${post.title + post.body}</li>`
        });

        document.body.innerHTML += outPut;
    }, 500)
};

function creatPost(newPost) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(newPost);

            const error = false;
            if (!error) {
                resolve();
            } else {
                reject('Error: Something went wrong');
            }
        }, 1000);
    });

};

creatPost({ title: 'promise numba five: ', body: 'Friday night is always pizza night!!!!' }).then(getPosts).catch(err => console.log(err))


// // ----- promise.all ------- //

// const promise1 = Promise.resolve("Hello world");
// const promise3 = 22;
// const promise4 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 1000, "Goodbye")
// })
// const promise5 = fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json());

// Promise.all([promise1, promise3, promise4, promise5]).then(value => {
//     console.log(value)
// });



// =-=-=-=-=-=-=-=--=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-=-=-=-=  //


// const sinterklaasIsGul = true;


// const krijgIkEenNieuweiPhone = new Promise(
//     (resolve, reject) => {
//         if (sinterklaasIsGul) {
//             const smartphone = {
//                 merk: 'Apple',
//                 type: 'iPhone 11'
//             };
//             resolve(smartphone);
//         } else {
//             const metWelkeReden = new Error('Je bent stout geweest, geen cadeaus voor jou');
//             reject(metWelkeReden);
//         }

//     }
// );


// const vraagAanSinterklaas = () => {
//     krijgIkEenNieuweiPhone
//         .then(function (resolved) {

//             console.log(resolved);
//         })
//         .catch(function (error) {

//             console.log(error.message);
//         });
// }

// vraagAanSinterklaas();



// =-=-=-=-=-=-=-=--=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-=-=-=-=  //

/*
Exercise 1:
Write a function testNum that takes a number as an argument and returns a Promise that tests if the value is less than or greater than the value 10. Log the result to the console.
*/

function testNum(num) {
    return new Promise((resolve, reject) => {
        if (num > 10) {
            resolve(num);
        } else {
            reject(num);
        }
    });
};
testNum(12).then((num) => {
    console.log("Your number was " + num + " and it was bigger than ten")
}).catch((num) => {
    console.log("Your number was " + num + " and it was smaller than ten")
});

// =-=-=-=-=-=-=-=--=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-=-=-=-=  //

/*
Exercise 2:
Write two functions that use Promises that you can chain! The first function, makeAllCaps(), will take in an array of words and capitalize them, 
and then the second function, sortWords(), will sort the words in alphabetical order. If the array contains anything but strings, it should throw an error.
Then call these functions by *chaining* the promises
*/

const arrayOfWords = ['cucumber', 'tomatos', 'avocado'];
const complicatedArray = ['cucumber', 44, true];


const makeAllCaps = (words) => {
    return new Promise((resolve, reject) => {
        if (words.every(word => {
            return typeof word === "string";
        })) {
            resolve(sortWords(words.map(word => {
                return word.toUpperCase();
            })));
        } else {
            reject("Not a string");
        }
    });
};
const sortWords = (words) => {
    return new Promise((resolve, reject) => {
        if (words) {
            resolve(words.sort())
        } else {
            reject("Strings only")
        }
    })
};

makeAllCaps(arrayOfWords).then(sortWords(arrayOfWords)).then(result => console.log(result))
    .catch(error => console.log(error));

makeAllCaps(complicatedArray).then(sortWords(complicatedArray)).then(result => console.log(result))
    .catch(error => console.log(error));
