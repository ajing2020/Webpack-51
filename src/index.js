import x from './x.js'
import png from './assets/Java后端开发学习路线-高清版.jpg'
const div = document.getElementById('app')

div.innerHTML = `<img src="${png}">`
const button = document.createElement('button')
button.innerText = '懒加载'
button.onclick = () => {
    const promise = import('./lazy')
    promise.then((module) => {
        const fn = module.default
        fn()
    }, () => {
        console.log('模块加载错误')
    })
}

div.appendChild(button)