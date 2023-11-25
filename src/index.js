// import { join } from 'lodash';
import './index.css';
import Icon from './asset/bigSize.jpg';
import printMe from './print.js';

function component() {
    const element = document.createElement('div');

    // lodash（目前通过一个 script 脚本引入）对于执行这一行是必需的
    element.classList.add('hello');
    // join(['Hello', 'webpack'], ' ');

    const text = document.createElement('span')
    text.innerHTML = 'HALLO WEBPACK3s';
    text.classList.add('text');
    element.appendChild(text);

    const btn = document.createElement('button');
    btn.innerHTML = 'Click me and check the console!';
    btn.onclick = printMe;
    element.appendChild(btn);

    // 将图像添加到已经存在的 div 中。
    const myIcon = new Image();
    myIcon.src = Icon;
    myIcon.width = 100;
    myIcon.height = 100;
    myIcon.classList.add('img')

    element.appendChild(myIcon);

    return element;
}

document.body.appendChild(component());