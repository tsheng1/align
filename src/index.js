import './styles/index.scss';
import {updateMap} from './update';
import bubbleSort from './sort/bubblesort';
import "@babel/polyfill";
import renderSwaps from './sort/quicksort';
import Map from './create_map';
import QuickSortClass from './sort/quicksort';

window.addEventListener('DOMContentLoaded', () => {

  // let circlesArr = createMap(40).circlesArr;
  // let circleCreateArr = createMap(40).circleCreateArr;
  
  // window.addEventListener('click', () => {
  //   bubbleSort(circlesArr);
  // })

  // window.addEventListener('click', () => {
  //   quickSort(circlesArr, circlesArr, circleCreateArr);
  // })

  const map = new Map
  map.newArr();

})
