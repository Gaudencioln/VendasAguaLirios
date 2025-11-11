# 💧 Água Lírios - Fonte de Confiança

## PWA de Gestão de Entregas de Água - Versão 10.0

Sistema completo para gerenciamento de clientes, pedidos, entregas e relatórios para distribuidoras de água mineral.

---

## 🎉 Novidades da Versão 10.0

### 🐛 Bugs Críticos Corrigidos

**1. Exclusão Funcionando Perfeitamente**
- Corrigida função `confirmar()` que impedia exclusões
- Agora clientes, cidades, produtos e usuários são removidos corretamente
- Items desaparecem da lista imediatamente após confirmação

**2. Operacional Acessa Clientes**
- Operacional agora vê tile "Clientes" no home
- Operacional agora vê botão "Clientes" na barra inferior
- Operacional pode ver, criar, editar, excluir e desativar clientes

### ✨ Novas Funcionalidades

**3. Impressão de Clientes (3 Botões)**

**Botão "Imprimir Lista":**
- Imprime lista de clientes filtrada por cidade
- Formato: tabela com Nome, Telefone, Documento, Cidade, Endereço, Status
- Marca clientes inativos visualmente
- Permissão: Admin e Operacional

**Botão "🖨️ (5)":**
- Imprime ficha individual do cliente
- Inclui dados cadastrais completos
- Mostra últimos 5 pedidos com detalhes
- Permissão: Admin e Operacional

**Botão "🖨️ (todos)":**
- Imprime ficha individual do cliente
- Inclui dados cadastrais completos
- Mostra TODOS os pedidos do cliente
- Permissão: Admin e Operacional

**4. Gerenciamento Completo de Usuários**

**Botão "Editar":**
- Permite alterar nome do usuário
- Permite redefinir senha
- Perfil não pode ser alterado
- Validação de nomes duplicados
- Se não digitar nova senha, mantém a antiga

**Botão "Excluir":**
- Remove usuário permanentemente
- Confirmação obrigatória
- Proteção: não permite excluir admin principal

---

## 🚀 Características Principais

### ✅ Progressive Web App (PWA)
- **Instalável** em dispositivos móveis e desktop
- **Funciona offline** após primeira instalação
- **Rápido e responsivo** com interface otimizada
- **Sem necessidade de app store** - instala direto do navegador

### 👥 Sistema Multi-Usuário
- **3 perfis de acesso**: Admin, Vendedor, Operacional
- **Controle de permissões** por funcionalidade
- **Login seguro** com senhas criptografadas

### 📊 Funcionalidades Completas

**Gestão de Clientes:**
- Cadastro com nome, telefone, documento, cidade, endereço
- Edição de clientes (admin e operacional)
- Sistema inteligente de exclusão/desativação
- Filtro por cidade
- Importar/Exportar CSV
- **NOVO:** Impressão de lista e fichas individuais

**Gestão de Pedidos:**
- Filtrar por cidade
- Histórico automático dos últimos 5 pedidos
- Cálculo automático de totais
- Apenas clientes ativos aparecem na seleção

**Relatórios:**
- Romaneio de carregamento
- Relatório de entregas com valores
- Impressão completa

**Configurações (Admin):**
- Gerenciar cidades, produtos, preços
- **NOVO:** Editar usuários (nome e senha)
- **NOVO:** Excluir usuários
- Backup/Restore completo

**Meus Dados (Vendedor/Operacional):**
- Exportar dados próprios
- Importar atualizações do admin

---

## 📦 Instalação no GitHub Pages

### Passo 1: Criar Repositório no GitHub

