/** @format */

let arr = [
  { id: 1, name: "john", age: "18", marks: 80 },
  { id: 2, name: "jack", age: "20", marks: 85 },
  { id: 3, name: "karen", age: "19", marks: 35 },
];

function PrintStudentswithMap() {
  //Write your code here , just console.log
  arr.map((obj) => {
    if (obj.marks > 50) {
      console.log(obj);
    }
  });
}

function PrintStudentsbyForEach() {
  //Write your code here , just console.log
  arr.forEach((obj) => {
    if (obj.marks > 50) {
      console.log(obj);
    }
  });
}

function addData() {
  //Write your code here, just console.log
  arr.push({ id: 4, name: "susan", age: "20", marks: 45 });
  console.log(arr);
}

function removeFailedStudent() {
  //Write your code here, just console.log
  arr = arr.filter((obj) => obj.marks > 50);
  console.log(arr);
}

function concatenateArray() {
  //Write your code here, just console.log

  let arr2 = [
    { rollNo: "100", name: "Akash" ,class:"12th" , gender:"male"},
    { rollNo: "101", name: "Neil" ,class:"12th" ,gender :"male" },
    { rollNo: "102", name: "Nitika", class:"11th" , gender:"female"},
  ];
  arr2.forEach((st)=>{
    console.log(st);
  })
}
