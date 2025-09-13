fetch('dados.html')
  .then(response => response.text())
  .then(html => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');
    const jsonText = doc.querySelector('#dados').textContent.trim();

    const dados = JSON.parse(jsonText);

    function preencher(id, valor) {
      const el = document.getElementById(id);
      el.textContent = valor;
      el.style.color = "#666"; // cinza aplicado no valor
      el.style.fontWeight = "normal"; // garante que só o rótulo fica negrito
    }

    preencher('cod', dados.cod);
    preencher('data', dados.data);
    preencher('aluno', dados.aluno);
    preencher('cpf', dados.cpf);
    preencher('rg', dados.rg);
    preencher('nacionalidade', dados.nacionalidade);
    preencher('natural', dados.natural);
    preencher('nascimento', dados.nascimento);
    preencher('filiacao', dados.filiacao);
    preencher('curso', dados.curso);
  })
  .catch(err => console.error('Erro ao carregar dados:', err));
