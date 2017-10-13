$( document ).ready(function() {

  //Settings DatePicker
  $('.datepicker').pickadate({
      firstDay: 1,
      selectMonths: true, // Creates a dropdown to control month
      selectYears: 15, // Creates a dropdown of 15 years to control year
      format: 'dd/mm/yyyy',
      monthsFull: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
      monthsShort: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
      weekdaysFull: ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
      weekdaysShort: ['Dom', 'Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab'],
      today: 'Hoy',
      clear: 'Limpiar',
      close: 'Cerrar',
      labelMonthNext: 'Mes siguiente',
      labelMonthPrev: 'Mes anterior',
      labelMonthSelect: 'Seleccione un mes de la lista',
      labelYearSelect: 'Seleccione un año de la lista'
  });

  //Fix Responsive Tabs
  $('#myTabs a').click(function(e){
    e.preventDefault();
    $(this).tab('show');
  });
    
  fakewaffle.responsiveTabs(['xs', 'sm']);

  //Refuerzo de validación gráfica con icono para forms
  $('.validate').focusout(function(){
    if($(this).hasClass("valid")){
      $(this).parent().find('.form-control-feedback').removeClass("icon-invalid mdi-alert-error icon-valid mdi-action-done").addClass("icon-valid mdi-action-done" );
    }else if($(this).hasClass("invalid")){
      $(this).parent().find('.form-control-feedback').removeClass("icon-invalid mdi-alert-error icon-valid mdi-action-done").addClass("icon-invalid mdi-alert-error" );
    }
  });

  //Simulación Datos Padre y Madre
  $("#padre").click(function(){
  	$("#datos-madre").addClass("invisible fadeOut").removeClass("animated fadeIn");
  	$("#datos-padre").removeClass("invisible fadeOut").addClass("animated fadeIn");
  });

  $("#madre").click(function(){
  	$("#datos-padre").addClass("invisible fadeOut").removeClass("animated fadeIn");
  	$("#datos-madre").removeClass("invisible fadeOut").addClass("animated fadeIn");
  });

  $("#ambos").click(function(){
  	$("#datos-padre").removeClass("invisible fadeOut").addClass("animated fadeIn");
  	$("#datos-madre").removeClass("invisible fadeOut").addClass("animated fadeIn");
  });

  $("#ninguno").click(function(){
  	$("#datos-padre").addClass("invisible fadeOut").removeClass("animated fadeIn");
  	$("#datos-madre").addClass("invisible fadeOut").removeClass("animated fadeIn");
  });


  //Simulación Agregar y Quitar Cargas
  var form = $("#add-person-form");
  var table = $("#add-person-table");
  var button = $("#add-person-button");
  var cancelbtn = $("#cancel-person-button");
  
  $("#add-person-button").click(function(){
    var name = $("#names").val();
    var paterno = $("#paterno").val();
    var materno = $("#materno").val();
    var rut = $("#rut-carga").val();
    var capital = $("#capital").val();
    var relacion = $("#relacion option").attr("value");
    var date = $("#date").val();
    var stringRow ='<tr><td>'+ name +'</td><td>'+ paterno +'</td><td>'+ materno +'</td><td>'+ rut +'</td><td>'+ relacion +'</td><td>'+ date +'</td><td>'+ capital +'</td><td><a href="#" class="delete_row" title="Eliminar"><i class="mdi-navigation-cancel"></i></a></td></tr>'
  
    if(form.hasClass("invisible") && table.hasClass("invisible")){
      $(form).addClass("animated fadeIn visible").removeClass("fadeOut invisible");
      $(cancelbtn).addClass("animated fadeIn visible").removeClass("fadeOut invisible");

    }else if(form.hasClass("visible") && table.hasClass("invisible")){
      $(form).addClass("invisible fadeOut").removeClass("visible animated fadeIn");
      $(table).addClass("animated fadeIn visible").removeClass("fadeOut invisible");
      $(cancelbtn).addClass("invisible fadeOut").removeClass("visible animated fadeIn");
      $("#add-person-table tbody").append(stringRow);

    }else if(table.hasClass("visible") && form.hasClass("invisible")){
      $(form).addClass("animated fadeIn visible").removeClass("fadeOut invisible");
      $(cancelbtn).addClass("animated fadeIn visible").removeClass("fadeOut invisible");

    }else if(form.hasClass("visible") && table.hasClass("visible")){
      $(form).addClass("invisible fadeOut").removeClass("visible animated fadeIn");
      $(cancelbtn).addClass("invisible fadeOut").removeClass("visible animated fadeIn");
      $("#add-person-table tbody").append(stringRow);
    }
  });

  $("#cancel-person-button").click(function(){
    $(this).addClass("invisible fadeOut").removeClass("visible animated fadeIn");
    $("#add-person-form").addClass("invisible fadeOut").removeClass("visible animated fadeIn");
  });



  //Eliminar fila de tabla de cargas del producto (No funciona)
  $(".delete_row").click(function(){
    console.log("pinchando borrar");
    $(this).parent().parent().remove();
  });



  //Habilitación botón
  $("#filled-in-box").click(function(){
    var checkbox = $("#filled-in-box");
    if(checkbox.is(":checked")){
      $("#last-step").removeClass("disabled");
    }else{
      $("#last-step").addClass("disabled");
    }
  });

});

