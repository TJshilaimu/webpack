var colors = ["#f26395", "#62efab", "#ef7658", "#ffe868", "#80e3f7", "#d781f9"];
export function getIndex(min,max){
    return Math.floor(Math.random()*(max-min)+min);
}


export default function(){
    var index = getIndex(0,colors.length);
    return colors[index];

}