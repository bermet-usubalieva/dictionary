// ======== События в DOM ============
// const showMessage = () => {
//     alert('Hello')
// }



// 2 способ
// const btn = document.getElementById('btn')

// btn.onclick = () => {
//     document.body.style.background = '#fff'
// }

// btn.onmouseover = () => {
//     document.body.style.background = 'grey'
// }

// const image = document.querySelector('img')

// image.onmouseover = () => {
//     image.style.cssText = `
//     width: 400px;
//     height: 600px;`
// }

// image.onmouseout = () => {
//     image.style.cssText = `
//     width: 300px;
//     height: 500px;`
// }

// const resizeImg = () => {
//     image.style.transform = 'scale(1.2)'
// }

// const normalImg = () => {
//     image.style.transform = 'scale(1)'
// }

// image.onmouseover = resizeImg
// image.onmouseleave = normalImg


// 3 способ использовать прослушиватель событий 
// Event listener
// const btn = document.querySelector('#btn')
// btn.addEventListener('click', () => {
//     alert('Hello world')
// })

// const showMessage = () => {
//     alert('Hola')
// }

// btn.addEventListener('click', showMessage)

// ====== Value - ключ хранящий в себе значение из инпутов
// const btn = document.querySelector('#btn')
// const inp1 = document.querySelector('#inp1')
// const inp2 = document.querySelector('#inp2')
// const inp3 = document.querySelector('#inp3')
// const output = document.querySelector('#output')

// btn.addEventListener('click', () => {
//     console.log(inp1.value);
// })
// const getFirsInp = () => {
//     let result
// if (inp2.value == '+') {
//     result = +inp1.value + +inp3.value
// } else if (inp2.value == '-') {
//     result = +inp1.value - +inp3.value
// } else if (inp2.value == '/') {
//     result = +inp1.value / +inp3.value
// } else if (inp2.value == '*') {
//     result = +inp1.value * +inp3.value
// }
//     output.textContent = result
//     output.textContent = eval(inp1.value + inp2.value + inp3.value)
//     inp1.value = ''
//     inp2.value = ''
//     inp3.value = ''
// }

// btn.addEventListener('click', getFirsInp)

// const arr = [
//     '1', '2', '3',
//     '4', '5', '6',
//     '7', '8', '9',
//     '0', '+', '-',
//     '*', '/', 'C',
//     'AC', '='
// ]
// const wrap = document.createElement('div')
// const answer = document.createElement('input')
// answer.classList.add('answer')


// const body = document.body
// body.append(answer, wrap)
// for (let i = 0; i < arr.length; i++) {
//    const btn = document.createElement('input')
//     btn.value = `${arr[i]}`
//     btn.classList.add(`btn${i}`)
//     wrap.append(btn)
// }

// const but0 = document.querySelector('.btn0')
// const but1 = document.querySelector('.btn1')
// const but2 = document.querySelector('.btn2')
// const but3 = document.querySelector('.btn3')
// const but4 = document.querySelector('.btn4')
// const but5 = document.querySelector('.btn5')
// const but6 = document.querySelector('.btn6')
// const but7 = document.querySelector('.btn7')
// const but8 = document.querySelector('.btn8')
// const but9 = document.querySelector('.btn9')
// const but10 = document.querySelector('.btn10')
// const but11 = document.querySelector('.btn11')
// const but12 = document.querySelector('.btn12')
// const but13 = document.querySelector('.btn13')
// const but14 = document.querySelector('.btn14')
// const but15 = document.querySelector('.btn15')
// const but16 = document.querySelector('.btn16')

// let num = ''
// let oper
// let result
// let arg1
// let arg2


// but0.addEventListener('click', () => {
//     num += but0.value
//     answer.value = num
// })
// but1.addEventListener('click', () => {
//     num += but1.value
//     answer.value = num
// })
// but2.addEventListener('click', () => {
//     num += but2.value
//     answer.value = num
// })
// but3.addEventListener('click', () => {
//     num += but3.value
//     answer.value = num
// })
// but4.addEventListener('click', () => {
//     num += but4.value
//     answer.value = num
// })
// but5.addEventListener('click', () => {
//     num += but5.value
//     answer.value = num
// })
// but6.addEventListener('click', () => {
//     num += but6.value
//     answer.value = num
// })
// but7.addEventListener('click', () => {
//     num += but7.value
//     answer.value = num
// })
// but8.addEventListener('click', () => {
//     num += but8.value
//     answer.value = num
// })
// but9.addEventListener('click', () => {
//     num += but9.value
//     answer.value = num
// })


// but10.addEventListener('click', () => {
//     oper = '+'
//     if (arg1 == undefined) {
//         arg1 = num
//     }
//     answer.value = `${oper}`
//     num = ''

// })

