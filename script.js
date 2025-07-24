window.addEventListener("DOMContentLoaded",()=>{
    createinputline();
})

function createinputline(){
    const output = document.querySelector(".output");

    const inputline = document.createElement("div");
    inputline.className = "input-line";

    const prompt = document.createElement("span");
    prompt.className = "prompt";
    prompt.textContent = "prem@portfolio:>";
    inputline.appendChild(prompt)
    output.appendChild(inputline)
    console.log("called")
}