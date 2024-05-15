// task 3
const list=document.querySelector(".list")

const todoList=[];


fetch("https://jsonplaceholder.typicode.com/todos")
.then(res=>res.json())
.then(data=>data.forEach(element => {
 todoList.push(element)
 list.innerHTML+=`
 <div class="inlist">
 <h1>${element.userId}</h1>
 <h1>${element.id}</h1>
 <span>${element.title}</span>
 <span>${element.completed}</span>
</div>
 `
}))

