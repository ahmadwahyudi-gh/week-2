const nameList=[
    "Abigail",
    "Alexandra",
    "Alison",
    "Amanda",
    "Angela",
    "Bella",
    "Carol",
    "Caroline",
    "Carolyn",
    "Deirdre",
    "Diana",
    "Elizabeth",
    "Ella",
    "Faith",
    "Olivia",
    "Penelope",
]

// function searchName(name, cbNameList, limit){
//     let result = name.filter((name) =>
//         name.toLowerCase().includes(nameToSearch.toLowerCase())
//     );
//     if(limit === undefined){
//         return result;
//     }
//     return cbNameList(limit, result);
// };
// function setLimit(limit, result){
//     let resultLimited = [];
//     for(let i = 0; i < limit; i++){
//         resultLimited = [...resultLimited, result[i]];
//     }
//     return resultLimited;
// };
// const search = searchName("an", setLimit, 4);

const searchName = (nameToSearch, limit, cbNameList) => {
    let result = nameList.filter((nameList) =>
        nameList.toLowerCase().includes(nameToSearch.toLowerCase())
    );
    if (limit === undefined) {
        return result;
    }
    return cbNameList(limit, result);
}
const setLimit = (limit, result) => {
    let resultLimited = [];
    for (let i = 0; i < limit; i++) {
        resultLimited = [...resultLimited, result[i]];
    }
    return resultLimited;
}
const search = searchName("an",3, setLimit);
console.log(search);