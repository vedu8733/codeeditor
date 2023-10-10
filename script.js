
let run = document.querySelector(".button");
run.addEventListener("click",()=>{
    let htmlcode = document.querySelector(".htmlcode").value;
    let csscode = document.querySelector(".csscode").value;
    let jscode = document.querySelector(".jscode").value;
    // console.log(htmlcode,jscode,csscode);
    let  output = document.querySelector(".output");
    output.contentDocument.body.innerHTML = htmlcode + "<style>" + csscode +"</style>";
    output.contentWindow.eval(jscode);
    
})