# 💧 Água Lírios - Fonte de Confiança

## PWA de Gestão de Entregas de Água - Versão 9.0

Sistema completo para gerenciamento de clientes, pedidos, entregas e relatórios para distribuidoras de água mineral.

---

## 🎯 Novidades da Versão 9.0

### ✨ Principais Melhorias

**1. Sistema de Usuários Simplificado**
- Removido seed automático de vendedor/operacional
- Admin cadastra usuários manualmente conforme necessário
- Fluxo de trabalho otimizado para cadastro em dispositivos específicos

**2. Edição de Clientes**
- Novo botão "Editar" para admin e operacional
- Carregamento automático dos dados no formulário
- Processo de edição simplificado

**3. Sistema Inteligente de Exclusão/Desativação**
- Cliente sem pedidos: pode ser **excluído** permanentemente
- Cliente com pedidos: pode ser **desativado** (mantém histórico)
- Clientes inativos podem ser **reativados** a qualquer momento

**4. Indicação Visual de Status**
- Clientes inativos aparecem com ícone 🚫 e badge "INATIVO"
- Nome riscado e em cinza para fácil identificação
- Botões contextuais (Excluir/Desativar/Reativar) conforme situação

**5. Filtro Automático em Pedidos**
- Apenas clientes ativos aparecem na seleção de pedidos
- Evita criação de pedidos para clientes desativados
- Histórico de pedidos antigos permanece intacto

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
- Cadastro de clientes (nome, telefone, documento, cidade, endereço)
- **Edição de clientes** (admin e operacional)
- **Sistema de desativação** para clientes inativos
- Gestão de produtos e preços
- Criação de pedidos com histórico do cliente
- Romaneio de carregamento
- Relatório de entregas com valores
- Backup/Restore completo (admin)
- Exportação/Importação de dados (vendedor/operacional)
- Impressão de relatórios

---

## 📦 Instalação no GitHub Pages

### Passo 1: Criar Repositório no GitHub

