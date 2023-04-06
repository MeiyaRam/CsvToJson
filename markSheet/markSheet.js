const csvToJson = require('csvtojson');

const getResultCount = (markSheets) => 
   markSheets.reduce((acc,cur) => ({
        countPass : (cur.result == "pass") ? (acc.countPass+1) : acc.countPass,
        countFail : (cur.result == "fail") ? (acc.countFail+1) : acc.countFail
   }),{countPass : 0, countFail : 0});


const getResult = (marks) => {
  const result = (Math.min(Number(marks.tamil), Number(marks.english), Number(marks.maths), Number(marks.science), Number(marks.social)) > 35) ? "pass" : "fail";

  return {...marks, result};
}

const getRank = (totalMarks) => {
  const sortedMarkSheets = totalMarks.sort((a, b) => b.total - a.total);
  const studentResult = sortedMarkSheets.map(getResult);
  const rank = studentResult.map((student,index,array) => ({
    ...student,
    rank: (student.result === "pass") ? array.filter((mark) => ((mark.total > student.total) && (mark.result === "pass"))).length+1 : "-",
  }));
  
  return rank;
}

const getTotal = (marks) => 
  Number(marks.tamil) + Number(marks.english) + Number(marks.maths) + Number(marks.science) + Number(marks.social);

const getSum = (markSheets) => {
  const totalMarks = markSheets.map((sheet) => ({
    ...sheet,
    total: getTotal(sheet),
  }));
  const rank = getRank(totalMarks);
  console.log(getResultCount(rank));
  
  return rank;
}

const main = async () => {
  const markSheets = await csvToJson().fromFile('./markSheetData.csv');
  console.table(getSum(markSheets));
  
}

main();