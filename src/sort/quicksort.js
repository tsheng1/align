function swap(arr, left, right) {
  const temp = arr[left];
  arr[left] = arr[right];
  arr[right] = temp;
}

export default class QuickSortClass {
  constructor(addToQueue) {
    this.addToQueue = addToQueue;
  }

  partition(arr, left, right) {
    let pivot = arr[Math.floor((right + left) / 2)],
      i = left,
      j = right;
    while (i <= j) {
      while (arr[i] < pivot) {
        i++;
      }
      while (arr[j] > pivot) {
        j--;
      }
      if (i <= j) {
        swap(arr, i, j);
        this.addToQueue(arr)
        i++;
        j--;
      }
    }
    return i;
  }

  quickSort(arr, left, right) {
    let index;
    if (arr.length > 1) {
      index = this.partition(arr, left, right);
      if (left < index - 1) {
        this.quickSort(arr, left, index - 1);
      }
      if (index < right) {
        this.quickSort(arr, index, right);
      }
    }
    return arr;
  }

  sort(arr) {
    const sorted = this.quickSort(arr.slice(), 0, arr.length - 1);
    this.addToQueue(sorted);
    return sorted;
  }

}