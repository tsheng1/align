import './styles/index.scss';
import {createMap, render} from './create_map';
import {updateMap} from './update';
import bubbleSort from './sort/bubblesort';
import "@babel/polyfill";
import renderSwaps from './sort/quicksort';

window.addEventListener('DOMContentLoaded', () => {

  // let circlesArr = createMap(40).circlesArr;
  // let circleCreateArr = createMap(40).circleCreateArr;
  
  // window.addEventListener('click', () => {
  //   bubbleSort(circlesArr);
  // })

  // window.addEventListener('click', () => {
  //   quickSort(circlesArr, circlesArr, circleCreateArr);
  // })

  const arr = createMap(40);

  window.addEventListener('click', () => {
    renderSwaps(arr);
  })

})
