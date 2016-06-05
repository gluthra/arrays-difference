# uniq-array

Returns an array by removing duplicate elements


## Installation

```sh
$ npm install uniq-array
```


## Usage

```js
var uniqArray = require('uniq-array');

uniqArray([1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 3, 3]);
//=> [1, 2, 3]

uniqArray(['Amenda', 'Bob', 'Bob', 'Amenda', 'Luicy']);
//=> ['Amenda', 'Bob', 'Luicy']
```


## License

MIT © [Gaurav Luthra](luthra.zenith@gmail.com)