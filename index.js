let count=0;
let show=[];
function inc(){
    //console.log("The button is clicked");
    count++;
    console.log(count);
    document.getElementById("count").innerText=count
}

function save(){
    show.push(count);
    console.log(show);
    document.getElementById("op").innerText=show;
}