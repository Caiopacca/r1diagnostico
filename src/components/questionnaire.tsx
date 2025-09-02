
"use client";

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Loader2, Copy, Mail, Check } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { allQuestions, step1Questions, step2Questions, step3Questions, step4Questions } from '@/lib/questions';
import { Separator } from '@/components/ui/separator';

const formSchema = z.object(
  allQuestions.reduce((acc, q) => {
    acc[q.id] = z.string().min(1, { message: 'Este campo é obrigatório.' });
    return acc;
  }, {} as Record<string, z.ZodString>)
);

export function Questionnaire() {
  const [isCopied, setIsCopied] = useState(false);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: allQuestions.reduce((acc, q) => {
      acc[q.id] = q.placeholder || '';
      return acc;
    }, {} as Record<string, string>),
  });

  const getFullText = (data: z.infer<typeof formSchema>) => {
    let text = 'Respostas do Questionário:\n\n';
    
    text += '--- 📊 CENÁRIO E METAS ---\n\n';
    step1Questions.forEach(q => {
      text += `*${q.label}*\n`;
      text += `R: ${data[q.id as keyof typeof data] || 'Não preenchido'}\n\n`;
    });

    text += '--- 🎯 O DESAFIO ATUAL ---\n\n';
    step2Questions.forEach(q => {
      text += `*${q.label}*\n`;
      text += `R: ${data[q.id as keyof typeof data] || 'Não preenchido'}\n\n`;
    });

    text += '--- 👁️ A VISÃO DE FUTURO ---\n\n';
    step3Questions.forEach(q => {
      text += `*${q.label}*\n`;
      text += `R: ${data[q.id as keyof typeof data] || 'Não preenchido'}\n\n`;
    });

    text += '--- 💰 PRÓXIMOS PASSOS E INVESTIMENTO ---\n\n';
    step4Questions.forEach(q => {
      text += `*${q.label}*\n`;
      text += `R: ${data[q.id as keyof typeof data] || 'Não preenchido'}\n\n`;
    });

    return text;
  };

  const handleCopy = (data: z.infer<typeof formSchema>) => {
    const textToCopy = getFullText(data);
    navigator.clipboard.writeText(textToCopy);
    setIsCopied(true);
    toast({
      title: 'Sucesso!',
      description:
        'As perguntas e respostas foram copiadas para a área de transferência.',
    });
    setTimeout(() => setIsCopied(false), 2000);
  };

  const handleEmail = (data: z.infer<typeof formSchema>) => {
    const textForEmail = getFullText(data);
    const subject = encodeURIComponent(
      'Respostas do Questionário - R1 DIAGNÓSTICO'
    );
    const body = encodeURIComponent(textForEmail);
    window.location.href = `mailto:?subject=${subject}&body=${body}`;
  };
  
  const onSubmit = (data: z.infer<typeof formSchema>) => {
    // For now, we just log. In the future, this could send to a server.
    console.log(data);
  }

  return (
    <div className="w-full max-w-4xl space-y-8">
      <Card className="w-full bg-card border-border">
        <CardHeader>
          <div className="flex items-center space-x-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-transparent">
               <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21.6276 10.3846L19.7476 12.2646L22.5743 15.0913L15.0809 22.5846L12.2543 19.758L10.3743 21.638L16.0276 27.2913L16.9743 28.238L17.9209 27.2913L27.2943 17.918L21.6276 10.3846Z"
                  fill="hsl(var(--primary))"
                />
                <path
                  d="M16.0294 4.70459L10.3754 10.3586L12.2554 12.2386L15.0821 9.41192L22.5754 16.9053L19.7487 19.7319L21.6287 21.6119L28.2294 14.9986L16.0294 4.70459Z"
                  fill="hsl(var(--primary))"
                />
                <path
                  d="M9.41406 15.0912L4.09406 9.77124L4.99406 8.87124L8.79406 5.07124L10.6741 6.95124L7.8474 9.7779L14.4341 16.3646L16.3141 14.4846L9.41406 15.0912Z"

                  fill="hsl(var(--primary))"
                />
                <path
                  d="M15.0807 22.5846L9.42739 16.9313L8.48072 17.8779L4.99406 21.6513L6.87406 23.5313L9.70072 20.7046L16.0007 27.2913L14.4341 28.2379L15.0807 22.5846Z"
                  fill="hsl(var(--primary))"
                />
              </svg>
            </div>
            <div>
              <CardTitle className="text-2xl font-bold text-foreground">
                R1 DIAGNÓSTICO
              </CardTitle>
              <CardDescription className="text-base text-muted-foreground">
                CP Marketing Digital e Podcast
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-12">
              <div className="space-y-8">
                <div>
                  <h2 className="text-xl font-semibold text-primary mb-6">📊 Cenário e Metas</h2>
                  <div className="flex flex-col space-y-8">
                    {step1Questions.map((q, index) => (
                      <div key={q.id}>
                        <FormField
                          control={form.control}
                          name={q.id as any}
                          render={({ field }) => (
                            <FormItem>
                              <div className="flex items-center justify-between">
                                <FormLabel className="text-foreground/90">
                                  {q.label}
                                </FormLabel>
                                {q.suggestion && <span className="text-xs text-primary-foreground font-semibold bg-primary/80 px-3 py-1.5 rounded-md">{q.suggestion}</span>}
                              </div>
                              <FormControl>
                                {q.type === 'textarea' ? (
                                  <Textarea
                                    placeholder={q.placeholder}
                                    {...field}
                                    rows={3}
                                    className="bg-input border-border"
                                  />
                                ) : (
                                  <Input placeholder={q.placeholder} {...field} className="bg-input border-border" />
                                )}
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        {index < step1Questions.length - 1 && <Separator className="mt-8" />}
                      </div>
                    ))}
                  </div>
                </div>

                <Separator className="my-12" />

                <div>
                   <h2 className="text-xl font-semibold text-primary mb-6">🎯 O Desafio Atual</h2>
                   <div className="flex flex-col space-y-8">
                    {step2Questions.map((q, index) => (
                       <div key={q.id}>
                        <FormField
                          control={form.control}
                          name={q.id as any}
                          render={({ field }) => (
                            <FormItem>
                               <div className="flex items-center justify-between">
                                <FormLabel className="text-foreground/90">
                                  {q.label}
                                </FormLabel>
                                {q.suggestion && <span className="text-xs text-primary-foreground font-semibold bg-primary/80 px-3 py-1.5 rounded-md">{q.suggestion}</span>}
                              </div>
                              <FormControl>
                                {q.type === 'textarea' ? (
                                  <Textarea
                                    placeholder={q.placeholder}
                                    {...field}
                                    rows={3}
                                    className="bg-input border-border"
                                  />
                                ) : (
                                  <Input placeholder={q.placeholder} {...field} className="bg-input border-border" />
                                )}
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                         {index < step2Questions.length - 1 && <Separator className="mt-8" />}
                      </div>
                    ))}
                  </div>
                </div>

                 <Separator className="my-12" />

                <div>
                   <h2 className="text-xl font-semibold text-primary mb-6">👁️ A Visão de Futuro</h2>
                   <div className="flex flex-col space-y-8">
                    {step3Questions.map((q, index) => (
                      <div key={q.id}>
                        <FormField
                          control={form.control}
                          name={q.id as any}
                          render={({ field }) => (
                            <FormItem>
                               <div className="flex items-center justify-between">
                                <FormLabel className="text-foreground/90">
                                  {q.label}
                                </FormLabel>
                                {q.suggestion && <span className="text-xs text-primary-foreground font-semibold bg-primary/80 px-3 py-1.5 rounded-md">{q.suggestion}</span>}
                              </div>
                              <FormControl>
                                {q.type === 'textarea' ? (
                                  <Textarea
                                    placeholder={q.placeholder}
                                    {...field}
                                    rows={3}
                                    className="bg-input border-border"
                                  />
                                ) : (
                                  <Input placeholder={q.placeholder} {...field} className="bg-input border-border" />
                                )}
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        {index < step3Questions.length - 1 && <Separator className="mt-8" />}
                        </div>
                    ))}
                  </div>
                </div>

                 <Separator className="my-12" />

                <div>
                   <h2 className="text-xl font-semibold text-primary mb-6">💰 Próximos Passos e Investimento</h2>
                   <div className="flex flex-col space-y-8">
                    {step4Questions.map((q, index) => (
                      <div key={q.id}>
                        <FormField
                          control={form.control}
                          name={q.id as any}
                          render={({ field }) => (
                            <FormItem>
                               <div className="flex items-center justify-between">
                                <FormLabel className="text-foreground/90">
                                  {q.label}
                                </FormLabel>
                                {q.suggestion && <span className="text-xs text-primary-foreground font-semibold bg-primary/80 px-3 py-1.5 rounded-md">{q.suggestion}</span>}
                              </div>
                              <FormControl>
                                {q.type === 'textarea' ? (
                                  <Textarea
                                    placeholder={q.placeholder}
                                    {...field}
                                    rows={3}
                                    className="bg-input border-border"
                                  />
                                ) : (
                                  <Input placeholder={q.placeholder} {...field} className="bg-input border-border" />
                                )}
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        {index < step4Questions.length - 1 && <Separator className="mt-8" />}
                        </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-center justify-end gap-4 border-t border-border pt-6 sm:flex-row">
                 <div className="flex gap-4">
                      <Button
                        type="button"
                        onClick={form.handleSubmit(handleCopy)}
                        className="w-full sm:w-auto"
                        size="lg"
                        variant="outline"
                      >
                        {isCopied ? (
                          <Check className="mr-2 h-4 w-4" />
                        ) : (
                          <Copy className="mr-2 h-4 w-4" />
                        )}
                        {isCopied ? 'Copiado!' : 'Copiar'}
                      </Button>
                      <Button
                        type="button"
                        onClick={form.handleSubmit(handleEmail)}
                        className="w-full sm:w-auto"
                        size="lg"
                      >
                        <Mail className="mr-2 h-4 w-4" />
                        Enviar
                      </Button>
                    </div>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
