
export default class CocktailSortClass {
  constructor(addToQueue) {
    this.addToQueue = addToQueue
  }

  sort(arr) {
    let resultArr = arr.slice();
    let sorted = false;
    let start = 0;
    let end = resultArr.length
    while (!sorted) {
      sorted = true;

      for (let i = start; i < end - 1; i++) {
        if (resultArr[i] < resultArr[i - 1]) {
          sorted = false;
          [resultArr[i], resultArr[i - 1]] = [resultArr[i - 1], resultArr[i]];
          this.addToQueue(resultArr);
        }
      }

      if (sorted === true) break;

      sorted = true;
      end -= 1;

      for (let i = end; i >= start; i--) {
        if ((resultArr[i] < resultArr[i - 1])) {
          sorted = false;
          [resultArr[i], resultArr[i - 1]] = [resultArr[i - 1], resultArr[i]];
          this.addToQueue(resultArr);
        }
      }

      start += 1;
    }
    this.addToQueue(resultArr);
  }
}