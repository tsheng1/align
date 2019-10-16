import './styles/index.scss';
import {createMap} from './map';
import {updateMap} from './update';
import bubbleSort from './sort/bubblesort';
import "@babel/polyfill";
import quickSort from './sort/quicksort';

window.addEventListener('DOMContentLoaded', () => {

  let mapArr = createMap(100);
  
  // window.addEventListener('click', () => {
  //   bubbleSort(mapArr);
  // })

  window.addEventListener('click', () => {
    quickSort(mapArr);
  })

})
