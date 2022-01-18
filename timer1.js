args = process.argv.slice(2);

for (const arg of args) {
  let timer = Number(arg);
  if (timer < 0 || isNaN(timer)) {
    continue;
  }
  setTimeout(() => {
    process.stdout.write('\x07');
  }, timer * 1000);
};
