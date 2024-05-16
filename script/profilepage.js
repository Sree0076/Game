const playerProfile = {
  name: 'megha',
  highScore: 200,
  noOfMatches: 1
};

const playerProfileJSON = JSON.stringify(playerProfile);
localStorage.setItem('name', playerProfile.name);


localStorage.setItem('playerProfile', playerProfileJSON);

const getPlayerProfile = async () => {
  const profileData = JSON.parse(localStorage.getItem('playerProfile'));
  return profileData;
};

document.addEventListener('DOMContentLoaded', async function() {
  const name = localStorage.getItem('name');
  console.log('Stored Player Name:', name);
  if (name) {
    try {
      const playerProfile = await getPlayerProfile();
      console.log('Player Profile:', playerProfile);
      document.getElementById('player-name').innerHTML = playerProfile.name;
      document.getElementById('player-highscore').innerHTML = playerProfile.highScore;
      document.getElementById('no-of-matches').innerHTML = playerProfile.noOfMatches;
    } catch (error) {
      console.error('Error fetching player profile:', error);
    }
  } else {
    console.error('Player name not found in localStorage');
  }
});
