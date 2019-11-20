# Align

## Background and Overview
  
Align is a visualization of some of the most popular sorting algorithms. Much of the focus of this project is to not only showcase the functionality of the algorithms but also to highlight the aesthetics and appeal of data in 2D space.

## Functionality and MVP Features

In Align, users are able to:

* Choose the type of sorting algorithm they want to see
* Start, shuffle, and restart the visualization

![](https://github.com/tsheng1/align/blob/master/align2.png)

## Architecture and Technologies

This project was created with the following:

* ```JavaScript```
* ```D3.js```

## Key Features
### Multiple Sorting Algorithms

Users are able to visualize quick sort, merge sort, radix sort, heap sort, cocktail sort, and bubble sort.

#### Quick Sort

Align uses a version of quick sort that sorts in place, which allows rendering of the data structure throughout the process.

```javascript

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

```