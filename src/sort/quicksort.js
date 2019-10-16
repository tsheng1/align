import {render} from '../map';

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function quickSort (arr) {
  if (arr.length < 2) return arr;
  // await sleep(100);
  
  const pivot = arr[0];
  let left = arr.slice(1).filter((el) => el < pivot);
  let right = arr.slice(1).filter((el) => el >= pivot);
  left = setTimeout(function() {quickSort(left)}, 100);
  right = quickSort(function () { quickSort(right) }, 100);

  return left.concat([pivot]).concat(right);
}

const quickTimeOut = arr => {
  setTimeout(function() {quickSort(arr)}, 100);
} 

export default quickTimeOut;