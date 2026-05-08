# 📦 Controle de Estoque

Aplicação web completa para gerenciamento de estoque, com foco em **performance, organização de código e boas práticas de JavaScript moderno**.

O sistema permite gerenciar produtos de forma dinâmica, com atualização em tempo real da interface e persistência local dos dados.

---

## ✨ Principais funcionalidades

- CRUD completo de produtos  
- Edição inline sem recarregar a página  
- Filtro e ordenação dinâmica (nome, preço, quantidade)  
- Busca em tempo real  
- Cálculo automático de:
  - Estoque total  
  - Valor total  
- Persistência com `localStorage`  
- Manutenção de estado após reload  
- Interface reativa sem uso de frameworks  

---

## 🧠 Destaques técnicos

Este projeto foi desenvolvido com foco em simular padrões usados em aplicações reais:

- Estrutura modular com ES Modules  
- Separação de responsabilidades (render, estado, lógica)  
- Gerenciamento de estado manual  
- Manipulação eficiente do DOM  
- Uso de `Map` para controle de elementos DOM  
- Event delegation para melhor performance  
- Funções puras para lógica de cálculo  
- Organização escalável de código  

---

## 📁 Arquitetura

```bash
js/
 ├── main.js        # Entry point e eventos globais
 ├── state.js       # Estado da aplicação
 ├── dom.js         # Seletores e elementos do DOM
 ├── render.js      # Renderização da UI
 ├── crud.js        # Lógica de manipulação dos dados
 ├── calculos.js    # Regras de negócio (totais)
 ├── storage.js     # Persistência (localStorage)
 └── filtros.js     # Filtros e ordenação
```

---

## 🖥️ Interface

- Layout simples e funcional  
- Foco em usabilidade e clareza  
- Atualizações em tempo real  
- Interações sem recarregamento  

---

## ⚙️ Como executar

```bash
git clone https://github.com/seu-usuario/seu-repositorio.git
cd seu-repositorio
```

Abra com um servidor local (ex: Live Server) e acesse:

```
http://localhost:5500
```

---

## 💡 Evoluções planejadas

- Responsividade completa  
- Melhorias de UX/UI  
- Integração com API (backend)  
- Autenticação de usuário  
- Versão com framework (React)  

---

## 📸 Screenshots

<img width="1920" height="1032" alt="Captura de tela 2026-04-06 160825" src="https://github.com/user-attachments/assets/2aef850f-fae2-4e59-b457-715a887144d3" />

<img width="1920" height="1032" alt="Captura de tela 2026-04-06 160932" src="https://github.com/user-attachments/assets/71b11770-e418-42c9-93dc-f085e0b1bbd2" />

---

## Deploy

https://claitonjc.github.io/App-de-controle-de-estoque/

---

## 🧑‍💻 Sobre o projeto

Este projeto foi desenvolvido com o objetivo de consolidar conceitos fundamentais de JavaScript moderno, simulando uma aplicação real com arquitetura organizada e escalável.

---

## 📄 Licença

MIT
