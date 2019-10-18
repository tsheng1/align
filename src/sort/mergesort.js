

export default class MergeSortClass {
  constructor(addToQueue) {
    this.addToQueue = addToQueue;
    this.storedArr = [];
  }

  mergeSort(arr, start, end, auxArr) {
    if (start < end) {
      const mid = Math.floor((start + end) / 2);
      this.mergeSort(auxArr, start, mid, arr);
      this.mergeSort(auxArr, mid + 1, end, arr);
      this.merge(arr, start, mid, end, auxArr);
    }
  }

  merge(arr, start, mid, end, aux) {
    let i = start;
    let j = mid + 1;
    let k = start;

    while (i <= mid && j <= end) {
      this.addToQueue(arr.slice());
      debugger
      if (aux[i] <= aux[j]) {
        arr[k++] = aux[i++];
      } else {
        arr[k++] = aux[j++];
      } 
      this.addToQueue(arr.slice());
      debugger
    }

    while(i <= mid) {
      arr[k++] = aux[i++];
      this.addToQueue(arr.slice());
      debugger
    }
    while (j<= end) {
      arr[k++] = aux[j++];
      this.addToQueue(arr.slice());
      debugger
    }
  }

  // mergeSort(arr, start, end) {
  //   if (start < end) {
  //     const mid = Math.floor((start + end) / 2);
  //     this.mergeSort(arr, start, mid);
  //     this.mergeSort(arr, mid + 1, end);
  //     this.merge(arr, start, mid, mid + 1, end);
  //   };
  // }

  // merge(arr, start, mid, start2, end) {
  //   let arr1 = arr.slice(start, mid);
  //   let arr2 = arr.slice(start2, end);
  //   let arr3 = new Array(end - 1).fill(0)
  //   this.addToQueue(arr3.slice());
  //   let i = 0;
  //   let j = 0;
  //   let k = 0;

  //   while(i < arr1.length && j < arr2.length) {
  //     this.addToQueue(arr3.slice());
  //     if (arr1[i] < arr2[j]) {
  //       arr3[k++] = arr1[i++];
  //     } else {
  //       arr3[k++] = arr2[j++]; 
  //     }
  //     this.addToQueue(arr3.slice());
  //   }

  //   while (i < arr1.length) {
  //     arr3[k++] = arr1[i++];
  //     this.addToQueue(arr3.slice());
  //   }

  //   while (j < arr2.length) {
  //     arr3[k++] = arr2[j++];
  //     this.addToQueue(arr3.slice());
  //   }
  // }

  sort(arr) {
    let auxArr = arr.slice();
    const sorted = this.mergeSort(arr, 0, arr.length - 1, auxArr);
    if (sorted) {
      this.addToQueue(sorted);
    }
    return sorted;
  }
}