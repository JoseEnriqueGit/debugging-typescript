console.log('print 1');

console.log('print 2');

setTimeout(() => {
  console.log('print 3');
  setTimeout(() => { console.log('print 4')  }, 0);
}, 1);

setTimeout(() => {
  console.log('print 5');
}, 0);

console.log('print 6');
console.log('print last?');

// on which order the logs will show up?
// why?