1. Acesse [github.com](https://github.com) e faça login
2. Clique em **"New repository"**
3. Configure:
   - **Nome**: `agua-lirios-pwa` (ou nome de sua preferência)
   - **Visibilidade**: Public
   - **NÃO** marque "Add a README file"
4. Clique em **"Create repository"**

### Passo 2: Fazer Upload dos Arquivos

**Via Interface Web (Mais Fácil):**

1. No repositório criado, clique em **"uploading an existing file"**
2. Arraste TODOS os arquivos principais:
   - `index.html`
   - `manifest.json`
   - `sw.js`
   - `agua-lirios-azul.png`
   - `agua-lirios-azul-Copia.png`
3. Adicione uma mensagem: "Versão 9.0 do PWA"
4. Clique em **"Commit changes"**

### Passo 3: Ativar GitHub Pages

1. No repositório, vá em **Settings** (Configurações)
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

> ⚠️ **IMPORTANTE**: Na v9.0, apenas o admin é criado automaticamente. Vendedores e operacionais devem ser cadastrados manualmente.

### Como Cadastrar Vendedor/Operacional

**Fluxo de Trabalho:**

1. **Admin acessa o dispositivo** do vendedor/operacional
2. **Faz login** com `adm` / `975321`
3. **Menu > Configurações > Usuários**
4. **Preenche o formulário:**
   - Usuário: nome do usuário (ex: `joao`)
   - Perfil: `vendedor` ou `operacional`
   - Senha: senha escolhida (ex: `senha123`)
5. **Clica em "Adicionar usuário"**
6. **Faz logout**
7. **Novo usuário faz login** com suas credenciais

---

## 📱 Como Instalar no Celular/Desktop

### Android (Chrome/Edge)

1. Abra o PWA no navegador
2. Toque no menu (⋮) no canto superior direito
3. Selecione **"Instalar aplicativo"** ou **"Adicionar à tela inicial"**
4. Confirme a instalação
5. O ícone aparecerá na tela inicial

### iOS (Safari)

1. Abra o PWA no Safari
2. Toque no botão **Compartilhar** (□↑)
3. Role para baixo e toque em **"Adicionar à Tela de Início"**
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

### Para Vendedores

1. **Login** com credenciais fornecidas pelo admin
2. **Cadastrar Clientes**: Menu Clientes > Preencher formulário
3. **Criar Pedidos**: 
   - Menu Pedidos
   - Selecionar cidade e cliente
   - Adicionar produtos e quantidades
   - Salvar pedido
4. **Ver Histórico**: Ao selecionar um cliente, aparecem seus últimos 5 pedidos
5. **Exportar Dados**: Menu Meus Dados > Exportar

### Para Operacional

1. **Login** com credenciais fornecidas pelo admin
2. **Editar Clientes**: Menu Clientes > Botão "Editar"
3. **Desativar Clientes**: Menu Clientes > Botão "Desativar" (se tiver pedidos)
4. **Romaneio**: Ver quantidades para carregar o caminhão
5. **Entregas**: Relatório completo com valores por cliente
6. **Imprimir**: Usar botões de impressão nos relatórios

### Para Administradores

1. **Login** com `adm` / `975321`
2. **Cadastrar Usuários**: Configurações > Usuários > Adicionar
3. **Editar Clientes**: Menu Clientes > Botão "Editar"
4. **Gerenciar Status**: 
   - **Excluir** clientes sem pedidos
   - **Desativar** clientes com pedidos
   - **Reativar** clientes inativos
5. **Configurações**: Gerenciar cidades, produtos, preços
6. **Backup Completo**: Menu Configurações > Backup/Restore

---

## 🛠️ Funcionalidades Detalhadas

### Gestão de Clientes (NOVO na v9.0)

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

### Cadastro de Clientes
- Nome completo
- Telefone
- Documento (CPF/CNPJ)
- Cidade
- Endereço completo

### Gestão de Pedidos
- Filtro por cidade
- Seleção de cliente (apenas ativos)
- **Histórico automático** dos últimos 5 pedidos do cliente
- Adição de múltiplos produtos
- Cálculo automático de totais
- Registro de data e vendedor

### Relatórios

**Romaneio:**
- Agrupamento por produto
- Quantidades totais para carregar
- Filtro por data

**Entregas:**
- Lista por cliente
- Detalhamento de produtos e valores
- Total a receber por cliente
- Total geral do dia
- Opção de impressão

### Backup e Restauração

**Backup (Admin):**
- Exporta TODOS os dados do sistema
- Formato JSON
- Inclui: clientes, pedidos, cidades, produtos, usuários

**Exportação (Vendedor/Operacional):**
- Exporta apenas dados do usuário logado
- Clientes e pedidos próprios

**Importação:**
- Restaura dados de backup
- Vendedor/Operacional: importa atualizações do admin
- Admin: restauração completa do sistema

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

## 📝 Changelog

### v9.0 - Ajustes Finais (11/11/2025)

✅ **Removido** seed automático de vendedor/operacional  
✅ **Adicionado** botão de editar clientes (admin/operacional)  
✅ **Implementado** sistema inteligente de exclusão/desativação  
✅ **Adicionada** indicação visual de clientes inativos  
✅ **Implementado** filtro de clientes ativos em pedidos  

### v8.0 - Bugs Críticos Corrigidos (10/11/2025)

✅ Corrigida função de deleção no IndexedDB  
✅ Adicionados usuários de teste vendedor/operacional  
✅ Implementado histórico de pedidos do cliente  

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
**Versão:** 9.0 - Ajustes Finais

---

## 📚 Documentação Adicional

Para informações técnicas detalhadas sobre as alterações da v9.0, consulte:
- `ALTERACOES_V9.md` - Relatório completo das mudanças

---

**🚀 Versão 9.0 - Pronta para uso! Boa sorte com suas entregas! 💧**

