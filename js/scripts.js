var placa0 = {4:"D",6:"D",9:"F",10:"F",11:"F",12:"F"};
var placa1 = {5:"D",7:"D",9:"D",10:"D",11:"D",12:"D"};
var placa2 = {4:"D",6:"D",8:"D",9:"D",10:"D",11:"D",12:"D"};
var placa3 = {5:"D",7:"D",8:"D",10:"D",11:"D",12:"D"};
var placa4 = {4:"D",6:"D",8:"D",9:"D",11:"D",12:"D"};
var placa5 = {5:"D",7:"D",8:"D",9:"D",11:"D",12:"D"};
var placa6 = {4:"D",6:"D",8:"D",9:"D",10:"D",12:"D"};
var placa7 = {5:"D",7:"D",8:"D",9:"D",10:"D",12:"D"};
var placa8 = {4:"D",6:"D",8:"D",9:"D",10:"D",11:"D"};
var placa9 = {5:"D",7:"D",8:"D",9:"D",10:"D",11:"D"};
	
var placas = [0,1,2,3,4,5,6,7,8,];
placas[0] = placa0;
placas[1] = placa1;
placas[2] = placa2;
placas[3] = placa3;
placas[4] = placa4;
placas[5] = placa5;
placas[6] = placa6;
placas[7] = placa7;
placas[8] = placa8;
placas[9] = placa9;

function generateCalendar() {
	var text = "";			
	var weekday = ["Domingo","Lunes","Martes","Miercoles","Jueves","Viernes","Sabado"];
	$.each( placas, function( key, value ) {
		  text += "<div  id='k_" + key+ "'>";
		  
		  $.each( value, function( key2, value2 ) {
			
			var date = new Date('04/' + key2 + '/2020');
			text += "</br>";
			text += weekday[date.getDay()] + " " + key2 + " de Abril" ;
			
			if (parseInt(key2) <=7) {
				text += ":<span style='background-color:yellow'>DIURNA</span>";
				
			} else {
				text += ":<span style='background-color:lightblue'>TODO EL DIA</span>";
				
			}
		  });
		  text += "</div>";
		  
		});
	text += "<br>";
	text += "<hr>";
	text += "<br>";
	text += "<span style='background-color:yellow'>DIURNA: 5am a 5pm</span></br>";
	text += "<span style='background-color:lightblue'>TODO EL DIA: 24 horas</span>";


	$('#list').html(text);
	
	$('div').hide();
	$('#calendario').show();
	$('.month').show()
}

function change(obj){

  let value = parseInt($(obj).val());

  if (value==11)return;

  $('[id^=k_]').hide();
  
  $('#list').show();
  $( "#k_"+value).show();
  $( "#calendario" ).show();
  
  $("[id^=d_]").css('background-color', '#eee');
  
  $.each( placas[value], function( key, value ) {
	  if (parseInt(key) <=7) {
			$('#d_' + key).css('background-color', 'yellow');
		} else {
			$('#d_' + key).css('background-color', 'lightblue');
		}
  });
}