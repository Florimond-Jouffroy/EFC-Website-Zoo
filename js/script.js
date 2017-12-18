// Florimond Jouffroy
// Script contenant les fonctions js


// Affichage aléatoire de la banniere
function affBanniere(sujet,nbreImg){
	
	nomDossier = "bannieres-"+sujet;

	nbreAleatoire = Math.floor((Math.random() * nbreImg) + 1);

	document.getElementById("header-banner").style.background = 'url(images/' + nomDossier + '/banniere' + nbreAleatoire + '.jpg) no-repeat center center';
	document.getElementById("header-banner").style.backgroundSize = "cover";
}



//Fonction pour afficher le bloc recherche
function showHide(nomId){

	if(document.getElementById("form-recherche").style.display == "block"){
		document.getElementById("form-recherche").style.display = "none";

	}else{
		document.getElementById("form-recherche").style.display = "block";
	}
}

// Affichage des actus 
function affTexte(nomDiv){
			
	switch (nomDiv)
	{
		case "actu1":
		{
			document.getElementById("actu1").style.display = "block";
			document.getElementById("actu2").style.display = "none";
			document.getElementById("actu3").style.display = "none";
			document.getElementById("actu4").style.display = "none";
			document.getElementById("actu5").style.display = "none";
			break;
		}
		case "actu2":
		{
			document.getElementById("actu2").style.display = "block";
			document.getElementById("actu1").style.display = "none";
			document.getElementById("actu3").style.display = "none";
			document.getElementById("actu4").style.display = "none";
			document.getElementById("actu5").style.display = "none";
			break;
		}
		case "actu3":
		{
			document.getElementById("actu3").style.display = "block";
			document.getElementById("actu1").style.display = "none";
			document.getElementById("actu2").style.display = "none";
			document.getElementById("actu4").style.display = "none";
			document.getElementById("actu5").style.display = "none";
			break;
		}
		case "actu4":
		{
			document.getElementById("actu4").style.display = "block";
			document.getElementById("actu1").style.display = "none";
			document.getElementById("actu2").style.display = "none";
			document.getElementById("actu3").style.display = "none";
			document.getElementById("actu5").style.display = "none";
			break;
		}
		case "actu5":
		{
			document.getElementById("actu5").style.display = "block";
			document.getElementById("actu1").style.display = "none";
			document.getElementById("actu2").style.display = "none";
			document.getElementById("actu3").style.display = "none";
			document.getElementById("actu4").style.display = "none";
			break;
		}
	}
}

/* ----- */
/* Quizz */ 


var repUtil;

//initialisation du quiz
function initMiniQuiz(){

	document.getElementById("form-mini-quiz").reset();
	
	document.getElementById("choix-" + bonneReponse).style.color = "#000";
	
	document.getElementById("message").innerHTML = "Testez vos connaissance";
	document.getElementById("message").style.color = "#000";
	document.getElementById("btnSubmit").disabled = false;
	
	for(var i=0; i < document.getElementsByName(nomGroupe).length; i++){
		
		document.getElementsByName(nomGroupe)[i].checked = true; 
		document.getElementsByName(nomGroupe)[i].disabled = false;
		
	}
}

// desactivation des boutons radio
function desactiverBtnRadio(){

	for(var i=0; i < document.getElementsByName(nomGroupe).length; i++){
		
		document.getElementsByName(nomGroupe)[i].checked = false; 
		document.getElementsByName(nomGroupe)[i].disabled = true;
		
	}
}

// vérification des boutons radio
function verifRadio(){
	
	for(var i=0; i < document.getElementsByName(nomGroupe).length; i++){
		
		if( document.getElementsByName(nomGroupe)[i].checked){
			return true;
		}
	}
	return false;
}

// vérification des réponse et affichage du message
function verifierReponse(){
	
	if(!verifRadio())
	{
		
		document.getElementById("message").innerHTML = "Veuillez répondre à la question.";
		document.getElementById("message").style.color = "#cc0404";
	}
	else
	{
		if(bonneReponse == repUtil)
		{
			document.getElementById("message").innerHTML = "Bravo vous avez trouver la bonne réponse !";
			
			document.getElementById("message").style.color = "#2db74b";
			document.getElementById("choix-" + bonneReponse).style.color = "#2db74b"; 
			
		}
		else
		{
			
			document.getElementById("message").innerHTML = "Ce n'est pas la bonne réponse.";
			document.getElementById("message").style.color = "#cc0404"; 
			
		}
		document.getElementById("message").style.fontWeight ="bold";
		document.getElementById("btnSubmit").disabled = true;
		desactiverBtnRadio();
	}

	

	return false; 
}

/* ---------------------*/
/* Formulaire Benevolat */

//initialisation du formulaire
function initFormBenevolat(){

	document.getElementById("form-benevolat").reset();
}

// validation du champ sexe
function validerSexe(){

	for(var i = 0; i < document.getElementsByName("sexe").length; i++){
		if(document.getElementsByName("sexe")[i].checked){
			document.getElementById("erreurSexe").innerHTML = "";
			
			return true;
		}
	}
	
	document.getElementById("erreurSexe").innerHTML = "Veuillez sélectionner un sexe";
	
	return false;
}

//validation du champ languages
function validerLangue(){

	for(var i = 0; i < document.getElementsByName("langue").length; i++){
		if(document.getElementsByName("langue")[i].checked){
			document.getElementById("erreurLangue").innerHTML = "";
			
			return true;
		}
	}
	document.getElementById("erreurLangue").innerHTML = "Veuillez sélectionner vos langues";
	
	return false;
	
}

// vérification du champ Postes
function validerPoste(){

	if(document.getElementById("poste").value == "Votre choix"){
	
		document.getElementById("erreurPoste").innerHTML = "Veuillez sélectionner un poste.";
		return false;
	}
	else
	{
		document.getElementById("erreurPoste").innerHTML = "";
		return true;
	}
}

// validation du formulaire
function validerForm(){

	var erreur = false;
	
	if(!validerPoste())erreur = true;
	if(!validerLangue()) erreur = true;
	if(!validerSexe()) erreur = true;
	
	if(erreur == false){

		document.getElementById("form-benevolat").action = "mailto:florimond.25@gmail.com?subject=Exercice";
		document.getElementById("confirm-envoi").innerHTML = "Votre courriel a bien ete envoyer";

		setTimeout("initFormBenevolat()",3000);

		return true; 
		
	}
	else return false; 
}