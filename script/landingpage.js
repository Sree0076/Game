const startGame = () => {
    
    console.log("Game started!"); 
    
    
    let start = document.getElementById('play');
    start.click(); 
}

//document.getElementById('play').addEventListener('click', startGame);


function playBackgroundMusic() {
    var audio = document.getElementById('backgroundSound');
    audio.play();
}
  document.addEventListener('click', function() {
    playBackgroundMusic();
});




// Function to open the volume control modal
function openVolumeModal() {
    var modal = document.getElementById('volume-modal');
    modal.style.display = 'block';
  }
  
  // Function to close the volume control modal
  function closeVolumeModal() {
    var modal = document.getElementById('volume-modal');
    modal.style.display = 'none';
  }
  
  // Function to increase volume
  function increaseVolume() {
    var audio = document.getElementById('backgroundSound');
    if (audio.volume < 1.0) {
      audio.volume += 0.1; // Increase volume by 0.1 (10%)
    }
  }
  
  // Function to decrease volume
  function decreaseVolume() {
    var audio = document.getElementById('backgroundSound');
    if (audio.volume > 0.0) {
      audio.volume -= 0.1; // Decrease volume by 0.1 (10%)
    }
  }
  


  document.addEventListener('DOMContentLoaded', function() {
    // Your JavaScript code here
    // For example:
    document.getElementById('volume-control').addEventListener('click', function(event) {
      event.preventDefault(); // Prevent the default behavior of the link
      openVolumeModal();
    });
  
    document.getElementsByClassName('close')[0].addEventListener('click', closeVolumeModal);
  
    // Bind increaseVolume function to click event of increase volume button in the modal
    document.getElementById('increase-volume').addEventListener('click', increaseVolume);
    
    // Bind decreaseVolume function to click event of decrease volume button in the modal
    document.getElementById('decrease-volume').addEventListener('click', decreaseVolume);
    
  });

  function closeModal() {
    var modal = document.getElementById('quitgame');
    modal.style.display = 'none';
  }
  
  document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('quitgame').addEventListener('click', function() {
    document.getElementById('quitModal').style.display = 'block';
  });


  document.getElementById('yesButton').addEventListener('click', function() {
    window.location.href = 'login.html';
  });

  document.getElementById('noButton').addEventListener('click', function() {
    document.getElementById('quitModal').style.display = 'none';
  });
});
  
  window.addEventListener('click', function(event) {
    var modal = document.getElementById('quitModal');
    if (event.target == modal) {
      modal.style.display = 'none';
    }
  });





// Get references to the input elements and buttons for player1 and player2 names
const player1Input = document.querySelector('.player1-name input');
const player2Input = document.querySelector('.player2-name input');
const enterPlayer1Button = document.getElementById('enter-player-1');
const enterPlayer2Button = document.getElementById('enter-player-2');

// Variables to store player names
let player1Name = '';
let player2Name = '';

// Add event listeners to the "Enter" buttons
enterPlayer1Button.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default action of form submission
    player1Name = player1Input.value.trim();
    console.log('Player 1:', player1Name);
});

enterPlayer2Button.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default action of form submission
    player2Name = player2Input.value.trim();
    console.log('Player 2:', player2Name);
});
