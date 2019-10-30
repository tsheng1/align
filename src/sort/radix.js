
export default class RadixClass {
  constructor(addToQueue) {
    this.addToQueue = addToQueue;

    this.getIntLength = this.getIntLength.bind(this);
    this.getDigitFrom = this.getDigitFrom.bind(this);
    this.getMaxDigits = this.getMaxDigits.bind(this);
    this.radixSort = this.radixSort.bind(this);
  }

  getIntLength(num) {
    return (
      (num === 0) ? 1 : Math.floor(Math.log10(Math.abs(num))) + 1
    )
  }

  getDigitFrom(num, place){
    return (Math.floor(Math.abs(num) / Math.pow(10, place)) % 10); 
  }

  getMaxDigits(arr) {
    let max = 0;
    for (let i = 0; i < arr.length; i++) {
      max = Math.max(max, this.getIntLength(arr[i]));
    }

    return max;
  }

  radixSort(arr) {
    if (!Array.isArray(arr)) {
      return null;
    }

    let max = this.getMaxDigits(arr);
    for (let i = 0; i < max; i++) {
      let buckets = Array.from({length: 10}, () => []);

      for (let j = 0; j < arr.length; j++) {
        let digit = this.getDigitFrom(arr[j], i);
        buckets[digit].push(arr[j]);

        let newArr = [].concat(...buckets)
        for (let k = 0; k < arr.length; k++) {
          if (newArr[k] === undefined) {
            newArr[k] = arr[k];
          } 
        }
        this.addToQueue(newArr);
        // this.addToQueue([].concat(...buckets));
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