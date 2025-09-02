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
    // This function is no longer called since the submit button is removed.
    // The logic is kept in case it's needed in the future.
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
      <Card className="w-full bg-card border-border">
        <CardHeader>
          <div className="flex items-center space-x-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-background">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.2207 7.78845L14.8107 9.19845L16.9307 11.3185L11.3107 16.9385L9.1907 14.8185L7.7807 16.2285L12.0207 20.4685L12.7307 21.1785L13.4407 20.4685L20.4707 13.4385L16.2207 7.78845Z"
                  fill="hsl(var(--primary))"
                />
                <path
                  d="M12.0221 3.52844L7.7821 7.76844L9.1921 9.17844L11.3121 7.05844L16.9321 12.6784L14.8121 14.7984L16.2221 16.2084L21.1721 11.2584L12.0221 3.52844Z"
                  fill="hsl(var(--primary))"
                />
                <path
                  d="M7.06055 11.3184L2.82055 7.07844L3.53055 6.36844L6.36055 3.53844L7.77055 4.94844L5.65055 7.06844L10.5905 12.0084L12.0005 10.5984L7.06055 11.3184Z"
                  fill="hsl(var(--primary))"
                />
                <path
                  d="M11.3105 16.9385L7.07055 12.6985L6.36055 13.4085L3.53055 16.2385L4.94055 17.6485L7.06055 15.5285L12.0005 20.4685L10.5905 21.1785L11.3105 16.9385Z"
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
                        <FormLabel className="text-foreground/90">{q.label}</FormLabel>
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
                ))}
              </div>
              <div className="flex flex-col items-center justify-start gap-4 border-t border-border pt-6 sm:flex-row">
                <div className="flex gap-4">
                  <Button
                    type="button"
                    onClick={handleCopy}
                    className="w-full sm:w-auto"
                    size="lg"
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
                    onClick={handleEmail}
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

      {isLoading && (
        <Card className="w-full bg-card border-border">
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
        <Card className="w-full animate-in fade-in duration-500 bg-card border-border">
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
