<script>
	import brandsSrc from '../lib/images/educazione_civica.jpg';
	import src from '../lib/images/avatar-licciardino.png';
	import src2 from "../lib/images/logo_agnelli.png"
</script>

<svelte:head>
	<title>Portfolio</title>
	<meta name="description" content="Portfolio in Svelte" />
</svelte:head>

<img src="{src2}" alt="logo agnelli" class="logo">

<div class="container">
	<img {src} alt="me stesso" class="me_stesso">
	<div class="text">
	  <h1>Matteo Licciardino</h1>
	  <p>
		  	Ciao! Sono Matteo Licciardino nato a Torino nel 24 maggio 2004 <br>
			e sono uno studente dell'<a href="https://iti.agnelli.it" target="_blank">Istituto Edoardo Agnelli</a> frequento istituto tecnico.<br>
			Faccio la 5° informatica e ho creato questo sito con lo scopo di raccogliere<br>
			tutte l'attvità di educazione civica delle materie<br>
			dei 5 anni delle superiori.
	  </p>
	</div>
</div>

<div class="container">
	<div class="text">
	  <h1>Portfolio di Matteo Licciardino</h1>
	  <p>
		  Educazione civica è una materia di tipo <br>
		  trasversale che comprende la conoscenza e <br>
		  la comprensione delle strutture e dei profili <br>
		  sociali, economici, giuridici, civici e <br>
		  ambientali della società.
	  </p>
	</div>
	<img src={brandsSrc} alt="immagine di educazione civica">
</div>

<style>
	.container {
		display: flex;
    	flex-direction: row;
    	align-items: center;
		margin-top: 2.5em;
	}

  	.text {
    	flex: 1;
		text-align: center;
	}

  	img {
    	width: 60%;
    	height: auto;
	}

	a{
		color: white;
	}

	.me_stesso{
		width: 20%;
		background-color: white;
		border-radius: 45%; 	
		border: 2px solid black;
		margin-left: 8em;
	}

 	h1{
    	text-decoration: underline;
	}

	.logo {
    	position: fixed;
    	top: 0.2em;
    	left: 0.2em; 
    	width: 10%;
    	background-color: white;
    	border: 2px solid black;
		border-radius: 2em;
  	}
</style>