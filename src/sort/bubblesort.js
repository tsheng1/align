
import { render } from "../map";

// const bubbleSort = arr => {
//   let resultArr = arr.slice();
//   let sorted = false;
//   while(!sorted) {
//     sorted = true;
    // for (let i = 1; i < resultArr.length; i++) {
    //   (function (i) {
    //     setTimeout(function () {
//           if (resultArr[i] < resultArr[i - 1]) {
//             sorted = false;
//             [resultArr[i], resultArr[i - 1]] = [resultArr[i - 1], resultArr[i]];
//             render(resultArr);
//           }
//         }, 100 * i)
//       })(i);
//     }
//   }
//   console.log(resultArr);
//   render(resultArr);
// }

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function bubbleSort (arr) {
  let resultArr = arr.slice();
  let sorted = false;
  while (!sorted) {
    sorted = true;
    for (let i = 1; i < resultArr.length; i++) {
      await sleep(.00001);
      if (resultArr[i] < resultArr[i - 1]) {
        sorted = false;
        [resultArr[i], resultArr[i - 1]] = [resultArr[i - 1], resultArr[i]];
        render(resultArr);
      }
    }
  }
  // console.log(resultArr);
  render(resultArr);
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

export default bubbleSort;
