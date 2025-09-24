# Copilot Instructions for Projeto-Tatuagens

## Visão Geral
Este projeto é um site estático para apresentação de portfólio de tatuagens. Ele é composto por arquivos HTML, CSS e JavaScript, além de uma pasta de imagens. Não há backend ou dependências externas.

## Estrutura do Projeto
- `index.html`: Página principal do site.
- `tes.html`: Possível página de teste ou alternativa.
- `script.js`: Scripts JavaScript para interatividade.
- `style.css`: Estilos do site.
- `imagens/`: Contém imagens de tatuagens e ícones (ex: `favicon.png`, `whatsapp.png`).

## Padrões e Convenções
- O site é totalmente estático, sem frameworks ou bibliotecas externas.
- As imagens são referenciadas diretamente via caminhos relativos.
- O CSS é centralizado em `style.css`.
- O JavaScript é centralizado em `script.js`.
- Não há sistema de build, testes automatizados ou pipelines CI/CD.

## Fluxos de Trabalho
- Para editar o conteúdo, modifique diretamente os arquivos HTML, CSS ou JS.
- Para adicionar novas imagens, coloque-as na pasta `imagens/` e referencie-as nos arquivos HTML/CSS.
- Não há comandos de build ou execução especiais: basta abrir o `index.html` em um navegador.

## Exemplos de Padrões
- Para adicionar uma nova imagem:
  ```html
  <img src="imagens/10.jpg" alt="Nova Tatuagem">
  ```
- Para adicionar um novo script, inclua em `script.js` e referencie no HTML se necessário.

## Observações
- Não há README.md ou documentação adicional.
- Não há integração com serviços externos além de possíveis links (ex: WhatsApp).
- O favicon e ícones estão em `imagens/`.

## Recomendações para agentes AI
- Mantenha a simplicidade e o padrão de site estático.
- Não introduza frameworks ou ferramentas externas sem necessidade explícita.
- Siga a estrutura de arquivos existente.
- Documente mudanças relevantes diretamente nos arquivos de código.
