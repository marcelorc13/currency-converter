inicial();

async function inicial() {
  const api = await fetch('https://economia.awesomeapi.com.br/last/USD-BRL,ARS-BRL,EUR-BRL');
  const moeda = await api.json();

  const select = document.querySelector('#conversao');
  const botaoConverter = document.querySelector('#btn');

  const conversoes = {
    dolarParaReal: moeda.USDBRL,
    euroParaReal: moeda.EURBRL,
    pesoParaReal: moeda.ARSBRL,
  };

  const convertida = document.querySelector('#convertida');
  const conversora = document.querySelector('#conversora');
  const valor = document.querySelector('#valor');
  const atualizado = document.querySelector('#atualizado');

  botaoConverter.addEventListener('click', () => {
    const moedaSelecionada = conversoes[select.value];

    convertida.innerHTML = `${moedaSelecionada.code} <i class="fa-solid fa-${moedaSelecionada.code.toLowerCase()}-sign"></i>`;
    conversora.innerHTML = `${moedaSelecionada.codein} <i class="fa-solid fa-brazilian-real-sign"></i>`;
    valor.innerHTML = `${moedaSelecionada.high}<span class="font-normal text-4xl">${moedaSelecionada.codein}</span>`;
    atualizado.innerHTML = `Atualizado em: ${moedaSelecionada.create_date}`;
  });
}
