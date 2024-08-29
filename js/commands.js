var linkedin = "https://www.linkedin.com/in/pedro-ivo-rocha/";
var instagram = "https://www.instagram.com/yvvo_sounds/";
var github = "https://github.com/vegedra";
var email = "mailto:pedroivo0513@gmail.com";

aboutme = [
  "<br>",
  "<span class='underline'>Oi, é o Ivo. 👋</span>",
  "<br>",
  "<li>🔭 Sou um estudante de ADS que gosta de programar jogos e outras besteiras.</li>",
  "<li>🌱 Me interesso em:</li>",
  `<pre class="whitespace-pre-wrap">
        - Desenvolvimento Back-End;
        - Desenvolvimento de jogos;
        - Área de dados no geral.</pre>`,
  "<br",
  `<li><pre class="whitespace-pre-wrap">👨‍💻 Gosto de criar projetos novos e quebrar a cabeça tentando fazê-los.
   No momento a única linguagem que posso dizer que sei alguma coisa é Python.
   Para ver meus projetos utilize o comando 'projects'.
   Você também pode continuar navegando pelo meu site e descobrir mais sobre mim.`,
  `<li>📫 Para entrar em contato: <a href= "https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=pedroivo0513@gmail.com">pedroivo0513@gmail.com</a>`,
  "<br>",
];

social = [
  "<br>",
  'linkedin       <a href="' +
    linkedin +
    '" target="blank">linkedin/pedro-ivo-rocha/' +
    "</a>",
  'instagram      <a href="' +
    instagram +
    '" target="blank">instagram/yvvo_sounds' +
    "</a>",
  'github         <a href="' +
    github +
    '" target="blank">github/vegedra' +
    "</a>",
  
  "<br>",
];

projects = [
  "<br>",
  `<a href="https://github.com/vegedra/egosDEMO" target="blank"><span class='underline'>egOS:Cybercrime</span>`,
  "<br>",
  `<pre class="indent-8 whitespace-pre-wrap">Um jogo de exploração e aventura baseado em texto feito usando Python como forma de aprender a linguagem, acabou se tornando um projeto mais sério que continuo desenvolvendo ativamente.

Caso queira testar o jogo, o mesmo está disponível para Windows e Linux: <a href="https://digitalcakestudio.itch.io/egos-cybercrime/" target="blank">https://digitalcakestudio.itch.io/egos-cybercrime/</a>

Feito com:

    *Python;
    *Biblioteca gráfica BearLibTerminal;
    *Pygame Mixer;
    *Notepad++, pois VSCode me irrita.
`,

  "<br>",

  `<a href="https://github.com/vegedra/hoobler" target="blank"><span class='underline'>Assistente I.A. Hoobler</span>`,
  "<br>",
  `<pre class="indent-8 whitespace-pre-wrap">Um assistente I.A. focado em facilitar o acesso a aplicações, com suporte a atalhos e outras funções úteis.
Possui versões CLI -- utilizando do distribuidor de pacotes Python Pypi -- e TUI, utilizando da biblioteca Curses.

O projeto ainda não está finalizado, mas podes instalar usando PyPi: <a href="https://pypi.org/project/Hoobler/" target="blank">https://pypi.org/project/Hoobler//</a>

Feito com:

    *Python;
    *Biblioteca Curses;
    *WTTR API;
    *Dessa vez usei VSCode.
`,

  "<br>",
];

help = [
  `<br><pre class="whitespace-pre-wrap">
  <span class="command">aboutme</span>    
   <span class="command">↳</span>&nbsp;Mostrar mais detalhes sobre mim..
  <span class="command">social</span>     
   <span class="command">↳</span>&nbsp;Minhas redes sociais.
  <span class="command">projects</span>   
   <span class="command">↳</span>&nbsp;Ver meus projetos.
  <span class="command">email</span>      
   <span class="command">↳</span>&nbsp;Enviar um e-mail para mim.
  <span class="command">history</span>    
   <span class="command">↳</span>&nbsp;Ver o histórico de comandos.
  <span class="command">help</span>       
   <span class="command">↳</span>&nbsp;Mostra os comandos disponíveis.
  <span class="command">clear</span>
   <span class="command">↳</span>&nbsp;Limpa o terminal.</pre><br>`,
];
banner = [
  `<div class="pt-2"><span class="text-[#7d82d7db] ">Bem-vindo ao meu portfólio — Digite <span class="command text-[#75e1e7]">help</span> para ver a lista de comandos disponíveis.</span></div>`,
];
