// 顺序访问一个集合
// 使用者无需知道集合的内部结构(封装)

// forEach
// for 循环
// iterator 迭代器

/* class Iterator{
    constructor(container) {
        this.list = container.list
        this.index = 0
    }
    next () {
        if (this.hasNext()) {
            return this.list[this.index++]
        }
        return null
    }
    hasNext () {
        if (this.index >= this.list.length) {
            return false
        }
        return true
    }
}


class Container{
    constructor(list) {
        this.list = list
    }
    // 生成遍历器
    getIterator() {
        return new Iterator(this)
    }
}

let arr = [1, 'a', 2, 3, 4, 5, 6, 'z', 'o'];

let container = new Container(arr);

let iterator = container.getIterator()

while (iterator.hasNext()) {
    console.log(iterator.next());
}
 */
// es6

let array = [1,2,3,4,5]

let iterator = array[Symbol.iterator]();

let item = iterator.next()

while (!item.done) {
    console.log(item.value);
   item = iterator.next()
}


// console.log(iterator.next())

// console.log(iterator.next())

// { value: 1, done: false }  有数据    迭代器的next是第一个数据
// {value:undefined,done:true} 没数据
// iterator.next()   返回的是一个对象,而不是迭代器,同时迭代器往后指
// 迭代器不可被重新赋值
// `for...of`

{

function* helloworld() {
    yield 'hello',
        yield 'world'
    return 'ending'
}

    let hw = helloworld();  //hw也是一个迭代器

    console.log(hw.next()) 
    console.log(hw.next())
    console.log(hw.next())

//{ value: 'hello', done: false }
// { value: 'world', done: false }
//  { value: 'ending', done: true }
}
