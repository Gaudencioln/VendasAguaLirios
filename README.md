# 💧 Água Lírios - Fonte de Confiança

## PWA de Gestão de Entregas de Água - Versão 11.0

Sistema completo para gerenciamento de clientes, pedidos, entregas e relatórios para distribuidoras de água mineral.

---

## 🎉 Novidades da Versão 11.0

### 1. ✨ Botão de Instalação em Configurações

**Facilita a instalação do PWA sem precisar procurar nas opções do navegador!**

- Novo botão "📥 Instalar App no Dispositivo" em Configurações
- Visível apenas para Admin
- Detecta automaticamente se o app já está instalado
- Mostra "✅ App já instalado" quando apropriado
- Mantém botão do header funcionando também

**Como usar:**
1. Admin acessa Configurações
2. Localiza seção "📱 Instalação do App"
3. Clica em "Instalar App no Dispositivo"
4. Aceita o prompt de instalação
5. App instalado!

---

### 2. 💾 Backup Completo para Operacional

**Operacional agora pode fazer backup e restore completo do sistema!**

**Antes (v10.0):**
- Admin: Backup completo + Restore completo
- Operacional: Apenas exportar dados próprios
- Vendedor: Apenas exportar dados próprios

**Agora (v11.0):**
- Admin: Backup completo + Restore completo ✅
- **Operacional: Backup completo + Restore completo** ✅ **NOVO!**
- Vendedor: Apenas exportar dados próprios (sem mudanças)

**Acesso:**
- Operacional agora vê tile "⚙️ Configurações" no home
- Operacional agora vê botão "Config." na barra inferior
- Operacional vê APENAS a seção de Backup (não vê Cidades, Produtos, Usuários, Instalação)

**Uso recomendado:**
- Operacional faz backup diário no servidor
- Admin faz backup semanal para segurança
- Vendedor exporta seus dados quando necessário

---

### 3. 📍 Campos de Ponto de Referência e Observação

**Novos campos para facilitar as entregas!**

**Dois novos campos no cadastro de clientes:**
- **Ponto de Referência:** Para localização (ex: "Próximo ao mercado X")
- **Observação:** Para informações importantes (ex: "Portão azul, cachorro bravo")

**Onde aparecem:**
- ✅ Formulário de cadastro de clientes
- ✅ Lista de clientes (abaixo do endereço, com cores)
- ✅ Impressão de lista de clientes (duas colunas na tabela)
- ✅ Impressão individual de cliente (na ficha)
- ✅ **Relatório de entregas** (tela, exportar HTML, imprimir) - **FOCO PRINCIPAL!**

