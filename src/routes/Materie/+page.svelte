<script>
	import brandsSrc3 from "./img/HTTP.jpg";
	import brandsSrc2 from "./img/Donbosco.jpg";
	import brandsSrc from "./img/Covid.jpg";
	import src2 from "../../lib/images/logo_agnelli.png";

	import Download from "../../lib/componenti/Download.svelte";
	
	let downloadFileName = "Bio-covid.docx";
	let downloadFileName2 = "Don-bosco.docx";
	let downloadFileName3 = "http-response-code.docx";

	let downloadFileUrl = "/src/routes/Materie/file/Bio-covid.docx";
	let downloadFileUrl2 = "/src/routes/Materie/file/Don-bosco.docx";
	let downloadFileUrl3 = "/src/routes/Materie/file/http-response-code.docx";
</script>

<svelte:head>
	<title>Materie</title>
	<meta name="description" content="La sezione di Materie" />
</svelte:head>

<img src="{src2}" alt="logo agnelli" class="logo">

<div class="container">
	<div class="text">
	  <h1>Conferenza del Dr. Mario Raviglione su SARS CoV-2 <small>(2020/21)</small></h1>
	  <p>
        Questo video parla della conferenza del Dr. Mario Raviglione dottore biellese,<br>
        laureato in Medicina e Chirurgia a Torino e con importanti esperienze<br>
        negli Stati Uniti e in Africa. Entra giovane a far parte dell’OMS di Ginevra<br>
        occupandosi di malattie infettive come la tubercolosi e l’Aids.<br>
        Dal 2003 fino alla fine del 2017 è stato direttore del programma global<br>
        e per la lotta contro la tubercolosi all’Organizzazione Mondiale della Sanità.<br>
        Dal 2018 è diventato professore ordinario all'Università degli Studi di Milano.<br>
        Attualmente dirige le attività incentrate sulla salute globale nell'ambito del nuovo<br>
        centro multidisciplinare di ricerca in scienze della salute. <br>
        Negli ultimi mesi si è occupato vastamente di ricerca e divulgazion <br>
        nell’ambito della nuova epidemia in corso di SARS CoV-2.<br>
		Dopo aver visto la video conferenza del dottore,<br>
		ho fatto una mappa mentale sul tema del coronavirus.
	  </p>
	  <Download fileName={downloadFileName} fileUrl={downloadFileUrl}/>
	</div>
	<img src={brandsSrc} alt="SARS CoV-2" class="covid">
</div>

<div class="container">
	<div class="text">
	  <h1>Vogliamo essere onesti cittadini e buoni Cristiani? <small>(2020/21)</small></h1>
	  <p>
        Di religione ho fatto un tema<br>
        sul motto di Don Bosco e in più sulle<br>
        cose che mi ricordavo sulla testimonianza di Don Mimmo.
	  </p>
	  <Download fileName={downloadFileName2} fileUrl={downloadFileUrl2}/>
	</div>
	<img src={brandsSrc2} alt="Don bosco" class="img_dx">
</div>

<div class="container">
	<div class="text">
	  <h1>HTTP e Response code <small>(2022/23)</small></h1>
	  <p>
        Per educazione civica di TPSI,<br>
        io ho scritto un post dove ho trattato <br>
        dell'argomento del HTTP e del response code.
	  </p>
	  <Download fileName={downloadFileName3} fileUrl={downloadFileUrl3}/>
	</div>
	<img src={brandsSrc3} alt="HTTP e Response code" class="img_dx">
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
    	max-width: 50%;
    	height: auto;
	}

	.img_dx{
		width: 40%;
	}

	h1 {
		color: #464fb0;
		text-decoration: underline;
	}
</style>