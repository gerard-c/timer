const stdin = process.stdin;
stdin.setRawMode(true);
stdin.setEncoding('utf8');

console.log(" *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*");
console.log("*-*-*-*-*-*-* PRESS B TO BEEP *-*-*-*-*-*-*");
console.log("*-*-*-* ENTER NUMBER FOR TIMED BEEP *-*-*-*");
console.log("*-*-*-*-*-*-* CTRL + C = EXIT *-*-*-*-*-*-*");
console.log(" *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*");

const beep = () => {
  process.stdout.write('\x07');
  console.log("BEEP!");
};

process.stdin.on('data', (key) => {
  const num = Number(key);
  if (!isNaN(num) && num > 0) {
    console.log(`Setting timer for ${num} seconds...`);
    setTimeout(() => {
      beep();
    }, num * 1000);
  }
  if (key === 'b') {
    beep();
  }
  if (key === '\u0003') {
    console.log("Thanks for using me 😎 Ciao!");
    process.exit();
  }
});