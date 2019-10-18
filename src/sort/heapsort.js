
export default class HeapSortClass {
  constructor(addToQueue) {
    this.addToQueue = addToQueue
    this.heapSort = this.heapSort.bind(this);
    this.heapify = this.heapify.bind(this);
  }

  heapify(arr, length, i) {
    let largest = i;
    let left = i * 2 + 1;
    let right = left + 1;

    if (left < length && arr[left] > arr[largest]) {
      largest = left;
    }

    if (right < length && arr[right] > arr[largest]) {
      largest = right;
    }

    if (largest != i) {
      [arr[i], arr[largest]] = [arr[largest], arr[i]]
      this.addToQueue(arr);
      this.heapify(arr, length, largest)
    }

    return arr;
  }

  heapSort(arr) {
    let length = arr.length;
    let i = Math.floor(length / 2 - 1);
    let j = length - 1;

    while (i >= 0) {
      this.heapify(arr, length, i);
      i--;
    }

    while (j >= 0) {
      [arr[0], arr[j]] = [arr[j], arr[0]];
      this.heapify(arr, j, 0);
      j--;
    }

    return arr
  }

  sort(arr) {
    const sorted = this.heapSort(arr.slice());
    if (sorted) {this.addToQueue(sorted)};
    return sorted;
  }
}
