var lang = 'bangla'; //global variable


function learn(topic){
    // lang = topic; // we have changed lang variable's value
 
    var lang = topic;

     `now this is different.  this new lang variable which has no relations with global lang variable now this new lang variable can only be accessed inside this  function scope .`

    //blocked {} scoped let

    if(true){
        let a = 5;
        // let a = 6; // you can't redeclare same variable with let 
        a = 6; // but you can reassign variable a that oky 

        `NB: whereas you redeclare and reassign the same variable with var keyword it will give you no error. we will try to use let instead of var keyword to avoid confusions`


        const b = 8;

        `const is same as let but there is a only difference and that is you cant reassign the value of constant variable`


        // b = 10;// it will print error.

        const c ={
            d: 6,
        }

        c.d = 10;
        console.log(a)
        console.log(b)
        console.log(c)
    }
    


    console.log(`I m Learning ${lang}`);
}

learn('JavaScript');

console.log(`I know ${lang}`)