	function init(){
  window.alert("Pronto!");
  
	function LerSensores(){
				var request = new XMLHttpRequest();
				request.onreadystatechange = function(){
					if(this.readyState == 4){
						if(this.status == 200){
							if(this.responseText != null){
								var dados = this.responseText.split('|');
								document.getElementById("sensor1").innerHTML = dados[0];
								document.getElementById("sensor2").innerHTML = dados[1];
								if(dados[2] == 0){
									document.getElementById("botao1").style.backgroundColor = "#FFCCFF";
								}
								else{
									document.getElementById("botao1").style.backgroundColor = "#FFFF00";
								}
								if(dados[3] == 0){
									document.getElementById("botao2").style.backgroundColor = "#FFCCFF";
								}
								else{
									document.getElementById("botao2").style.backgroundColor = "#FFFF00";
								}
							}
						}
					}
				}
				request.open("GET", "ajax_LerDados", true);
				request.send(null);
				setTimeout('LerSensores()', 500);
			}
			function botaoCarga1(){
				var request = new XMLHttpRequest();
				request.open("GET", "ajax_carga1", true);
				request.send(null);
			}
			function botaoCarga2(){
				var request = new XMLHttpRequest();
				request.open("GET", "ajax_carga2", true);
				request.send(null);
			}