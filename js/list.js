axios.get('http://localhost:3000/users')
.then(function (response) {
  console.log(response.data.length);
  for(i=0; i<response.data.length; i++){
    $('#panel').append(
      '<tr><th scope="row" id="num"><center>'+ response.data[i].id +'</center></th>'+
      '<td id="fname">'+ response.data[i].first_name +'</td>'+
      '<td id="lname">'+ response.data[i].last_name +'</td>'+
      '<td id="role">'+ response.data[i].role +'</td>'+
      '<td id="exp">'+ response.data[i].expired +'</td></tr>'
    );
  }
})
.catch(function (error) {
  console.log(error);
});