let data={
    id:1,
    name:'Leanne Graham',
    username:'Bret',
    email:'Sincere@april.biz',
    address:{
        street:'Kulas Light',
        suite:'Apt. 556',
        city:'Gwenborough',
        zipcode:'92998-3874',
    },
    phone:'1-770-736-8031 x56442',
    website:'hildegard.org',
}

let editedData={
    ...data,
    name:'Ahmad Wahyudi',
    email:'ahmadwahyudi2395@gmail.com',
    hobbies:'Membaca'
}
const {address:{street, city}}=data
const addressData={
    street:street,
    city:city
}
console.log(editedData);
console.log(addressData);