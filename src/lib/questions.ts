export const step1Questions = [
  {
    id: 'clientName',
    label: 'Nome do Cliente',
    placeholder: 'Ex: Clínica Vitalize',
    type: 'text',
  },
  {
    id: 'segment',
    label: 'Qual é o seu segmento?',
    placeholder: 'Ex: Saúde e Bem-estar',
    type: 'text',
  },
  {
    id: 'monthlyRevenue',
    label: 'Qual é o faturamento médio mensal?',
    placeholder: 'Ex: R$ 50.000,00',
    type: 'text',
  },
  {
    id: 'pastMarketingExperience',
    label: 'Qual foi sua experiência anterior com marketing?',
    placeholder: 'Ex: Já contratamos uma agência, mas não deu certo.',
    type: 'textarea',
  },
    {
    id: 'priority',
    label: 'É uma prioridade resolver isso agora?',
    placeholder: 'Ex: Sim, é prioridade número um.',
    type: 'text',
  },
  {
    id: 'budget',
    label: 'Qual o orçamento que vocês previram para isso?',
    placeholder: 'Ex: Entre R$ 4.000 e R$ 6.000 por mês.',
    type: 'text',
  },
];

export const step2Questions = [
  {
    id: 'growthBottleneck',
    label: 'Qual o principal gargalo que impede seu crescimento?',
    placeholder: 'Ex: Geração de leads qualificados do digital.',
    type: 'textarea',
  },
  {
    id: 'marketTime',
    label: 'Há quanto tempo vocês estão no mercado?',
    placeholder: 'Ex: 5 anos',
    type: 'text',
  },
  {
    id: 'revenueGoal',
    label: 'Qual é a meta de faturamento?',
    placeholder: 'Ex: R$ 120.000,00',
    type: 'text',
  },
  {
    id: 'averageTicket',
    label: 'Qual o ticket médio?',
    placeholder: 'Ex: R$ 800,00',
    type: 'text',
  },
  {
    id: 'clientSource',
    label: 'De onde vem a maioria dos clientes?',
    placeholder: 'Ex: 90% vêm de indicação e um pouco do Instagram',
    type: 'textarea',
  },
  {
    id: 'differentiators',
    label: 'Quais são os principais diferenciais do cliente?',
    placeholder:
      'Ex: Atendimento humanizado, tecnologia importada exclusiva...',
    type: 'textarea',
  },
  {
    id: 'marketingMotivation',
    label: 'O que te motivou a buscar ajuda com marketing?',
    placeholder:
      'Ex: Crescimento estagnado, concorrentes crescendo no digital...',
    type: 'textarea',
  },
  {
    id: 'whatDidntWork',
    label: 'O que você já tentou fazer que não funcionou?',
    placeholder: 'Ex: Posts bonitos não geraram clientes, suporte ruim...',
    type: 'textarea',
  },
  {
    id: 'bottleneckImpact',
    label: 'Qual o impacto desse gargalo no seu negócio?',
    placeholder: 'Ex: Agenda com buracos, dificuldade em preenchê-la.',
    type: 'textarea',
  },
  {
    id: 'ifNotSolved',
    label: 'O que acontece se você não resolver isso?',
    placeholder: 'Ex: Faturamento vai cair, perderemos relevância.',
    type: 'textarea',
  },
  {
    id: 'personalFeeling',
    label: 'Qual o seu sentimento pessoal em relação a esse desafio?',
    placeholder: 'Ex: É frustrante, sinto que estamos ficando invisíveis.',
    type: 'textarea',
  },
  {
    id: 'futureVision',
    label:
      'Como você imagina seu negócio daqui a 6 meses com esse problema resolvido?',
    placeholder:
      'Ex: Agenda cheia, clínica reconhecida, segurança para investir.',
    type: 'textarea',
  },
  {
    id: 'personalImpact',
    label: 'E na sua vida pessoal, qual seria o impacto?',
    placeholder: 'Ex: Mais tranquilidade financeira e tempo.',
    type: 'textarea',
  },
  {
    id: 'decisionMakers',
    label: 'Quem mais está envolvido na decisão?',
    placeholder: 'Ex: Eu e minha esposa, que é minha sócia.',
    type: 'text',
  },
];

export const allQuestions = [...step1Questions, ...step2Questions];
