
let string = "";

let Buttons = document.querySelectorAll("#btn");



let Input =  document.getElementById("inputbox");

 Array.from(Buttons).forEach((button)=>{

    button.addEventListener("click", (e)=>{

        if(e.target.innerHTML == '=') {
            string = eval(string);
            Input.value = string;
        } else if (e.target.innerHTML == 'CE') {
             string = "";
             Input.value = string;
        } else {
            string = string + e.target.innerHTML
            Input.value = string;
        }
       
      
    })
 })