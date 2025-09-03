window.addEventListener("DOMContentLoaded",()=>{
    createinputline();
})

const useragent = navigator.userAgent;

const right_side = document.querySelector(".right");
//firebase storage

const firebaseConfig = {
  apiKey: "AIzaSyC52lvf9nSVmaEJsQhJGFeTjdoYl_UKU1k",
  authDomain: "portfolio-terminal-48e1b.firebaseapp.com",
  projectId: "portfolio-terminal-48e1b",
  storageBucket: "portfolio-terminal-48e1b.firebasestorage.app",
  messagingSenderId: "236464773510",
  appId: "1:236464773510:web:702f87f765c225d4367407"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore(); 




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

async function handleCommandInput(e){
    if(e.key === "Enter"){
        const inputvalue = e.target.value.trim().toLowerCase();
        const output = document.querySelector(".output");

        if(inputvalue == "clear"){
            output.textContent = "";
            createinputline();
            return;
        }
//check command with the input
        //const resonse = commands[inputvalue];
        const responsediv = document.createElement("div");
        responsediv.style.whiteSpace = "pre-wrap"

        try{
            const docref = db.collection("commands").doc(inputvalue);
            const doc = await docref.get();

            if(doc.exists){
            responsediv.innerHTML = doc.data().response;
        }else{
            throw new Error("Not found");
        }
        }catch(err){
            responsediv.innerHTML = `command ${inputvalue} not recognized. Type 'help' for available commands`;
            responsediv.style.color = "red";
        }
        

        output.append(responsediv)

         createinputline();

          const terminal = document.querySelector(".terminal");
        terminal.scrollTop = terminal.scrollHeight;
    }

}