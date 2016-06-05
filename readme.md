# arrays-difference

Returns an array containing those elements which are present in first array and not in others


## Installation

```sh
$ npm install arrays-difference
```


## Usage

```js
var arrDiff = require('arrays-difference');

arrDiff([1, 2], [2, 3, 4]);
//=> [1]

arrDiff([21, 27, 29, 31], [13, 4], [41, 27, 30], [21]);
//=> [29, 31]


arrDiff(['hello', 'world'], ['this', 'is', 'my', 'world']);
//=> ['hello']
```


## License

MIT © [Gaurav Luthra](luthra.zenith@gmail.com)