// but11.addEventListener('click', () => {
//     oper = '-'
//     if (arg1 == undefined) {
//         arg1 = num
//     }
//     answer.value = `${oper}`
//     num = ''
// })

// but12.addEventListener('click', () => {
//     oper = '*'
//     if (arg1 == undefined) {
//         arg1 = num
//     }
//     answer.value = `${oper}`
//     num = ''
// })

// but13.addEventListener('click', () => {
//     oper = '/'
//     if (arg1 == undefined) {
//         arg1 = num
//     }
//     answer.value = `${oper}`
//     num = ''
// })

// but14.addEventListener('click', () => {
//     let b = num.split('')
//     b.pop()
//     num = b.join('')
//     answer.value = `${num}`
// })

// but15.addEventListener('click', () => {
//     num = ''
//     arg1 = undefined
//     arg2 = undefined
//     oper = undefined
//     result = undefined
//     answer.value = `${num}`
// })

// but16.addEventListener('click', () => {
//     if (arg2 == undefined) {
//         arg2 = num
//         answer.value = `${arg2}`
//     }

//     if (oper == '+') {
//         result = +arg1 + +arg2
//         answer.value = `${result}`
//     } else if (oper == '-') {
//         result = +arg1 - +arg2
//         answer.value = `${result}`
//     } else if (oper == '/') {
//         result = +arg1 / +arg2
//         answer.value = `${result}`
//     } else if (oper == '*') {
//         result = +arg1 * +arg2
//         answer.value = `${result}`
//     }

// })

// ================ TARGET =============

// let num = ''
// let oper

// let arg1
// let arg2


// document.body.addEventListener('click', e => {
//     let result
//     let arg3

//     if (e.target.tagName === 'INPUT') {
//         let a = e.target.value
//         num += a
//         answer.value = num
//         if (a == '+' || a == '-' || a == '/' || a == '*') {
//             oper = a
//             if (arg1 == undefined) {
//                 arg3 = num.split('')
//                 arg3.pop()
//                 arg1 = arg3.join('')
//             }
//             answer.value = `${oper}`
//             num = ''
//             console.log(arg1);
//             if (arg1 != undefined && arg2 != undefined) {
//                 console.log(1);
//                 if (oper == '+') {
//                     console.log(arg1, arg2);
//                     result = +arg1 + +arg2
//                     answer.value = `${result}`
//                 } else if (oper == '-') {
//                     result = +arg1 - +arg2
//                     answer.value = `${result}`
//                 } else if (oper == '/') {
//                     result = +arg1 / +arg2
//                     answer.value = `${result}`
//                 } else if (oper == '*') {
//                     result = +arg1 * +arg2
//                     answer.value = `${result}`
//                 }
//             }
//         }
//         if (a == 'C') {
//             arg3 = num.split('')
//             if (arg3[arg3.length - 1] == 'C') {
//                 arg3.pop()
//             }
//             arg3.pop()
//             num = arg3.join('')
//             answer.value = `${num}`

//         }
//         if (a == 'AC') {
//             num = ''
//             arg1 = undefined
//             arg2 = undefined
//             oper = undefined
//             result = undefined
//             answer.value = `${num}`
//         }
//         if (a == '=') {
//             if (arg2 == undefined) {
//                 arg3 = num.split('')
//                 arg3.pop()
//                 arg2 = arg3.join('')
//                 console.log(arg2);
//                 answer.value = `${arg2}`
//             }

//             if (oper == '+') {
//                 console.log(arg1, arg2);
//                 result = +arg1 + +arg2
//                 answer.value = `${result}`
//             } else if (oper == '-') {
//                 result = +arg1 - +arg2
//                 answer.value = `${result}`
//             } else if (oper == '/') {
//                 result = +arg1 / +arg2
//                 answer.value = `${result}`
//             } else if (oper == '*') {
//                 result = +arg1 * +arg2
//                 answer.value = `${result}`
//             }
//         }
//     }


// })

// ============= Target and isNaN ===========
// const arr = [
//     '1', '2', '3',
//     '4', '5', '6',
//     '7', '8', '9',
//     '0', '+', '-',
//     '*', '/', 'C',
//     'AC', '=',
// ];
// const body = document.body;
// const wrap = document.createElement('div');
// const answer = document.createElement('input');
// answer.classList.add('answer');
// body.append(answer, wrap);


// for (let i = 0; i < arr.length; i++) {
//     const btn = document.createElement('input');
//     btn.value = `${arr[i]}`;
//     btn.classList.add(`btn${i}`);
//     wrap.append(btn);
// }

// let num = '';
// let oper;
// let arg1;
// let arg2;
// let activeOperButton;

