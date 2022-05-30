// make const objects named with "biodata"
// with properties:
// -"name"
// -"age"
// - "hobbies"
// - "isMarried"
// - "schoolList" objects with key "name","yearIn","yearOut","major"
// - "skills" objects with key "skillName" and "level"
// - "interestInCoding"

const biodata = {
  name: "Ahmad Wahyudi",
  age: 27,
  hobbies: ["Bersepeda", "Membaca", "Renang"],
  isMarried: false,
  schoolList: [
    {
      name: "MIN 1 Kolor Sumenep",
      yearIn: 2000,
      yearOut: 2006,
      major: null,
    },
    {
      name: "SMPN 2 Sumenep",
      yearIn: 2006,
      yearOut: 2009,
      major: null,
    },
    {
      name: "SMKN 1 Sumenep",
      yearIn: 2012,
      yearOut: 2015,
      major: "Rekayasa Perangkat Lunak",
    },
  ],
  skills: [
    {
      skillName: "Python",
      level: "Beginner",
    },
    {
      skillName: "PHP",
      level: "Beginner",
    },
    {
      skillName: "Javascript",
      level: "Beginner",
    },
    {
      skillName: "Flutter",
      level: "Beginner",
    },
    {
      skillName: "MySQL",
      level: "Beginner",
    },
    {
      skillName: "Android Studio",
      level: "Beginner",
    },
  ],
  interestInCoding: true,
}

console.log(biodata)
