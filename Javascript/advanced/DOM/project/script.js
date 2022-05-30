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
      })

}

function hover_event(row,col){
    var block = row.querySelector(col)
    block.addEventListener("mouseover",function(){
        block.style.color = "blue";

      })
      block.addEventListener("mouseout",function(){
        block.style.color = "black";
      })
    }


var rows = [rowone,rowtwo,rowthree];
var cols = ['#one','#two','#three'];

function main(){
for(var i=0;i<3;i++){
    for(var j=0;j<3;j++){
        
        hover_event(rows[i],cols[j])
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