**Cores na tela:**
- **Ref:** Azul (#0ea5e9)
- **Obs:** Laranja (#f59e0b)

**Exemplo de uso:**
```
Cliente: João Silva
Telefone: (11) 98765-4321
Endereço: Rua das Flores, 123
Ref: Próximo ao mercado X
Obs: Portão azul, cachorro bravo
```

---

## 🚀 Características Principais

### ✅ Progressive Web App (PWA)
- **Instalável** em dispositivos móveis e desktop
- **Funciona offline** após primeira instalação
- **Rápido e responsivo** com interface otimizada
- **Sem necessidade de app store** - instala direto do navegador
- **Botão de instalação facilitado** em Configurações (v11.0)

### 👥 Sistema Multi-Usuário
- **3 perfis de acesso**: Admin, Vendedor, Operacional
- **Controle de permissões** por funcionalidade
- **Login seguro** com senhas criptografadas

### 📊 Funcionalidades Completas

**Gestão de Clientes:**
- Cadastro com nome, telefone, documento, cidade, endereço
- **NOVO v11.0:** Ponto de referência e observação
- Edição de clientes (admin e operacional)
- Sistema inteligente de exclusão/desativação
- Filtro por cidade
- Importar/Exportar CSV
- Impressão de lista e fichas individuais

**Gestão de Pedidos:**
- Filtrar por cidade
- Histórico automático dos últimos 5 pedidos
- Cálculo automático de totais
- Apenas clientes ativos aparecem na seleção

**Relatórios:**
- Romaneio de carregamento
- Relatório de entregas com valores
- **NOVO v11.0:** Ponto de referência e observação nas entregas
- Impressão completa

**Configurações:**
- **Admin:** Gerenciar cidades, produtos, preços, usuários, backup, **instalação**
- **Operacional:** Backup e restore completo (v11.0)
- **Vendedor:** Exportar/importar dados próprios

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
3. Adicione uma mensagem: "Versão 11.0 do PWA"
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

### Método 1: Botão em Configurações (v11.0 - Recomendado)

**Para Admin:**
1. Faça login como admin
2. Menu > Configurações
3. Seção "📱 Instalação do App"
4. Clique em "Instalar App no Dispositivo"
5. Aceite o prompt de instalação
6. Pronto!

### Método 2: Opções do Navegador

**Android (Chrome/Edge):**
1. Abra o PWA no navegador
2. Toque no menu (⋮)
3. Selecione **"Instalar aplicativo"**
4. Confirme a instalação
5. O ícone aparecerá na tela inicial

**iOS (Safari):**
1. Abra o PWA no Safari
2. Toque no botão **Compartilhar** (□↑)
3. Role e toque em **"Adicionar à Tela de Início"**
4. Confirme o nome e toque em **"Adicionar"**
5. O ícone aparecerá na tela inicial

**Desktop (Chrome/Edge):**
1. Abra o PWA no navegador
2. Clique no ícone de instalação (⊕) na barra de endereço
3. Ou vá em Menu > **"Instalar Água Lírios..."**
4. Confirme a instalação
5. O app abrirá em janela própria

---

## 🎯 Guia de Uso Rápido

### Para Administradores

**Instalar o App:**
- Menu > Configurações > Instalação do App
- Clicar em "Instalar App no Dispositivo"

**Gerenciar Clientes:**
- Menu > Clientes
- Preencher: Nome, Telefone, Documento, Cidade, Endereço, **Ponto de Referência**, **Observação**
- Editar: Botão "Editar" ao lado do cliente
- Excluir/Desativar: Botões apropriados conforme situação

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

### Para Operacional (v11.0)

**Fazer Backup:**
- Menu > Configurações (agora visível!)
- Clicar em "📥 Fazer Backup Completo"
- Salvar arquivo no servidor

**Restaurar Backup:**
- Menu > Configurações
- Clicar em "📤 Restaurar Backup"
- Selecionar arquivo
- Confirmar

**Gerenciar Clientes:**
- Mesmo processo do admin
- Pode editar, excluir, desativar, imprimir

**Relatório de Entregas:**
- Menu > Entregas
- Verificar que **Ponto de Referência** e **Observação** aparecem
- Facilita muito as entregas!

### Para Vendedores

**Cadastrar Clientes:**
- Menu > Clientes
- Preencher formulário completo (incluindo **Ponto de Referência** e **Observação**)
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

---

## 📝 Changelog

### v11.0 - Instalação Facilitada, Backup para Operacional e Novos Campos (11/11/2025)

✅ **Adicionado** botão de instalação em Configurações (admin)  
✅ **Adicionado** backup completo para operacional  
✅ **Adicionado** restore completo para operacional  
✅ **Adicionado** tile e botão de Configurações para operacional  
✅ **Adicionado** campo "Ponto de Referência" no cadastro de clientes  
✅ **Adicionado** campo "Observação" no cadastro de clientes  
✅ **Implementado** exibição dos novos campos em lista, impressão e relatórios  
✅ **Otimizado** relatório de entregas com informações para facilitar entregas  

### v10.0 - Bugs Corrigidos e Novas Funcionalidades (11/11/2025)

✅ Corrigido bug crítico de exclusão  
✅ Corrigido acesso do operacional à tela de Clientes  
✅ Adicionado impressão de lista de clientes  
✅ Adicionado impressão individual (5 e todos)  
✅ Adicionado edição de usuários  
✅ Adicionado exclusão de usuários  

### v9.0 - Ajustes Finais (11/11/2025)

✅ Removido seed automático de vendedor/operacional  
✅ Adicionado botão de editar clientes  
✅ Implementado sistema inteligente de exclusão/desativação  
✅ Adicionada indicação visual de clientes inativos  

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

## 💡 Dicas de Uso

### Ponto de Referência e Observação

**Exemplos de Ponto de Referência:**
- "Próximo ao mercado X"
- "Ao lado da farmácia Y"
- "Esquina com a Rua Z"
- "Em frente à igreja"

**Exemplos de Observação:**
- "Portão azul, cachorro bravo"
- "Campainha não funciona, bater palmas"
- "Cliente prefere receber pela manhã"
- "Deixar com vizinho se não estiver"
- "Entrada pelos fundos"

**Dica:** Use esses campos para facilitar as entregas! O entregador verá essas informações no relatório de entregas.

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
**Versão:** 11.0 - Instalação Facilitada, Backup para Operacional e Novos Campos

---

## 📚 Documentação Adicional

Para informações técnicas detalhadas, consulte:
- `TESTES_V11.md` - Relatório completo de testes e implementações

---

**🚀 Versão 11.0 - Facilitando Instalação e Entregas! Boa sorte! 💧**

