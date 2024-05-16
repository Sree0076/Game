
document.addEventListener('DOMContentLoaded', async function() {
  let player1Name = localStorage.getItem('player1-name');
  let player2Name = localStorage.getItem('player2-name');
  let score1 = localStorage.getItem('score1');
  let score2 = localStorage.getItem('score2');
  let name = '';
  let highScore=0;
  if(score1>score2){
    name = player1Name;
    highScore = score1;
    opponent = player2Name;
  }else{
    name = player2Name;
    highScore = score2;
    opponent = player1Name;
  }
  console.log('Player Name:', name);
  if (name) {
    try {
      document.getElementById('player-name').innerHTML = name;
      document.getElementById('player-highscore').innerHTML =  highScore;
      document.getElementById('opponent').innerHTML = opponent;
    } catch (error) {
      console.error('Error fetching player profile:', error);
    }
  } else {
    console.error('Player name not found in localStorage');
  }
});
 


function displayDataFromLocalStorage() {
  // Retrieve data from local storage
  var userData = JSON.parse(localStorage.getItem('userData'));

  // Check if data exists in local storage
  if (userData && userData.length > 0) {
    // Generate table rows from the data
    var tableRows = '';
    userData.forEach(function(row) {
      tableRows += '<tr>';
      tableRows += '<td>' + row.id + '</td>';
      tableRows += '<td>' + row.username + '</td>';
      tableRows += '<td>' + row.score + '</td>';
      tableRows += '</tr>';
    });

    // Insert the table rows into the table body
    document.getElementById('userData').innerHTML = tableRows;
  } else {
    console.log('No data found in local storage');
  }
}

// Call the displayDataFromLocalStorage function when the page loads
window.onload = displayDataFromLocalStorage;





// var sampleData = [
//   { id: 1, username: 'johnDoe', score: 85 },
//   { id: 2, username: 'emilySmith', score: 92 },
//   { id: 3, username: 'mikeJohnson', score: 78 },
//   { id: 4, username: 'sarahBrown', score: 95 },
//   { id: 5, username: 'davidWilliams', score: 88 }
// ];

// // Store sample data in local storage
// localStorage.setItem('userData', JSON.stringify(sampleData));