1. Acesse [github.com](https://github.com) e faça login
2. Clique em **"New repository"**
3. Configure:
   - **Nome**: `agua-lirios-pwa`
   - **Visibilidade**: Public
   - **NÃO** marque "Add a README file"
4. Clique em **"Create repository"**

### Passo 2: Fazer Upload dos Arquivos

1. No repositório criado, clique em **"uploading an existing file"**
2. Arraste TODOS os 5 arquivos principais:
   - `index.html`
   - `manifest.json`
   - `sw.js`
   - `agua-lirios-azul.png`
   - `agua-lirios-azul-Copia.png`
3. Adicione uma mensagem: "Versão 10.0 do PWA"
4. Clique em **"Commit changes"**

### Passo 3: Ativar GitHub Pages

1. No repositório, vá em **Settings**
2. No menu lateral, clique em **Pages**
3. Em **"Source"**, selecione:
   - **Branch**: `main`
   - **Folder**: `/ (root)`
4. Clique em **"Save"**
5. Aguarde 1-2 minutos
6. Seu PWA estará disponível em: `https://SEU-USUARIO.github.io/agua-lirios-pwa/`

---

## 🔐 Credenciais de Acesso

### Usuário Padrão

| Perfil | Usuário | Senha | Descrição |
|--------|---------|-------|-----------|
| **Admin** | `adm` | `975321` | Acesso total ao sistema |

> ⚠️ **IMPORTANTE**: Apenas o admin é criado automaticamente. Vendedores e operacionais devem ser cadastrados manualmente.

### Como Cadastrar Vendedor/Operacional

1. Admin acessa o dispositivo do vendedor/operacional
2. Faz login com `adm` / `975321`
3. Menu > Configurações > Usuários
4. Preenche o formulário:
   - Usuário: nome do usuário (ex: `joao`)
   - Perfil: `vendedor` ou `operacional`
   - Senha: senha escolhida (ex: `senha123`)
5. Clica em "Adicionar usuário"
6. Faz logout
7. Novo usuário faz login com suas credenciais

---

## 📱 Como Instalar no Celular/Desktop

### Android (Chrome/Edge)

1. Abra o PWA no navegador
2. Toque no menu (⋮)
3. Selecione **"Instalar aplicativo"**
4. Confirme a instalação
5. O ícone aparecerá na tela inicial

### iOS (Safari)

1. Abra o PWA no Safari
2. Toque no botão **Compartilhar** (□↑)
3. Role e toque em **"Adicionar à Tela de Início"**
4. Confirme o nome e toque em **"Adicionar"**
5. O ícone aparecerá na tela inicial

### Desktop (Chrome/Edge)

1. Abra o PWA no navegador
2. Clique no ícone de instalação (⊕) na barra de endereço
3. Ou vá em Menu > **"Instalar Água Lírios..."**
4. Confirme a instalação
5. O app abrirá em janela própria

---

## 🎯 Guia de Uso Rápido

### Para Administradores

**Gerenciar Clientes:**
- Menu > Clientes
- Editar: Botão "Editar" ao lado do cliente
- Excluir (sem pedidos): Botão "Excluir" (vermelho)
- Desativar (com pedidos): Botão "Desativar" (amarelo)
- Reativar: Botão "Reativar" (verde)

**Imprimir Clientes:**
- **Lista:** Filtrar por cidade e clicar em "Imprimir Lista"
- **Individual (5):** Clicar em "🖨️ (5)" ao lado do cliente
- **Individual (todos):** Clicar em "🖨️ (todos)" ao lado do cliente

**Gerenciar Usuários:**
- Menu > Configurações > Usuários
- **Editar:** Clicar em "Editar", alterar nome/senha, salvar
- **Excluir:** Clicar em "Excluir", confirmar

**Backup:**
- Menu > Configurações > Backup e Restauração
- Clicar em "Fazer Backup Completo"

### Para Vendedores

**Cadastrar Clientes:**
- Menu > Clientes
- Preencher formulário
- Clicar em "Adicionar"

**Criar Pedidos:**
- Menu > Pedidos
- Selecionar cidade e cliente
- Ver histórico automático dos últimos 5 pedidos
- Adicionar produtos e quantidades
- Salvar pedido

**Exportar Dados:**
- Menu > Meus Dados
- Clicar em "Exportar Meus Clientes e Pedidos"

### Para Operacional

**Editar Clientes:**
- Menu > Clientes
- Clicar em "Editar" ao lado do cliente
- Fazer alterações
- Clicar em "Adicionar"

**Desativar Clientes:**
- Menu > Clientes
- Clicar em "Desativar" (se tiver pedidos)
- Ou "Excluir" (se não tiver pedidos)

**Imprimir Clientes:**
- Mesmo processo do admin

**Romaneio e Entregas:**
- Menu > Romaneio ou Entregas
- Selecionar data
- Preencher motorista e placa
- Clicar em "Atualizar"
- Clicar em "Imprimir"

---

## 🛠️ Funcionalidades Detalhadas

### Gestão de Clientes (v10.0)

**Edição:**
- Botão "Editar" ao lado de cada cliente
- Disponível para admin e operacional
- Dados carregados automaticamente no formulário
- Salvar clicando em "Adicionar"

**Exclusão/Desativação Inteligente:**

**Cliente SEM pedidos:**
- Botão **"Excluir"** (vermelho)
- Remove permanentemente do banco
- Confirmação obrigatória

**Cliente COM pedidos:**
- Botão **"Desativar"** (amarelo)
- Marca como inativo
- Mantém histórico de pedidos
- Não aparece mais na seleção de novos pedidos

**Cliente INATIVO:**
- Aparece com 🚫 e badge "INATIVO"
- Nome riscado e em cinza
- Botão **"Reativar"** (verde)
- Pode ser reativado a qualquer momento

**Impressão (NOVO v10.0):**

**Imprimir Lista:**
- Respeita filtro de cidade
- Tabela com todos os dados cadastrais
- Clientes inativos marcados visualmente
- Abre janela de impressão automaticamente

**Imprimir Individual (5):**
- Ficha do cliente com dados completos
- Últimos 5 pedidos com detalhes
- Cada pedido mostra: data, vendedor, itens, total

**Imprimir Individual (todos):**
- Igual ao anterior, mas com TODOS os pedidos
- Útil para clientes com histórico longo

### Gerenciamento de Usuários (NOVO v10.0)

**Editar Usuário:**
- Botão "Editar" ao lado de cada usuário
- Modal com formulário:
  - Nome do Usuário (editável)
  - Nova Senha (editável, opcional)
  - Perfil (só visualização)
- Validações:
  - Nome não pode estar vazio
  - Não permite nomes duplicados
  - Se não digitar senha, mantém a antiga
- Ao salvar:
  - Se mudou nome: remove antigo e cria novo
  - Se manteve nome: apenas atualiza

**Excluir Usuário:**
- Botão "Excluir" ao lado de cada usuário
- Confirmação obrigatória
- Remove permanentemente do banco
- Proteção: não permite excluir admin principal

---

## 📝 Changelog

### v10.0 - Bugs Corrigidos e Novas Funcionalidades (11/11/2025)

✅ **Corrigido** bug crítico de exclusão (clientes, cidades, produtos, usuários)  
✅ **Corrigido** acesso do operacional à tela de Clientes  
✅ **Adicionado** botão "Imprimir Lista" de clientes  
✅ **Adicionado** botão "Imprimir (5)" individual  
✅ **Adicionado** botão "Imprimir (todos)" individual  
✅ **Adicionado** edição de usuários (nome e senha)  
✅ **Adicionado** exclusão de usuários com confirmação  
✅ **Protegido** admin principal contra edição/exclusão  

### v9.0 - Ajustes Finais (11/11/2025)

✅ Removido seed automático de vendedor/operacional  
✅ Adicionado botão de editar clientes (admin/operacional)  
✅ Implementado sistema inteligente de exclusão/desativação  
✅ Adicionada indicação visual de clientes inativos  
✅ Implementado filtro de clientes ativos em pedidos  

### v8.0 - Bugs Críticos Corrigidos (10/11/2025)

✅ Corrigida função de deleção no IndexedDB  
✅ Adicionados usuários de teste vendedor/operacional  
✅ Implementado histórico de pedidos do cliente  

---

## 📋 Requisitos Técnicos

### Navegadores Suportados
- ✅ Chrome 80+
- ✅ Edge 80+
- ✅ Safari 13+
- ✅ Firefox 75+
- ✅ Opera 67+

### Dispositivos
- ✅ Android 5.0+
- ✅ iOS 13+
- ✅ Windows 10+
- ✅ macOS 10.13+
- ✅ Linux (qualquer distribuição moderna)

### Conexão
- Primeira instalação requer internet
- Após instalado, funciona 100% offline
- Sincronização automática quando online

---

## 🔧 Manutenção e Suporte

### Limpar Dados do Navegador

Se precisar resetar o sistema:

1. Abra as **Ferramentas do Desenvolvedor** (F12)
2. Vá em **Application** (Chrome) ou **Armazenamento** (Firefox)
3. Clique em **IndexedDB** > `agua-lirios-db`
4. Clique com botão direito e selecione **"Delete database"**
5. Recarregue a página (F5)

### Atualizar o PWA

Após fazer alterações no código:

1. Faça upload dos novos arquivos no GitHub
2. Aguarde 1-2 minutos
3. No app instalado, feche completamente e reabra
4. O Service Worker baixará a nova versão automaticamente

---

## 📞 Contato e Suporte

**Água Lírios - Fonte de Confiança**

Para suporte técnico ou dúvidas sobre o sistema, entre em contato com o administrador.

---

## 📄 Licença

Este software é de uso exclusivo da **Água Lírios - Fonte de Confiança**.  
Todos os direitos reservados © 2025

---

## 🎉 Agradecimentos

Sistema desenvolvido com dedicação para otimizar a gestão de entregas e melhorar o atendimento aos clientes.

**Desenvolvido por:** Manus AI Agent  
**Cliente:** Gaudêncio  
**Data:** Novembro 2025  
**Versão:** 10.0 - Bugs Corrigidos e Novas Funcionalidades

---

## 📚 Documentação Adicional

Para informações técnicas detalhadas, consulte:
- `TESTES_V10.md` - Relatório completo de testes e correções

---

**🚀 Versão 10.0 - Totalmente Funcional! Boa sorte com suas entregas! 💧**

