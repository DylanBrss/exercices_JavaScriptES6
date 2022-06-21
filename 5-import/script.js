//5-1 Import

import {hello} from './functions.js';
import {showError} from './functions.js';
import y from './functions.js'; //nom la fonction avec le nom que l'on veut car elle s'appelle default dans le export

hello();
showError();
y();

// 5-2 Export
const [a, b] = [7, 9]

import {sum} from './math.js';
import {sub} from './math.js';
import {multiply} from './math.js';
import {divide} from './math.js';
import {pow} from './math.js';

sum();
sub();
multiply();
divide();
pow();