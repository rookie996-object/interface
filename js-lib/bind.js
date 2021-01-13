/** 
 * bind() 方法创建一个新的函数，在 bind() 被调用时，这个新函数的 this 被指定为 bind() 的第一个参数
 * 而其余参数将作为新函数的参数，供调用时使用。
*/

Function.prototype.myBind = function(context, args) {
    const fn = this
    args = args ? args : []
    return function newFn(...newFnArgs) {
        if(this instanceof newFn) {
            return new fn(...args, ...newFnArgs)
        }
        return fn.apply(context, [...args, ...newFnArgs])
    }
}