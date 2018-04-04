$(document).ready(() => {

  $('#contrata').modal();

  $.ajax({
  url: 'https://raw.githubusercontent.com/ValePV/DesafioWom/master/assets/js/data2.json',
  type: 'GET',
  dataType: 'JSON',
  success: function success(data) {
    console.log(data.nextel_equipos);
    var equipos = data.nextel_equipos;
    
    for(i = 0; i< equipos.length ; i++){
    
      $('.cels').append("<div class='contain-inf-cel col-xs-12 col-sm-12 col-md-6'><div class='row'><div class='col-xs-6 col-sm-6 col-md-4 contain-cel'><img class='img-cel' src='assets/img/" + equipos[i]['imagen1'] + "'><img class='soport' src='assets/img/soporte.png'>"
        + "</div><div class='contain-info col-xs-11 col-sm-11 col-md-7'><h2>" + equipos[i]['marca_id'] + "</h2>"
        + "<h2>" + equipos[i]['nombre'] + "</h2><h4>PORTATÉ A UN PLAN Y PODRÁS:</h4>"
        + "<div class='precio'><div class='but-vert'>compra</div><span class='valor'>$" + equipos[i]['valor_venta']
        + "</span><br><span class='valor1'>*hasta 12 cuotas sin interés</span><span class='valor1'> de $" + equipos[i]['valor_cuota'] + "</span></div>"
        + "<div class='arriendo'><div class='but-vert-arr'>arriendo</div><span class='valor2'>Pórtate con una cuota inicial</span><br> <span class='valor1'>desde:</span><span class='valor3'> $" + equipos[i]['cuota_arriendo'] + "</span><br><span class='valor1'> + 18 cuotas de $" + equipos[i]['cuota_arriendo'] + "</span></div><button class='see-detail'>VER DETALLES</button><button id='compara' class='see-detail'>COMPARAR</button></div></div></div>");

    }
  
  error: error

  }
  })

})

function error(error) {
  console.log(error);
};

// $('#compara').click(function(){
//   $(this).
// })
