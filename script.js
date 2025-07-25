window.addEventListener("DOMContentLoaded",()=>{
    createinputline();
})


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

function handleCommandInput(){

}