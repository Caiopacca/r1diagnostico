export const step1Questions = [
  {
    id: 'clientName',
    label: 'Nome do Cliente',
    placeholder: 'Clínica Vitalize',
    type: 'text',
  },
  {
    id: 'segment',
    label: 'Qual é o seu segmento?',
    placeholder: 'Saúde e Bem-estar',
    type: 'text',
  },
  {
    id: 'marketTime',
    label: 'Há quanto tempo vocês estão no mercado?',
    placeholder: '5 anos',
    type: 'text',
  },
  {
    id: 'monthlyRevenue',
    label: 'Qual é o faturamento médio mensal?',
    placeholder: 'R$ 50.000,00',
    type: 'text',
  },
  {
    id: 'revenueGoal',
    label: 'Qual é a meta de faturamento?',
    placeholder: 'R$ 120.000,00',
    type: 'text',
  },
  {
    id: 'averageTicket',
    label: 'Qual o ticket médio?',
    placeholder: 'R$ 800,00',
    type: 'text',
  },
];

export const step2Questions = [
  {
    id: 'clientSource',
    label: 'De onde vem a maioria dos clientes?',
    placeholder: '90% vêm de indicação e um pouco do Instagram',
    type: 'textarea',
  },
  {
    id: 'differentiators',
    label: 'Quais são os principais diferenciais do cliente?',
    placeholder:
      'Atendimento humanizado e focado na experiência do paciente, além do uso de tecnologia importada para o tratamento X, exclusiva na região.',
    type: 'textarea',
  },
  {
    id: 'marketingMotivation',
    label: 'O que te motivou a buscar ajuda com marketing?',
    placeholder:
      'Chegamos num platô, o crescimento estagnou e vemos concorrentes crescendo muito no digital. Queremos profissionalizar nossa presença online.',
    type: 'textarea',
  },
  {
    id: 'pastMarketingExperience',
    label: 'Qual foi sua experiência anterior com marketing?',
    placeholder: 'Já contratamos uma agência no passado, mas não deu certo.',
    type: 'textarea',
  },
  {
    id: 'whatDidntWork',
    label: 'O que você já tentou fazer que não funcionou?',
    placeholder: 'Fizemos posts bonitos, mas não geraram clientes. O suporte era ruim e não entendiam nosso negócio.',
    type: 'textarea',
  },
  {
    id: 'growthBottleneck',
    label: 'Qual o principal gargalo que impede seu crescimento?',
    placeholder: 'Geração de leads qualificados. Não temos um fluxo constante de novos pacientes vindos do digital.',
    type: 'textarea',
  },
  {
    id: 'bottleneckImpact',
    label: 'Qual o impacto desse gargalo no seu negócio?',
    placeholder: 'A agenda da clínica fica com buracos, especialmente em alguns dias da semana, e temos dificuldade em preenchê-la.',
    type: 'textarea',
  },
  {
    id: 'ifNotSolved',
    label: 'O que acontece se você não resolver isso?',
    placeholder: 'O faturamento vai cair e perderemos relevância para clínicas mais novas e agressivas.',
    type: 'textarea',
  },
  {
    id: 'personalFeeling',
    label: 'Qual o seu sentimento pessoal em relação a esse desafio?',
    placeholder: 'É frustrante. Sei do nosso potencial e da qualidade do nosso trabalho, mas sinto que estamos ficando invisíveis no mercado.',
    type: 'textarea',
  },
  {
    id: 'futureVision',
    label:
      'Como você imagina seu negócio daqui a 6 meses com esse problema resolvido?',
    placeholder:
      'Agenda cheia de forma previsível, clínica reconhecida como referência na especialidade e segurança para investir no crescimento.',
    type: 'textarea',
  },
  {
    id: 'personalImpact',
    label: 'E na sua vida pessoal, qual seria o impacto?',
    placeholder: 'Mais tranquilidade financeira e tempo para focar na parte estratégica, em vez de preocupação em pagar as contas.',
    type: 'textarea',
  },
  {
    id: 'priority',
    label: 'É uma prioridade resolver isso agora?',
    placeholder: 'Sim, é prioridade número um. Não podemos mais adiar.',
    type: 'text',
  },
  {
    id: 'decisionMakers',
    label: 'Quem mais está envolvido na decisão?',
    placeholder: 'A decisão final é minha e da minha esposa, que é minha sócia.',
    type: 'text',
  },
  {
    id: 'budget',
    label: 'Qual o orçamento que vocês previram para isso?',
    placeholder: 'Entre R$ 4.000 e R$ 6.000 por mês.',
    type: 'text',
  },
];

export const allQuestions = [...step1Questions, ...step2Questions];
