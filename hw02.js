var name = '이하정';
var birth = '99.04.14';
var nationality = '한국';
var job = '학생';

const intro = '안녕하세요, 반갑습니다.'
const outro = '잘 부탁드립니다.'

function introduce(name, birth, nationality, job) {
    var result1 = `제 이름은 ${name}입니다.`;
    var result2 = `생년월일은 ${birth}입니다.`;
    var result3 = `저는 ${nationality}사람입니다.`;
    var result4 = `직업은 ${job}입니다.`;

    console.log(intro);
    console.log(result1);
    console.log(result2);
    console.log(result3);
    console.log(result4);
    console.log(outro);
  }

introduce(name, birth, nationality, job);