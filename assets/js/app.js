$(document).ready(() => {
  // Numeros de Moviles comparandose
  var numMobile = 0;


  $.ajax({
  url: 'https://raw.githubusercontent.com/ValePV/DesafioWom/master/assets/js/data2.json',
  type: 'GET',
  dataType: 'JSON',
  success: success,
  error: error
  })
})


function success(data) {
    console.log(data.nextel_equipos);
    var equipos = data.nextel_equipos;
    
      for(i = 0; i< equipos.length ; i++){
        $('.cels').append("<div class='contain-inf-cel col-md-6'><div class='row'><div class='col-md-5 contain-cel'><img src='assets/img/" + equipos[i]['imagen1'] + "'><img class='soport' src='assets/img/soporte.png'>"
          + "</div><div class='contain-info col-md-7'><h2>" + equipos[i]['marca_id'] + "</h2>"
          + "<h2>" + equipos[i]['nombre'] + "</h2><h4>PORTATÉ A UN PLAN Y PODRÁS:</h4>"
          + "<div class='precio'><button class='but-vert'>compra</button><span class='valor'>$" + equipos[i]['valor_venta']
        + "</span><span class='valor1'>*hasta 12 cuotas sin <br> interés de $" + equipos[i]['valor_cuota'] + "</span></div>"
        + "<div class='arriendo'><button class='but-vert-arr'>arriendo</button><span>Pórtate con una cuota inicial desde: </span><span>$" + equipos[i]['cuota_arriendo'] + "</span><span> + 18 cuotas de $" + equipos[i]['cuota_arriendo'] + "</span></div><button class='see-detail'>VER DETALLES</button> <button class='compare'>COMP</button></div></div>");
      }
      $('.compare').click(function(){
        if(numMobile <= 2) {
          console.log('click');
        }
        else {
          alert('Haz alcanzado el maximo de dispositivos a comparar');
        }
        
      })
    }

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

