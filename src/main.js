inical()
async function inical() {
  const api = await fetch('https://economia.awesomeapi.com.br/last/USD-BRL,ARS-BRL,EUR-BRL')
  const moeda = await api.json()

  console.table(moeda)

  const select = document.querySelector('#conversao')
  const botaoConverter = document.querySelector('#btn')

  const conversoes = {
    dolarParaReal: moeda.USDBRL,
    euroParaReal: moeda.EURBRL,
    pesoParaReal: moeda.ARSBRL,
  }

  let convertida = document.querySelector('#convertida')
  let conversora = document.querySelector('#conversora')
  let valor = document.querySelector('#valor')
  let atualizado = document.querySelector('#atualizado')

  botaoConverter.addEventListener('click', () => {
    const selecionada = conversoes[select.value]

    convertida.innerHTML = selecionada.code
    conversora.innerHTML = selecionada.codein
    valor.innerHTML = `${selecionada.high}<span class="font-normal text-4xl">${selecionada.codein}</span>`
    atualizado.innerHTML = `Atualizada em: ${selecionada.create_date}`
  })
}


