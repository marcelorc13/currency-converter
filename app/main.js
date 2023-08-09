inical()
async function inical() {
  const api = await fetch('https://economia.awesomeapi.com.br/last/USD-BRL,ARS-BRL,EUR-BRL')
  const moeda = await api.json()

  const select = document.querySelector('#conversao')
  const botaoConverter = document.querySelector('#btn')

  const conversoes = {
    dolarParaReal: moeda.USDBRL,
    euroParaReal: moeda.EURBRL,
    pesoParaReal: moeda.ARSBRL,
  }

  const conteudo = document.querySelector('#conteudo')
  conteudo.classList.add('hidden')
  
  const convertida = document.querySelector('#convertida')
  const conversora = document.querySelector('#conversora')
  const valor = document.querySelector('#valor')
  const atualizado = document.querySelector('#atualizado')

  botaoConverter.addEventListener('click', () => {
    const selecionada = conversoes[select.value]

    conteudo.classList.remove('hidden')

    convertida.innerHTML = selecionada.code
    conversora.innerHTML = selecionada.codein
    valor.innerHTML = `${selecionada.high}<span class="font-normal text-4xl">${selecionada.codein}</span>`
    atualizado.innerHTML = `Atualizada em: ${selecionada.create_date}`
  })
}


