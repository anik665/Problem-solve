// Function to calculate grade
function result(num) {
    switch (true) {
        case (num >= 90): return "A+";
        case (num >= 80): return "A";
        case (num >= 70): return "A-";
        case (num >= 60): return "B";
        case (num >= 50): return "C";
        case (num >= 40): return "D";
        default: return "F";
    }
}

// Input from user using readline
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("🎓 Enter your marks: ", function(input) {
    let marks = Number(input);

    if (isNaN(marks)) {
        console.log("❌ Please enter a valid number.");
    } else {
        let grade = result(marks);
        console.log(`✅ Your Grade is: ${grade}`);
    }

    rl.close();
});
