# Resonance — Roadmap

> Sistema de gerenciamento de chamados e atendimento ao cliente com IA integrada.
> Atualizado em: 2026-04-09

---

## Fase 0 — Saneamento Estrutural ✅
> Pré-requisito para tudo. Arruma o que existe antes de construir em cima.

- [x] Corrigir typo: `infraestructure/` → `infrastructure/`
- [x] Enriquecer entidade `Ticket` (status, priority, channel, clientId, assigneeId, datas)
- [x] Enriquecer entidade `Message` (ticketId, authorId, createdAt)
- [x] Criar interfaces de `Repository` em `domain/repositories/`
- [x] Criar skeletons de Use Cases em `core/use-cases/`
- [x] Quebrar `usePortal` em hooks com responsabilidade única
- [x] Remover grupos de rotas vazios `(client)/` e `(chat)/`

---

## Fase 1 — Auth & Fundação
> Permitir login real e sessão persistida. Sem isso, nada é seguro para ir a produção.

- [ ] Escolher e instalar provider de autenticação (Supabase Auth / Clerk / NextAuth)
- [ ] Implementar `core/infrastructure/auth/` com o provider escolhido
- [ ] Criar `IAuthRepository` em `domain/repositories/`
- [ ] Criar use cases: `LoginUseCase`, `LogoutUseCase`, `RefreshSessionUseCase`
- [ ] Implementar middleware do Next.js para proteger rotas do workspace
- [ ] Separar acesso por role: admin, agent, client
- [ ] Conectar página `/login` ao fluxo real de autenticação
- [ ] Conectar página `/portal/login` ao fluxo real de autenticação

---

## Fase 2 — Ticket Core
> O coração do produto. Sem gerenciamento de chamados real, não há produto.

- [ ] Configurar banco de dados (Supabase recomendado)
- [ ] Criar schema da tabela `tickets` no banco
- [ ] Implementar `SupabaseTicketRepository` em `core/infrastructure/database/`
- [ ] Criar use cases: `CreateTicketUseCase`, `AssignTicketUseCase`, `UpdateTicketStatusUseCase`, `CloseTicketUseCase`
- [ ] Criar API routes: `POST /api/tickets`, `GET /api/tickets/[id]`, `PATCH /api/tickets/[id]`
- [ ] Conectar página `/inbox` à API real (substituir mock)
- [ ] Implementar notificações em tempo real (Supabase Realtime)
- [ ] Implementar atribuição automática de agente (round-robin simples)

---

## Fase 3 — Chat & Messaging
> Comunicação em tempo real entre cliente, agente e IA.

- [ ] Criar schema da tabela `messages` no banco
- [ ] Implementar `SupabaseMessageRepository` em `core/infrastructure/database/`
- [ ] Criar use cases: `SendMessageUseCase`, `GetMessagesByTicketUseCase`
- [ ] Criar API routes: `POST /api/tickets/[id]/messages`, `GET /api/tickets/[id]/messages`
- [ ] Conectar `ChatView` do portal à API real
- [ ] Conectar `chat/[id]` do workspace à API real
- [ ] Implementar streaming de mensagens em tempo real (WebSocket ou Supabase Realtime)
- [ ] Indicador de "digitando..." para IA e agente

---

## Fase 4 — AI Copilot
> O diferencial do produto. A IA e o agente trabalham como um só.

- [ ] Implementar `core/infrastructure/ai/` com o provider (Claude API recomendado)
- [ ] Criar `IAIProvider` interface para troca de provider sem refatoração
- [ ] Sugestões automáticas de resposta para o agente baseadas no histórico
- [ ] Triagem automática de tickets (classificação de categoria e prioridade)
- [ ] Resumo automático da conversa para o agente ao abrir um ticket
- [ ] Handoff IA → Agente com contexto completo
- [ ] Histórico de contexto por cliente (IA sabe quem é o cliente)
- [ ] Modo autônomo: IA resolve sem agente para casos simples

---

## Fase 5 — CRM & Portal do Cliente
> Contexto do cliente visível para o agente. Portal funcional para o cliente.

- [ ] Criar entidade e schema `Client` / `Organization` no banco
- [ ] Conectar sidebar CRM do `chat/[id]` a dados reais do cliente
- [ ] Histórico completo de tickets por cliente na sidebar CRM
- [ ] Portal do cliente: criar novo chamado (formulário real)
- [ ] Portal do cliente: acompanhar status de chamados em tempo real
- [ ] Notificações ao cliente por e-mail (novo status, nova mensagem do agente)
- [ ] Notificações in-app para o agente (novo ticket, nova mensagem)

---

## Fase 6 — Analytics & Relatórios
> Visibilidade para admins. Dados para tomar decisões de equipe.

- [ ] Conectar Dashboard do admin a dados reais (substituir mock)
- [ ] Métricas: TMA (Tempo Médio de Atendimento), CSAT, volume de chamados
- [ ] Métricas por agente: tickets resolvidos, tempo médio, satisfação
- [ ] Métricas da IA: taxa de resolução autônoma, taxa de handoff
- [ ] Filtros por período no Dashboard
- [ ] Exportar relatórios em CSV
- [ ] Alertas de SLA: notificar agente/admin quando ticket está próximo do prazo

---

## Fase 7 — Canais & Integrações
> Expandir pontos de entrada de chamados além do portal.

- [ ] Integração com e-mail (IMAP/SMTP): receber e responder chamados por e-mail
- [ ] Integração com WhatsApp (API Oficial Meta)
- [ ] Widget de chat embeddable para sites externos
- [ ] Webhook system: notificar sistemas externos em eventos de ticket
- [ ] Integração com Slack: receber alertas de tickets urgentes
- [ ] API pública documentada para integrações custom

---

## Riscos & Dependências

| Risco | Fase | Mitigação |
|---|---|---|
| Sem testes — bugs em produção | Todas | Implementar testes junto com cada use case |
| Mock data em componentes — refactor na integração | 2 e 3 | Criar camada de serviço antes das APIs |
| Sem middleware de auth — rotas expostas | 1 | Prioridade máxima antes de qualquer deploy |
| Provider de IA pode mudar | 4 | Usar interface `IAIProvider` para abstrair |
| Escala de mensagens em tempo real | 3 | Avaliar Supabase Realtime vs WebSocket dedicado |
