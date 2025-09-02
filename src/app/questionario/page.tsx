import { Questionnaire } from '@/components/questionnaire';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function QuestionnairePage() {
  return (
    <main className="flex min-h-screen w-full flex-col items-center bg-background p-4 sm:p-8 lg:p-16">
       <div className="w-full max-w-4xl mb-8">
        <Link href="/" className="flex items-center gap-2 text-primary hover:underline">
          <ArrowLeft className="w-4 h-4" />
          Voltar para o Dashboard
        </Link>
      </div>
      <Questionnaire />
    </main>
  );
}
