function choose_random_from(list) {
    return list[Math.floor(Math.random() * list.length)]
}

function fix_name(str) {
    return str.split("_").join(" ");
}

const EMBLEM_SIZE = 50;

function prepare_players() {
    var idx = 1;
    var tbl = document.getElementById("PlayerTable");
    var row = tbl.insertRow(idx++);

    

}

function prepare_support() {
    var idx = 1;
    var tbl = document.getElementById("SupportTable");
    var row = tbl.insertRow(idx++);

    var manager = row.insertCell(0);
    var assistant = row.insertCell(1);

    const chosen_manager = choose_random_from(managers);
    const chosen_assistant = choose_random_from(assistants);
    
    manager.innerHTML = `${fix_name(chosen_manager.name)} (${chosen_manager.id})`;
    assistant.innerHTML = `${fix_name(chosen_assistant.name)} (${chosen_assistant.id})`;
}

function prepare_formation() {
    var idx = 1;
    var tbl = document.getElementById("FormationTable");
    var row = tbl.insertRow(idx++);

    var formation = row.insertCell(0);

    var chosen_formation = choose_random_from(formations);

    formation.innerHTML = `${fix_name(chosen_formation.name)} (${chosen_formation.id})`;
}

function prepare_outfit() {
    var idx = 1;
    var tbl = document.getElementById("OutfitTable");
    var row = tbl.insertRow(idx++);

    var team_name = row.insertCell(0);
    var team_emblem = row.insertCell(1);
    
    var chosen_team = choose_random_from(outfit_teams);

    team_name.innerHTML = fix_name(chosen_team);
    team_emblem.innerHTML = `<img src="emblems/${chosen_team}.png" width=${EMBLEM_SIZE} height=${EMBLEM_SIZE}/>`; 
}

function prepare_emblem() {
    var idx = 1;
    var tbl = document.getElementById("EmblemTable");
    var row = tbl.insertRow(idx++);

    var team_name = row.insertCell(0);
    var team_emblem = row.insertCell(1);
    
    var chosen_team = choose_random_from(emblem_teams);

    team_name.innerHTML = fix_name(chosen_team);
    team_emblem.innerHTML = `<img src="emblems/${chosen_team}.png" width=${EMBLEM_SIZE} height=${EMBLEM_SIZE}/>`; 
}

prepare_players();
prepare_support();
prepare_formation();
prepare_outfit();
prepare_emblem();
