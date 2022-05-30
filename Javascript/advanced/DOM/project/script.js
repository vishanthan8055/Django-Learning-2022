var rowone = document.querySelector("#rowone")
var rowtwo = document.querySelector("#rowtwo")
var rowthree = document.querySelector("#rowthree")

function colreturn(rowone,col){
    return (rowone.querySelector(col));
}

function click_event(row,col,tex){
    var block = row.querySelector(col)
    block.addEventListener("click",function(){
        block.textContent = tex;
        block.style.fontsize = "50px";
      })

}
var rows = [rowone,rowtwo,rowthree];
var cols = ['#one','#two','#three'];

function main(){
for(var i=0;i<3;i++){
    for(var j=0;j<3;j++){
        var data=0
        data = (rows[i].querySelector(cols[j]).textContent)
        if(data==''){
        click_event(rows[i],cols[j],'X');
        }
        else if(data=='X'){
        click_event(rows[i],cols[j],'O');
        }
        else{
        click_event(rows[i],cols[j],'');
        }
    }
}
}
setInterval(main,1);