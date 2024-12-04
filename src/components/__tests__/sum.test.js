const  sum = require ("../sum");

test ("it should calcualte sum of two numbers ", ()=>{
    const result = sum(3,4)


    //Assertion 
    expect(result).toBe(7)
})