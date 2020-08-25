let students = [
  { name: "John", 
    score1: 47, 
    score2: 46
  }, 
  { name: "Bob", 
    score1: 23, 
    score2: 24
  }, 
  { name: "Nick", 
    score1: 48, 
    score2: 35
  }, 
  { name: "Alex", 
    score1: 44, 
    score2: 45
  }
]

let passLimits = [91, 81, 71, 61, 51];
let degrees = ["A", "B", "C", "D", "E"]

function calculateScore(score1, score2) {
  for(var i = 0; i < students.length; i++) {
    score1 = students[i].score1;
    score2 = students[i].score2;
    let totalScore = score1 + score2;

    if(totalScore >= 51) {
      console.log(students[i].name + " passed final exam successfully:");

      for(var x = 0; x < passLimits.length; x++) {
        if(totalScore >= passLimits[x]) {
          console.log("He has " + totalScore + " points and he got diploma with degree " + degrees[x]);
          console.log("--------------");
          break;
        }
      }
    } else {
      console.log(students[i].name + " got " + totalScore + " points, has failed and has to try next year");
      console.log("--------------");
    }
  }
}
calculateScore();
