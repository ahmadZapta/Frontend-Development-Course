const persons = ["Ali", "Ahmad", "Haider", "18", "22"];
const studenet = {
  name: "Ali",
  age: "18",
  degree: "CS",
};
const arrayObj = [
  {
    name: "Ali",
    age: "18",
    degree: "CS",
    courses: ["SE", "IT", "OOP"],
  },
  {
    name: "Ahmad",
    age: "18",
    degree: "CS",
  },
  {
    name: "Haider",
    age: "18",
    degree: "CS",
  },
];

arrayObj.forEach((std) => {
  console.log("Student", std.courses);
});

const filteredData = arrayObj.filter((stu) => stu.courses === undefined);
const filteredUser = arrayObj.find((stu) => stu.name !== "Ahmad");
const filteredUserIndex = arrayObj.findIndex((stu) => stu.name === "Ahmad");

console.log(filteredUserIndex);
