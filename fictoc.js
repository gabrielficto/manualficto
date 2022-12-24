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
    "info": `
        <img class="ficto-flag" src="https://redwars22.github.io/andrewnation/assets/fictoflag.jpg">
        <p class="text-half">
            <strong>
                O CONCEITO DE FICTOSSEXUAL 
            </strong></br>
            <strong><em>Fictossexual</em></strong> é um termo relativamente novo, que se refere à atração por pessoas fictícias (personagens de livros, desenhos animados, jogos, filmes, séries, personagens inventados por si mesmo, etc.).
        </p>
        <p class="text-half">
            <strong>
                SIGNIFICADO DA BANDEIRA
            </strong></br>
            A bandeira oficial consiste de duas faixas pretas na parte superior e inferior e duas faixas cinzas na região mais do meio, representando a falta de atração fora do plano fictício. Já a faixa roxa no meio e o círculo representam a atração sexual e um portal para um mundo fictício. A cor rosa dentro do círculo representa a atração por personagens fictícios.
        </p>
        <p class="text-half">
            <strong>
                DICAS DE SOBREVIVÊNCIA   
            </strong></br>
                Se você leu até aqui ou já deu uma boa pesquisada sobre o tema e chegou a conclusão de que você é fictossexual, não se desespere!
                A sociedade pode ser cruel, especialmente no Ensino Médio, nós sabemos, já passamos por isso, mas saiba que você é forte e vai aprender
                a lidar com as críticas das pessoas. O Gabriel e eu separamos algumas dicas pra te ajudar nesse processo:
                <ol class="text-half2">
                    <li>
                        <u>NÃO TENHA PRESSA E RESPEITE O SEU TEMPO E OS SEUS LIMITES</u>: você não é obrigado a contar pra todo mundo logo de cara. Procure se aceitar primeiro e se sentir
                        bem com a sua identidade e, quando se sentir confortável, fale sobre isso com alguém de confiança. Se vocẽ não quiser falar pra ninguém,
                        também tá tudo bem, você não deve satisfação a ninguém sobre a sua vida privada. 
                    </li>
                    <li>
                        <u>SER FICTOSSEXUAL NÃO É DOENÇA</u>: entenda que, ao contrário do que as pessoas possam te falar, ser fictossexual não significa que você é louco,
                        esquizofrênico ou alguém que precisa de tratamento psiquiátrico. A fictossexualidade é uma sexualidade válida como todas as outras. Os fictos sabem distinguir
                        muito bem ficção da realidade, não estamos delirando. O que acontece é que quem amamos está num plano fictício, inalcançável e infelizmente nunca poderemos abraçar, beijar,
                        tocar e fazer outras coisas com os nossos f/os (é como os fictos se referem aos seus parceiros fictícios), mas continuamos amando eles, da mesma forma que alguém amaria uma pessoa real,
                        mas sabemos que tudo isso é fictício. NÃO ESTAMOS DOENTES NEM SOMOS RETARDADOS!!!
                    </li>
                    <li>
                        <u>USE A SUA CRIATIVIDADE</u>:
                    </li>
                    <li>
                        <u>NÃO SE ISOLE, EM HIPÓTESE ALGUMA!</u>:
                    </li>
                    <li>
                        <u>SE PRECISAR, PROCURE AJUDA</u>:
                    </li>
                    <li>
                        <u>FAÇA AMIZADE COM QUEM TE ACEITE E APOIE</u>:
                    </li>
                    <li>
                        <u>E SE EU NÃO FOR FICTO, MAS TIVER UM AMIGO OU PARENTE ASSIM?</u>:
                    </li>
                </ol>
        </p>
    `
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

    if(e.key == "h"){
     document.querySelector(".console-area").innerHTML = content["ficto --help"];
    }
})