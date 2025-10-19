# 🎹 Piano Virtual – Projeto Interativo com HTML, CSS e JavaScript

[![Status](https://img.shields.io/badge/status-concluído-brightgreen)]()
[![License](https://img.shields.io/badge/license-MIT-blue)](./LICENSE)
[![Feito por DevFbz](https://img.shields.io/badge/feito%20por-DevFbz-8A2BE2)](https://github.com/DevFbz)

> Projeto criado para praticar **JavaScript, HTML e CSS**, desenvolvendo um **piano interativo** que permite ao usuário tocar notas musicais diretamente no navegador.  
> Cada tecla possui um som associado e responde tanto a **cliques do mouse** quanto ao **teclado físico**.

---

## 🧠 Sobre o Projeto

O **Piano Virtual** foi desenvolvido como parte de um estudo de manipulação do **DOM**, **eventos de teclado**, **áudio no navegador** e **estilização com CSS Grid**.

O objetivo é unir **lógica de programação e design** para criar uma experiência musical divertida e didática.

---

## 🛠️ Tecnologias Utilizadas

| Tecnologia | Função |
|-------------|---------|
| 🧩 **HTML5** | Estrutura da página |
| 🎨 **CSS3** | Estilo visual e disposição das teclas |
| ⚙️ **JavaScript (ES6)** | Reação às teclas e reprodução de áudio |

---


---

## ⚙️ Funcionalidades

✅ Teclas que tocam sons ao clicar  
✅ Suporte para toques do teclado físico  
✅ Destaque visual das teclas pressionadas  
✅ Interface responsiva e intuitiva  
✅ Áudios realistas das notas musicais  

---

## 💻 Exemplo de Código

```javascript
// Seleciona todas as teclas
const keys = document.querySelectorAll('.key');

keys.forEach(key => {
  key.addEventListener('click', () => playSound(key.dataset.note));
});

document.addEventListener('keydown', event => {
  const key = document.querySelector(`.key[data-key="${event.key}"]`);
  if (key) playSound(key.dataset.note);
});

function playSound(note) {
  const audio = new Audio(`./sounds/${note}.mp3`);
  audio.play();
}
```
---

💡 Aprendizados

  - Manipulação de eventos (click, keydown)

  - Reprodução de sons com o objeto Audio()

  - Uso de data attributes para mapear notas musicais

  - Organização de código modular (HTML, CSS, JS)

  - Responsividade e efeitos visuais com CSS

---

🔮 Possíveis Melhorias

  - 🎧 Controle de volume

  - 🎵 Gravação e reprodução das músicas tocadas

  - 🌙 Tema escuro

  - 🎼 Indicação das teclas musicais (C, D, E, F...)

  - 📱 Modo mobile com suporte a toque na tela

---

👨‍💻 Autor

  - Desenvolvido com 💜 por DevFbz

📧 Contato: brenofabrizio2018@gmail.com



