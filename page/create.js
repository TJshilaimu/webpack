// import isPrime from '../src/unite/isPrime';
import redColor from '../src/unite/redColor'
import {getIndex} from '../src/unite/redColor'
import $ from 'jquery'


// var divCenter = $('#divCenter');
// var divContainer = $('#divContainer');
// // 给一个数字后，多这个数字进行处理，即加入到DIV元素中
// export default function(n,isPrime){
//     var span = document.createElement('span');
//     if(isPrime){
//         var colors = redColor()
//         span.style.color= colors;
//         createCenter(n,colors)
//     }
//     span.innerText=n;
//     divContainer.appendChild(span);
//     divCenter.innerText=n;
// }

// // z中间产生的素数给予颜色，并生成飘走特效

// function createCenter(n,color){
//     var div = document.createElement('div');
//     div.className="center";
//     div.innerText = n;
//     div.style.color=color;
//     document.body.appendChild(div);
//     getComputedStyle(div).left
//     div.style.transform = `translate(${getIndex(-300,300)}px,${getIndex(-300,300)}px)`;
//     div.style.opacity = 0;
// }

var divCenter = $('#divCenter');
var divContainer = $('#divContainer');
// 给一个数字后，多这个数字进行处理，即加入到DIV元素中
export default function(n,isPrime){
    var span =$('<span>').text(n);
    if(isPrime){
        var colors = redColor()
        span.css("color",colors);
        createCenter(n,colors)
    }
   
    divContainer.append(span);
    divCenter.text(n);
}

// z中间产生的素数给予颜色，并生成飘走特效

function createCenter(n,color){
    var div = $('<div>').text(n).css("color",color).addClass('center');
    $('body').append(div);
    getComputedStyle(div[0]).left
    // div.style.transform = `translate(${getIndex(-300,300)}px,${getIndex(-300,300)}px)`;
    // div.style.opacity = 0;
    div.css("transform",`translate(${getIndex(-300,300)}px,${getIndex(-300,300)}px)`).css("opacity",0)
}
