// const user = {
//     age:16,
//     name:'Dean Azimbaev'
// }
// user.name='Roman.Zaviyazkin'
// user.age=25
// console.log(user.name,user.age)

const user1= {}
const user2={
    age:23
}
const user3={
    age:23,
    name:''
}
const user4= {
    age:'',
    name:''
} 
const user5={
    age:23,
    name:'Dean'
}
const hasRequiredFields=()=> {
  if(user1.name===undefined) {
    console.log(false,'в объекте отсутствуют необходимые поля')
   }
   if(user2.name===undefined) {
    console.log(false,' отсутствует поле name')
   }
   if(user3.name===undefined) {
    console.log(false,'значение поля name пустое')
   }
   if(user4.name===undefined) {
    console.log(false,'значение всех полей пустые')
   }
   if(user5.name) {
    console.log(true,'потому что все поля есть')
   }
}
hasRequiredFields(user1,user2,user3,user4,user5)


 