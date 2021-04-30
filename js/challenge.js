document.addEventListener("DOMContentLoaded", function(event) { 
    //grab the necessary objects by their IDs
    const counter = document.getElementById('counter');
    const minus = document.getElementById('minus');
    const plus = document.getElementById('plus');
    const pause = document.getElementById('pause');
    const heart = document.getElementById('heart');
    const likes = document.getElementsByClassName('likes')[0];

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

    //up to here
    heart.addEventListener('click',()=>{
        console.log(likes)
        let likeCount = document.createAttribute('li');
        likeCount.innerText = number;
        console.log(likeCount.innerText);
        likes[0].appendChild(likeCount)
    })
});