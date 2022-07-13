import '@babel/polyfill';
import './styles/index.css'
import './styles/index1.css'
import _ from 'lodash';
import {UI } from './jquery.ui'

import $ from "jquery";
import axios from 'axios';
UI()

axios.get('/react/api/header.json').then(res => {
  const { data, status} = res;
  console.log(data, 'datasssss');
}).catch(err => {
  console.log(err, 'err');
})
var dom = $(`<div>${_.join(['Dell', 'Lee'], '---')}</div>`);
$('#root').append(dom);

console.log(this, window.location.href);
console.log('hello world');

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('./service-worker.js').then(register => {
      console.log('注册成功');
    }).catch((err) => {
      console.log(err, 'bbbbb');
      console.log('注册失败');
    })
  }); 
}

