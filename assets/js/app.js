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
         $('.cels').append("<div class='contain-inf-cel col-xs-12 col-sm-12 col-md-6'><div class='row'><div class='col-xs-6 col-sm-6 col-md-4 contain-cel'><span style='display: none;' class='id-equipo'>"+i+"</span><img class='img-cel image_product' src='assets/img/" + equipos[i]['imagen1'] + "'><img class='soport' src='assets/img/soporte.png'>"
        + "</div><div class='contain-info col-xs-11 col-sm-11 col-md-7'><h2>" + equipos[i]['marca_id'] + "</h2>"
        + "<h2>" + equipos[i]['nombre'] + "</h2><h4>PORTATÉ A UN PLAN Y PODRÁS:</h4>"
        + "<div class='precio'><div class='but-vert'>compra</div><span class='valor'>$" + equipos[i]['valor_venta']
        + "</span><br><span class='valor1'>*hasta 12 cuotas sin interés</span><span class='valor1'> de $" + equipos[i]['valor_cuota'] + "</span></div>"
        + "<div class='arriendo'><div class='but-vert-arr'>arriendo</div><span class='valor2'>Pórtate con una cuota inicial</span><br> <span class='valor1'>desde:</span><span class='valor3'> $" + equipos[i]['cuota_arriendo'] + "</span><br><span class='valor1'> + 18 cuotas de $" + equipos[i]['cuota_arriendo'] + "</span></div><button class='see-detail'>VER DETALLES</button> <button class='compare see-detail'>COMPARAR</button></div></div></div>");
        }
      $('.compare').click(function(){
        if(numMobile < 2) {
          var title = $(this).parent().parent().find('.contain-info h2:nth-child(2)').text();
          var position = $(this).parent().parent().find('.id-equipo').text();
          idEquipos.push(position);
          var textNode = '<span>'+ title +'</span>';
          console.log(title);
          component('div', 'product-compare', textNode, '.compare-section');

          //numMobile++;
          if(numMobile < 1) {
             component('button', 'btn btn-compare', 'COMPARAR', '.btn-compare-section');
             $('.btn-compare-section').find('.btn').prop('disabled', true);
          }
          else {
            console.log('botoncito de comparar se habilita');
            $('.btn-compare-section').find('.btn').prop('disabled', false);

            $('.btn-compare').click(function () {
              //console.log('Funcionaaa');
              console.log(idEquipos);
              for(i = 0; i < idEquipos.length ; i++){
                var id = idEquipos[i];
                const detailPhone = "<div class='cont-compatarion1'><img class='img-cel1' src='assets/img/" + equipos[id].imagen1 + "'><h1>V</h1><img class='soport' src='assets/img/soporte.png'><span class='glyphicon glyphicon-star' aria-hidden='true'></span><span class='glyphicon glyphicon-star' aria-hidden='true'></span><span class='glyphicon glyphicon-star' aria-hidden='true'></span><span class='glyphicon glyphicon-star' aria-hidden='true'></span><span class='glyphicon glyphicon-star-empty' aria-hidden='true'></span><span class='glyphicon glyphicon-star-empty' aria-hidden='true'></span><h2>" + equipos[id].marca_id + "</h2><h2>" + equipos[id].nombre + "</h2><h2>" 
              + equipos[id].valor_venta + "</h2><button id='buy'>COMPRAR</button><div class='selections'>" +"<div class='selections'><div class='dropdown'>"
              +"<button class='btn btn-default dropdown-toggle' type='button' id='dropdownMenu1' data-toggle='dropdown' aria-haspopup='true' aria-expanded='true'>MEMORIA"
              +"<span class='caret'></span>"
              +"<ul class='dropdown-menu' aria-labelledby='dropdownMenu1'><li>" + equipos[id].memoria + "</li><li>" + equipos[id].Memoria_dis + "</li></ul></div></div>"
              +"<div class='selections'><div class='dropdown'>"
              +"<button class='btn btn-default dropdown-toggle' type='button' id='dropdownMenu1' data-toggle='dropdown' aria-haspopup='true' aria-expanded='true'>PANTALLA"
              +"<ul class='dropdown-menu' aria-labelledby='dropdownMenu1'><li>" + equipos[id].pantalla + "</li></ul></div></div>"
              +"<div class='selections'><div class='dropdown'>"
              +"<button class='btn btn-default dropdown-toggle' type='button' id='dropdownMenu1' data-toggle='dropdown' aria-haspopup='true' aria-expanded='true'>CÁMARA"
              +"<ul class='dropdown-menu' aria-labelledby='dropdownMenu1'><li>" + equipos[id].Camara + "</li></ul></div></div>"
              +"<div class='selections'><div class='dropdown'>"
              +"<button class='btn btn-default dropdown-toggle' type='button' id='dropdownMenu1' data-toggle='dropdown' aria-haspopup='true' aria-expanded='true'>RAM"
              +"<ul class='dropdown-menu' aria-labelledby='dropdownMenu1'><li>" + equipos[id].RAM + "</li></ul></div></div>"
              +"<div class='selections'><div class='dropdown'>"
              +"<button class='btn btn-default dropdown-toggle' type='button' id='dropdownMenu1' data-toggle='dropdown' aria-haspopup='true' aria-expanded='true'>REDES"
              +"<ul class='dropdown-menu' aria-labelledby='dropdownMenu1'><li>" + equipos[id].Redes + "</li></ul></div></div>"
              +"<div class='selections'><div class='dropdown'>"
              +"<button class='btn btn-default dropdown-toggle' type='button' id='dropdownMenu1' data-toggle='dropdown' aria-haspopup='true' aria-expanded='true'>PRECIO"
              +"<ul class='dropdown-menu' aria-labelledby='dropdownMenu1'><li>" + equipos[id].Precio + "</li></ul></div></div>"
              +"<div class='selections'><div class='dropdown'>"
              +"<button class='btn btn-default dropdown-toggle' type='button' id='dropdownMenu1' data-toggle='dropdown' aria-haspopup='true' aria-expanded='true'>SOBRE EL EQUIPO"
              +"<ul class='dropdown-menu' aria-labelledby='dropdownMenu1'><li>" + equipos[id].Batería + "</li><li>" + equipos[id].Sistema_Operativo + "</li></ul></div></div>"
              $('.first-comparation').append(detailPhone);
              $('.modal-body').append('<div class="dual-vision">'+detailPhone+'</div>')

     }
     $('.first-comparation').append("<div class='center'><button data-toggle='modal' data-target='#squarespaceModal' class='btn btn-primary center-block'>Click Me</button></div>");

            })
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

      $('.btn-compare').click(function () {
        console.log('Funcionaaa');
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




/*$(document).ready(() => {
  $.ajax({
  url: 'https://raw.githubusercontent.com/ValePV/DesafioWom/master/assets/js/data2.json',
  type: 'GET',
  dataType: 'JSON',
  success: function success(data) {
    var equipos = data.nextel_equipos;
    console.log(equipos[0].nombre)
    
    for(i = 0; i< equipos.length ; i++){
      $('.first-comparation').append("<div class='cont-compatarion1'><img class='img-cel1' src='assets/img/" + equipos[id].imagen1 + "'><h1>V</h1><img class='soport' src='assets/img/soporte.png'><span class='glyphicon glyphicon-star' aria-hidden='true'></span><span class='glyphicon glyphicon-star' aria-hidden='true'></span><span class='glyphicon glyphicon-star' aria-hidden='true'></span><span class='glyphicon glyphicon-star' aria-hidden='true'></span><span class='glyphicon glyphicon-star-empty' aria-hidden='true'></span><span class='glyphicon glyphicon-star-empty' aria-hidden='true'></span><h2>" + equipos[id].marca_id + "</h2><h2>" + equipos[id].nombre + "</h2><h2>" 
        + equipos[id].valor_venta + "</h2><button id='buy'>COMPRAR</button><div class='selections'>"
        +"<button id='divide' data-toggle='modal' data-target='#myModal'>DIVIDIR PANTALLA</button>"
        +"<div class='selections'><div class='dropdown'>"
        +"<button class='btn btn-default dropdown-toggle' type='button' id='dropdownMenu1' data-toggle='dropdown' aria-haspopup='true' aria-expanded='true'>MEMORIA"
        +"<span class='caret'></span>"
        +"<ul class='dropdown-menu' aria-labelledby='dropdownMenu1'><li>" + equipos[id].memoria + "</li><li>" + equipos[id].Memoria_dis + "</li></ul></div></div>"
        +"<div class='selections'><div class='dropdown'>"
        +"<button class='btn btn-default dropdown-toggle' type='button' id='dropdownMenu1' data-toggle='dropdown' aria-haspopup='true' aria-expanded='true'>PANTALLA"
        +"<ul class='dropdown-menu' aria-labelledby='dropdownMenu1'><li>" + equipos[id].pantalla + "</li></ul></div></div>"
        +"<div class='selections'><div class='dropdown'>"
        +"<button class='btn btn-default dropdown-toggle' type='button' id='dropdownMenu1' data-toggle='dropdown' aria-haspopup='true' aria-expanded='true'>CÁMARA"
        +"<ul class='dropdown-menu' aria-labelledby='dropdownMenu1'><li>" + equipos[id].Camara + "</li></ul></div></div>"
        +"<div class='selections'><div class='dropdown'>"
        +"<button class='btn btn-default dropdown-toggle' type='button' id='dropdownMenu1' data-toggle='dropdown' aria-haspopup='true' aria-expanded='true'>RAM"
        +"<ul class='dropdown-menu' aria-labelledby='dropdownMenu1'><li>" + equipos[id].RAM + "</li></ul></div></div>"
        +"<div class='selections'><div class='dropdown'>"
        +"<button class='btn btn-default dropdown-toggle' type='button' id='dropdownMenu1' data-toggle='dropdown' aria-haspopup='true' aria-expanded='true'>REDES"
        +"<ul class='dropdown-menu' aria-labelledby='dropdownMenu1'><li>" + equipos[id].Redes + "</li></ul></div></div>"
        +"<div class='selections'><div class='dropdown'>"
        +"<button class='btn btn-default dropdown-toggle' type='button' id='dropdownMenu1' data-toggle='dropdown' aria-haspopup='true' aria-expanded='true'>PRECIO"
        +"<ul class='dropdown-menu' aria-labelledby='dropdownMenu1'><li>" + equipos[id].Precio + "</li></ul></div></div>"
        +"<div class='selections'><div class='dropdown'>"
        +"<button class='btn btn-default dropdown-toggle' type='button' id='dropdownMenu1' data-toggle='dropdown' aria-haspopup='true' aria-expanded='true'>SOBRE EL EQUIPO"
        +"<ul class='dropdown-menu' aria-labelledby='dropdownMenu1'><li>" + equipos[id].Batería + "</li><li>" + equipos[id].Sistema_Operativo + "</li></ul></div></div>");


   

     }
  
  error: error

  }
  })
})
*/


