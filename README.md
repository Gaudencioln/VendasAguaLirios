# 💧 Água Lírios - Fonte de Confiança

## PWA de Gestão de Entregas de Água

Sistema completo para gerenciamento de clientes, pedidos, entregas e relatórios para distribuidoras de água mineral.

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

**Opção A - Via Interface Web (Mais Fácil):**

1. No repositório criado, clique em **"uploading an existing file"**
2. Arraste TODOS os arquivos desta pasta:
   - `index.html`
   - `manifest.json`
   - `sw.js`
   - `agua-lirios-azul.png`
   - `agua-lirios-azul-Copia.png`
3. Adicione uma mensagem: "Versão inicial do PWA"
4. Clique em **"Commit changes"**

**Opção B - Via Git (Linha de Comando):**

```bash
# No terminal/prompt, dentro desta pasta:
git init
git add .
git commit -m "Versão inicial do PWA"
git branch -M main
git remote add origin https://github.com/SEU-USUARIO/agua-lirios-pwa.git
git push -u origin main
```

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

### Usuários Padrão

| Perfil | Usuário | Senha | Permissões |
|--------|---------|-------|------------|
| **Admin** | `adm` | `975321` | Acesso total, backup/restore, configurações |
| **Vendedor** | `vendedor` | `123456` | Clientes, pedidos, exportação de dados |
| **Operacional** | `operacional` | `123456` | Romaneio, entregas, impressão de relatórios |

> ⚠️ **IMPORTANTE**: Após o primeiro acesso, altere as senhas padrão em **Configurações > Usuários**

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

1. **Login** com usuário `vendedor`
2. **Cadastrar Clientes**: Menu Clientes > Preencher formulário
3. **Criar Pedidos**: 
   - Menu Pedidos
   - Selecionar cidade e cliente
   - Adicionar produtos e quantidades
   - Salvar pedido
4. **Ver Histórico**: Ao selecionar um cliente, aparecem seus últimos 5 pedidos
5. **Exportar Dados**: Menu Meus Dados > Exportar

### Para Operacional

1. **Login** com usuário `operacional`
2. **Romaneio**: Ver quantidades para carregar o caminhão
3. **Entregas**: Relatório completo com valores por cliente
4. **Imprimir**: Usar botões de impressão nos relatórios
5. **Importar Dados**: Menu Meus Dados > Importar backup do admin

### Para Administradores

1. **Login** com usuário `adm`
2. **Configurações**: Gerenciar cidades, produtos, preços, usuários
3. **Backup Completo**: Menu Configurações > Backup/Restore
4. **Criar Usuários**: Configurações > Usuários > Adicionar
5. **Deletar Dados**: Use os botões de exclusão (⊗) em cada item

---

## 🛠️ Funcionalidades Detalhadas

### Cadastro de Clientes
- Nome completo
- Telefone
- Documento (CPF/CNPJ)
- Cidade
- Endereço completo

### Gestão de Pedidos
- Filtro por cidade
- Seleção de cliente
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

### Verificar Instalabilidade

Use o [PWA Builder](https://www.pwabuilder.com/) para validar:
1. Acesse https://www.pwabuilder.com/
2. Cole a URL do seu PWA
3. Clique em "Start"
4. Veja o relatório de compatibilidade

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

## 🐛 Bugs Corrigidos na Versão Atual

### v8.0 - Correção de Bugs Críticos (10/11/2025)

✅ **Bug de Deleção**: Corrigida função `dbDel()` - itens agora são removidos corretamente do IndexedDB

✅ **Bug de Login**: Adicionados usuários de teste `vendedor` e `operacional` no seed automático

✅ **Bug de Histórico**: Implementada chamada automática de `mostrarHistoricoPedidos()` ao entrar na tela de pedidos e após salvar

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
**Versão:** 8.0 (Bugs Críticos Corrigidos)

---

## 📚 Documentação Adicional

Para informações técnicas detalhadas sobre as correções aplicadas, consulte:
- `TESTES_BUGS_CORRIGIDOS.md` - Relatório técnico das correções

---

**🚀 Pronto para usar! Boa sorte com suas entregas! 💧**

