document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let form = document.querySelector('#create-task-form')
  let text = document.querySelector('#new-task-description')

  form.addEventListener('submit', (e) =>{
    e.preventDefault()
    
    // create new p element with text equal to description
    let p = document.createElement('p')
    p.textContent = `${text.value}   `

    if(document.querySelector('select').value === "low"){
      p.style.backgroundColor = "SpringGreen"
    } else if (document.querySelector('select').value === "medium"){
      p.style.backgroundColor = "Yellow"
    } else if (document.querySelector('select').value === "high"){
      p.style.backgroundColor = "Red"
    }




    // create button and attack to <p> this button will
    // delete p element if clicked
    let btn = document.createElement('button')
    btn.textContent = 'X'
    btn.style.height = "18px"
    btn.addEventListener('click', (e)=>{
      e.stopPropagation()
      e.target.parentNode.remove()
    })

    // select our task list and append our <p> element
    // then append button onto the <p>
    let taskList = document.querySelector('#tasks')
    let newP = taskList.appendChild(p)
    newP.appendChild(btn)


    form.reset()
  })
});
let form = document.querySelector('#create-task-form')

let selector = document.createElement('select')
let low = document.createElement('option')
low.value="low"
low.textContent="Low"
let med = document.createElement('option')
med.value="medium"
med.textContent="Medium"
let high = document.createElement('option')
high.value="high"
high.textContent="High"
selector.appendChild(low)
selector.appendChild(med)
selector.appendChild(high)
form.appendChild(selector)

