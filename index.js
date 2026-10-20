
const name = process.env.INPUT_STUDENT_NAME || "Student";
const message = `Welcome, ${name}! Your custom action is running.`;

console.log(message);

if (process.env.GITHUB_OUTPUT) {
  const fs = require("fs");
  fs.appendFileSync(
    process.env.GITHUB_OUTPUT,
    `message=${message}\n`
  );
}
