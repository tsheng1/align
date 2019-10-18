
export default class BubbleSortClass {
  constructor(addToQueue) {
    this.addToQueue = addToQueue
  }

  sort(arr) {
    let resultArr = arr.slice();
    let sorted = false;
    while (!sorted) {
      sorted = true;
      for (let i = 1; i < resultArr.length; i++) {
        if (resultArr[i] < resultArr[i - 1]) {
          sorted = false;
          [resultArr[i], resultArr[i - 1]] = [resultArr[i - 1], resultArr[i]];
          this.addToQueue(resultArr);
        }
      }
    }
    this.addToQueue(resultArr);
  }
}

// const bubbleSort = arr => {
//   let resultArr = arr.slice();
//   let sorted = false;
//   let promise = Promise.resolve();
//   while (!sorted) {
//     sorted = true;
//     for (let i = 1; i < resultArr.length; i++) {
//       if (resultArr[i] < resultArr[i - 1]) {
//         sorted = false;
//         [resultArr[i], resultArr[i - 1]] = [resultArr[i - 1], resultArr[i]];
//         promise = promise.then(function() {
//           render(resultArr);
//           return new Promise(function(resolve) {
//             setTimeout(resolve, 100);
//           })
//         })
//         }
//       }
//   }

//   console.log(resultArr);
//   render(resultArr);
// }
