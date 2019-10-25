export function createButton() {
  const bubbleSortButton = document.createElement("button");
  bubbleSortButton.type = "button";
  bubbleSortButton.value = "Bubble Sort";
  bubbleSortButton.innerHTML = "Bubble Sort";
  bubbleSortButton.className += "button";
  bubbleSortButton.onclick = (this.bubbleSortButtonFunc);

  const quickSortButton = document.createElement("button");
  quickSortButton.type = "button";
  quickSortButton.value = "Quick Sort";
  quickSortButton.innerHTML = "Quick Sort";
  quickSortButton.className += "button";
  quickSortButton.onclick = (this.quickSortButtonFunc);

  const mergeSortButton = document.createElement("button");
  mergeSortButton.type = "button";
  mergeSortButton.value = "Merge Sort";
  mergeSortButton.innerHTML = "Merge Sort";
  mergeSortButton.className += "button";
  mergeSortButton.onclick = (this.mergeSortButtonFunc);

  const heapSortButton = document.createElement("button");
  heapSortButton.type = "button";
  heapSortButton.value = "Heap Sort";
  heapSortButton.innerHTML = "Heap Sort";
  heapSortButton.className += "button";
  heapSortButton.onclick = (this.heapSortButtonFunc);

  const cocktailSortButton = document.createElement("button");
  cocktailSortButton.type = "button";
  cocktailSortButton.value = "Cocktail Sort";
  cocktailSortButton.innerHTML = "Cocktail Sort";
  cocktailSortButton.className += "button";
  cocktailSortButton.onclick = (this.cocktailSortButtonFunc);

  const shuffleButton = document.createElement("button");
  shuffleButton.type = "button";
  shuffleButton.value = "Shuffle";
  shuffleButton.innerHTML = "Shuffle";
  shuffleButton.className += "button";
  shuffleButton.addEventListener('click', () => { this.newArr() });

  const fisherShuffle = document.createElement("button");
  fisherShuffle.type = "button";
  fisherShuffle.value = "Fisher-Yates Shuffle";
  fisherShuffle.innerHTML = "Fisher-Yates Shuffle";
  fisherShuffle.className += "button";
  fisherShuffle.onclick = this.fisherShuffleFunc;

  const sortButtonsDiv = document.getElementById("sort-buttons")
  sortButtonsDiv.append(bubbleSortButton);
  sortButtonsDiv.append(quickSortButton);
  sortButtonsDiv.append(mergeSortButton);
  sortButtonsDiv.append(heapSortButton);
  sortButtonsDiv.append(cocktailSortButton);

  const shuffleButtonsDiv = document.getElementById("shuffle-buttons")
  shuffleButtonsDiv.append(shuffleButton);
  shuffleButtonsDiv.append(fisherShuffle);
}

export function quickSortButtonFunc(e) {
  e.preventDefault();
  this.processSpeed = 30;
  if (!this.queue.length) {
    this.sortingArr = this.quickSort.sort(this.sortingArr.slice());
  }
}

export function bubbleSortButtonFunc(e) {
  e.preventDefault();
  this.processSpeed = .5;
  if (!this.queue.length) {
    this.sortingArr = this.bubbleSort.sort(this.sortingArr.slice());
  }
}

cocktailSortButtonFunc(e) {
  e.preventDefault();
  this.processSpeed = .5;
  if (!this.queue.length) {
    this.sortingArr = this.cocktailSort.sort(this.sortingArr.slice());
  }
}

mergeSortButtonFunc(e) {
  e.preventDefault();
  this.processSpeed = 30;
  if (!this.queue.length) {
    this.sortingArr = this.mergeSort.sort(this.sortingArr.slice());
  }
}

heapSortButtonFunc(e) {
  e.preventDefault();
  this.processSpeed = 30;
  if (!this.queue.length) {
    this.sortingArr = this.heapSort.sort(this.sortingArr.slice());
  }
}

fisherShuffleFunc(e) {
  e.preventDefault();
  this.processSpeed = 30;
  this.sortingArr = this.fisherShuffle(this.sortingArr.slice());
}


fisherShuffle(array) {
  let len = array.length;

  while (len) {
    let i = Math.floor(Math.random() * len--)


    let t = array[len];
    array[len] = array[i];
    array[i] = t;
    this.addToQueue(array.slice());
  }

  return array;
}