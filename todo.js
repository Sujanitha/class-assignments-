// const div = document.querySelector('div');
// const a = document.querySelector('a');

// a.innerHTML; //"click me"
// div.innerHTML; //'<a href="#">Click me</a>'

// a.innerHTML = "Updated link text";



// $("li").click(function(){
// if($(this).css("color")==="gray"){
//     console.log("It is currently grey !")
// }
// $("li").click(function(){
// $(this).css ({
//     color:grey ,
//     textDecoraton:"line-through"
// });

// });

function todolist(){
    var item= document.getElementById(" todoInput").value
    var text= document.createTextNode(item)
    var newItem= document.createElement("li")
newItem.appendChild(text)
document.getElementById("todolist").appendChild(newItem);
}






