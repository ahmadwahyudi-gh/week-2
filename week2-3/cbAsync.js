// const searchName = (name) => {
//   let output = `${name.toLowerCase()}`
//   return output
// }

const data = [
  {
    title: "Baju Renang",
  },
  { title: "Baju Batik" },
]
const getProducts = new Promise((resolve, reject) => {
    if (data){
        if(data.length<5){
            reject({
                message: 'aku gamau, karena datanya kurang',
                data:[]
            })
        }else{
            resolve({
                message:'succes ambil data',
                data:data
            })
        }
    }else{
        reject({
            message:'gagal ambil data',
            data:[]
        })
    }
})

getProducts.then((data)=>{
    console.log(data, 'jadi ambil')
}).catch((err)=>{
    console.log({
        message:'waah parahlu di janjiin tapi'
    })
    console.log(err)
})

