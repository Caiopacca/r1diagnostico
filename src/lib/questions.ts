
export const step1Questions = [
  {
    id: 'clientName',
    label: '1- Nome do Cliente',
    placeholder: 'Clínica Vitalize',
    type: 'text',
    suggestion: 'Ver resposta do formulário',
    conversational: 'Pra gente começar, qual é o nome da sua empresa?'
  },
  {
    id: 'segment',
    label: '2- Qual é o seu segmento?',
    placeholder: 'Saúde e Bem-estar',
    type: 'text',
    suggestion: 'Ver resposta do formulário',
    conversational: 'E em qual área ou segmento vocês atuam?'
  },
  {
    id: 'marketTime',
    label: '3- Há quanto tempo vocês estão no mercado?',
    placeholder: '5 anos',
    type: 'text',
    conversational: 'Legal! E há quanto tempo a empresa já existe?'
  },
  {
    id: 'monthlyRevenue',
    label: '4- Qual é o faturamento médio mensal?',
    placeholder: 'R$ 50.000,00',
    type: 'text',
    suggestion: 'Ver resposta do formulário',
    conversational: 'Para eu entender o momento de vocês, qual tem sido o faturamento médio por mês?'
  },
   {
    id: 'revenueGoal',
    label: '5- Qual é a meta de faturamento?',
    placeholder: 'R$ 120.000,00',
    type: 'text',
    conversational: 'E qual é o objetivo? Aonde vocês querem chegar em termos de faturamento?'
  },
  {
    id: 'averageTicket',
    label: '6- Qual o ticket médio?',
    placeholder: 'R$ 800,00',
    type: 'text',
    conversational: 'Normalmente, qual o valor médio que cada cliente gasta com vocês?'
  },
  {
    id: 'clientSource',
    label: '7- De onde vem a maioria dos clientes?',
    placeholder: '90% vêm de indicação e um pouco do Instagram',
    type: 'textarea',
    conversational: 'Hoje, a maior parte dos seus clientes vem de onde? Indicação, Instagram, site...?'
  },
  {
    id: 'differentiators',
    label: '8- Quais são os principais diferenciais do cliente?',
    placeholder: 'Atendimento humanizado e focado na experiência do paciente, além do uso de tecnologia importada para o tratamento X, exclusiva na região.',
    type: 'textarea',
    conversational: 'E o que vocês fazem que seus concorrentes não fazem? O que torna vocês únicos?'
  },
];

export const step2Questions = [
   {
    id: 'marketingMotivation',
    label: '9- O que te motivou a buscar ajuda com marketing?',
    placeholder:
      'Chegamos num platô, o crescimento estagnou e vemos concorrentes crescendo muito no digital. Queremos profissionalizar nossa presença online.',
    type: 'textarea',
    conversational: 'Me conta, o que fez você pensar: "Preciso de ajuda com o marketing agora"?'
  },
  {
    id: 'pastMarketingExperience',
    label: '10- Qual foi sua experiência anterior com marketing?',
    placeholder: 'Já contratamos uma agência no passado, mas não deu certo.',
    type: 'textarea',
    suggestion: 'Ver resposta do formulário',
    conversational: 'Vocês já investiram em marketing antes? Como foi essa experiência?'
  },
  {
    id: 'whatDidntWork',
    label: '11- O que você já tentou fazer que não funcionou?',
    placeholder: 'Fizemos posts bonitos, mas não geraram clientes. O suporte era ruim e não entendiam nosso negócio.',
    type: 'textarea',
    conversational: 'E o que especificamente não deu certo? O que vocês tentaram que não trouxe o resultado esperado?'
  },
  {
    id: 'growthBottleneck',
    label: '12- Qual o principal gargalo que impede seu crescimento?',
    placeholder: 'Geração de leads qualificados. Não temos um fluxo constante de novos pacientes vindos do digital.',
    type: 'textarea',
    conversational: 'Se você pudesse apontar uma única coisa que está travando o crescimento da empresa hoje, o que seria?'
  },
  {
    id: 'bottleneckImpact',
    label: '13- Qual o impacto desse gargalo no seu negócio?',
    placeholder: 'A agenda da clínica fica com buracos, especialmente em alguns dias da semana, e temos dificuldade em preenchê-la.',
    type: 'textarea',
    conversational: 'E como esse "gargalo" afeta o dia a dia da operação? Qual o principal problema que ele causa?'
  },
  {
    id: 'ifNotSolved',
    label: '14- O que acontece se você não resolver isso?',
    placeholder: 'O faturamento vai cair e perderemos relevância para clínicas mais novas e agressivas.',
    type: 'textarea',
    conversational: 'Pensando a médio prazo, o que você acha que pode acontecer se esse problema continuar sem uma solução?'
  },
  {
    id: 'personalFeeling',
    label: '15- Qual o seu sentimento pessoal em relação a esse desafio?',
    placeholder: 'É frustrante. Sei do nosso potencial e da qualidade do nosso trabalho, mas sinto que estamos ficando invisíveis no mercado.',
    type: 'textarea',
    conversational: 'Isso tudo te afeta pessoalmente? Como você se sente com essa situação?'
  },
];

export const step3Questions = [
  {
    id: 'futureVision',
    label:
      '16- Como você imagina seu negócio daqui a 6 meses com esse problema resolvido?',
    placeholder:
      'Agenda cheia de forma previsível, clínica reconhecida como referência na especialidade e segurança para investir no crescimento.',
    type: 'textarea',
    conversational: 'Agora, vamos sonhar um pouco. Se a gente resolvesse isso, como estaria sua empresa daqui a 6 meses?'
  },
  {
    id: 'personalImpact',
    label: '17- E na sua vida pessoal, qual seria o impacto?',
    placeholder: 'Mais tranquilidade financeira e tempo para focar na parte estratégica, em vez de preocupação em pagar as contas.',
    type: 'textarea',
    conversational: 'E pra você, pessoalmente, o que mudaria? Como isso impactaria sua rotina, sua tranquilidade?'
  },
  {
    id: 'priority',
    label: '18- É uma prioridade resolver isso agora?',
    placeholder: 'Sim, é prioridade número um. Não podemos mais adiar.',
    type: 'text',
    suggestion: 'Ver resposta do formulário',
    conversational: 'De 0 a 10, qual o nível de prioridade para resolver isso agora?'
  },
];

export const step4Questions = [
  {
    id: 'decisionMakers',
    label: '19- Quem mais está envolvido na decisão?',
    placeholder: 'A decisão final é minha e da minha sócia.',
    type: 'text',
    conversational: 'Além de você, tem mais alguém que participa dessa decisão?'
  },
  {
    id: 'budget',
    label: '20- Qual o orçamento que vocês previram para isso?',
    placeholder: 'Entre R$ 4.000 e R$ 6.000 por mês.',
    type: 'text',
    conversational: 'Para este tipo de projeto, qual a faixa de investimento que vocês estão considerando?'
  },
];


export const allQuestions = [...step1Questions, ...step2Questions, ...step3Questions, ...step4Questions];
