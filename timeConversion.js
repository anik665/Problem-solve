function timeConversion(t){
    const ampm= t.slice(-2);
    const time= t.slice(0,8);
    let[hours,minutes,seconds]=time.split(':')
    if(ampm === 'AM'){
        if(hours ==='12'){
            hours='00';
        }
    }
    else{
        if(hours !== '12'){
            hours = String(Number(hours)+12)
        }
    }
    return `${hours}:${minutes}:${seconds}`;

} 
let result = timeConversion('07:05:45PM');
console.log(result)
console.log(timeConversion("12:00:00AM")); // ➞ "00:00:00"
console.log(timeConversion("01:00:00PM")); // ➞ "13:00:00"
console.log(timeConversion("12:00:00PM")); // ➞ "12:00:00"
console.log(timeConversion("11:59:59PM")); // ➞ "23: