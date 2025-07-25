window.addEventListener("DOMContentLoaded",()=>{
    createinputline();
})

const command = {
    help:`
Available commands:

about
project
contact
education
certification
status
clear
`
}


//generate input line 
function createinputline(){
    const output = document.querySelector(".output");

    const inputline = document.createElement("div");
    inputline.className = "input-line";

    const prompt = document.createElement("span");
    prompt.className = "prompt";
    prompt.textContent = "prem@portfolio:>";

    const input = document.createElement("input")
    input.className ="commandInput";
    input.type="text";
    input.addEventListener("keydown", handleCommandInput);
    

    
    inputline.appendChild(prompt)
    inputline.appendChild(input)
    output.appendChild(inputline)

    input.focus();
  
}

function handleCommandInput(e){
    if(e.key === "Enter"){
        const inputvalue = e.target.value.trim().toLowerCase();
        const output = document.querySelector(".output");

        if(inputvalue == "clear"){
            output.textContent = "";
            createinputline();
            return;
        }
//check command with the input
        const resonse = command[inputvalue];
        const responsediv = document.createElement("div");
        responsediv.style.whiteSpace = "pre-wrap"
        if(resonse){
            responsediv.textContent = resonse
        }else{
            responsediv.textContent = `command not available`
        }

        output.appendChild(responsediv)
    }

}