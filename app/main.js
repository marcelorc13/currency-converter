inical()
async function inical() {
  const api = await fetch('https://economia.awesomeapi.com.br/last/USD-BRL,ARS-BRL,EUR-BRL')
  const moeda = await api.json()

  const conversoes = {
    dolarParaReal: moeda.USDBRL,
    euroParaReal: moeda.EURBRL,
    pesoParaReal: moeda.ARSBRL,
  }

  const conteudo = document.querySelector('#conteudo')
  conteudo.classList.add('hidden')
  
  const select = document.querySelector('#conversao')
  const botaoConverter = document.querySelector('#btn')
  const botaoConverterDois = document.querySelector('#btnDois')

  const convertida = document.querySelector('#convertida')
  const conversora = document.querySelector('#conversora')
  let valor = document.querySelector('#valor')
  const atualizado = document.querySelector('#atualizado')
  const valorInserido = document.querySelector('#valorInserido')

  botaoConverter.addEventListener('click', () => {
    const selecionada = conversoes[select.value]
    const valorFormatado = Number(selecionada.high)

    conteudo.classList.remove('hidden')

    valorInserido.placeholder = `1${selecionada.code}`
    convertida.innerHTML = selecionada.code
    conversora.innerHTML = selecionada.codein
    valor.innerHTML = `${valorFormatado.toFixed(2)}<span class="font-normal text-xl">${selecionada.codein}</span>`
    atualizado.innerHTML = `Atualizada em: ${selecionada.create_date}`

    botaoConverterDois.addEventListener('click', () => {
      const novoValor = Number(valorInserido.value * valorFormatado)
      
      valor.innerHTML = `${novoValor.toFixed(2)}<span class="font-normal text-xl">${selecionada.codein}</span>`
    })
  })
}


