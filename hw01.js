var letterGrade;
var studentScore = 82


if (studentScore >= 90) {
    letterGrade = 'A'
} else if (80 <= studentScore < 90) {
    letterGrade = 'B'
} else if(60 <= studentScore < 80) {
    letterGrade = 'C'
} else if(40 <= studentScore < 60) {
    letterGrade = 'D'
} else {
    letterGrade = 'F'
}

var sentence = `학생의 점수는 ${studentScore}점이고 레터 그레이드는 ${letterGrade}이다.`
console.log(sentence);