<script>
	import brandsSrc from "./img/info.jpg";
	import brandsSrc2 from "./img/calcolo-codice-fiscale.png";
	import brandsSrc3 from "./img/CV.png";
	import src2 from "../../lib/images/logo_agnelli.png";

	import Download from "../../lib/componenti/Download.svelte";

	let downloadFileName = "calcolo-cf.zip";
	let downloadFileName2 = "Regole-web.pptx";
	let downloadFileName3 = "Licciardino_cv.zip";
	let downloadFileName4 = "lettera_presentazione.zip";

	let downloadFileUrl = "/src/routes/Informatica/file/calcolo-cf.zip";
	let downloadFileUrl2 = "/src/routes/Informatica/file/Regole-web.pptx";
	let downloadFileUrl3 = "/src/routes/Informatica/file/Licciardino_cv.zip";
	let downloadFileUrl4 = "/src/routes/Informatica/file/lettera_presentazione.zip";
</script>

<svelte:head>
	<title>Informatica</title>
	<meta name="description" content="La sezione di Informatica" />
</svelte:head>

<img src="{src2}" alt="logo agnelli" class="logo">

<div class="container">
	<div class="text">
	  <h1>Le diverse regole e reati dell'informatica <small>(2021/22)</small></h1>
	  <p>
		Per educazione civica di informatica<br>
        io e insieme dei miei compagni di gruppo abbiamo fatto<br>
        un PowerPoint dove trattasse diversi argomenti che sono attuali.
	  </p>
	  <Download fileName={downloadFileName2} fileUrl={downloadFileUrl2}/>
	</div>
	<img src={brandsSrc} alt="Le diverse regole e reati dell'informatica">
</div>

<div class="container">
	<div class="text">
	  <h1>Calcolo del codice fiscale in c# <small>(2022/23)</small></h1>
	  <p>
		Di informatica abbiamo fatto in c# il calcolo del codice fiscale in base al inserimento dei dati personale<br>
        della persona e anche il inverso, cioè dal codice fiscale inserito posso ricavare i dat personale dell'utente.
	  </p>
	  <Download fileName={downloadFileName} fileUrl={downloadFileUrl}/>
	</div>
	<img src={brandsSrc2} alt="Calcolo del codice fiscale in c#" class="img_dx">
</div>

<div class="container">
	<div class="text">
	  <h1>Creazione del CV europass e lettera di presentzione <small>(2023/24)</small></h1>
	  <p>
		Di informatica ho creato un curriculum vitae europass<br>
		e con la lettera di presentazione.
	  </p>
	  <Download fileName={downloadFileName3} fileUrl={downloadFileUrl3}/>
	  <Download fileName={downloadFileName4} fileUrl={downloadFileUrl4}/>
	</div>
	<img src={brandsSrc3} alt="Calcolo del codice fiscale in c#" class="img_dx">
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
      width: 50%;
	  height: auto;
	}

	.img_dx {
    	margin-left: 1em;
	}

	h1 {
		color: #464fb0;
		text-decoration: underline;
	}
</style>