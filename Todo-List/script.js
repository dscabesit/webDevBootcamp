// --Variable Declarations-- //

for(let i = 0; i<=10; i++){
    console.log(`Current number is: ${i}`)
}

// for(const i = 0; i<=10; i++){
//     console.log(`Current number is: ${i}`) //Throws an error
// }


// --DOM Manipulation-- //

//getElementById()
var x = document.getElementById('id1')
// console.log(x)

//createElement()
var child1 = document.createElement('div')

//innerText()
child1.innerText = "I am child1"

//appendChild()
document.body.appendChild(child1)

//setAttribute()
child1.setAttribute('id', 'child1')
child1.setAttribute('class', 'classC1')


var c = document.getElementById('child1')
c.innerHTML = '<p>Paragraph here!</p>'
console.log(c)


//removeChild()
//document.body.removeChild(c)


// --Query Selector-- //
var query = document.querySelector('#id2')
console.log(query)

var query2 = document.querySelector('.class4')
console.log(query2)

var query3 = document.querySelectorAll('.class4')
console.log(query3[1]) //to fetch the second div with class = class4


// --Event Handling-- //

var button1 = document.querySelector('#btn-1')

function func2() {
    for(var x = 0; x<10; x++){
        console.log(x)
    }
}
func2()

function func1() {
    var counter = document.querySelector('#counter')
    var i = parseInt(counter.innerText)
    i += 1 
    counter.innerText = i
    if(i === 5){
        button1.removeEventListener('click', func1)
    } //to make it stop at a certain point
}

//addEventListener way 1
button1.addEventListener('click', func1)

//removerEventListener
//button1.removeEventListener('click', func1)


//addEventListener way 2
button1.addEventListener('click', () => {
    var counter = document.querySelector('#counter')
    var i = parseInt(counter.innerText)
    i += 1 
    counter.innerText = i
})