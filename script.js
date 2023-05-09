let data = [
    { name: 'Сохиб Курбон', salary: 800, increase: false, rise: true, id: 1 },
    { name: 'Шахзод Хамидов', salary: 3000, increase: true, rise: false, id: 2 },
    { name: 'Далер Шарифкулов', salary: 5000, increase: false, rise: false, id: 3 },
    { name: 'Бекзод Хамидов', salary: 5000, increase: false, rise: false, id: 4 },
    { name: 'Алишер Мардиев', salary: 5000, increase: false, rise: false, id: 5 },
    { name: 'Мухаммад', salary: 5000, increase: false, rise: false, id: 6 },
    { name: 'Сабина Яковлева', salary: 5000, increase: false, rise: false, id: 7 },
    { name: 'Руфина', salary: 5000, increase: false, rise: false, id: 8 },
    { name: 'Хуршида', salary: 5000, increase: false, rise: false, id: 9 },
    { name: 'Дилшод Муртазоев', salary: 5000, increase: false, rise: false, id: 10 },
    { name: 'Ориф', salary: 5000, increase: false, rise: false, id: 11 },
    { name: 'Улугбек', salary: 5000, increase: false, rise: false, id: 12 },
    { name: 'Влад Цой', salary: 5000, increase: false, rise: false, id: 13 },
    { name: 'Алина', salary: 5000, increase: false, rise: false, id: 14 },
]

let main = document.querySelector(".main")
let num = document.querySelector(".num")
let form = document.forms.creater
let inp = document.querySelectorAll("form input")
let all = document.querySelector(".all")
let incre = document.querySelector(".incr")
let more = document.querySelector(".more")
let search = document.querySelector("#search")
let user = document.querySelector("#name")
let sal = document.querySelector("#sal")
let count = 1


search.onkeyup = () => {
    let key = search.value.toLowerCase().trim()
    let filtered = data.filter(item => {
        let name = item.name.toLowerCase()
        if(name.includes(key)) {
            return item
        }
    }) 

    
    reload(filtered);
}

form.onsubmit = (e) => {
    e.preventDefault()

    let user = {
        id: Math.random(),
        rise: false,
        increase: false,
        

    }

    let fm = new FormData(form)

    fm.forEach((value, key) => {
        user[key] = value
    })
    console.log(user)
    data.push(user)
    reload(data)
}


function reload(arr){
   main.innerHTML = " "
   arr.innerHTML = " "
   for(let item of arr){
    let cont = document.createElement("div")
    let h3 = document.createElement("h3")
    let mon = document.createElement("input")
    let prem = document.createElement("span")
    let del = document.createElement("span")
    let bt = document.createElement("button")
    let btn = document.createElement("button")
    let nam = document.createElement("div")
    let b = document.createElement("div")
    let img = document.createElement("img")


    b.classList.add("bn")
    cont.classList.add("cont")
    del.classList.add("material-symbols-outlined")
    prem.classList.add("material-symbols-outlined")
    nam.classList.add("name")
    btn.classList.add("del")
    bt.classList.add("prem")
    h3.innerHTML = item.name
    mon.value    = item.salary + "$"
    prem.innerHTML = "workspace_premium"
    del.innerHTML = "delete"

  

    b.append(bt , btn, img)
    nam.append(h3)
    btn.append(del)
    bt.append(prem)
    cont.append(nam , mon , b)
    main.append(cont)

    
    
    nam.onclick = () => {
        item.rise = true
       reload(data)        
    }

    nam.ondblclick = () => {
        item.rise = false
        reload(data)
    }
      if(item.rise === true){
        img.src = "./Star.svg"
      }


    bt.onclick = () => {
        h3.classList.toggle("yellow")
        mon.classList.toggle("yellow")
        item.increase = true
        if(h3.classList.contains("yellow")){
           num.innerHTML =  count++
           
        } else{
          num.innerHTML =  count--
        }
    }

    btn.onclick = () => {
        data = data.filter(el => el.id !== item.id)
        reload(data)
    }

    more.onclick = () => {
        let n = data.filter(el => el.salary >= 1000)
         reload(n)
         
     }
     
     all.onclick = () =>{
        reload(data) 
     }
     
     incre.onclick = () => {
         let n = data.filter(el => el.rise === true)
         reload(n)
     }

    
}
}



reload(data)