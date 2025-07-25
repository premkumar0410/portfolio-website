window.addEventListener("DOMContentLoaded",()=>{
    createinputline();
})

const useragent = navigator.userAgent;





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

const right_side = document.querySelector(".right");
//generate input line 
function createinputline(){
    const output = document.querySelector(".output");

    const inputline = document.createElement("div");
    inputline.className = "input-line";

    const prompt = document.createElement("span");
    prompt.className = "prompt";
    if(useragent.includes("Mac")){
     prompt.innerHTML = `guest@portfolio:~<a style="color:rgb(112, 23, 196);">$<a/>`;
    }else if(useragent.includes("Win")){
     prompt.innerHTML = "C:\\Users\\Guest>";
    }else{
     prompt.innerHTML = "C:\\Users\\username>";
    }
   

    const input = document.createElement("input")
    input.className ="commandInput";
    input.type="text";
    input.addEventListener("keydown", handleCommandInput);
    

    
    inputline.appendChild(prompt)
    inputline.appendChild(input)
    output.appendChild(inputline)

    input.focus();
    right_side.addEventListener("click",()=>{
        input.focus();
    })
  
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
           responsediv.innerHTML =`command ${inputvalue} not recognized. Type 'help' for available commmand `
        responsediv.style.color="red"
        }

        output.append(responsediv)

         createinputline();

          const terminal = document.querySelector(".terminal");
        terminal.scrollTop = terminal.scrollHeight;
    }

}