$(document).ready(() => {
  $.ajax({
  url: 'https://raw.githubusercontent.com/ValePV/DesafioWom/master/assets/js/data2.json',
  type: 'GET',
  dataType: 'JSON',
  success: function success(data) {
    console.log(data.nextel_equipos);
    var equipos = data.nextel_equipos;
    var idEq = 0
    for(i = 0; i< equipos.length ; i++){
      idEq=+
      $('.cels').append("<div class='row contain-inf-cel'><div class='col-md-5 contain-cel'><img src='assets/img/" +equipos[i]['imagen1'] + "'</div><div class='col-md-6'><h5>" + equipos[i]['marca_id'] + "</h5>"
        + "<h4>" + equipos[i]['nombre'] + "</h4></div>");

    }
  
  error: error

  }
  })




})

function error(error) {
  console.log(error);
};


/*
$.ajax({url: "https://raw.githubusercontent.com/ValePV/DesafioWom/master/assets/js/data2.json", success: function(result){
        console.log(result);
        for(i = 0; i< result.nextel_equipos.length ; i++){
  $('.cels').append("<div class='row contain-inf-cel'><div class='col-md-5 contain-cel'><img class='celsphone' src='assets/images/"
        + nextel_equipos[i]['imagen1'] + "'></div><div class='col-md-6'><h5>" + nextel_equipos[i]['marca_id'] + "</h5>"
        + "<h4>" + nextel_equipos[i]['nombre'] +
  "</h4></div>");

}
}});*/
/*
for(i = 0; i< nextel_equipos.length ; i++){
  $('.cels').append("<div class='row contain-inf-cel'><div class='col-md-5 contain-cel'><img class='celsphone' src='assets/images/"
        + nextel_equipos[i]['imagen1'] + "'></div><div class='col-md-6'><h5>" + nextel_equipos[i]['marca_id'] + "</h5>"
        + "<h4>" + nextel_equipos[i]['nombre'] +
  "</h4></div>");

}*/

