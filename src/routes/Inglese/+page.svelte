<script>
	import brandsSrc from "./img/whigs.jpg";
	import brandsSrc2 from "./img/ONU.png";
	import brandsSrc3 from "./img/coding.jpg";
	import brandsSrc4 from "./img/isaac-asimov.png";
	import brandsSrc5 from "./img/CV.png";
	import brandsSrc6 from "./img/smartphone.jpg";
	import src2 from "../../lib/images/logo_agnelli.png";

	import Download from "../../lib/componenti/Download.svelte";

	let downloadFileName = "Tories-Whigs.zip";
	let downloadFileName2 = "ONU_(eng).docx";
	let downloadFileName3 = "CLIL-PROJECT.pptx";
	let downloadFileName4 = "The-fun-they-had.zip";
	let downloadFileName5 = "Isaac_Asimov-(dibattito).docx";
	let downloadFileName6 = "lettera_presentazione(English).zip";
	let downloadFileName7 = "Licciardino_cv(English).zip";
	let downloadFileName8 = "educazione-civica-inglese.pptx";

	let downloadFileUrl = "/src/routes/Inglese/file/Tories-Whigs.zip";
	let downloadFileUrl2 = "/src/routes/Inglese/file/ONU_(eng).docx";
	let downloadFileUrl3 = "/src/routes/Inglese/file/CLIL-PROJECT.pptx";
	let downloadFileUrl4 = "/src/routes/Inglese/file/The-fun-they-had.zip";
	let downloadFileUrl5 = "/src/routes/Inglese/file/Isaac_Asimov-(dibattito).docx";
	let downloadFileUrl6 = "/src/routes/Inglese/file/lettera_presentazione(English).zip";
	let downloadFileUrl7 = "/src/routes/Inglese/file/Licciardino_cv(English).zip";
	let downloadFileUrl8 = "/src/routes/Inglese/file/educazione-civica-inglese.pptx";
</script>

<svelte:head>
	<title>Inglese</title>
	<meta name="description" content="La sezione di inglese" />
</svelte:head>

<img src="{src2}" alt="logo agnelli" class="logo">

<div class="container">
	<div class="text">
	  <h1>Tories and Whigs <small>(2020/21)</small></h1>
	  <p>
		This video talks about two currents that have distinguished themselves in the political and parliamentary fields<br>
        life of England were the Tories who are partisans of the king, the Anglican church,<br>
        traditions of landowning and the rural class, the other who was at odds are the Whigs<br>
        which represented resistance to the ruler, the principle of religious tolerance,<br>
        the city of London, commercial, maritime and colonial ambitions and interests.<br>
		After watching the video about Tories and Whigs,<br>
		I then made a conceptual map of this historical period<br>
		from a political and literary point of view.
	  </p>
	  <Download fileName={downloadFileName} fileUrl={downloadFileUrl}/>
	</div>
	<img src={brandsSrc} alt="Tories and Whigs">
</div>

<div class="container">
	<div class="text">
	  <h1>The simulation of the general assembly of the ONU <small>(2020/21)</small></h1>
	  <p>
		After finishing the UN simulation,<br>
        the English teacher asked us to write a text <br>
        about what we talked about during this simulation,<br>
        I wrote 4 topics that we discussed during the simulation.
	  </p>
	  <Download fileName={downloadFileName2} fileUrl={downloadFileUrl2}/>
	</div>
	<img src={brandsSrc2} alt="ONU" class="img_dx">
</div>

<div class="container">
	<div class="text">
	  <h1>Programming language <small>(2022/23)</small></h1>
	  <p>
		My native teacher told us to create a PowerPoint<br>
        where we could describe a topic we liked.
	  </p>
	  <Download fileName={downloadFileName3} fileUrl={downloadFileUrl3}/>
	</div>
	<img src={brandsSrc3} alt="Coding">
</div>

<div class="container">
	<div class="text">
	  <h1>Isaac Asimov - The fun they had <small>(2022/23)</small></h1>
	  <p>
		The teacher told us to read this text because they had to give speeches,<br>
        but this last one we did it like this,<br>
        IA we divided into two groups that one group talks about the benefits of AI,<br>
        while the other group talk about the benefits of human contact and we had a debate.
	  </p>
	  <Download fileName={downloadFileName4} fileUrl={downloadFileUrl4}/>
	  <Download fileName={downloadFileName5} fileUrl={downloadFileUrl5}/>
	</div>
	<img src={brandsSrc4} alt="isaac-asimov" class="img_dx">
</div>

<div class="container">
	<div class="text">
	  <h1>Creation of the Europass CV and cover letter <small>(2023/24)</small></h1>
	  <p>
		In IT I created a Europass curriculum vitae<br>
		and the cover letter was also in English
	  </p>
	  <Download fileName={downloadFileName6} fileUrl={downloadFileUrl6}/>
	  <Download fileName={downloadFileName7} fileUrl={downloadFileUrl7}/>
	</div>
	<img src={brandsSrc5} alt="Curriculum and cover letter" class="img_dx">
</div>

<div class="container">
	<div class="text">
	  <h1>
		The Risks and Dangers <br>
		of Smartphones <small>(2023/24)</small>
	  </h1>
	  <p>
		My English teacher told us to make a PowerPoint<br>
		where we describe the risks and dangers of video games,<br>
		social networks and even smartphones.
	  </p>
	  <Download fileName={downloadFileName8} fileUrl={downloadFileUrl8}/>
	</div>
	<img src={brandsSrc6} alt="smartphone" class="img_dx" id="smartphone">
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

	.img_dx {
    	margin-left: 1em;
	}

	h1 {
		color: #414bb9;
		text-decoration: underline;
	}

	#smartphone{
		width: 90%;
	}
</style>