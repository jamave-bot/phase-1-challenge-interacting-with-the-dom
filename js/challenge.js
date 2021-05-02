document.addEventListener("DOMContentLoaded", function(event) { 
    //grab the necessary objects by their IDs
    const counter = document.getElementById('counter');
    const minus = document.getElementById('minus');
    const plus = document.getElementById('plus');
    const pause = document.getElementById('pause');
    const heart = document.getElementById('heart');
    const likes = document.getElementsByClassName('likes')[0];
    const comments = document.getElementById("comment-form")
    const list = document.getElementById("list")

    //Convert the string that was in that counter to a number type
    let number = parseInt(counter.innerHTML,10)


    //Adds event listeners that decrement/increment number
    minus.addEventListener('click', ()=>{
        number--;
    })
    plus.addEventListener('click', ()=>{
        number++;
    })

    
    
    //sets the status of whether or not the pause button was pressed
    let paused = false;
    pause.addEventListener('click', ()=>{
        if (paused){
            paused = false;
        }else{
            paused = true;
        }
        // console.log(paused)
    })
    
    
    //apparently setInterval has to be called on window, the first argument 
    //is a function that plays in a certain interval in milliseconds 
    //which is the second argument
    
    //every 1 second, increment number and change the current value of the 
    //counter
    window.setInterval(() => {
        //if it's NOT paused, then it'll increment
        if (!paused){
            pause.innerText = 'pause'
            plus.disabled = false; 
            minus.disabled = false;
            heart.disabled = false;
            number++
        } else{
            plus.disabled = true; //if it IS paused, disable the other buttons
            minus.disabled = true;
            heart.disabled = true;
            pause.innerText = 'resume'
        }
            counter.innerHTML = number
    },  1000);

    //adds a listener to heart/ adds an li of the number the heart was pressed on
    heart.addEventListener('click',(event)=>{
        console.log(event.info)
        let likeCount = document.createElement('li');
        likeCount.innerText = number;
        console.log(likeCount.innerText);
        likes.appendChild(likeCount)
    })
    //maybe have another toggle here where it's outside the event listener
    //and appends the 'x has been clicked y times' sentence
    
    //makes another ul element to add under the list div
    let ul = document.createElement('ul');
    list.appendChild(ul)

    //gets the ul we just made and puts it in ulNode variable
    let ulNode = document.getElementsByTagName('ul')[1];

    //adds an event listener to the comments form
    comments.addEventListener('submit',(event)=>{
        event.preventDefault(); //so the page doesn't refresh (this is just convention)
        addTask(event.target['comment-input'].value) //takes the value in the comment-input id as the variable for addTask

        //adds an li w/ the task variable as the innertext to the ulNode
        function addTask(task){
          let pinnedText = document.createElement('li')
          pinnedText.innerText = task
          ulNode.appendChild(pinnedText)
        }
    })
});