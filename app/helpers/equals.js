// import Ember from 'ember';
import { helper as buildHelper } from '@ember/component/helper';

const equals = (params) => params[0] === params[1];
export default buildHelper(equals);
