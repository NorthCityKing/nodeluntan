// ./不能省略
require('./a');

//优先从缓存加载 会直接拿到引用对象 并不会重复加载
require('./b');//因为a.js中已经加载了 b.js 所以不会重复加载
