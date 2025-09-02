
"use client";

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Loader2, Copy, Mail, Check, Send } from 'lucide-react';
import Image from 'next/image';

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

  
  const onSubmit = (data: z.infer<typeof formSchema>) => {
    // This is now handled by the individual buttons
    console.log(data);
  }

  return (
    <div className="w-full max-w-4xl space-y-8">
      <Card className="w-full bg-card border-border">
        <CardHeader>
          <div className="flex items-center space-x-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-transparent">
              <Image src="https://res.cloudinary.com/dp3gukavt/image/upload/v1755524633/Prancheta_6_ajhh0n.png" width={48} height={48} alt="Logo CP Marketing" />
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
                    {step1Questions.map((q) => (
                      <div key={q.id}>
                        <FormField
                          control={form.control}
                          name={q.id as any}
                          render={({ field }) => (
                            <FormItem>
                              <div className="mb-2">
                                <FormLabel className="text-foreground/90 flex items-center gap-2">
                                  {q.label}
                                  {q.suggestion && <span className="text-xs text-primary-foreground font-semibold bg-primary/80 px-3 py-1.5 rounded-md">{q.suggestion}</span>}
                                </FormLabel>
                                <p className="text-sm text-muted-foreground mt-1.5">{q.conversational}</p>
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
                        <Separator className="mt-8" />
                      </div>
                    ))}
                  </div>
                </div>

                <Separator className="my-12" />

                <div>
                   <h2 className="text-xl font-semibold text-primary mb-6">🎯 O Desafio Atual</h2>
                   <div className="flex flex-col space-y-8">
                    {step2Questions.map((q) => (
                       <div key={q.id}>
                        <FormField
                          control={form.control}
                          name={q.id as any}
                          render={({ field }) => (
                            <FormItem>
                               <div className="mb-2">
                                <FormLabel className="text-foreground/90 flex items-center gap-2">
                                  {q.label}
                                  {q.suggestion && <span className="text-xs text-primary-foreground font-semibold bg-primary/80 px-3 py-1.5 rounded-md">{q.suggestion}</span>}
                                </FormLabel>
                                <p className="text-sm text-muted-foreground mt-1.5">{q.conversational}</p>
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
                         <Separator className="mt-8" />
                      </div>
                    ))}
                  </div>
                </div>

                 <Separator className="my-12" />

                <div>
                   <h2 className="text-xl font-semibold text-primary mb-6">👁️ A Visão de Futuro</h2>
                   <div className="flex flex-col space-y-8">
                    {step3Questions.map((q) => (
                      <div key={q.id}>
                        <FormField
                          control={form.control}
                          name={q.id as any}
                          render={({ field }) => (
                            <FormItem>
                               <div className="mb-2">
                                <FormLabel className="text-foreground/90 flex items-center gap-2">
                                  {q.label}
                                  {q.suggestion && <span className="text-xs text-primary-foreground font-semibold bg-primary/80 px-3 py-1.5 rounded-md">{q.suggestion}</span>}
                                </FormLabel>
                                <p className="text-sm text-muted-foreground mt-1.5">{q.conversational}</p>
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
                        <Separator className="mt-8" />
                        </div>
                    ))}
                  </div>
                </div>

                 <Separator className="my-12" />

                <div>
                   <h2 className="text-xl font-semibold text-primary mb-6">💰 Próximos Passos e Investimento</h2>
                   <div className="flex flex-col space-y-8">
                    {step4Questions.map((q) => (
                      <div key={q.id}>
                        <FormField
                          control={form.control}
                          name={q.id as any}
                          render={({ field }) => (
                            <FormItem>
                               <div className="mb-2">
                                <FormLabel className="text-foreground/90 flex items-center gap-2">
                                  {q.label}
                                  {q.suggestion && <span className="text-xs text-primary-foreground font-semibold bg-primary/80 px-3 py-1.5 rounded-md">{q.suggestion}</span>}
                                </FormLabel>
                                <p className="text-sm text-muted-foreground mt-1.5">{q.conversational}</p>
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
                        <Separator className="mt-8" />
                        </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-6 border-t border-border pt-6">
                 <Button
                    type="button"
                    onClick={form.handleSubmit(handleCopy)}
                    className="w-full"
                    size="lg"
                  >
                    {isCopied ? (
                      <Check className="mr-2 h-4 w-4" />
                    ) : (
                      <Copy className="mr-2 h-4 w-4" />
                    )}
                    {isCopied ? 'Copiado!' : 'Copiar Respostas'}
                  </Button>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
