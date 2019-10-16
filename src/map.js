
export const createMap = numDots => {

  const bigCircle = d3
    .select(".circle-container")
    .attr("cx", 600)
    .attr("cy", 400)
    .attr("r", 200)
    .style("fill", "transparent")

  let circlesArr = [];

  for (let i = 0; i < numDots; i++) {
    circlesArr.push(i);
  }

  shuffle(circlesArr);
  let circleCreateArr = [];
  for (let i = 0; i < numDots; i++) {
    let num = circlesArr[i]
    let step = 2 * Math.PI / numDots;
    // let radius = 200 * (Math.abs(num - i) / (numDots / 2))
    let absNum = Math.abs((num - i) / 5);
    if (Math.abs(num - i) < 1) {
      absNum = 1;
    }
    let radius = 200 * (1 / absNum)
    // let radius = 200;
    let x = 600 + radius * Math.cos(step * i);
    let y = 400 + radius * Math.sin(step * i);
    circleCreateArr.push({ "cx": x, "cy": y, "r": 2 })
  }


  // for (let i = 0; i < numDots; i++) {
  //   let angle = Math.random() * 2 * Math.PI;
  //   let radius = Math.sqrt(Math.random() * 300 * 300);
  //   let x = 650 + radius * Math.cos(angle);
  //   let y = 400 + radius * Math.sin(angle);
  //   circlesArr.push({ "cx": x, "cy": y, "r": 1 })
  // }

  let circles = bigCircle.selectAll("circle")
    .data(circleCreateArr)
    .enter()
    .append("circle")
    .attr("cx", function (d) { return d.cx; })
    .attr("cy", function (d) { return d.cy; })
    .attr("r", function (d) { return d.r; })
    .style("fill", "black")


    return (circlesArr);
};

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

export const render = arr => {
  d3.selectAll(".circle-container > *").remove();

  let circleCreateArr = [];
  for (let i = 0; i < arr.length; i++) {
    let num = arr[i]
    let step = 2 * Math.PI / arr.length;
    let absNum = Math.abs((num - i) / 5);
    if (Math.abs(num - i) < 1) {
      absNum = 1;
    }
    let radius = 200 * (1 / absNum)
    // let radius = 200;
    let x = 600 + radius * Math.cos(step * i);
    let y = 400 + radius * Math.sin(step * i);
    circleCreateArr.push({ "cx": x, "cy": y, "r": 2 })
  }

  const bigCircle = d3
    .select(".circle-container")
    .attr("cx", 600)
    .attr("cy", 400)
    .attr("r", 200)
    .style("fill", "transparent")

  let circles = bigCircle.selectAll("circle")
    .data(circleCreateArr)
    .enter()
    .append("circle")
    .attr("cx", function (d) { return d.cx; })
    .attr("cy", function (d) { return d.cy; })
    .attr("r", function (d) { return d.r; })
    .style("fill", "black")
}