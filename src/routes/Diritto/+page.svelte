<script>
	import brandsSrc from "./img/La_casa_di_paolo.jpg";
	import brandsSrc2 from "./img/portogallo.jpg";
	import src2 from "../../lib/images/logo_agnelli.png";

	import Download from "../../lib/componenti/Download.svelte";

	let downloadFileName = "La-casa-di-Paolo.docx";
	let downloadFileName2 = "Problemi-Portogallo.docx";

	let downloadFileUrl = "/src/routes/Diritto/file/La-casa-di-Paolo.docx";
	let downloadFileUrl2 = "/src/routes/Diritto/file/Problemi-Portogallo.docx";
</script>

<svelte:head>
	<title>Diritto</title>
	<meta name="description" content="La sezione di Diritto" />
</svelte:head>

<img src="{src2}" alt="logo agnelli" class="logo">

<div class="container">
	<div class="text">
	  <h1>La casa di Paolo <small>(2020/21)</small></h1>
	  <p>
		Questo libro parla di un ragazzo di nome Lorenzo che ha quindici anni,<br>
		frequenta la seconda liceo a Milano ed ha un rapporto complicato con il padre.<br>
		Quando la professoressa Ghidini propone alla classe un progetto <br>
		sulla figura di Paolo Borsellino, lui scopre inaspettatamente,<br>
		in un magistrato ucciso quasi trent'anni prima, il padre che avrebbe desiderato.<br>
		Il percorso porta Lorenzo e i suoi compagni - Luca, Giulia, Filippo e tutti gli altri -<br>
		fino a Palermo, nei luoghi simbolo della lotta alla mafia, <br>
		avvicinando i ragazzi a concetti complessi tradotti in un linguaggio adatto a loro,<br>
		come il metodo di lavoro del pool, la stagione delle stragi, <br>
		la sparizione dell'agenda rossa o il ruolo dei pentiti e dei collaboratori di giustizia.<br>
		Dopo aver letto il libro,su questo ho fatto il tema<br> 
		dove c'erano tre domande e su quelle bisognava creare un tema.
	  </p>
	  <Download fileName={downloadFileName} fileUrl={downloadFileUrl}/>
	</div>
	<img src={brandsSrc} alt="La casa di Paolo">
</div>

<div class="container">
	<div class="text">
	  <h1>I problemi che affliggono il Portogallo <small>(2020/21)</small></h1>
	  <p>
		Dopo aver fatto una ricerca personale su quali problemi affliggevano il Portogallo,<br>
        perché su questo dovevo esporre durante la simulazione dell'ONU<br>
        che abbiamo fatto in due parti cioè la prima parte abbiamo fatto in Google meet<br>
        e la seconda parte in classe in presenza.
	  </p>
	  <Download fileName={downloadFileName2} fileUrl={downloadFileUrl2}/>
	</div>
	<img src={brandsSrc2} alt="Il portogallo">
</div>

<style>
	.logo {
    	position: fixed;
    	top: 0.2em;
    	left: 0.2em; 
    	width: 10%;
    	background-color: white;
    	border: 2px solid black;
		border-radius: 2em;
  	}

	.container {
		display: flex;
    	flex-direction: row;
		margin-top: 2.5em;

	}

  	.text {
    	flex: 1;
		text-align:start;
	}

  	img {
      width: 30%;
	  height: auto;
	}

	h1 {
		color: #464fb0;
		text-decoration: underline;
	}
</style>