var before = document.getElementById("before");
var liner = document.getElementById("liner");
var command = document.getElementById("typer");
var textarea = document.getElementById("texter");
var terminal = document.getElementById("terminal");

var git = 0;
var pw = false;
var commands = [];

setTimeout(function () {
  loopLines(banner, "", 80);
  textarea.focus();
}, 100);

window.addEventListener("keyup", enterKey);

//init
textarea.value = "";
command.innerHTML = textarea.value;

function enterKey(e) {
  if (e.keyCode == 181) {
    document.location.reload(true);
  }

  if (e.keyCode == 13) {
    commands.push(command.innerHTML);
    git = commands.length;
    addLine("[ivo@vegedra]~$" + command.innerHTML, "no-animation", 0);
    commander(command.innerHTML.toLowerCase());
    command.innerHTML = "";
    textarea.value = "";
  }
  if (e.keyCode == 38 && git != 0) {
    git -= 1;
    textarea.value = commands[git];
    command.innerHTML = textarea.value;
  }
  if (e.keyCode == 40 && git != commands.length) {
    git += 1;
    if (commands[git] === undefined) {
      textarea.value = "";
    } else {
      textarea.value = commands[git];
    }
    command.innerHTML = textarea.value;
  }
}

function commander(cmd) {
  switch (cmd.toLowerCase()) {
    case "help":
      loopLines(help, "color2 margin", 80);
      break;
    case "aboutme":
      loopLines(aboutme, "color2 margin", 80);
      break;

    case "social":
      loopLines(social, "color2 margin", 80);
      break;

    case "projects":
      loopLines(projects, "color2 margin", 80);
      break;
    case "history":
      addLine("<br>", "", 0);
      loopLines(commands, "color2", 80);
      addLine("<br>", "command", 80 * commands.length + 50);
      break;
    case "email":
      addLine(
        'Opening mailto:<a href="mailto:pedroivo0513@gmail.com"> pedroivo0513@gmail.com</a>...',
        "color2",
        80,
      );
      newTab(email);
      break;
      newTab(email);
      break;
    case "clear":
      setTimeout(function () {
        terminal.innerHTML =
          '<a id="before"><div class="pt-2"><span class="text-[#7d82d7db] ">Bem-vindo ao meu portfólio — Digite <span class="command text-[#75e1e7]">help</span> para ver a lista de comandos disponíveis.</span></div></a>';
        before = document.getElementById("before");
      }, 1);
      break;
    case "banner":
      loopLines(banner, "", 80);
      break;
    // socials
    case "linkedin":
      addLine("Abrindo LinkedIn...", "color2", 0);
      newTab(linkedin);
      break;
    case "instagram":
      addLine("Abrindo Instagram...", "color2", 0);
      newTab(instagram);
      break;
    case "github":
      addLine("Abrindo GitHub...", "color2", 0);
      newTab(github);
      break;
    case "sudo":
      addLine("Infelizmente você não é um admin...", "color2", 0);
      break;
    default:
      addLine(
        '<span class="inherit">Comando não encontrado.',
        "error",
        100,
      );
      break;
  }
}

function newTab(link) {
  setTimeout(function () {
    window.open(link, "_blank");
  }, 500);
}

function addLine(text, style, time) {
  var t = "";
  for (let i = 0; i < text.length; i++) {
    if (text.charAt(i) == " " && text.charAt(i + 1) == " ") {
      t += "&nbsp;&nbsp;";
      i++;
    } else {
      t += text.charAt(i);
    }
  }
  setTimeout(function () {
    var next = document.createElement("p");
    next.innerHTML = t;
    next.className = style;

    before.parentNode.insertBefore(next, before);

    window.scrollTo(0, document.body.offsetHeight);
  }, time);
}

function loopLines(name, style, time) {
  name.forEach(function (item, index) {
    addLine(item, style, index * time);
  });
}