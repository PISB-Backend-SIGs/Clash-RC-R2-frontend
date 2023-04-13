const players = [
    { rank: 1, name: 'Player 100', score: '0:3:2' ,link:1 },
    { rank: 2, name: 'Player 200', score: '0:5:2' ,link:1},
    { rank: 3, name: 'Player 3', score: '0:3:4' ,link:1},
    { rank: 4, name: 'Player 4', score: '0:5:4' ,link:1},
    { rank: 5, name: 'Player 5', score: '0:4:5' ,link:1},
    { rank: 6, name: 'Player 6', score: '0:3:6' ,link:1},
    { rank: 7, name: 'Player 7', score: '0:5:8' ,link:1},
    { rank: 8, name: 'Player 8', score: '0:3:7' ,link:1},
    { rank: 9, name: 'Player 9', score: '0:5:6' ,link:1},
    { rank: 10, name: 'Player 10', score: '0:4:5' ,link:1}
  ];
  
  const tableBody = players.map(player => `
    <tr>
      <td>${player.rank}.</td>
      <td>${player.name}</td>
      <td>${player.score}</td>
      <td>
        <p class="submitted">Submitted</p>
      </td>
      <td><button class="btn3" data-bs-toggle="modal" data-bs-target="#exampleModal"><a href="${players.link}">VIEW</a> </button></td>
    </tr>
  `).join('');
  
  const tableBodyElement = document.createElement('tbody');
  tableBodyElement.innerHTML = tableBody;
  
  // Append the table body element to your HTML table
  const tableElement = document.querySelector('table'); // Replace with your actual table selector
  tableElement.appendChild(tableBodyElement);