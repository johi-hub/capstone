const router=require('express').Router();

//retrieve input being sent from front end
//loop the array of bot responses from json file
//if the input equals the response return the response

const userInput = [
    //0 
    ["hi", "hey", "hello"],
    //1
    ["how are you", "how are things"],
    //2
    ["sup", "whats up"],
    //3
    ["happy", "good", "well", "fantastic", "cool"],
    //4
    ["bad", "bored", "tired", "sad"],
    //5
    ["tell me story", "tell me joke"],
    //6
    ["thanks", "thank you"],
    //7
    ["bye", "good bye", "goodbye"]
    ];
    
    const reply = [
    //0 
    ["Hello!", "Hi!", "Hey!", "Hi there!"], 
    //1
    [
        "Fine... how are you?",
        "Pretty well, how are you?",
        "Fantastic, how are you?"
      ],
    //2
    [
        "Nothing much",
        "Exciting things!"
      ],
    //3
    ["Glad to hear it"],
    //4
    ["Why?", "Cheer up buddy"],
    //5
    ["What about?", "Once upon a time..."],
    //6
    ["You're welcome", "No problem"],
    //7
    ["Goodbye", "See you later"],
    ];
    
    const alternative = [
      "Same",
      "Go on...",
      "Oh?",
      "I'm listening...",
      "Bro..."
    ];

    router.post('/', (req,res)=>{
        console.log(req)
        let userInput = req.body.userInput;
        let response;
        if(userInput === "hi"||userInput === "hello"){
         response = "what's up"
        } else if(userInput === "how are you"||userInput === "how are things") {
            response = "happy"
        }
        else if(userInput === "sup"||userInput === "whats up") {
            response = "nothing much"
        }
        else if(userInput === "tell me a story") {
            response = "what about?"
        }
        else if(userInput === "anything") {
            response = "How doth the little crocodil improve his shining tail, and pour the waters of the Nile on every golden scale! How cheerfully he seems to grin, how neatly spreads his claws, and welcomes little fishes in, with gently smiling jaws!"
        }
        else if(userInput === "tell me a joke") {
            response = "I love pressing F5. It's so refreshing."
        }
        else if(userInput === "im sad") {
            response = "Cheer up buddy!"
        }
        else if(userInput === "bye"||userInput === "good bye"||userInput === "goodbye") {
            response = "see ya!"
        }
         else{(response = "I dont understand")}
        res.send(response)
        
        })
    


    module.exports=router;