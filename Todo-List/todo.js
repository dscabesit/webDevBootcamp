function addToList(){
    var txt = document.getElementById('tBox').value
    if(txt === ""){
        alert("Please enter a task")
    }
    else{
    var li = document.createElement('li')
    li.innerText = txt
    li.setAttribute('class', txt)
    ul = document.getElementById('todos')
    ul.appendChild(li)
    li.addEventListener('click', () => {
        var cur = document.querySelectorAll('.'+txt)
        console.log(cur)
        for(var x = 0; x<cur.length; x++){
        if(cur[x].style.textDecoration === "line-through"){
            cur[x].style.setProperty('text-decoration', 'none')
        }
        else{
            cur[x].style.setProperty('text-decoration', 'line-through')
        } 
        }       
    })
    li.addEventListener('dblclick', () => {
        var cur = document.getElementById(txt)
        ul.removeChild(cur)
    })
    document.getElementById('tBox').value = ""
}
}

function resetList(){
    var ul = document.querySelector('#todos')
    ul.innerText = ""
    document.getElementById('tBox').value = ""

}