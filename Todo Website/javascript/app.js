var datee= document.getElementById("year")
var datee1= document.getElementById("date")
var datee2= document.getElementById("month")
var datee3= document.getElementById("day")

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const days = ["Sunday","Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
const d = new Date();
datee1.innerHTML = d.getDate();
datee.innerHTML = d.getFullYear();
datee2.innerHTML = months[d.getMonth()];;
datee3.innerHTML = days[d.getDay()];;


window.addEventListener("load",()=>{
    const list_el = document.querySelector("#tasks")
    const input2 = document.querySelector(".inpp")
    const form = document.querySelector("#new-task-form")
    form.addEventListener("submit", (e)=>{
        e.preventDefault()
        const task = input2.value;
        console.log("submit form");
        if (!task) {
            alert("Please fill The Task")
        }
        else{
            const _t = document.createElement("div")
            _t.classList.add("-t")

            const inppp = document.createElement("input")
            inppp.classList.add("inp")
            inppp.classList.add("p")
            inppp.setAttribute("readonly","readonly")
            inppp.setAttribute("draggable",true)

            const task_el = document.createElement("div")
            task_el.classList.add("task")

            const task_content_el = document.createElement("div")
            task_content_el.classList.add("content");

            task_el.appendChild(task_content_el)
            list_el.appendChild(_t)    
            _t.appendChild(task_el)

            task_content_el.appendChild(inppp)
            inppp.value=task
            const task_action_el=document.createElement("div")
            task_action_el.classList.add("actions")

            const edit=document.createElement("button")
            edit.classList.add("btn")
            edit.classList.add("edit")
            edit.innerHTML="Edit"

            const delete2=document.createElement("button")
            delete2.classList.add("btn")
            delete2.classList.add("delete")
            delete2.innerHTML="Delete"
            task_action_el.appendChild(delete2);

            task_action_el.appendChild(edit)
            task_el.appendChild(task_action_el)
            // input2.value=""
            input2.value=""
            const myArray = inppp.value.split(" ");
            aa = inppp.value
            localStorage.setItem(myArray,aa)

            edit.addEventListener("click",()=>{
                if (edit.innerHTML == "Edit") {
                    inppp.removeAttribute("readonly","readonly")
                    edit.innerHTML="Save"
                    inppp.focus()
                }
                else{
                    inppp.setAttribute("readonly","readonly")
                    edit.innerHTML="Edit"
                    localStorage.setItem(myArray,inppp.value)
                }
            
            })
            delete2.addEventListener("click",()=>{
                _t.removeChild(task_el)
                localStorage.removeItem(myArray,aa)
                console.log("teri ");
            })

            inppp.addEventListener("dragstart",()=>{
                console.log("Oyeeeeee ! drag start ho gaya !!!!!")
            })
            inppp.addEventListener("dragend",()=>{
                console.log("Oyeeeeee ! drag end ho gaya !!!!!")
            })
            console.log(list_el.children);
            
    }
    })

})

function getVal() {
    const val = document.querySelector('.input').value;
    console.log(val);
  }