
function playBackgroundMusic() {
    var audio = document.getElementById('backgroundSound');
    audio.play();
}
  document.addEventListener('click', function() {
    playBackgroundMusic();
});


function openVolumeModal() {
    var modal = document.getElementById('volume-modal');
    modal.style.display = 'block';
  }
  function closeVolumeModal() {
    var modal = document.getElementById('volume-modal');
    modal.style.display = 'none';
  }
  function increaseVolume() {
    var audio = document.getElementById('backgroundSound');
    if (audio.volume < 1.0) {
      audio.volume += 0.1; // Increase volume by 0.1 (10%)
    }
    updateVolumeBar();
  }
  function decreaseVolume() {
    var audio = document.getElementById('backgroundSound');
    if (audio.volume > 0.0) {
      audio.volume -= 0.1; // Decrease volume by 0.1 (10%)
    }
    updateVolumeBar();
  }
  function updateVolumeBar() {
    var audio = document.getElementById('backgroundSound');
    var volumeLevel = audio.volume * 100; // Convert volume to percentage
    var volumeBar = document.getElementById('volume-bar');
    volumeBar.style.width = volumeLevel + "%";
  }
  


  document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('volume-control').addEventListener('click', function(event) {
      event.preventDefault(); 
      openVolumeModal();
    });
  
    document.getElementsByClassName('close')[0].addEventListener('click', closeVolumeModal);
    document.getElementById('increase-volume').addEventListener('click', increaseVolume);
    document.getElementById('decrease-volume').addEventListener('click', decreaseVolume);


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

  function closeModal() {
    var modal = document.getElementById('quitgame');
    modal.style.display = 'none';
  }
  
  
  window.addEventListener('click', function(event) {
    var modal = document.getElementById('quitModal');
    if (event.target == modal) {
      modal.style.display = 'none';
    }
  });



  function getdata()
  {
    const player1Input = document.getElementById('player1').value;
    const player2Input = document.querySelector('.player2-name input').value;
    const logoImage = document.querySelector('.logo');

      localStorage.setItem('player1-name', player1Input);
      localStorage.setItem('player2-name', player2Input);

      function arePlayerNamesStored() {
             const player1Name = localStorage.getItem('player1-name');
             const player2Name = localStorage.getItem('player2-name');
             return player1Name && player2Name;
           }

           function checkAndEnableLogo() {
                 if (arePlayerNamesStored()) {
                   logoImage.classList.add('hover-effect');
                   logoImage.addEventListener('click', handleLogoClick);
                 }
               }
    
  }

  // document.addEventListener('DOMContentLoaded', function() {
  //   const player1Input = document.getElementById('player1').value;
  //   console.log(player1Input);
  //   const player2Input = document.querySelector('.player2-name input').value;
  //   const logoImage = document.querySelector('.logo');
  
  //   // Function to check if both player names are in local storage
  //   function arePlayerNamesStored() {
  //     const player1Name = localStorage.getItem('player1-name');
  //     const player2Name = localStorage.getItem('player2-name');
  //     return player1Name && player2Name;
  //   }
  
  //   // Function to enable logo if both player names are stored
  //   function checkAndEnableLogo() {
  //     if (arePlayerNamesStored()) {
  //       logoImage.classList.add('hover-effect');
  //       logoImage.addEventListener('click', handleLogoClick);
  //     }
  //   }
  
  //   // Function to handle logo click
  //   function handleLogoClick() {
  //     // Store player names in local storage
  //     const player1Name = player1Input.value.trim();
  //     const player2Name = player2Input.value.trim();
  //     localStorage.setItem('player1-name', player1Name);
  //     localStorage.setItem('player2-name', player2Name);
  
  //     // Check and enable logo if conditions are met
  //     checkAndEnableLogo();
  
  //     // Handle logo click action here
  //     console.log('Logo clicked!');
  //   }
  
  //   // Check and enable logo when the page loads
  //   checkAndEnableLogo();
  // });
  



  

