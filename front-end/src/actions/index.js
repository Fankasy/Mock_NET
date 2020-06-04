
const axios = require("axios");

export function changeCategory(id){
  return {
    type: "CHANGE",
    id: id
  };
}

const updateUsers = (data) => {
  return {
    type: 'UPDATEUSERS',
    data: data
  }
}


export const getUsers = function(){
  return (dispatch=>{
    axios
    .get("http://localhost:5000/api/lists")
    .then(response => {
        // console.log(response);
        dispatch(updateUsers(response.data));
    })
    .catch(err =>{
        console.log(err);
    })
  })
}