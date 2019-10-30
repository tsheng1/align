import QuickSortClass from "./sort/quicksort";
import BubbleSortClass from "./sort/bubblesort";
import MergeSortClass from "./sort/mergesort";
import HeapSortClass from "./sort/heapsort";
import CocktailSortClass from "./sort/cocktailsort";
import RadixClass from "./sort/radix";

export default class Map {
  constructor() {
    this.queue = [];
    this.addToQueue = this.addToQueue.bind(this);
    this.render = this.render.bind(this);
    this.sortingArr = [];
    this.newArr = this.newArr.bind(this);
    this.randomIntFromInterval = this.randomIntFromInterval.bind(this);
    this.fisherShuffle = this.fisherShuffle.bind(this);
    
    this.bubbleSortButtonFunc = this.bubbleSortButtonFunc.bind(this);
    this.quickSortButtonFunc = this.quickSortButtonFunc.bind(this);
    this.mergeSortButtonFunc = this.mergeSortButtonFunc.bind(this);
    this.heapSortButtonFunc = this.heapSortButtonFunc.bind(this);
    this.radixSortButtonFunc = this.radixSortButtonFunc.bind(this);
    this.cocktailSortButtonFunc = this.cocktailSortButtonFunc.bind(this);
    this.fisherShuffleFunc = this.fisherShuffleFunc.bind(this);
    this.createButton = this.createButton.bind(this);

    this.quickSort = new QuickSortClass(this.addToQueue);
    this.bubbleSort = new BubbleSortClass(this.addToQueue);
    this.mergeSort = new MergeSortClass(this.addToQueue);
    this.heapSort = new HeapSortClass(this.addToQueue);
    this.cocktailSort = new CocktailSortClass(this.addToQueue);
    this.radixSort = new RadixClass(this.addToQueue);

    this.processSpeed;
    this.processQueueInterval = setInterval(() => {
      this.processQueue();
    }, this.processSpeed)
  }

  addToQueue(arr) {
    this.queue.push({
      arr: arr.slice()
    })
  }

  processQueue() {
    if (this.queue[0]) {
      const swap = this.queue.shift();
      this.render(swap.arr);
    }
  }

  randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  newArr() {
    d3.selectAll("div > *").remove();
    this.sortingArr = []; 
    let tempArr = [];
    for(let i = 0; i < 190; i++) {
      // this.sortingArr.push(this.randomIntFromInterval(5, 400));
      tempArr.push(i);
      this.sortingArr = shuffleArray(tempArr);
    }
    this.render(this.sortingArr);
    this.createButton(); 
  }

  render(arr){

    d3.selectAll("svg > *").remove();

    let colors = d3.scaleLinear()
      .domain([0, 190])
      // .range(["#ff99ff", "#1f3d7a"])
      .range(["#00dbc2", "#c70e55"])
    
    let margin = { "top": 20, "right": 30, "bottom": 20, "left": 30 }
    let width = 500;
    let height = 600;
    let rectWidth = 5;

    let xMax = 5 * rectWidth;
    let xScale = d3.scaleLinear()
      .domain([0, width])
      .range([margin.left, width - margin.right]);
    let yMax = d3.max(arr, function (d) { return d });
    let yScale = d3.scaleLinear()
      .domain([0, yMax])
      .range([height - margin.bottom, margin.top]);

    let svg = d3.select('svg');

    let rect = svg.selectAll('rect')
      .data(arr)
      .enter().append('rect')
      .attr('x', function (d, i) {
        return xScale(i * (rectWidth + 2))
      })
      .attr('y', function (d) {
        return yScale(d)
      })
      .attr('width', (rectWidth))
      .attr('height', function (d) {
        return height - margin.bottom - yScale(d)
      })
      .attr('margin', 1)
      .attr('class', 'rectangle')
      .attr("fill", d => colors(d))
      .style({'stroke': '#ffffff', 'stroke-width': '1'})

  }


  createButton() {
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

    const radixSortButton = document.createElement("button");
    radixSortButton.type = "button";
    radixSortButton.value = "Radix Sort";
    radixSortButton.innerHTML = "Radix Sort";
    radixSortButton.className += "button";
    radixSortButton.onclick = (this.radixSortButtonFunc);

    const shuffleButton = document.createElement("button");
    shuffleButton.type = "button";
    shuffleButton.value = "Shuffle";
    shuffleButton.innerHTML = "Shuffle";
    shuffleButton.className += "button";
    shuffleButton.addEventListener('click', () => {this.newArr()});

    const fisherShuffle = document.createElement("button");
    fisherShuffle.type = "button";
    fisherShuffle.value = "Fisher-Yates Shuffle";
    fisherShuffle.innerHTML = "Fisher-Yates Shuffle";
    fisherShuffle.className += "button";
    fisherShuffle.onclick = this.fisherShuffleFunc;

    const sortButtonsDiv = document.getElementById("sort-buttons")
    sortButtonsDiv.append(quickSortButton);
    sortButtonsDiv.append(mergeSortButton);
    sortButtonsDiv.append(radixSortButton);
    sortButtonsDiv.append(heapSortButton);
    sortButtonsDiv.append(cocktailSortButton);
    sortButtonsDiv.append(bubbleSortButton);
    
    const shuffleButtonsDiv = document.getElementById("shuffle-buttons")
    shuffleButtonsDiv.append(shuffleButton);
    shuffleButtonsDiv.append(fisherShuffle);
  }

  quickSortButtonFunc(e) {
    e.preventDefault();
    this.processSpeed = 30;
    if (!this.queue.length) {
      this.sortingArr = this.quickSort.sort(this.sortingArr.slice());
    }
  }

  bubbleSortButtonFunc(e) {
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

  radixSortButtonFunc(e) {
    e.preventDefault();
    this.processSpeed = 100;
    if (!this.queue.length) {
      this.sortingArr = this.radixSort.sort(this.sortingArr.slice());
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

}


function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }

  return array;
}