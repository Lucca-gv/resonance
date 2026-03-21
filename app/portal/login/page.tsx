import { ChatBotIcon, ArrowRight01Icon } from "hugeicons-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function PortalLoginPage() {
  return (
    // Fundo principal levemente escuro para destacar os cards
    <div className="flex min-h-screen w-full bg-zinc-950/50">
      {/* ================= LADO ESQUERDO: ONDAS FLUIDAS (Mesh Gradient) ================= */}
      <div className="hidden w-1/2 flex-col justify-between p-12 lg:flex relative overflow-hidden bg-zinc-950">
        {/* As "Ondas" animadas via CSS Blobs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Bola Azul/Roxa Superior */}
          <div className="absolute -top-[10%] -left-[10%] w-[70%] h-[70%] rounded-full bg-indigo-600/40 blur-[120px] animate-blob" />
          {/* Bola Roxa/Rosa Direita */}
          <div className="absolute top-[20%] -right-[10%] w-[60%] h-[60%] rounded-full bg-purple-600/30 blur-[120px] animate-blob animation-delay-2000" />
          {/* Bola Azul Base */}
          <div className="absolute -bottom-[20%] left-[20%] w-[80%] h-[80%] rounded-full bg-blue-600/30 blur-[120px] animate-blob animation-delay-4000" />
        </div>

        {/* Conteúdo sobre as ondas */}
        <div className="relative z-10 flex items-center gap-2 font-bold text-xl text-white">
          <div className="flex size-8 items-center justify-center rounded-lg bg-indigo-500 text-white shadow-lg shadow-indigo-500/30">
            <ChatBotIcon className="size-5" />
          </div>
          Resonance
        </div>

        <div className="relative z-10 max-w-md text-white">
          <h1 className="text-4xl font-bold tracking-tight mb-4 drop-shadow-sm">
            Suporte inteligente,
            <br />
            resolução imediata.
          </h1>
          <p className="text-zinc-300 text-lg drop-shadow-sm">
            Faça login ou crie sua conta para conversar com nossa IA ou falar
            com um de nossos especialistas humanos. Estamos aqui para ajudar.
          </p>
        </div>

        <div className="relative z-10 text-sm text-zinc-400">
          © {new Date().getFullYear()} Resonance Inc. Todos os direitos
          reservados.
        </div>
      </div>

      {/* ================= LADO DIREITO: FORMULÁRIOS NO CARD ================= */}
      <div className="flex w-full flex-col items-center justify-center p-8 lg:w-1/2 relative">
        {/* O CARD ELEVADO */}
        <div className="w-full max-w-md flex flex-col gap-6 bg-card border border-border/50 p-8 rounded-3xl shadow-2xl relative z-10">
          {/* Cabeçalho Mobile */}
          <div className="flex items-center gap-2 font-bold text-xl lg:hidden justify-center mb-2">
            <div className="flex size-8 items-center justify-center rounded-lg bg-indigo-500 text-white">
              <ChatBotIcon className="size-5" />
            </div>
            Resonance
          </div>

          <div className="flex flex-col space-y-2 text-center mb-2">
            <h2 className="text-2xl font-semibold tracking-tight">
              Bem-vindo ao Portal
            </h2>
            <p className="text-sm text-muted-foreground">
              Acesse seus chamados e tire dúvidas.
            </p>
          </div>

          <Tabs defaultValue="login" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-6 h-12 rounded-xl">
              <TabsTrigger value="login" className="rounded-lg">
                Entrar
              </TabsTrigger>
              <TabsTrigger value="register" className="rounded-lg">
                Criar Conta
              </TabsTrigger>
            </TabsList>

            {/* ABA DE LOGIN COM ANIMAÇÃO SLIDE-IN */}
            <TabsContent
              value="login"
              // A mágica da transição suave acontece nestas classes de animate-in
              className="mt-0 data-[state=active]:animate-in data-[state=active]:fade-in-0 data-[state=active]:slide-in-from-bottom-4 duration-500"
            >
              <div className="space-y-5">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="nome@exemplo.com"
                    required
                    className="h-11 rounded-xl"
                  />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="password">Senha</Label>
                    <a
                      href="#"
                      className="text-xs text-indigo-500 hover:text-indigo-400 font-medium transition-colors"
                    >
                      Esqueceu a senha?
                    </a>
                  </div>
                  <Input
                    id="password"
                    type="password"
                    required
                    className="h-11 rounded-xl"
                  />
                </div>
                <Button className="w-full h-11 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white shadow-lg shadow-indigo-600/20 transition-all hover:-translate-y-px">
                  Acessar Portal <ArrowRight01Icon className="ml-2 size-4" />
                </Button>
              </div>
            </TabsContent>

            {/* ABA DE CADASTRO COM ANIMAÇÃO SLIDE-IN */}
            <TabsContent
              value="register"
              className="mt-0 data-[state=active]:animate-in data-[state=active]:fade-in-0 data-[state=active]:slide-in-from-bottom-4 duration-500"
            >
              <div className="space-y-5">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">Nome</Label>
                    <Input
                      id="firstName"
                      placeholder="João"
                      required
                      className="h-11 rounded-xl"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Sobrenome</Label>
                    <Input
                      id="lastName"
                      placeholder="Silva"
                      required
                      className="h-11 rounded-xl"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email-register">Email</Label>
                  <Input
                    id="email-register"
                    type="email"
                    placeholder="nome@exemplo.com"
                    required
                    className="h-11 rounded-xl"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password-register">Senha</Label>
                  <Input
                    id="password-register"
                    type="password"
                    required
                    className="h-11 rounded-xl"
                  />
                </div>
                <Button className="w-full h-11 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white shadow-lg shadow-indigo-600/20 transition-all hover:-translate-y-px">
                  Criar minha conta
                </Button>
                <p className="text-[10px] text-center text-muted-foreground pt-1">
                  Ao criar sua conta, você concorda com nossos Termos de Serviço
                  e Política de Privacidade.
                </p>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
