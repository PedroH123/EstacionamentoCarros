// This is a JavaScript file

$(document).on("click","#paginaBusca",function(){
  $(location).attr("href","busca.html");
});



$(document).on("click","#salvar",function(){
    var parametros ={
      "horario":$("#entrada").val()+":00",
      "nome":$("#nome").val(),
      "marca":$("#marca").val(),
      "modelo":$("#modelo").val(),
      "tipo":$("#tipo").val(),
      "placa":$("#placa").val()
      
    };

    $.ajax({
      type:"post",//como vou enviar os dados ao servidor
      url:"https://estacionamentocarros.000webhostapp.com/cadastro.php",//para onde vou enviar
      data:parametros,//o que eu vou enviar
      //caso esteja tudo certo executa esse codigo
      success: function(data){
        navigator.notification.alert(data);
        $("#entrada").val("");
        $("#nome").val("");
        $("#tipo").val("");
      },
      //caso algo esteja errado executa esse codigo
      error: function(data){
        navigator.notification.alert("Erro ao cadastrar!");
      }
    });
});


$(document).on("click","#buscarPlaca",function(){
  var parametro ={
      "placa":$("#buscar").val()
    };

    $.ajax({
      type:"post",//como vou enviar os dados ao servidor
      url:"https://https://estacionamentocarros.000webhostapp.com/buscar.php",//para onde vou enviar
      data:parametro,
      dataType:"json",
      //caso esteja tudo certo executa esse codigo
      success: function(data){
        $("#entrada").val("");
        $("#nome").val("");
        $("#tipo").val("");
      },
      //caso algo esteja errado executa esse codigo
      error: function(data){
        navigator.notification.alert(data);
      }
    });
});