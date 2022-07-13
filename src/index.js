import '@babel/polyfill';
import './styles/index.css'
import './styles/index1.css'
import _ from 'lodash';
import {UI } from './jquery.ui'

UI()

var dom = $(`<div>${_.join(['Dell', 'Lee'], '---')}</div>`);
$('#root').append(dom);

console.log(this);