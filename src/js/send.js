import CategoryDetails from "./CategoryDetails.js";
import ExternalServices from "./ExternalServices.js";
form.addEventListener('submit',function(e)
{
    e.preventDefault()
    var category = document.getElementById("category").value
    var name = document.getElementById("aname").value
    var Description = document.getElementById("Description").value
    var cost = document.getElementById("cost").value
    var Inside = document.getElementById("Inside").value
    var alocation = document.getElementById("alocation").value
    var participants = document.getElementById("participants").value
    var requirement = document.getElementById("requirement").value
    
    fetch("https://cse341boredapi.herokuapp.com/ideas",{
        method:'POST',
        body:JSON.stringify({
            name: name,
            description: Description,
            cost: cost,
            inside: Inside,
            location: alocation,
            participants: participants,
            requirement: requirement,
            category: category
        }),
        headers:{
            "Content-Type": "application/json; charset=UTF-8"
        }
    })
    .then(function(response){
        if (response.ok) alert("You have successfully added an activity!")
        else alert("Fill all the input fiels!")

        return response.json()
        
    })
    .then(function(data){
        console.log(data)
        alert("")
    })
 
})
