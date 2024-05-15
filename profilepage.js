document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('player-modal');
  
    const openModal = () => {
      modal.style.display = 'block';
    };
  
    openModal();
  
    // const closeBtn = document.getElementById('close-btn');
    // closeBtn.addEventListener('click', function() {
    //   modal.style.display = 'none';
    // });
  
    const submitBtn = document.getElementById('submit');
    submitBtn.addEventListener('click', function(event) {
      event.preventDefault();
      const playerName = document.getElementById('player').value.trim();
      localStorage.setItem('value',playerName)
      console.log('Player:', playerName);
      modal.style.display = 'none';
      getPlayer();
    });
  });
  
const getPlayer=()=>{
  const playerName = localStorage.getItem('value');
  console.log(localStorage.getItem('value'))
  document.getElementById('player-name').innerHTML = playerName;
}

//   function  get(){
//     console.log(localStorage.getItem('value'))
// }