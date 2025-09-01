import { Questionnaire } from '@/components/questionnaire';

export default function Home() {
  return (
    <main className="flex min-h-screen w-full items-center justify-center bg-background p-4 sm:p-8 lg:p-16">
      <Questionnaire />
    </main>
  );
}
