$.ajax({
  url: './../data/equipos.json',
  type: 'GET',
  dataType: 'JSON',
  success: function success(data) {
    console.log(data);
  },
  error: error

})



function error(error) {
  console.log(error);
}