// const sum = () => {
//     let result;
//     if (oper == '+') {
//         result = +arg1 + +arg2;
//     } else if (oper == '-') {
//         result = +arg1 - +arg2;
//     } else if (oper == '/') {
//         result = +arg1 / +arg2;
//     } else if (oper == '*') {
//         result = +arg1 * +arg2;
//     }
//     return result;
// };

// const changeColor = () => {
//     if (activeOperButton) {
//         activeOperButton.classList.remove('green');
//     }
// };

// document.body.addEventListener('click', e => {
//     if (e.target.tagName === 'INPUT') {
//         let a = e.target.value;

//         if (!isNaN(a)) {
//             num += a;
//             answer.value = num;
//         } else if (a == '+' || a == '-' || a == '/' || a == '*') {
//             changeColor();
//             activeOperButton = e.target;
//             activeOperButton.classList.add('green');
//             oper = a;
//             if (arg1 == undefined) {
//                 arg1 = num;
//             } else {
//                 arg2 = num;
//                 arg1 = sum();
//                 arg2 = undefined;
//                 answer.value = arg1;
//             }
//             num = '';
//         } else if (a == 'C') {
//             let b = num.split('');
//             b.pop();
//             num = b.join('');
//             answer.value = num;
//         } else if (a == 'AC') {
//             num = '';
//             arg1 = undefined;
//             arg2 = undefined;
//             oper = undefined;
//             changeColor();
//             answer.value = '';
//         } else if (a == '=') {
//             arg2 = num;
//             if (arg1 != undefined && arg2 != undefined) {
//                 let result = sum();
//                 answer.value = result;
//                 arg1 = result;
//                 arg2 = undefined;
//                 num = '';
//                 changeColor();
//             }
//         }
//     }
// });



// =========== Решение ===========

// let result = ''
// const display = document.createElement('input')
// display.type = 'text'
// display.value = result
// display.disabled = true
// const btnsWrapper = document.createElement('div')
// document.body.append(display, btnsWrapper)

// const getNum = (e) => {
//     // console.log(e.target.innerHTML);
//     let btnValue = e.target.innerHTML

//     if (btnValue == 'AC') {
//         result = ''
//     } else if (btnValue == 'C') {
//         // result = result.slice(0, -1)
//         result = result.substring(0, result.length - 1)
//     } else if (btnValue == '=') {
//         result = `${eval(result)}`
//     } else {
//         result += btnValue
//     }

//     display.value = result
// }
// arr.forEach(el => {
//     const btn = document.createElement('button')
//     btn.innerHTML = el
//     btnsWrapper.append(btn)
//     btn.addEventListener('click', getNum)
//     // console.log(el);
// })

// event - объект события
// const btn = document.querySelector('#btn')
// btn.addEventListener('click', (event) => {
//     console.log(event.target.innerHTML);
// })

//любая функция вызванная при событии принимает объект собыйтий
// const showEvent = (e) => {
//     console.log(e.target.innerHTML);
// }
// btn.addEventListener('click', showEvent)


// ========== Словарь ==========
const addEng = document.querySelector('#engword')
const addRus = document.querySelector('#rusword')
const addForm = document.querySelector('form')
const testModal = document.querySelector('#testModal')
testModal.style = 'display: none';
const btnTest = document.querySelector('#btnTest')
const h2 = document.querySelector('h2')
const answer = document.querySelector('#answer')
const check = document.querySelector('#check')
const points = document.querySelector('#points')

const dict = {
    apple: 'Яблоко',
    pear: 'Груша',
    orange: 'Апельсин',
    apricot: 'Абрикос',
    peach: 'Персик',
}
const engArr = []
const rusArr = []
let i = 0
let point = 0
let dictLength = Object.keys(dict).length

addForm.addEventListener('submit', (e) => {
    e.preventDefault()
    if (!addEng.value.trim().length || !addRus.value.trim().length) {
        alert('Введите слова!')
    } else {
        dict[addEng.value] = addRus.value
        alert('Слова добавлены')
        addEng.value = ''
        addRus.value = ''
        dictLength = Object.keys(dict).length
        addPoints()
    }
    console.log(dict);
})

const test = () => {
    testModal.style = 'display: flex';
    for (let key in dict) {
        engArr.push(key)
        rusArr.push(dict[key])
    }
    addQuestion()
    addPoints()
}

const addQuestion = () => {
    h2.innerHTML = engArr[i]
}

const addPoints = () => {
    points.innerHTML = `${point} / ${dictLength}`
}

const checkWord = () => {
    if (answer.value.toLowerCase() == rusArr[i].toLowerCase()) {
        alert('Првильно!')
        point++
        addPoints()
    } else {
        alert('Неправильно!')
    }
    i++
    if (engArr.length <= i) {
        i = 0
        testModal.style = 'display: none';
    }

    addQuestion()
    answer.value = ''

}
check.addEventListener('click', checkWord)
btnTest.addEventListener('click', test)