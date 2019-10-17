

export default class CreateMap {
  constructor() {
    this.queue = [];
    this.addToQueue = this.addToQueue.bind(this);
    this.render = this.render.bind(this);
  }

  addToQueue(arr, indices = []) {
    this.queue.push({
      arr,
      indices
    })
  }

  processQueue() {
    if (this.queue) {
      const swap = this.queue.shift();
      this.render(swap.arr, swap.indices);
    }
  }

  randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  newArr(num) {
    const arr = [];
    for(let i = 0; i < num; i++) {
      arr.push(randomIntFromInterval(5, 100));
    }
    return arr;
  }

  createMap = num => {
    let data = newArr(num);

    console.log(data)

    d3.select(".chart")
      .selectAll("div")
      .data(data)
      .enter()
      .append("div")
      .style("width", function (d) { return d + "px"; })

    return data;
  }

  render = arr => {
    d3.select(".chart")
      .selectAll("div")
      .data(arr)
      .enter()
      .append("div")
      .style("width", function (d) { return d + "px"; })
  }

}