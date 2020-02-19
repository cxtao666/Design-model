

function bindEvent(elem,type,selector,fn) {
    if (fn == null) {
        fn = selector
        selector = null
    }
}

bindEvent(elem, 'click', '#div1', fn)
bindEvent(elem,'click',fn)