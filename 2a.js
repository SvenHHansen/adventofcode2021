console.log("Adventofcode 2021 - 2.Dezember")

const fs = require('fs');

try {
    // read contents of the file
    const data = fs.readFileSync('2a.txt', 'UTF-8');

    // split the contents by new line
    const lines = data.split(/\r?\n/);

    let position = 0;
    let depth = 0;

    // print all lines
    lines.forEach((line) => {
        console.log(line);
        let li = line.split(' ');
        switch (li[0]) {
            case 'forward':
                position += eval(li[1]);
                break;
            case 'up':
                depth -= eval(li[1]);
                break;
            case 'down':
                depth += eval(li[1]);
                break;
        }
    });

    console.log();
    console.log("Final position: " + position);
    console.log("Final depth:" + depth);
    console.log("SOLUTION: " + position*depth);
} catch (err) {
    console.error(err);
}