import bodyParser from 'body-parser'
import express from 'express'
var app = express()
const PORT = process.env.PORT || 5000

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

var fishRecipe = [
    { 'id':'0001',
         'text':"Fish"},

    { 'id': "0002",
        'text':"Dania"},

    { 'id': "0003",
           'text':"Onion"},

    { 'id': "0004",
              'text':"Ginger"}]

app.get('/', function(resquest,response){
    response.send(fishRecipe)
})

app.post('/', function(request, response) {
   var ingredient = request.body
   if(!ingredient || ingredient.text == "") {
       response.status(500).send({error:"Your ingredient must have text"})   
   } else {
       fishRecipe.push(ingredient)
       response.status(200).send(ingredient)
    }
   })

   app.put('/:ingredientId', function(request, responses){
       var newText = request.body.text
       if (!newText || newText ===""){
           responses.status(500).send({error: "You must provide ingredent text"})
       } else {
           var objectFound = false
           for (var x = 0;x < fishRecipe.length;x++) {
               if(fishRecipe[x].id === request.params.ingredientId){
                   fishRecipe[x].text = newText
                   objectFound =true
                   break

               }
           }
           if (objectFound == false) {
               responses.status(500).send({error:"id not found"})
           }else {responses.send(fishRecipe)}
       }
    
    app.delete('/:idGiven',function(request,response){
        var idGiven = request.params.idGiven
        if (!idGiven || idGiven ===''){
            response.status(500).send({error:"no id provived"})
        } else {
            for(var x=0;x < fishRecipe.length; x++){
                if(fishRecipe[x].id === idGiven){
                    fishRecipe.splice(x,1)
                    break
                }
            
            }
            response.send(fishRecipe)
        }

    })

   })

app.listen(PORT, function(){
    console.log("First API running on port 5000")
})