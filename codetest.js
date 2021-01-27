var fishRecipe = [
    { 'id':'0001',
         'text':"Fish"},

    { 'id': "0002",
        'text':"Dania"},

    { 'id': "0003",
           'text':"Onion"},

    { 'id': "0004",
              'text':"Ginger"}]


console.log(  fishRecipe.splice(1,1))            
            

    
var a = ""
function delect(A){
    var idGiven = A
    if (!idGiven || idGiven ===''){
        console.log("no id provived")
    } else {
        for(var x=0;x < fishRecipe.length; x++){
            if(fishRecipe[x].id === idGiven){
                fishRecipe.splice(x,1)
                console.log(fishRecipe[x])
                break
            }
        
        }
        return fishRecipe
    }

}

delete ("002")
console.log (fishRecipe)
