var Promise = function(){
	this.thenQueue = [];
	this.isPromise = true;
};
 
var Deferred = function () {
    this.promise = new Promise();
}

Promise.prototype.then = function (fulfilledHandler) {
    debugger;
	var handler = {};
	if(typeof fulfilledHandler === 'function'){
		handler.fulfilled = fulfilledHandler;
	}
	this.thenQueue.push(handler);//放入回调函数队列
	return this;//返回自身用于链式调用
};

Deferred.prototype.callback = function () {
    var that = this;
    return function (value) {
        that.resolve(value);
    };
}

Deferred.prototype.resolve = function (val) {
    var promise = this.promise;
    var handler;
    while ((handler = promise.thenQueue.shift())) {
        debugger;
        if (handler && handler.fulfilled) {
            var res = handler.fulfilled(val);
            if (res && res.isPromise) {
                res.thenQueue = promise.thenQueue;//将queue中剩余回调转交给后续promise
                this.promise = res;
                return;
            }
        }
    }
}

var getValue = function (name, callback) {
    var map = {
        'cat': 'july',
        'july': 'jay'
    };
    setTimeout(function () {
        callback(map[name]);
    }, 500);
}


var testValue1 = function(name){
	var deferred = new Deferred();
	getValue(name, deferred.callback());
	return deferred.promise;
};
 
var testValue2 = function(name){
	var deferred = new Deferred();
	getValue(name, deferred.callback());
	return deferred.promise;
};
 
testValue1('cat').then(function (value1) {
    debugger;
	//第二次调用依赖于第一次的结果
	return testValue2(value1);
}).then(function(value2){
	//输出'jay'
	console.log(value2);
}).then(function(){
	//该调用不依赖于前面结果，但也需等到前面调用完毕才能执行
	console.log('Hello Cat');
});
