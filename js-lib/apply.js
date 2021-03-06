/**
 * apply() 方法调用一个具有给定this值的函数，以及以一个数组（或类数组对象）的形式提供的参数。
 * @param {*绑定值} context 
 * @param {*参数} args 
 */
Function.prototype.myApply = function(context, args) {
    context = context || window;
    args = args ? args : [];
    const key = Symbol();
    context[key] = this;
    const result = context[key](...args);
    delete context[key];
    return result;
}