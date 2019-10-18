import './styles/index.scss';
import {updateMap} from './update';
import bubbleSort from './sort/bubblesort';
import "@babel/polyfill";
import renderSwaps from './sort/quicksort';
import Map from './create_map';
import QuickSortClass from './sort/quicksort';

window.addEventListener('DOMContentLoaded', () => {

  const map = new Map
  map.newArr();

})
