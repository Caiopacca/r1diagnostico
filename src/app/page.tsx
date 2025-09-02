import {
  ArrowRight,
  Briefcase,
  Database,
  GitBranch,
  Lightbulb,
  LogOut,
  PenLine,
  Settings,
  Target,
} from 'lucide-react';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export default function Dashboard() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-background text-foreground">
      <header className="flex items-center justify-between p-6 border-b border-border">
        <div></div>
        <div className="flex items-center gap-4">
          <span className="text-sm">Olá, Caio</span>
          <Button variant="ghost" size="icon">
            <Settings className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <LogOut className="h-5 w-5" />
          </Button>
        </div>
      </header>

      <main className="flex-1 p-8 md:p-12 lg:p-16">
        <div className="mx-auto max-w-6xl">
          <section className="text-center mb-12">
            <h1 className="text-5xl md:text-7xl font-bold text-primary mb-4">
              Central CP Marketing
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Recursos e ferramentas para as equipes da CP Marketing Digital.
            </p>
          </section>

          <Tabs defaultValue="producao" className="w-full mb-12">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 bg-secondary">
              <TabsTrigger value="producao" className="gap-2">
                <Briefcase className="h-4 w-4" /> Produção
              </TabsTrigger>
              <TabsTrigger value="comercial" className="gap-2">
                <Target className="h-4 w-4" /> Comercial
              </TabsTrigger>
            </TabsList>
            <TabsContent value="producao"></TabsContent>
            <TabsContent value="comercial"></TabsContent>
          </Tabs>

          <section>
            <div className="flex items-center gap-3 mb-8">
              <Lightbulb className="w-6 h-6 text-primary" />
              <h2 className="text-3xl font-bold">Estratégia</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <FeatureCard
                icon={<Database className="w-8 h-8 text-primary" />}
                title="Base de Dados de Clientes"
                description="Adicione novos clientes e gerencie seus dossiês."
                href="/questionario"
              />
              <FeatureCard
                icon={<PenLine className="w-8 h-8 text-primary" />}
                title="Gerador de Relatórios"
                description="Crie relatórios de desempenho com IA."
                href="#"
              />
              <FeatureCard
                icon={<GitBranch className="w-8 h-8 text-primary" />}
                title="Método Modus"
                description="Explore nosso mapa mental estratégico para guiar as operações."
                href="#"
              />
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

function FeatureCard({
  icon,
  title,
  description,
  href,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  href: string;
}) {
  return (
    <Card className="bg-card border-border hover:border-primary transition-colors duration-300 flex flex-col">
      <CardHeader>
        <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-lg bg-secondary">
          {icon}
        </div>
        <CardTitle className="text-xl font-bold">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="mt-auto">
        <Link href={href}>
          <Button variant="default" className="w-full bg-primary/90 hover:bg-primary">
            Acessar <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
}
