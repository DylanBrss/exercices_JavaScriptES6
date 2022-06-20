//5-1 Import

import {hello} from './functions.js';
import {showError} from './functions.js';
import y from './functions.js';

hello();
showError();
y();

// 5-2 Export
const [a, b] = [7, 9]

import {sum} from './maths.js';
import {sub} from './maths.js';
import {multiply} from './maths.js';
import {divide} from './maths.js';
import {pow} from './maths.js';

sum();
sub();
multiply();
divide();
pow();