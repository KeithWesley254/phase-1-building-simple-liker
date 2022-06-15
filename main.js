// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
modal = document.querySelector("#modal")
modal.classList.add("hidden")

function cbf(e){
  const x = e.target;
  x.innerText = EMPTY_HEART
  mimicServerCall()
  .then(res => {
    if(x.innerText === EMPTY_HEART){
      x.innerText = FULL_HEART
      x.classList.add("activated-heart")
    }else{
      x.innerText = EMPTY_HEART
      x.classList.remove("activated-heart")
    }
  })
  .catch(err => {
    modal.classList.remove("hidden");
    modal.querySelector("modal-message").textContent = err;
    setTimeout( () => {
      modal.classList.add("hidden")
    }, 3000)
  })
}
const dX = document.querySelectorAll(".like-glyph")
dX.forEach(x => {
  x.addEventListener("click", cbf)
})


//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
