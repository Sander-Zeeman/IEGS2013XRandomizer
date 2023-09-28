var tbl = document.getElementById("PlayerTable");
var idx = 1;
playable_teams.forEach((teamName, i) => {
    players[teamName].forEach((playerObj, j) => {
        var row = tbl.insertRow(idx++);
    
        var position = row.insertCell(0);
        var player_name = row.insertCell(1);
        var team_name = row.insertCell(2);
        var team_emblem = row.insertCell(3);
    
        position.innerHTML = playerObj.position;
        player_name.innerHTML = `${playerObj.name} (${playerObj.id})`;
        team_name.innerHTML = teamName.split("_").join(" ");
        team_emblem.innerHTML = `<img src="emblems/${teamName}.png" width=50 height=50/>`;
    });
});