let spinner = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r-   ', '\r/   ', '\r/   ', '\r|   ']
let time = 100;
for (let stage in spinner) {
  setTimeout(() => {process.stdout.write(spinner[stage]);}, time);
time+=200;
}
