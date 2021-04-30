document.addEventListener("DOMContentLoaded", function(event) { 
    //grab the necessary objects by their IDs
    const counter = document.getElementById('counter');
    const minus = document.getElementById('minus');
    const plus = document.getElementById('plus');
    const pause = document.getElementById('pause');
    const heart = document.getElementById('heart');
    const likes = document.getElementsByClassName('likes')[0];
    const comments = document.getElementById("comment-form")

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
    heart.addEventListener('click',()=>{
        let likeCount = document.createElement('li');
        likeCount.innerText = number;
        console.log(likeCount.innerText);
        likes.appendChild(likeCount)
    })
    //maybe have another toggle here where it's outside the event listener
    //and appends the 'x has been clicked y times' sentence
    
    
    let ul = document.createElement('ul');
    comments.appendChild(ul)

    let ulNode = document.getElementsByTagName('ul')
    comments.addEventListener('submit',(event)=>{
        event.preventDefault();
        addTask(event.target['comment-input'].value)

        function addTask(task){
          let pinnedText = document.createElement('li')
          pinnedText.innerText = task
          ulNode.appendChild(pinnedText)
        }
    })
});