process.stdout.write('hello from spinner1.js... \rheyyy\n');

const sentence = "|/-\|/-\|";
let delay = 0;
for (const char of sentence) {
  delay +=200;
  setTimeout(() => {
    process.stdout.write("\r" + char + "   ");
  }, delay)
}