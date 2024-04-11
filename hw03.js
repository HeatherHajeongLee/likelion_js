var people = [
    ['Steve Jobs', '기업가'],
    ['Sam Altman', '개발자'],
    ['Zendaya', '배우']
  ];
  
  for (let i = 0; i < people.length; i++) {
    var sentence = `${people[i][0]}의 직업은 ${people[i][1]}입니다.`;
    console.log(sentence);
  }