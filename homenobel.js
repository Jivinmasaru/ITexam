
document.getElementById('tampilkan').onclick=function(){
	var name=document.getElementById('nama').value.trim();
	if (name===""){
		name="(Nama Kok Kosong???)";
	}
	var gender="";
	var radios = document.getElementByName('gender');
	for(var i =0; i<radios.length; i+++){
		if(radios[i].checked{
			gender = radio[i].value;
			break;
		}
	}
	
	if (gender===""){
		gender="(Jenis Harus Dipilih ya...)";
	}
	
	var ok =document.getElementById('setuju').checked ? "ya":"tidak";
	var show = "Nama :"+ name +"\nJenis Kelamin:"+ gender + "\nSetuju:"+ ok;
	document.getElementById('hasil').innerHTML=show;
};