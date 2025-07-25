window.addEventListener("DOMContentLoaded",()=>{
    createinputline();
})

const useragent = navigator.userAgent;





const commands = {
    help: `
Available commands:

  about         → Show info about myself
  project       → View featured projects
  contact       → Get contact details
  education     → See academic background
  certification → Display earned certifications
  status        → Current learning goals & availability
  clear         → Clear the terminal screen

`,
    about:`
Hi, I'm Premkumar R 👨‍💻
CSE graduate(2025) from Sathyabama Insitute of Science and Technology.
Actively seeking job opportunities in the IT industry
Passionate about software development, web technologies, and databases
Eager to contribute to a dynamic team and grow as a tech professional

`,
    project:`
🛡️ Credit Card Fraud Detection using Machine Learning

    Built using algorithms like SVM, Decision Tree, Random Forest, AdaBoost, and Bagging

    Integrated a Flask web app to display model performance (Accuracy, Precision, Recall,
    F1 Score)

    Implemented email alerts for detected frauds and visualized results using confusion 
    matrices

🚗 RF-Based Restricted Zone Alert System (IoT Project)

    Utilized RF Transmitter and Receiver to detect entry into restricted zones

    Microcontroller-based system with LCD alert display to simulate real-time vehicle 
    warnings

    Demonstrates embedded system integration with real-world safety applications
    
🎮 Animated Gaming-Themed Web Page (Front-End Project)

    Designed a visually engaging animated UI using HTML, CSS, and JavaScript

    Mimics a gaming interface with interactive elements and smooth transitions  
    
    For more project 
    -><a href="https://github.com/premkumar0410" target="_blank" style="color:white">View More Projects on GitHub</a>
    `,
    contact:`
    📫 Contact Information:

    📧 Email   → <a  href="mailto:rprem1042004@gmail.com" style="color:white" >Mail Here!!</a>
    🌐 LinkedIn → <a href="https://www.linkedin.com/in/premkumar-r0410/" target="_blank" style="color:white">Visit LinkedIn</a>
    💻 GitHub   → <a href="https://github.com/premkumar0410" target="_blank" style="color:white">Visit GitHub Projects</a>
    📱 Mobile    → <a style ="color:white">+91 8072681560</a>

`,education:`
🎓 Education:

📘 Bachelor of Engineering in Computer Science and Engineering  (B.E - CSE)
    🏫 Sathyabama Institute of Science and Technology, Chennai  
    📅 2021 - 2025  
    📊 CGPA: 7.74 / 10

📗 Higher Secondary (HSC - Class 12)  
    🏫 Sree Iyappa Mat.Hr.Sec.School, Chennai  
    📅 2019 - 2021  
    📊 Percentage: 73%

📙 Secondary School (SSLC - Class 10)  
    🏫 Sree Iyappa Mat.Hr.Sec.School, Chennai
    📅 2018 - 2019  
    📊 Percentage: 65%

`,
Certification:`
📜 Certifications:

✅ SQL and Relational Databases 101  
    🏢 Future Skill Prime

✅ Oracle Certified Foundations Associate  
    🏢 Oracle University

✅ Oracle SQL and PL/SQL  
    🏢 Trinethra Tech Solutions

✅ Java
    🏢 Trinethra Tech Solutions

✅ Introduction to Network Security  
    🏢 Cisco Networking Academy

✅ GenAI-Powered Data Analytics Job Simulation  
    🏢 TATA Forage.
,
`,
status:`
📌 Current Status:

                        Job Status: Unemployed.

🛠️ Skills / Known Technologies:
    • Programming: Java,
    • Web: HTML, CSS, JavaScript, React.js, Tailwind CSS
    • Database: Oracle SQL, PL/SQL
    • Tools: Git, GitHub, VS Code, Toad
    • Others: Flask, Machine Learning (basic), REST API(basic), Linux basics

🚀 Actively seeking full-time opportunities in:
    • Web Development
    • Software Engineering
    • Backend / Database Roles

💼 Availability:
    • Ready to join immediately
    • Open to relocation or hybrid/remote work

`,
   
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
        const resonse = commands[inputvalue];
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