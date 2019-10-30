
export default class RadixClass {
  constructor(props) {
    this.addToQueue = addToQueue;
  }

  getIntLength = (num) => {
    return (
      (num === 0) ? 1 : Math.floor(Math.log10(Math.abs(num))) + 1
    )
  }

  getDigitFrom = (num, place) => {
    return (Math.floor(Math.abs(num) / Math.pow(10, place)) % 10); 
  }

  getMaxDigits(arr) {
    let max = 0;
    for (let i = 0; i < arr.length; i++) {
      max = Math.max(max, getIntLength(arr[i]));
    }

    return max;
  }

  radixSort(arr) {
    let max = getMaxDigits(arr);
    for (let i = 0; i < max; i++) {
      let buckets = Array.from({length: 10}, () => []);

      for (let j = 0; j < arr.length; j++) {
        let digit = getDigitFrom(arr[j], i);
        buckets[digit].push(arr[i]);
      }

      arr = [].concat(...buckets);
      this.addToQueue(arr);
    }

    return arr;
  }

  sort(arr) {
    const sorted = this.radixSort(arr);
    return sorted;
  }
}