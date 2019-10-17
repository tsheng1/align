function swap(arr, left, right) {
  const temp = arr[left];
  arr[left] = arr[right];
  arr[right] = temp;
}

export default class QuickSortClass {
  constructor(addToQueue) {
    this.addToQueue = this.addToQueue.bind(this);
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
        this.addToQueue(arr, {
          selectedIdxs:
          {
            [i]: true,
            [j]: true
          }
        })
        i++;
        j--;
      }
    }
    return i;
  }


}