$(document).ready(() => {

  $.ajax({
  url: 'https://raw.githubusercontent.com/ValePV/DesafioWom/master/assets/js/data2.json',
  type: 'GET',
  dataType: 'JSON',
  success: success,
  error: error
  })
})


function success(data) {
    var numMobile = 0;
    var idEquipos = [];
    console.log(data.nextel_equipos);
    const equipos = data.nextel_equipos;
    
      for(i = 0; i< equipos.length ; i++) {
        $('.cels').append("<div class='contain-inf-cel col-md-6'><div class='row'><div class='col-md-5 contain-cel'><span style='display: none;' class='id-equipo'>"+i+"</span><img src='assets/img/" + equipos[i]['imagen1'] + "' class='image_product'><img class='soport' src='assets/img/soporte.png'>"
          + "</div><div class='contain-info col-md-7'><h2>" + equipos[i]['marca_id'] + "</h2>"
          + "<h2>" + equipos[i]['nombre'] + "</h2><h4>PORTATÉ A UN PLAN Y PODRÁS:</h4>"
          + "<div class='precio'><button class='but-vert'>compra</button><span class='valor'>$" + equipos[i]['valor_venta']
        + "</span><span class='valor1'>*hasta 12 cuotas sin <br> interés de $" + equipos[i]['valor_cuota'] + "</span></div>"
        + "<div class='arriendo'><button class='but-vert-arr'>arriendo</button><span>Pórtate con una cuota inicial desde: </span><span>$" + equipos[i]['cuota_arriendo'] + "</span><span> + 18 cuotas de $" + equipos[i]['cuota_arriendo'] + "</span></div><button class='see-detail'>VER DETALLES</button> <button class='compare'>COMP</button></div></div>");
      }
      $('.compare').click(function(){
        if(numMobile < 2) {
          var title = $(this).parent().parent().find('.contain-info h2:nth-child(2)').text();
          var position = $(this).parent().parent().find('.id-equipo').text();
          idEquipos.push(position);

          console.log(idEquipos);
          var textNode = '<li>'+ title +'</li>';
          console.log(title);
          component('div', 'product', textNode, '.compare-section');

          //numMobile++;
          if(numMobile < 1) {
             component('button', 'btn btn-compare', 'COMPARAR', '.compare-section');
             $('.compare-section').find('.btn').prop('disabled', true);
          }
          else {
            console.log('botoncito de comparar se habilita');
            $('.compare-section').find('.btn').prop('disabled', false);
            console.log($('.compare-section').find('.btn'));
          }
        }
        if(numMobile == 2) {
          numMobile++;
          
        }
        if (numMobile > 2) {

          alert('Haz alcanzado el maximo de dispositivos a comparar');

        }
        numMobile++;
      })

    }

function error(error) {
  console.log(error);
};

function component (element, classAtr, contentNode, appendNode) {
  var cont = document.createElement(element);
  cont.setAttribute("class", classAtr);
  cont.innerHTML = contentNode;
  $(appendNode).append(cont);
  //console.log(cont);
}



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


