let inputbox = document.getElementById("input");
let btn = document.querySelectorAll(".button button");

let btnarray = Array.from(btn);
console.log(btnarray);
let display = '';

btnarray.forEach(b=>{
    b.addEventListener('click',(e)=>{
        let btntext = e.target.innerHTML;
        console.log(btntext);
        if(btntext === "AC"){
         display = " ";
         inputbox.value = display;
        }
        else if(btntext === "DEL"){
            display = display.slice(0, -1);
            inputbox.value = display;

        }
        else if(btntext === "="){
            display = eval(display);
            inputbox.value = display;

        }
        else{
            display += btntext;
            inputbox.value = display;
        }
        
    });
    
});
