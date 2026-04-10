import { ChatBotIcon, ArrowRight01Icon } from "hugeicons-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function PortalLoginPage() {
  return (
    // Forçando o Dark Mode (classe 'dark') nesta tela específica
    <div className="dark flex min-h-screen w-full bg-zinc-950 relative overflow-hidden">
      {/* ================= BACKGROUND: ONDAS FLUIDAS (Mesh Gradient) GLOBÁIS ================= 
          Agora as ondas ficam no fundo de toda a tela, não apenas na esquerda.
      */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Indigo — top-left âncora */}
        <div className="absolute -top-[10%] -left-[10%] w-[70%] h-[70%] rounded-full bg-indigo-600/30 blur-[100px] animate-drift" />

        {/* Purple — right — morph orgânico */}
        <div
          className="absolute top-[15%] -right-[10%] w-[60%] h-[60%] animate-morph bg-purple-600/25 blur-[100px]"
          style={{ animationDelay: "2s" }}
        />

        {/* Blue — bottom — drift reverso */}
        <div
          className="absolute -bottom-[15%] left-[15%] w-[75%] h-[75%] rounded-full bg-blue-600/20 blur-[100px] animate-drift-reverse"
          style={{ animationDelay: "4s" }}
        />

        {/* Cyan — center-left accent */}
        <div
          className="absolute top-[40%] -left-[5%] w-[40%] h-[40%] rounded-full bg-cyan-500/15 blur-[80px] animate-float"
          style={{ animationDelay: "6s" }}
        />

        {/* Violet — bottom-right accent */}
        <div
          className="absolute bottom-[10%] right-[5%] w-[35%] h-[35%] rounded-full bg-violet-500/15 blur-[80px] animate-drift"
          style={{ animationDelay: "8s" }}
        />
      </div>

      {/* ================= LADO ESQUERDO: TEXTOS ================= */}
      <div className="hidden w-1/2 flex-col justify-between p-12 lg:flex relative z-10">
        {/* Logo */}
        <div className="flex items-center gap-2 font-bold text-xl text-white">
          <div className="flex size-8 items-center justify-center rounded-lg bg-indigo-500 text-white shadow-lg shadow-indigo-500/30">
            <ChatBotIcon className="size-5" />
          </div>
          Resonance
        </div>

        {/* Copywriting */}
        <div className="max-w-md text-white">
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

        {/* Footer */}
        <div className="text-sm text-zinc-500">
          © {new Date().getFullYear()} Resonance Inc. Todos os direitos
          reservados.
        </div>
      </div>

      {/* ================= LADO DIREITO: FORMULÁRIO GLASSMORPHISM ================= */}
      <div className="flex w-full flex-col items-center justify-center p-8 lg:w-1/2 relative z-10">
        {/* O CARD LIQUID GLASS */}
        <div className="w-full max-w-md flex flex-col gap-6 bg-zinc-950/40 backdrop-blur-2xl border border-white/10 p-8 rounded-3xl shadow-2xl">
          {/* Cabeçalho Mobile */}
          <div className="flex items-center gap-2 font-bold text-xl lg:hidden justify-center mb-2 text-white">
            <div className="flex size-8 items-center justify-center rounded-lg bg-indigo-500 text-white">
              <ChatBotIcon className="size-5" />
            </div>
            Resonance
          </div>

          <div className="flex flex-col space-y-2 text-center mb-2">
            <h2 className="text-2xl font-semibold tracking-tight text-white">
              Bem-vindo ao Portal
            </h2>
            <p className="text-sm text-zinc-400">
              Acesse seus chamados e tire dúvidas.
            </p>
          </div>

          <Tabs defaultValue="login" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-6 h-12 rounded-xl bg-zinc-900/50 border border-white/5">
              <TabsTrigger
                value="login"
                className="rounded-lg data-[state=active]:bg-zinc-800 text-zinc-400 data-[state=active]:text-white transition-all"
              >
                Entrar
              </TabsTrigger>
              <TabsTrigger
                value="register"
                className="rounded-lg data-[state=active]:bg-zinc-800 text-zinc-400 data-[state=active]:text-white transition-all"
              >
                Criar Conta
              </TabsTrigger>
            </TabsList>

            {/* ABA DE LOGIN */}
            <TabsContent
              value="login"
              className="mt-0 data-[state=active]:animate-in data-[state=active]:fade-in-0 data-[state=active]:slide-in-from-bottom-4 duration-500"
            >
              <div className="space-y-5">
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-zinc-300">
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="nome@exemplo.com"
                    required
                    className="h-11 rounded-xl bg-zinc-900/50 border-white/5 text-white placeholder:text-zinc-500 focus-visible:ring-indigo-500/50"
                  />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="password" className="text-zinc-300">
                      Senha
                    </Label>
                    <a
                      href="#"
                      className="text-xs text-indigo-400 hover:text-indigo-300 font-medium transition-colors"
                    >
                      Esqueceu a senha?
                    </a>
                  </div>
                  <Input
                    id="password"
                    type="password"
                    required
                    className="h-11 rounded-xl bg-zinc-900/50 border-white/5 text-white focus-visible:ring-indigo-500/50"
                  />
                </div>
                <Button className="w-full h-11 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-500/25 transition-all hover:-translate-y-px mt-2">
                  Acessar Portal <ArrowRight01Icon className="ml-2 size-4" />
                </Button>
              </div>
            </TabsContent>

            {/* ABA DE CADASTRO */}
            <TabsContent
              value="register"
              className="mt-0 data-[state=active]:animate-in data-[state=active]:fade-in-0 data-[state=active]:slide-in-from-bottom-4 duration-500"
            >
              <div className="space-y-5">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName" className="text-zinc-300">
                      Nome
                    </Label>
                    <Input
                      id="firstName"
                      placeholder="João"
                      required
                      className="h-11 rounded-xl bg-zinc-900/50 border-white/5 text-white placeholder:text-zinc-500"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName" className="text-zinc-300">
                      Sobrenome
                    </Label>
                    <Input
                      id="lastName"
                      placeholder="Silva"
                      required
                      className="h-11 rounded-xl bg-zinc-900/50 border-white/5 text-white placeholder:text-zinc-500"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email-register" className="text-zinc-300">
                    Email
                  </Label>
                  <Input
                    id="email-register"
                    type="email"
                    placeholder="nome@exemplo.com"
                    required
                    className="h-11 rounded-xl bg-zinc-900/50 border-white/5 text-white placeholder:text-zinc-500"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password-register" className="text-zinc-300">
                    Senha
                  </Label>
                  <Input
                    id="password-register"
                    type="password"
                    required
                    className="h-11 rounded-xl bg-zinc-900/50 border-white/5 text-white"
                  />
                </div>
                <Button className="w-full h-11 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-500/25 transition-all hover:-translate-y-px mt-2">
                  Criar minha conta
                </Button>
                <p className="text-[10px] text-center text-zinc-500 pt-1">
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
