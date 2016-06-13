'use strict';


var nombre;
var direccion;
var telefono;
var servicio;
var fecha;
var hora;
var email;
var isCorrect;

function setValues() {
  nombre = $('#nombre').val();
  direccion = $('#direccion').val();
  telefono = $('#telefono').val();
  servicio = $('#servicio').val();
  fecha = $('#fecha').val();
  hora = $('#hora').val();
  email = $('#email').val();  
}

function printFormValues() {
  console.log('nombre: ' + nombre);
  console.log('direccion: ' + direccion);
  console.log('telefono: ' + telefono);
  console.log('servicio: ' + servicio);
  console.log('fecha: ' + fecha);
  console.log('hora: ' + hora);
  console.log('email: ' + email);
}

function sendForm(){
  /*$.ajax({
    url : 'http://comocantanlasaves.com/people',
    data : data1, 
    type : 'PUT',
    contentType: 'application/json; charset=utf-8',
    dataType: 'json',
    success : function( json ) {
      console.log("success: " + JSON.stringify(json));
      if( json.operation === 'success' ) {
        window.open( json.uri );
      } else {
        Materialize.toast('Error intenta más tarde', 4000, 'rounded');
      }
    },
    error: function(xhr, status) {
      console.log("error xhr: " + JSON.stringify(xhr));
      console.log("error status: " + JSON.stringify(status));
      Materialize.toast('Error intenta más tarde', 4000, 'rounded');
    }*/
}

function checkForm() {
  if(nombre === "" && direccion === "" && telefono === "" && servicio === "" && fecha === "" && hora === "" && email === "" ){
    Materialize.toast('Ingresa tus datos', 4000, 'rounded');
    isCorrect = false;
  } else {
    if(nombre === ""){
      Materialize.toast('Ingresa tu nombre', 4000, 'rounded');
      isCorrect = false;
    }

    if(direccion === ""){
      Materialize.toast('Ingresa tu direccion', 4000, 'rounded');
      isCorrect = false;
    }

    if(telefono === ""){
      Materialize.toast('Ingresa tu telefono', 4000, 'rounded');
      isCorrect = false;
    }

    if(servicio === ""){
      Materialize.toast('Ingresa tu servicio', 4000, 'rounded');
      isCorrect = false;
    }

    if(fecha === ""){
      Materialize.toast('Ingresa tu fecha', 4000, 'rounded');
      isCorrect = false;
    }


    if(hora === ""){
      Materialize.toast('Ingresa tu hora', 4000, 'rounded');
      isCorrect = false;
    }


    if(email === ""){
      Materialize.toast('Ingresa tu email', 4000, 'rounded');
      isCorrect = false;
    }
  }
}


$( document ).ready( function() {
  $('.modal-trigger').leanModal();
  $('.datepicker').pickadate({
      selectMonths: true, // Creates a dropdown to control month
      selectYears: 15 // Creates a dropdown of 15 years to control year
  });
  $('#hora').bootstrapMaterialDatePicker({ date: false });

  $('#enviar').click( function() {
    setValues();
    isCorrect = true;

    printFormValues();
    checkForm();

    if( isCorrect ){
      var data = {
          nombre : nombre,
          direccion : direccion,
          telefono : telefono,
          servicio : servicio,
          fecha : fecha,
          hora : hora,
          email : email,
      };

      var data1 = JSON.stringify( data ); 

      $('#modal1').closeModal();
      sendForm();
    }
  }); 
} );

angular
  .module('serviExpressApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/servicios', {
        templateUrl: 'views/servicios.html',
        controller: 'ServiciosCtrl',
        controllerAs: 'servicios'
      })
      .when('/contacto', {
        templateUrl: 'views/contacto.html',
        controller: 'ContactoCtrl',
        controllerAs: 'contacto'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

  $(".button-collapse").sideNav();
