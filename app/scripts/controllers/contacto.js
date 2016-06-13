'use strict';

/**
 * @ngdoc function
 * @name serviExpressApp.controller:ContactoCtrl
 * @description
 * # ContactoCtrl
 * Controller of the serviExpressApp
 */
angular.module('serviExpressApp')
  .controller('ContactoCtrl', function () {
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

    	$('#modal2').closeModal();
      sendForm();
    }
  }); 
  });
