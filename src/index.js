// import { join } from 'lodash';

function component() {
    const element = document.createElement('div');

    // lodash（目前通过一个 script 脚本引入）对于执行这一行是必需的
    element.innerHTML = 'HALLO WEBPACK3'
    // join(['Hello', 'webpack'], ' ');

    return element;
}

document.body.appendChild(component());