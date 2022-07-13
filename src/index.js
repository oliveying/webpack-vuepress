import '@babel/polyfill';
import './styles/index.css'
import './styles/index1.css'
import _ from 'lodash';

import $ from "jquery";
import axios from 'axios';

axios.get('/react/api/header.json').then(res => {
  const { data, status} = res;
  console.log(data, 'datasssss');
}).catch(err => {
  console.log(err, 'err');
})
