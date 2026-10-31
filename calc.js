let btn = document.getElementById("btn")



btn.addEventListener("click", async function() {
    let start = Number(document.getElementById("start").value);
    let end = Number(document.getElementById("end").value);
    let ppls = Number(document.getElementById("ppls").value);
    let p = document.getElementById("result")
    

    console.log(start)   
    let result = ((end - start)/ppls)
    p.textContent = "The Result is: " + result
    
    
    
   
})
