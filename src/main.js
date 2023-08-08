inical()
async function inical() {
  const api = await fetch('https://economia.awesomeapi.com.br/last/USD-BRL')
  const apiConvertida = await api.json()

  console.table(apiConvertida)
  console.table(apiConvertida.USDBRL.name)

  const convertida = document.querySelector('#convertida')
  const conversora = document.querySelector('#conversora')

  convertida.innerHTML = apiConvertida.USDBRL.code
  conversora.innerHTML = apiConvertida.USDBRL.codein

  const valor = document.querySelector('#valor')

  valor.innerHTML = `${apiConvertida.USDBRL.high}<span class="font-normal text-4xl">${apiConvertida.USDBRL.codein}</span>`

  const atualizado = document.querySelector('#atualizado')

  atualizado.innerHTML = `Atualizado em: ${apiConvertida.USDBRL.create_date}`

}


