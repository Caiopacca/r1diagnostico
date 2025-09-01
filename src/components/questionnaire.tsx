"use client";

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Loader2, Copy, Mail, Wand2, Check } from 'lucide-react';

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
import { questionnaireData } from '@/lib/questions';
import { generateFollowUpQuestions } from '@/ai/flows/generate-follow-up-questions';
import { Skeleton } from './ui/skeleton';

const formSchema = z.object(
  questionnaireData.reduce((acc, q) => {
    acc[q.id] = z.string().min(1, { message: 'Este campo é obrigatório.' });
    return acc;
  }, {} as Record<string, z.ZodString>)
);

export function Questionnaire() {
  const [isLoading, setIsLoading] = useState(false);
  const [followUpQuestions, setFollowUpQuestions] = useState<string[]>([]);
  const [isCopied, setIsCopied] = useState(false);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: questionnaireData.reduce((acc, q) => {
      acc[q.id] = '';
      return acc;
    }, {} as Record<string, string>),
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsLoading(true);
    setFollowUpQuestions([]);
    try {
      const questionnaireResponses = questionnaireData.reduce((acc, q) => {
        acc[q.label] = values[q.id as keyof typeof values];
        return acc;
      }, {} as Record<string, string>);

      const result = await generateFollowUpQuestions({ questionnaireResponses });
      setFollowUpQuestions(result.followUpQuestions);
    } catch (error) {
      console.error('Error generating follow-up questions:', error);
      toast({
        title: 'Erro',
        description:
          'Não foi possível gerar as perguntas de acompanhamento. Tente novamente.',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };

  const getFullText = () => {
    const values = form.getValues();
    let text = 'Respostas do Questionário:\n\n';
    questionnaireData.forEach(q => {
      text += `${q.label}\n`;
      text += `${values[q.id as keyof typeof values] || 'Não preenchido'}\n\n`;
    });

    if (followUpQuestions.length > 0) {
      text += 'Perguntas de Acompanhamento Sugeridas pela IA:\n\n';
      followUpQuestions.forEach((q, i) => {
        text += `${i + 1}. ${q}\n`;
      });
    }
    return text;
  };

  const handleCopy = () => {
    const textToCopy = getFullText();
    navigator.clipboard.writeText(textToCopy);
    setIsCopied(true);
    toast({
      title: 'Sucesso!',
      description:
        'As perguntas e respostas foram copiadas para a área de transferência.',
    });
    setTimeout(() => setIsCopied(false), 2000);
  };

  const handleEmail = () => {
    const textForEmail = getFullText();
    const subject = encodeURIComponent(
      'Respostas do Questionário - Client Insights Pro'
    );
    const body = encodeURIComponent(textForEmail);
    window.location.href = `mailto:?subject=${subject}&body=${body}`;
  };

  return (
    <div className="w-full max-w-4xl space-y-8">
      <Card className="w-full shadow-lg">
        <CardHeader>
          <div className="flex items-center space-x-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
              <Wand2 className="h-6 w-6 text-primary" />
            </div>
            <div>
              <CardTitle className="text-3xl font-bold text-primary">
                Client Insights Pro
              </CardTitle>
              <CardDescription className="text-lg text-foreground/80">
                Preencha o questionário para obter insights e perguntas de
                acompanhamento personalizadas.
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-12">
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                {questionnaireData.map(q => (
                  <FormField
                    key={q.id}
                    control={form.control}
                    name={q.id as any}
                    render={({ field }) => (
                      <FormItem
                        className={q.type === 'textarea' ? 'md:col-span-2' : ''}
                      >
                        <FormLabel>{q.label}</FormLabel>
                        <FormControl>
                          {q.type === 'textarea' ? (
                            <Textarea
                              placeholder={q.placeholder}
                              {...field}
                              rows={3}
                            />
                          ) : (
                            <Input placeholder={q.placeholder} {...field} />
                          )}
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                ))}
              </div>
              <div className="flex flex-col items-center justify-between gap-4 border-t border-border pt-6 sm:flex-row">
                <div className="flex gap-2">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={handleCopy}
                    className="w-full sm:w-auto"
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
                    variant="outline"
                    onClick={handleEmail}
                    className="w-full sm:w-auto"
                  >
                    <Mail className="mr-2 h-4 w-4" />
                    Enviar
                  </Button>
                </div>
                <Button
                  type="submit"
                  disabled={isLoading}
                  size="lg"
                  className="w-full sm:w-auto"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Gerando...
                    </>
                  ) : (
                    <>
                      <Wand2 className="mr-2 h-4 w-4" />
                      Gerar Perguntas
                    </>
                  )}
                </Button>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>

      {isLoading && (
        <Card className="w-full">
          <CardHeader>
            <CardTitle>Aguarde um momento...</CardTitle>
            <CardDescription>
              Nossa IA está analisando as respostas para criar perguntas
              personalizadas.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Skeleton className="h-4 w-3/4" />
            <Skeleton className="h-4 w-1/2" />
            <Skeleton className="h-4 w-5/6" />
          </CardContent>
        </Card>
      )}

      {followUpQuestions.length > 0 && !isLoading && (
        <Card className="w-full animate-in fade-in duration-500">
          <CardHeader>
            <CardTitle>Perguntas de Acompanhamento Sugeridas</CardTitle>
            <CardDescription>
              Use estas perguntas para aprofundar a conversa com seu cliente.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3 list-disc list-inside text-foreground">
              {followUpQuestions.map((question, index) => (
                <li
                  key={index}
                  className="transition-all duration-300 hover:text-primary"
                >
                  {question}
                </li>
              ))}
            </ul>
          </CardContent>
          <CardFooter>
            <p className="text-xs text-muted-foreground">
              Estas perguntas foram geradas por IA com base nas respostas
              fornecidas.
            </p>
          </CardFooter>
        </Card>
      )}
    </div>
  );
}
