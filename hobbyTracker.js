//Emma Schmitt
//Repo URL: https://github.com/EmmaSchmitt22/cs81-module5a-review

const hobbyLog = [
    { day: "Monday", hobby: "drawing", minutes: 30, mood: "focused" },
    { day: "Tuesday", hobby: "reading", minutes: 20, mood: "relaxed" },
    { day: "Wednesday", hobby: "gaming", minutes: 45, mood: "excited" },
    { day: "Thursday", hobby: "drawing", minutes: 25, mood: "creative" },
    { day: "Friday", hobby: "reading", minutes: 35, mood: "calm" }
];

function totalTime(log) { //Function totalTime() calls function reduce, which iterates over each value of minutes in the log
    return log.reduce((sum, session) => sum + session.minutes, 0); //Returns a total of all minutes spent on hobbies
}

function uniqueHobbies(log) { //Function for listing each unique hobby (with no repeats)
    const names = log.map(entry => entry.hobby); //map function creates a new array with extracted hobby data
    return [...new Set(names)]; //Set function removes duplicates before storing final result
}

/* SUGGESTION: I might rename the variable "minMinutes" to something like minTIME, just to avoid any
 confusion between "minutes" and "minMinutes"*/

function longSessions(log, minMinutes) { //Takes in the log and a value for your set "minMinutes" to measure against
    return log.filter(entry => entry.minutes > minMinutes); //filters the minutes data and returns any session where the  user's
    //minutes were greater than the set minutes minimum
}

function countMood(log, moodType) { //Takes in the log and a user's set mood type
    return log.filter(entry => entry.mood === moodType).length; // Uses filter to count how many instances of that mood are in the log
}

console.log("Total time spent:", totalTime(hobbyLog), "minutes");
console.log("Unique hobbies:", uniqueHobbies(hobbyLog));
console.log("Sessions longer than 30 min:", longSessions(hobbyLog, 30));
console.log("Number of relaxed sessions:", countMood(hobbyLog, "relaxed"));

//new Test
console.log("Number of happy sessions:", countMood(hobbyLog, "happy"));
//I tested with a mod name that was not in the dataset as an experiment, to see what would be returned
