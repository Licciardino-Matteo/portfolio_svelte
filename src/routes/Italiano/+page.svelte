<script>
	import brandsSrc from "./img/donna.jpg";
	import brandsSrc2 from "./img/mafia.jpg";
	import brandsSrc3 from "./img/lente.jpg";
	import brandsSrc4 from "./img/pena-di-morte.png";
	import brandsSrc5 from "./img/Alda-Merini.jpg";
	import brandsSrc6 from "./img/Walter_Tobagi.jpg";
	import brandsSrc7 from "./img/prigione.jpg";
	import src2 from "../../lib/images/logo_agnelli.png";

	import Download from "../../lib/componenti/Download.svelte";

	let downloadFileName = "Emancipazione-donna.pptx";
	let downloadFileName2 = "Mafia.pptx";
	let downloadFileName3 = "Pio-La-Torre.docx";
	let downloadFileName4 = "Despitaggio.pptx";
	let downloadFileName5 = "Pena-di-morte.pptx";
	let downloadFileName6 = "Ospedali-psichiatrici.pptx";
	let downloadFileName7 = "Stragi-in-Italia.pptx";
	let downloadFileName8 = "Educazione-civica-sulle-prigioni.pptx"

	let downloadFileUrl = "/src/routes/Italiano/file/Emancipazione-donna.pptx";
	let downloadFileUrl2 = "/src/routes/Italiano/file/Mafia.pptx";
	let downloadFileUrl3 = "/src/routes/Italiano/file/Pio-La-Torre.docx";
	let downloadFileUrl4 = "/src/routes/Italiano/file/Despitaggio.pptx";
	let downloadFileUrl5 = "/src/routes/Italiano/file/Pena-di-morte.pptx";
	let downloadFileUrl6 = "/src/routes/Italiano/file/Ospedali-psichiatrici.pptx";
	let downloadFileUrl7 = "/src/routes/Italiano/file/Stragi-in-Italia.pptx";
	let downloadFileUrl8 = "/src/routes/Italiano/file/Educazione-civica-sulle-prigioni.pptx"
</script>

<svelte:head>
	<title>Italiano</title>
	<meta name="description" content="La sezione di Italiano" />
</svelte:head>

<img src="{src2}" alt="logo agnelli" class="logo">

<div class="container">
	<div class="text">
	  <h1>Emancipazione della donna <small>(2020/21)</small></h1>
	  <p>
        Di italiano abbiamo fatto l'emancipazione femminile per educazione civica.
	  </p>
	  <Download fileName={downloadFileName} fileUrl={downloadFileUrl}/>
	</div>
	<img src={brandsSrc} alt="Emancipazione della donna">
</div>

<div class="container">
	<div class="text">
	  <h1>Mafia <small>(2020/21)</small></h1>
	  <p>
        Di italiano abbiamo fatto la mafia per educazione civica.
	  </p>
	  <Download fileName={downloadFileName2} fileUrl={downloadFileUrl2}/>
	  <Download fileName={downloadFileName3} fileUrl={downloadFileUrl3}/>
	</div>
	<img src={brandsSrc2} alt="Mafia">
</div>

<div class="container">
	<div class="text">
	  <h1>Depistaggio <small>(2022/23)</small></h1>
	  <p>
        Di italiano abbiamo fatto il depistaggio per educazione civica.
	  </p>
	  <Download fileName={downloadFileName4} fileUrl={downloadFileUrl4}/>
	</div>
	<img src={brandsSrc3} alt="Despitaggio" class="img_dx">
</div>

<div class="container">
	<div class="text">
	  <h1>Pena di morte <small>(2022/23)</small></h1>
	  <p>
        Di italiano abbiamo fatto la pena di morte per educazione civica.
	  </p>
	  <Download fileName={downloadFileName5} fileUrl={downloadFileUrl5}/>
	</div>
	<img src={brandsSrc4} alt="Pena di morte">
</div>

<div class="container">
	<div class="text">
	  <h1>Alda Merini <small>(2022/23)</small></h1>
	  <p>
		Di italiano abbiamo fatto la poetessa Alda Merini per educazione civica.
	  </p>
	  <Download fileName={downloadFileName6} fileUrl={downloadFileUrl6}/>
	</div>
	<img src={brandsSrc5} alt="Alda Merini">
</div>

<div class="container">
	<div class="text">
	  <h1>Walter Tobagi <small>(2022/23)</small></h1>
	  <p>
		Di italiano abbiamo fatto per il giornalista Walter Tobagi per educazione civica.
	  </p>
	  <Download fileName={downloadFileName7} fileUrl={downloadFileUrl7}/>
	</div>
	<img src={brandsSrc6} alt="Walter Tobagi" class="img_dx">
</div>

<div class="container">
	<div class="text">
	  <h1>Educazione civica sulle prigioni <small>(2023/24)</small></h1>
	  <p>
		Di italiano abbiamo fatto le prigioni per educazione civica.
	  </p>
	  <Download fileName={downloadFileName8} fileUrl={downloadFileUrl8}/>
	</div>
	<img src={brandsSrc7} alt="Prigione" class="img_dx">
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
		width: 50%;
	}

	h1 {
		color: #464fb0;
		text-decoration: underline;
	}
</style>