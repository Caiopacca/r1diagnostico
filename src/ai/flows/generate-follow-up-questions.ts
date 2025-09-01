// This file is machine-generated - edit with caution!
'use server';
/**
 * @fileOverview Generates personalized follow-up questions based on questionnaire responses.
 *
 * - generateFollowUpQuestions - A function that generates follow-up questions based on questionnaire responses.
 * - GenerateFollowUpQuestionsInput - The input type for the generateFollowUpQuestions function.
 * - GenerateFollowUpQuestionsOutput - The return type for the generateFollowUpQuestions function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateFollowUpQuestionsInputSchema = z.object({
  questionnaireResponses: z.record(z.string(), z.string()).describe('A record of questionnaire questions and their corresponding answers.'),
});
export type GenerateFollowUpQuestionsInput = z.infer<typeof GenerateFollowUpQuestionsInputSchema>;

const GenerateFollowUpQuestionsOutputSchema = z.object({
  followUpQuestions: z.array(z.string()).describe('An array of personalized follow-up questions.'),
});
export type GenerateFollowUpQuestionsOutput = z.infer<typeof GenerateFollowUpQuestionsOutputSchema>;

export async function generateFollowUpQuestions(input: GenerateFollowUpQuestionsInput): Promise<GenerateFollowUpQuestionsOutput> {
  return generateFollowUpQuestionsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateFollowUpQuestionsPrompt',
  input: {schema: GenerateFollowUpQuestionsInputSchema},
  output: {schema: GenerateFollowUpQuestionsOutputSchema},
  prompt: `You are an AI-powered sales assistant designed to generate personalized follow-up questions based on a client's questionnaire responses.

  Based on the following questionnaire responses, create a list of insightful and specific follow-up questions designed to probe key areas for deeper discussion and qualify leads effectively. Focus on questions that will help a sales representative understand the client's needs, challenges, and priorities.

  Questionnaire Responses:
  {{#each questionnaireResponses}}
    {{@key}}: {{{this}}}
  {{/each}}

  Follow-Up Questions:
  `,config: {
    safetySettings: [
      {
        category: 'HARM_CATEGORY_HATE_SPEECH',
        threshold: 'BLOCK_ONLY_HIGH',
      },
      {
        category: 'HARM_CATEGORY_DANGEROUS_CONTENT',
        threshold: 'BLOCK_NONE',
      },
      {
        category: 'HARM_CATEGORY_HARASSMENT',
        threshold: 'BLOCK_MEDIUM_AND_ABOVE',
      },
      {
        category: 'HARM_CATEGORY_SEXUALLY_EXPLICIT',
        threshold: 'BLOCK_LOW_AND_ABOVE',
      },
    ],
  },
});

const generateFollowUpQuestionsFlow = ai.defineFlow(
  {
    name: 'generateFollowUpQuestionsFlow',
    inputSchema: GenerateFollowUpQuestionsInputSchema,
    outputSchema: GenerateFollowUpQuestionsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
