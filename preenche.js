fetch('dados.html')
  .then(response => response.text())
  .then(html => {
    // pega o conteúdo da div #dados
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');
    const jsonText = doc.querySelector('#dados').textContent.trim();

    // transforma em objeto
    const dados = JSON.parse(jsonText);

    // preenche os campos
    document.getElementById('cod').textContent = dados.cod;
    document.getElementById('data').textContent = dados.data;
    document.getElementById('aluno').textContent = dados.aluno;
    document.getElementById('cpf').textContent = dados.cpf;
    document.getElementById('rg').textContent = dados.rg;
    document.getElementById('nacionalidade').textContent = dados.nacionalidade;
    document.getElementById('natural').textContent = dados.natural;
    document.getElementById('nascimento').textContent = dados.nascimento;
    document.getElementById('filiacao').textContent = dados.filiacao;
    document.getElementById('curso').textContent = dados.curso;
  })
  .catch(err => console.error('Erro ao carregar dados:', err));
