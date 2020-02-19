function printLabel(label) {
    console.log(label.label);
}
var obj = { size: 10, label: "size 10 Object" };
printLabel(obj); //传递的参数要包含label的对象
// 使用接口定义的方式和直接定义一样
// 必需要要有这个属性,且属性是一致的
function create(config) {
    var newSquare = { color: 'width', area: 100 };
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width;
    }
    return newSquare;
}
console.log(create({}));
