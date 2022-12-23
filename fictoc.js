const content = {
    "ficto --help": `
        <p class="ficto-purple">
            GUIA DE AJUDA DO MANUAL FICTO EM PT-BR VERSÃO CLI
        </p>
        <p>
            @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@<br>
            @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@<br>
            @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@<br>
            ,,,,,,,,,,,,,,,,,,,,%@@,,,,,@@*,,,,,,,,,,,,,,,,,,,<br>
            ,,,,,,,,,,,,,,,,,,@,,,,,,,,,,,,,@,,,,,,,,,,,,,,,,,<br>
            (((((((((((((((((@,,,,,,,,,,,,,,,@((((((((((((((((<br>
            ((((((((((((((((&@,,,,,,,,,,,,,,,@((((((((((((((((<br>
            (((((((((((((((((@,,,,,,,,,,,,,,,@((((((((((((((((<br>
            ,,,,,,,,,,,,,,,,,,@,,,,,,,,,,,,.@,,,,,,,,,,,,,,,,,<br>
            ,,,,,,,,,,,,,,,,,,,,,@@,,,,,@@,,,,,,,,,,,,,,,,,,,,<br>
            @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@<br>
            @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
        </p>
        <p><strong>LISTA DE COMANDOS</strong></p>
        <div class="indented">
            <div class="text-grid-container">
                <strong>info</strong>
                <p>descrição sobre a fictossexualidade</p>
            </div>
            <div class="text-grid-container">
                <strong>man</strong>
                <p>dicionário de termos usados na comunidade ficto</p>
            </div>
            <div class="text-grid-container">
                <strong>nextsng</strong>
                <p>tocar a próxima música</p>
            </div>
            <div class="text-grid-container">
                <strong>ref</strong>
                <p>referências bibliográficas usadas para construir esse site</p>
            </div>
            <div class="text-grid-container">
                <strong>sos</strong>
                <p>dicas de sobrevivência</p>
            </div>
            <div class="text-grid-container">
                <strong>subid</strong>
                <p>lista de sub-identidades</p>
            </div>
        </div>
    `,
}

document.addEventListener("keypress", (e)=>{
    if(e.key == "Enter"){
        e.preventDefault();

        const command = document.getElementById("ficto-command").innerText.trim();

        if(content[command])
            document.querySelector(".console-area").innerHTML = content[command];

        if(command == "nextsng")
            document.getElementById("audio-player").src = "assets/bgm2.mp3";
    }
})