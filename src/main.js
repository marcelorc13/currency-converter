inical()
async function inical() {
  const api = await fetch('https://economia.awesomeapi.com.br/last/USD-BRL,ARS-BRL,EUR-BRL')
  const moeda = await api.json()

  console.table(moeda)

  const select = document.querySelector('#conversao')
  const botaoConverter = document.querySelector('#btn')

  const dolarParaReal = moeda.USDBRL
  const euroParaReal = moeda.EURBRL
  const pesoParaReal = moeda.ARSBRL

  const conversoes = [dolarParaReal, euroParaReal, pesoParaReal]

  let convertida = document.querySelector('#convertida')
  let conversora = document.querySelector('#conversora')
  let valor = document.querySelector('#valor')
  const atualizado = document.querySelector('#atualizado')

  botaoConverter.addEventListener('click', () => {
    if (select.value === 'euroParaReal') {
      convertida.innerHTML = `${euroParaReal.code} <i class="fa-solid fa-euro-sign"></i>`
      conversora.innerHTML = `${euroParaReal.codein} <i class="fa-solid fa-brazilian-real-sign"></i>`

      valor.innerHTML = `${euroParaReal.high}<span class="font-normal text-4xl">${euroParaReal.codein}</span>`

      atualizado.innerHTML = `Atualizado em: ${euroParaReal.create_date}`
    }
    else if (select.value === 'dolarParaReal') {
      convertida.innerHTML = `${dolarParaReal.code} <i class="fa-solid fa-dollar-sign"></i>`
      conversora.innerHTML = `${dolarParaReal.codein} <i class="fa-solid fa-brazilian-real-sign"></i>`

      valor.innerHTML = `${dolarParaReal.high}<span class="font-normal text-4xl">${dolarParaReal.codein}</span>`

      atualizado.innerHTML = `Atualizado em: ${dolarParaReal.create_date}`
    }
    else {
      convertida.innerHTML = `${pesoParaReal.code} <i class="fa-solid fa-peso-sign"></i>`
      conversora.innerHTML = `${pesoParaReal.codein} <i class="fa-solid fa-brazilian-real-sign"></i>`

      valor.innerHTML = `${pesoParaReal.high}<span class="font-normal text-4xl">${pesoParaReal.codein}</span>`

      atualizado.innerHTML = `Atualizado em: ${pesoParaReal.create_date}`
    }
  })
}


