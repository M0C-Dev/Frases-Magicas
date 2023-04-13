const partesFrase1 = [
    "Nunca é tarde demais para",
    "O poder da mudança está em",
    "Com um pouco de esforço, você pode",
    "Acredite em si mesmo e",
    "Seja a mudança que",
    "Com determinação, você pode",
    "A força para",
    "O segredo para",
    "A coragem para",
    "O caminho para",
    "A sabedoria para",
    "O sucesso em",
    "A verdadeira felicidade vem de",
    "A jornada para",
    "O segredo da vida é",
  ];
  
  const partesFrase2 = [
    "realizar seus sonhos.",
    "você mesmo.",
    "alcançar grandes coisas.",
    "tudo é possível.",
    "você quer ver no mundo.",
    "superar qualquer obstáculo.",
    "alcançar seus objetivos.",
    "alcançar a felicidade.",
    "fazer o que é certo.",
    "a realização de seus objetivos.",
    "tomar boas decisões.",
    "fazer o bem aos outros.",
    "encontrar sua paixão.",
    "a autodescoberta.",
    "aprender com seus erros.",
  ];
  
  const nomesMago = [
    "Gandalf",
    "Merlin",
    "Alatar",
    "Saruman",
    "Gargamel",
    "Houdini",
    "Zatara",
    "Dr. Estranho",
    "Dr. Fate",
    "Harry Potter",
    "Dumbledore",
    "Voldemort",
    "Morgana",
    "Medusa",
    "Nosferatu",
  ];
  
  function gerarFraseAleatoria() {
    const indiceParte1 = Math.floor(Math.random() * partesFrase1.length);
    const indiceParte2 = Math.floor(Math.random() * partesFrase2.length);
    const indiceNomeMago = Math.floor(Math.random() * nomesMago.length);
    const parte1 = partesFrase1[indiceParte1];
    const parte2 = partesFrase2[indiceParte2];
    const nomeMago = nomesMago[indiceNomeMago];
    return `"${parte1} ${parte2}" - ${nomeMago}`;
  }
  
  const btnGerar = document.getElementById("btn-gerar");
  const fraseGerada = document.getElementById("frase-gerada");
  
  btnGerar.addEventListener("click", () => {
    const frase = gerarFraseAleatoria();
    fraseGerada.textContent = frase;
  });

