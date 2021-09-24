var botaoAdicionar = document.querySelector('#adiciona-aluno')

botaoAdicionar.addEventListener('click', function (event) {
  event.preventDefault()

  var form = document.querySelector('#form-adiciona')
  var criandoAluno = aluno(form)
  console.log(criandoAluno)

  adicionaNovoAlunoNaTabela(criandoAluno)

  var notaFinal = criandoAluno.media
  console.log(notaFinal)

  var situacao = document.querySelector('.info-situacao')

  if (notaFinal >= 5) {
    console.log('Aprovado')
    situacao.textContent = 'Aprovado'
    situacao.style.background = 'green'
    situacao.style.color = 'white'
  } else {
    console.log('Reprovado')
    situacao.textContent = 'Reprovado'
    situacao.style.background = 'red'
    situacao.style.color = 'white'
  }

  form.reset()
})

function aluno(form) {
  var aluno = {
    nome: form.nome.value,
    nota1: form.nota1.value,
    nota2: form.nota2.value,
    nota3: form.nota3.value,
    nota4: form.nota4.value,
    media: calculaMedia(
      parseFloat(form.nota1.value),
      parseFloat(form.nota2.value),
      parseFloat(form.nota3.value),
      parseFloat(form.nota4.value)
    )
  }

  return aluno
}

function montaTr(criandoAluno) {
  var alunoTr = document.createElement('tr')
  alunoTr.classList.add('aluno')

  alunoTr.appendChild(montaTd(criandoAluno.nome, 'info-nome'))
  alunoTr.appendChild(montaTd(criandoAluno.nota1, 'info-nota1'))
  alunoTr.appendChild(montaTd(criandoAluno.nota2, 'info-nota2'))
  alunoTr.appendChild(montaTd(criandoAluno.nota3, 'info-nota3'))
  alunoTr.appendChild(montaTd(criandoAluno.nota4, 'info-nota4'))
  alunoTr.appendChild(montaTd(criandoAluno.media, 'info-media'))
  alunoTr.appendChild(montaTd(criandoAluno.situacao, 'info-situacao'))

  return alunoTr
}

function montaTd(dado, classe) {
  var alunoTd = document.createElement('td')
  alunoTd.classList.add(classe)
  alunoTd.textContent = dado

  return alunoTd
}

function adicionaNovoAlunoNaTabela(aluno) {
  var criarTr = montaTr(aluno)
  var tabela = document.querySelector('#tabelaDeNotas')
  tabela.appendChild(criarTr)
}