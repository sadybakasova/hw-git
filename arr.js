let array=[1,-6,8,-2,-2,2]
let result=array.reduce((a,b)=>b<0 ? a+b :a,0)
console.log(result)

const it_departments_employees=[
    {
        name:'Roman',
        salary:1200
    },
    {
        name:'Asel',
        salary:2000
    },{
        name:'Timur',
        salary:2100
    },
    {
        name:'Altynai',
        salary:300
    }
]
// const sumSal= it_departments_employees.reduce((a,b)=> {
//     return a+b.salary
// },0)
// console.log(sumSal)
getSum=it_departments_employees.reduce(function(a,b) {
    return a+b.salary
},0) / it_departments_employees.length
console.log(getSum)
const someUsers = it_departments_employees.filter(item => item.salary>=1500)
console.log(someUsers)
const someUsers2= it_departments_employees.forEach(item=> item.salary<1500+500)
console.log(someUsers2)