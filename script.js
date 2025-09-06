

let select = document.getElementById('citycelect');
let list = document.getElementById('demo');



select.addEventListener('change' , function(){
    let selectedoptions = this.options[this.selectedIndex];

    let now = new Date();
    let li =document.createElement('li');

    li.innerHTML=`${selectedoptions.text}<br><span id="date">${now}<span><br>`;

    
    list.appendChild(li);
})


