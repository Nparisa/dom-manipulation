/* Task 1 */
var heading=document.getElementById('heading')
console.log(heading.innerText)

/* Task 2 using plain JavaScript */

function addtext2()
{
    var task2div=document.getElementById('task2a')
    var paragraph =document.createElement('p')
    paragraph.innerText="Hello world"
    task2div.appendChild(paragraph)
    
}
 
    var textBtn=document.getElementById('TextBtn2a')
    textBtn.addEventListener('click',addtext2)
    
    //2b
    function changeBGcolor(event){
        var body=document.getElementsByTagName('body')[0]
        if(event.target.innerText=="Red"){
            body.style.backgroundColor='red'
        }
        if(event.target.innerText=="Green"){
            body.style.backgroundColor='green'
        }
    }
    //2c
     function redirectToGoogle(){
   window.location.assign('http://google.com')
     }
/* Task 4 using jQuery */
