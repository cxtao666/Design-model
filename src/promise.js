
function loadImg(src){
    let promisie = new Promise((resolve,reject) =>{

        let img = document.createElement('img');

        
         img.onload = function (){

           resolve(img) //异步过程

        }  
             

        img.onerror = () =>{
            reject('图片加载失败')
        }

        console.log("3")
        img.src = src;


    })
    return promisie
}

let src = './unsplash-Erwan Hesry.jpg'

let result = loadImg(src);

result.then((img)=>{

    document.body.appendChild(img);
    console.log("1")
    return img
}).then((img) =>{
    console.log("2")
    alert(`${img.width}and${img.height}`);

}).catch((ex)=>{
    alert(ex)
})

//把promise返回回来,这样先执行promise对象里面的,再执行resolve里面的,再执行resolve的then后面的
//promise 里面有异步的,如果resolve写在异步里面,先执行异步再掉resolve,否则先执行resolve,再执行异步,再执行resolve的then
//resolve就是个回调函数