<script>
  export let fileName = ""; // Nome del file da scaricare
  export let fileUrl = ""; // URL del file da scaricare

  export function downloadFile() {
    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = fileName;
    link.target = "_blank"; // Apre il link in una nuova scheda (opzionale)
    link.click();
  }
</script>

<!-- Aggiungi il pulsante di download per il file corrente -->
<button class="bottoneDownload" on:click={downloadFile}>Scarica</button>

  
<style>
  .bottoneDownload {
    background-color: #007bff; /* Colore di sfondo del bottone */
    color: #fff; /* Colore del testo */
    padding: 10px 20px; /* Spaziatura interna */
    border: none; /* Rimuove il bordo del bottone */
    border-radius: 5px; /* Bordo arrotondato */
    cursor: pointer; /* Cambia il cursore al passaggio del mouse */
    transition: background-color 0.3s ease; /* Effetto di transizione per il colore di sfondo */
    margin-left: 40%;
    margin-right: 40%;
    margin-bottom: 1%;
  }

  .bottoneDownload:hover {
    background-color: #0056b3; /* Cambia il colore di sfondo al passaggio del mouse */
  }
</style>