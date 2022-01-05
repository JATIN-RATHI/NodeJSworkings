setTimeout(() => {
    console.log("Two seconds are up!");
}, 2000)
const names = ['Jatin', 'Jets', 'Shubhee'];
const shortNames = names.filter(()=>{
    return names.length <= 4;
})

const geocode = (address, callback) => {
    setTimeout(()=>{
        const data = {
            latitude:0,
            longitude:0
        }
        callback(data);
    }, 4000)
}

geocode('California', (data)=>{
    console.log(data);
});
//example 1
const addthenum = (a, b, callback)=>{
    setTimeout(()=>{
        const sum = a + b;
        callback(sum);
    }, 6000)
}

addthenum(5, 8, (sum)=>{
    console.log(sum);
})





