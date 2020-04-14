import create from './create'
import Numbe from '../src/unite/number';

let n= new Numbe(100);
n.callback = function(num,isPrime){
    create(num,isPrime);
}
var flag = false
window.onclick=function(){

    if(!flag){
        n.start()
        flag =true;
    }else{
        n.stop();
        flag=false;

    }

    
}