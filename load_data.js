var playable_teams = [
    "Raimon",
    "Royal_Academy",
    "Zeus",
    "Raimon_II",
    "Chaos",
    "Alius_Academy",
    "Dark_Emperors",
    "Inazuma_National",
    "Neo_National",
    "International_Allstars_Remastered",
    "Dark_Angels",
    "Orpheus",
    "Little_Gigant",
    "Team_Ogre",
    "Girls_Team",
    "Inazuma_Legend_National",
    "Secret_1",
    "Secret_2",
    "Secret_3",
    "Raimon_GO",
    "Revolution_Selection",
    "Fifth_Sectors",
    "The_Sherwinds",
    "Protocol_Omega",
    "Zanark_Domain",
    "Zero",
    "The_Despairadoes"
];

var outfit_teams = [
    "Raimon",
    "Royal_Academy",
    "Zeus",
    "Raimon_II",
    "Chaos",
    "Alius_Academy",
    "Dark_Emperors",
    "Inazuma_National",
    "Neo_National",
    "International_Allstars_Remastered",
    "Dark_Angels",
    "Orpheus",
    "Little_Gigant",
    "Team_Ogre",
    "Girls_Team",
    "Inazuma_Legend_National",
    "Raimon_GO",
    "Revolution_Selection",
    "Fifth_Sectors",
    "The_Sherwinds",
    "Protocol_Omega",
    "Zanark_Domain",
    "Zero",
    "The_Despairadoes"
];

var emblem_teams = [
    "Raimon",
    "Royal_Academy",
    "Zeus",
    "Raimon_II",
    "Chaos",
    "Alius_Academy",
    "Dark_Emperors",
    "Inazuma_National",
    "Neo_National",
    "International_Allstars_Remastered",
    "Dark_Angels",
    "Orpheus",
    "Little_Gigant",
    "Team_Ogre",
    "Girls_Team",
    "Inazuma_Legend_National",
    "Raimon_GO",
    "Revolution_Selection",
    "Fifth_Sectors",
    "The_Sherwinds",
    "Protocol_Omega",
    "Zanark_Domain",
    "Zero",
    "The_Despairadoes"
];

var managers = [
    { id: "1", name: "Celia_2" },
]

var assistants = [
    { id: "1", name: "David_2" },
]

var formations = [
    { id: "1", name: "Test_Format" },
]

var players = {};
players["Raimon"] = [
    { id: "1", name: "Mark Evans", position: "GK" },
    { id: "2", name: "Nathan Swift", position: "DF" },
    { id: "3", name: "Jack Wallside", position: "DF" },
    { id: "4", name: "Jim Wraith", position: "DF" },
    { id: "5", name: "Tod Ironside", position: "DF" },
    { id: "6", name: "Bobby Shearer", position: "DF" },
    { id: "7", name: "Steve Grim", position: "MF" },
    { id: "8", name: "Tim Saunders", position: "MF" },
    { id: "9", name: "Sam Kincaid", position: "MF" },
    { id: "10", name: "Jude Sharp", position: "MF" },
    { id: "11", name: "Erik Eagle", position: "MF" },
    { id: "12", name: "Maxwell Carson", position: "FW" },
    { id: "13", name: "Axel Blaze", position: "FW" },
    { id: "14", name: "Kevin Dragonfly", position: "FW" },
    { id: "15", name: "Willy Glass", position: "FW" },
];

players["Royal_Academy"] = [
    { id: "1", name: "Joseph King", position: "GK" },
    { id: "2", name: "Peter Drent", position: "DF" },
    { id: "3", name: "Ben Simmons", position: "DF" },
    { id: "4", name: "Gus Martin", position: "DF" },
    { id: "5", name: "Alan Master", position: "MF" },
    { id: "6", name: "Herman Waldon", position: "MF" },
    { id: "7", name: "John Bloom", position: "MF" },
    { id: "8", name: "Derek Swing", position: "MF" },
    { id: "9", name: "Jude Sharp", position: "MF" },
    { id: "10", name: "Daniel Hatch", position: "FW" },
    { id: "11", name: "David Samford", position: "FW" },
];

players["Zeus"] = [
    { id: "1", name: "Paul Siddon", position: "GK" },
    { id: "2", name: "Apollo Light", position: "DF" },
    { id: "3", name: "Jeff Iron", position: "DF" },
    { id: "4", name: "Lane War", position: "DF" },
    { id: "5", name: "Danny Wood", position: "DF" },
    { id: "6", name: "Artie Mishman", position: "MF" },
    { id: "7", name: "Arion Matlock", position: "MF" },
    { id: "8", name: "Wesley Knox", position: "MF" },
    { id: "9", name: "Byron Love", position: "MF" },
    { id: "10", name: "Henry House", position: "MF" },
    { id: "11", name: "Jonas Demetrius", position: "FW" },
];

players["Raimon_II"] = [
    { id: "1", name: "Darren LaChance", position: "GK" },
    { id: "2", name: "Mark Evans", position: "GK" },
    { id: "3", name: "Jack Wallside", position: "DF" },
    { id: "4", name: "Hurley Kane", position: "DF" },
    { id: "5", name: "Scott Banyan", position: "DF" },
    { id: "6", name: "Shawn Froste (Shawn)", position: "DF" },
    { id: "7", name: "Bobby Shearer", position: "DF" },
    { id: "8", name: "Victoria Vanguard", position: "MF" },
    { id: "9", name: "Jude Sharp", position: "MF" },
    { id: "10", name: "Erik Eagle", position: "MF" },
    { id: "11", name: "Suzette Hartland", position: "FW" },
    { id: "12", name: "Shawn Froste (Aiden)", position: "FW" },
    { id: "13", name: "Axel Blaze", position: "FW" },
    { id: "14", name: "Willy Glass", position: "FW" },
];

players["Empty"] = [
    { id: "1", name: "", position: "" },
    { id: "2", name: "", position: "" },
    { id: "3", name: "", position: "" },
    { id: "4", name: "", position: "" },
    { id: "5", name: "", position: "" },
    { id: "6", name: "", position: "" },
    { id: "7", name: "", position: "" },
    { id: "8", name: "", position: "" },
    { id: "9", name: "", position: "" },
    { id: "10", name: "", position: "" },
    { id: "11", name: "", position: "" },
    { id: "12", name: "", position: "" },
    { id: "13", name: "", position: "" },
    { id: "14", name: "", position: "" },
    { id: "15", name: "", position: "" },
    { id: "16", name: "", position: "" },
];

