import QuickSortClass from "./sort/quicksort";


export default class Map {
  constructor() {
    this.queue = [];
    this.addToQueue = this.addToQueue.bind(this);
    this.render = this.render.bind(this);
    this.sortingArr = [];
    this.newArr = this.newArr.bind(this);
    this.randomIntFromInterval = this.randomIntFromInterval.bind(this);
    this.quickSortButtonFunc = this.quickSortButtonFunc.bind(this);
    this.createButton = this.createButton.bind(this);

    this.quickSort = new QuickSortClass(this.addToQueue);

    this.processQueueInterval = setInterval(() => {
      this.processQueue();
    }, 30)
  }

  addToQueue(arr, indices = []) {
    this.queue.push({
      arr: arr.slice(),
      indices
    })
  }

  processQueue() {
    if (this.queue[0]) {
      const swap = this.queue.shift();
      this.render(swap.arr, swap.indices);
    }
  }

  randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  newArr() {
    d3.selectAll("div > *").remove();
    this.sortingArr = []; 
    for(let i = 0; i < 190; i++) {
      this.sortingArr.push(this.randomIntFromInterval(5, 100));
    }
    this.render(this.sortingArr);
    this.createButton(); 
  }

  render(arr, indices){

    d3.selectAll("svg > *").remove();
    
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
      .style({'stroke': '#ffffff', 'stroke-width': '1'})

  }


  createButton() {
    const quickSortButton = document.createElement("button");
    quickSortButton.type = "button";
    quickSortButton.value = "Quick Sort";
    quickSortButton.innerHTML = "Quick Sort";
    quickSortButton.className += "button";
    quickSortButton.onclick = (this.quickSortButtonFunc);

    const shuffleButton = document.createElement("button");
    shuffleButton.type = "button";
    shuffleButton.value = "Shuffle";
    shuffleButton.innerHTML = "Shuffle";
    shuffleButton.className += "button";
    shuffleButton.addEventListener('click', () => {this.newArr()});

    const buttonsDiv = document.getElementById("buttons")
    buttonsDiv.append(quickSortButton);
    buttonsDiv.append(shuffleButton);
  }

  quickSortButtonFunc(e) {
    e.preventDefault();
    if (!this.queue.length) {
      this.sortingArr = this.quickSort.sort(this.sortingArr.slice())
    }
  }

}
