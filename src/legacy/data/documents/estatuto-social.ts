import type { ILegalDocumentFull } from './types';

export const ESTATUTO_SOCIAL_DATA: ILegalDocumentFull = {
  slug: 'estatuto-social',
  code: 'EST-SOC-01',
  title: 'Estatuto Social',
  subtitle: 'Constituição Jurídica, Governança Digital Web3 e Normas Estatutárias Consolidadas',
  organization: 'Associação dos Proprietários e Possuidores de Imóveis no Brasil',
  digitalName: 'ASPPIBRA-DAO',
  category: 'institucional',
  version: '2025 (Consolidado)',
  jurisdiction: 'Comarca de Maricá, Estado do Rio de Janeiro',
  cityState: 'Maricá - RJ',
  approvalDate: '14 de setembro de 2025',
  effectiveDate: '14 de setembro de 2025',
  officialUrls: [
    'https://www.asppibra.com.br/estatuto',
    'https://www.asppibra.com.br/regimento-interno',
  ],
  cartorioSeals: [
    {
      label: 'Estatuto Social — V1',
      seal: 'EBTL98079',
      randomCode: 'KPG',
      transmissionDate: '30/09/2016',
    },
    {
      label: 'Estatuto Social — V2',
      seal: 'ECGS88937',
      randomCode: 'YME',
      transmissionDate: '29/09/2017',
    },
  ],
  technicalTeam: {
    coordenacao: ['Cristiano', 'Tarcísio'],
    redacao: ['Sandro'],
    revisaoJuridica: ['Dr. Felipe - advogado OAB', 'Dra. Lucinete - advogada OAB'],
    diagramacao: ['José', 'Ana'],
  },
  openingStatement:
    'Os tópicos do Estatuto da ASPPIBRA foram organizados conforme os requisitos estabelecidos no Artigo 54 do Código Civil, assegurando plena conformidade legal e clareza na apresentação das disposições estatutárias.',
  sha256: '9a8d42ef41bc7245b08c9f0e34a2e15bc7e9231f82b8a4f9104de0712f5a89bb',
  chapters: [
    {
      id: 'capitulo-1',
      romanNumeral: 'I',
      title: 'DENOMINAÇÃO, SEDE, NATUREZA, FINALIDADE E DURAÇÃO',
      subtitle:
        'A nomenclatura, o endereço, as finalidades e a duração da asppibra são estabelecidos em conformidade com o artigo 54, inciso I, do código civil brasileiro, respeitando rigorosamente as normas a seguir.',
      articles: [
        {
          number: 'Art. 1º',
          title: 'DENOMINAÇÃO',
          caput:
            'A associação denomina-se “ASSOCIAÇÃO DOS PROPRIETÁRIOS E POSSUIDORES DE IMÓVEIS NO BRASIL”, doravante denominada ASPPIBRA, que poderá adotar, para fins de governança digital e identificação em ecossistemas tecnológicos, a denominação de ASPPIBRA-DAO.',
        },
        {
          number: 'Art. 2º',
          title: 'SEDE',
          caput:
            'A ASPPIBRA tem sede e foro na Comarca de Maricá, Estado do Rio de Janeiro, onde serão dirimidas quaisquer questões judiciais ou administrativas. A associação possui atuação em âmbito nacional e poderá instalar filiais, escritórios ou unidades regionais em qualquer parte do território brasileiro, desde que atendidas as exigências legais. A escolha de nova sede e foro poderá ser revista mediante deliberação da Assembleia Geral, conforme os interesses institucionais da associação.',
        },
        {
          number: 'Art. 3º',
          title: 'NATUREZA JURÍDICA',
          caput:
            'A ASPPIBRA – Associação dos Proprietários e Possuidores de Imóveis no Brasil constitui-se como pessoa jurídica de direito privado, organizada sob a forma de associação civil sem fins lucrativos, nos termos do art. 44, inciso I, do Código Civil (Lei nº 10.406/2002), e em conformidade com os arts. 1º, 2º e 3º da Lei nº 9.790/1999, podendo ser qualificada como Organização da Sociedade Civil de Interesse Público (OSCIP), desde que observados os requisitos legais. Possui autonomia administrativa e financeira, sendo regida por este Estatuto, por seu Regimento Interno e pela legislação vigente aplicável à matéria.',
          paragraphs: [
            {
              number: 'Parágrafo único',
              text: 'A ASPPIBRA, associação civil constituída na forma da lei, possui personalidade jurídica própria e plena capacidade para os atos da vida civil, exercendo direitos e contraindo obrigações em nome próprio, observando-se as seguintes prerrogativas institucionais:',
              items: [
                {
                  label: 'I – Capacidade de Ação: a)',
                  text: 'Celebrar contratos, convênios e parcerias com entidades privadas para a consecução de seus objetivos sociais, com fundamento em sua capacidade civil (art. 44 e art. 53 do Código Civil);',
                },
                {
                  label: 'b)',
                  text: 'Firmar Termos de Fomento, Termos de Colaboração ou Acordos de Cooperação com a Administração Pública direta e indireta, em conformidade com o Marco Regulatório das Organizações da Sociedade Civil - MROSC (Lei nº 13.019/2014);',
                },
                {
                  label: 'c)',
                  text: 'Adotar, desenvolver e empregar soluções tecnológicas voltadas à governança institucional, inclusive aquelas baseadas em tecnologias disruptivas, como blockchain, observando os princípios da administração pública de legalidade, eficiência e publicidade, nos termos do art. 37 da Constituição Federal, sempre que houver o envolvimento de recursos ou parcerias públicas.',
                },
                {
                  label: 'II – Regulamentação das Inovações Tecnológicas: a)',
                  text: 'As operações que envolvam o uso de tecnologias emergentes, especialmente blockchain, serão disciplinadas por normas internas específicas, aprovadas pela Assembleia Geral, órgão soberano da associação, nos termos do que dispõe o estatuto social e em conformidade com a competência que lhe é atribuída pelo art. 59 do Código Civil;',
                },
                {
                  label: 'b)',
                  text: 'A elaboração, publicação e atualização dessas normas internas deverão respeitar os princípios da transparência, da segurança jurídica e da proteção de dados, conforme previsto na Lei Geral de Proteção de Dados - LGPD (Lei nº 13.709/2018) e na Lei de Acesso à Informação (Lei nº 12.527/2011), quando aplicável.',
                },
              ],
            },
          ],
        },
        {
          number: 'Art. 4º',
          title: 'DAS FINALIDADES E INSTRUMENTOS DE ATUAÇÃO',
          caput:
            'A ASPPIBRA tem por finalidade estatutária, observados os princípios da universalização dos serviços, da legalidade, impessoalidade, moralidade, publicidade, economicidade e eficiência, a consecução dos seguintes objetivos de interesse público, por meio dos instrumentos de atuação abaixo detalhados:',
          items: [
            {
              label: 'I - Objetivo Principal: Promover o Direito à Moradia e à Propriedade',
              text: 'Finalidade: Promover o direito social à moradia e o direito fundamental à propriedade, por meio do fomento e apoio à regularização fundiária de interesse social (urbana e rural), visando o pleno desenvolvimento das funções sociais da propriedade e da cidade, a segurança jurídica da posse e a melhoria das condições de habitabilidade para a coletividade, em especial para populações em situação de vulnerabilidade socioeconômica e possessória, em conformidade com o inciso X do art. 3º da Lei nº 9.790/1999.',
            },
            {
              label: 'Instrumentos de Atuação:',
              text: 'a) Regularização Fundiária e Urbana (REURB): Apoio técnico e jurídico especializado em processos de regularização fundiária, abrangendo levantamento cadastral, análise documental, elaboração de projetos, acompanhamento de processos e articulação com órgãos públicos e cartórios, em conformidade com a Lei nº 13.465/2017 (Lei de Regularização Fundiária Rural e Urbana).\n\nb) Mediação e Gestão de Conflitos: Assessoria especializada na mediação e conciliação de conflitos fundiários e possessórios, aplicando métodos consensuais de resolução de disputas e promovendo a formação de mediadores, em observância à Lei nº 13.140/2015 (Lei de Mediação), Lei nº 9.307/1996 (Lei de Arbitragem) e ao Código de Processo Civil (Lei nº 13.105/2015).',
            },
            {
              label: 'II - Finalidade Suplementar: Promover o Desenvolvimento Socioeconômico e a Inovação',
              text: 'Finalidade: Promover o desenvolvimento econômico e social e o combate à pobreza, por meio da experimentação não lucrativa de novos modelos sócio-produtivos e sistemas alternativos de produção e crédito, incluindo o desenvolvimento e a aplicação de tecnologias emergentes (blockchain, IA, etc.) voltadas à inclusão digital e à desburocratização de serviços de interesse público, em conformidade com os incisos VIII, IX e XII do art. 3º da Lei nº 9.790/1999.\n\nInstrumento de Atuação: a) Inovação e Transformação Digital: Pesquisa, desenvolvimento e aplicação de soluções em blockchain, IA e outras tecnologias emergentes em projetos de interesse público; e promoção de programas de capacitação e incubação de negócios inovadores, em conformidade com a Lei nº 13.243/2016 (Marco Legal de CT&I) e a Lei nº 11.196/2005 (Lei de Incentivos à Inovação).',
            },
            {
              label: 'III - Finalidade Suplementar: Promover a Sustentabilidade e o Meio Ambiente',
              text: 'Finalidade: Promover a defesa, preservação e conservação do meio ambiente e o desenvolvimento sustentável, incentivando práticas de gestão territorial que conciliam a ocupação humana com a proteção dos ecossistemas, em conformidade com o inciso VI do art. 3º da Lei nº 9.790/1999.\n\nInstrumento de Atuação: a) Sustentabilidade e Recuperação Ambiental: Execução de projetos de recuperação de áreas degradadas, incluindo a elaboração e o monitoramento de Planos de Recuperação (PRADs), e o estímulo a práticas de bioeconomia e energias renováveis como alternativa de uso sustentável da terra, em estrita conformidade com os incisos VI, X e XII do art. 3º da Lei nº 9.790/1999.',
            },
            {
              label: 'IV - Finalidade Suplementar: Promover a Educação e a Cidadania',
              text: 'Finalidade: Promover a educação e a cidadania, por meio da realização de cursos, palestras, oficinas e da produção de materiais educativos, direcionados à comunidade em geral e aos seus associados, sobre temas como direitos sociais, políticas públicas, regularização fundiária, legislação ambiental, inovações tecnológicas e outros assuntos pertinentes às finalidades da associação, em conformidade com os incisos III e XI do art. 3º da Lei nº 9.790/1999.\n\nInstrumento de Atuação: a) Educação e Capacitação para Cidadania: Promoção de cursos, oficinas, palestras e produção de materiais educativos sobre direitos sociais, legislação socioambiental, políticas públicas e uso de tecnologias cívicas, visando à formação e ao empoderamento da comunidade.',
            },
            {
              label: 'V - Dos Instrumentos Estratégicos Transversais',
              text: 'a) Advocacia e Articulação Institucional: Atuação estratégica na formulação, defesa e monitoramento de políticas públicas voltadas à efetivação do direito à moradia, à função social da propriedade e à proteção do meio ambiente, pautada pela Constituição Federal (arts. 6º e 225), pela legislação socioambiental estruturante (Lei nº 6.938/81, Lei nº 4.504/64, Lei nº 9.985/2000) e alinhada aos Objetivos de Desenvolvimento Sustentável (ODS).\n\nb) Parcerias e Sustentabilidade Financeira: Busca ativa por parcerias e captação de recursos junto a fontes públicas, privadas, nacionais e internacionais, observando rigorosamente a Lei nº 13.019/2014 (MROSC).\n\nc) Governança Digital: Desenvolvimento de aplicativos e plataformas web para digitalização de serviços, em observância à Lei nº 14.129/2021 (Lei de Governo Digital) e ao Decreto nº 12.069/2024.',
            },
          ],
        },
        {
          number: 'Art. 5º',
          title: 'DURAÇÃO',
          caput:
            'A ASPPIBRA terá duração por tempo indeterminado, permanecendo ativa enquanto houver interesse dos associados em seus objetivos sociais. Poderá ser dissolvida mediante deliberação da Assembleia Geral, observando‐se o quórum previsto neste Estatuto e na legislação vigente.',
        },
      ],
    },
    {
      id: 'capitulo-2',
      romanNumeral: 'II',
      title: 'ADMISSÃO, DEMISSÃO E EXCLUSÃO DOS ASSOCIADOS',
      subtitle:
        'A admissão, demissão e exclusão de associados da asppibra observará o disposto no artigo 54, inciso II, do código civil brasileiro, além das normas previstas neste estatuto e no regimento interno.',
      articles: [
        {
          number: 'Art. 6º',
          title: 'ADMISSÃO DE ASSOCIADOS',
          caput:
            'A admissão de novos associados está condicionada ao cumprimento das seguintes exigências:',
          items: [
            {
              label: 'I. Requisitos para Admissão:',
              text: 'Poderá se associar qualquer pessoa física ou jurídica, proprietária ou possuidora de imóvel no território nacional, que manifeste interesse em colaborar com os objetivos da associação e se comprometa com suas normas. O interessado deverá: a) Ser pessoa idônea e com objetivos compatíveis com os da ASPPIBRA; b) Ter idade igual ou superior a 18 anos ou autorização expressa dos responsáveis legais; c) Possuir plena capacidade civil.',
            },
            {
              label: 'II. Procedimento de Inscrição:',
              text: 'A inscrição será feita por meio de formulário eletrônico disponível no site oficial ou presencialmente em unidade credenciada, conforme procedimento detalhado no Regimento Interno.',
            },
            {
              label: 'III. Formalização da Adesão:',
              text: 'A condição de associado se aperfeiçoa após aprovação documental pela Diretoria Executiva e registro do aceite ao Termo de Adesão. A cláusula compromissória de arbitragem, se adotada, será firmada em instrumento apartado, com assinatura específica do associado, nos termos do art. 4º, §2º, da Lei nº 9.307/1996.',
            },
            {
              label: 'IV – Contribuições:',
              text: 'Os associados deverão manter-se adimplentes com as contribuições ordinárias e extraordinárias fixadas pela Assembleia Geral, por se tratar de recursos indispensáveis à manutenção e ao cumprimento das finalidades institucionais da associação.',
            },
          ],
          paragraphs: [
            {
              number: 'Parágrafo Único',
              text: 'Compete à Diretoria Executiva avaliar e deliberar sobre a admissão, podendo recusar propostas fundamentadamente.',
            },
          ],
        },
        {
          number: 'Art. 6º-A',
          title: 'DA GOVERNANÇA DIGITAL E DAS CREDENCIAIS DE ASSOCIADO',
          highlight: true,
          caput:
            'A ASPPIBRA institui um sistema de governança digital baseado em tecnologia blockchain para otimizar a participação e a transparência. Para operacionalizar este sistema, a associação atribui a cada membro uma Credencial de Associado Digital (CAD), que funcionará como um registro digital intransferível para a identificação e o exercício de direitos no âmbito exclusivo da associação.',
          paragraphs: [
            {
              number: '§ 1º',
              title: 'Natureza e Finalidade das CADs',
              text: 'As CADs são unicamente um registro criptográfico de filiação e sua finalidade se esgota nas seguintes funções institucionais:',
              items: [
                {
                  label: 'I –',
                  text: 'Servir como identificação digital única e segura do associado;',
                },
                {
                  label: 'II –',
                  text: 'Funcionar como habilitação para o exercício do direito de voto em assembleias e deliberações;',
                },
                {
                  label: 'III –',
                  text: 'Constituir prova criptográfica de participação em eventos, cursos e projetos da associação;',
                },
                {
                  label: 'IV –',
                  text: 'Operar como credencial de acesso a serviços, benefícios e conteúdos exclusivos para associados adimplentes.',
                },
              ],
            },
            {
              number: '§ 2º',
              title: 'Vedações e Inexistência de Natureza Econômica',
              text: 'Para todos os fins de direito, fica expressamente estabelecido que as Credenciais de Associado Digital (CADs) NÃO CONFIGURAM valor mobiliário, ativo financeiro, instrumento de investimento ou qualquer tipo de cripto ativo. Em conformidade com a Lei nº 6.385/1976 e o Parecer de Orientação CVM nº 40/2022, as CADs não conferem quaisquer direitos ou expectativas de natureza econômica, financeira ou patrimonial.',
            },
            {
              number: '§ 3º',
              title: 'Vedações Adicionais e Intransferibilidade',
              text: 'As CADs são de titularidade pessoal e intransferível, sendo nula de pleno direito qualquer tentativa de venda, cessão, troca, ou negociação. É expressa e inequivocamente VEDADA a conversão ou resgate das CADs por moeda corrente ou outros ativos por parte da ASPPIBRA. A associação não promoverá, não incentivará, nem reconhecerá qualquer forma de mercado para as CADs.',
            },
            {
              number: '§ 4º',
              title: 'Conformidade Regulatória',
              text: 'A atuação da ASPPIBRA limita-se à emissão e gestão das CADs para uso interno, não se caracterizando como uma "prestadora de serviços de ativos virtuais" (VASP), nos termos do art. 5º da Lei nº 14.478/2022.',
            },
            {
              number: '§ 5º',
              title: 'Atribuição das Credenciais',
              text: 'A atribuição das CADs ocorrerá no momento da admissão do associado e será atualizada para refletir seu engajamento, conforme critérios objetivos a serem definidos no Regimento Interno, sendo vedada qualquer vinculação que se assemelhe a uma "reversão" ou "cashback" de contribuições financeiras.',
            },
            {
              number: '§ 6º',
              title: 'Soberania da Associação sobre as Credenciais',
              text: 'As funcionalidades vinculadas à CAD são concedidas a critério da associação e podem ser alteradas, suspensas ou revogadas a qualquer tempo pela Assembleia Geral, não gerando qualquer direito adquirido aos seus titulares.',
            },
          ],
        },
        {
          number: 'Art. 7º',
          title: 'DEMISSÃO DE ASSOCIADOS',
          caput:
            'A demissão poderá ocorrer a qualquer tempo, por solicitação voluntária do associado, formalizada por escrito à Diretoria Executiva.',
          paragraphs: [
            {
              number: '§ 1º',
              text: 'A demissão poderá ocorrer a qualquer tempo, por solicitação voluntária do associado, formalizada por escrito à Diretoria Executiva.',
            },
            {
              number: '§ 2º',
              text: 'O direito de demitir-se é incondicional. A associação poderá cobrar débitos anteriores pelas vias legais, mas não pode condicionar o desligamento à sua quitação.',
            },
            {
              number: '§ 3º',
              text: 'A demissão não acarretará obrigação de reembolso das contribuições já pagas. A partir do desligamento, o associado perderá todos os direitos e benefícios, e sua Credencial de Associado Digital (CAD) será permanentemente invalidada no sistema da associação.',
            },
          ],
        },
        {
          number: 'Art. 8º',
          title: 'EXCLUSÃO DE ASSOCIADOS',
          caput:
            'A exclusão de associados do quadro social observará os seguintes preceitos:',
          items: [
            {
              label: 'I – Das Hipóteses de Exclusão:',
              text: 'a) A pedido formal do próprio associado;\nb) Por inadimplemento das obrigações financeiras por período superior a 6 (seis) meses, após notificação formal para regularização;\nc) Pelo descumprimento das disposições deste Estatuto, do Regimento Interno ou das deliberações dos órgãos da Associação;\nd) Pela prática de conduta incompatível com os objetivos da Associação;\ne) Pela prática de atos que visem à negociação ou transferência da Credencial de Associado Digital (CAD), em desacordo com a natureza e os fins da associação, conforme definido no Art. 6º-A.',
            },
            {
              label: 'II – Do Procedimento de Exclusão:',
              text: 'O associado será formalmente notificado da infração que lhe é imputada para que apresente sua defesa por escrito à Diretoria Executiva no prazo de 30 (trinta) dias. Da decisão da Diretoria caberá recurso à Assembleia Geral na forma e nos termos previstos no Regimento Interno.',
            },
            {
              label: 'III – Dos Procedimentos de Resolução de Disputas:',
              text: 'As controvérsias decorrentes da relação associativa serão preferencialmente solucionadas por mediação. A arbitragem somente será utilizada se houver cláusula compromissória por adesão firmada em instrumento apartado, com assinatura específica do associado, conforme art. 4º, §2º, da Lei nº 9.307/1996.',
            },
            {
              label: 'IV – Dos Efeitos da Exclusão sobre a Identidade Digital:',
              text: 'O associado excluído perderá imediatamente o acesso à plataforma de governança. Sua Credencial de Associado Digital (CAD) será terminantemente cancelada, perdendo toda e qualquer função prática no ecossistema da associação. Em nenhuma hipótese a ASPPIBRA terá qualquer obrigação de resgate ou compensação por esta credencial cancelada.',
            },
            {
              label: 'V – Das Consequências da Exclusão:',
              text: 'a) Não haverá, em hipótese alguma, restituição das contribuições associativas já pagas;\nb) Não será devida qualquer compensação financeira ou indenização em decorrência da exclusão;\nc) Fica vedado ao ex-associado o uso de nome, marcas ou quaisquer símbolos da ASPPIBRA.',
            },
          ],
          paragraphs: [
            {
              number: 'Parágrafo Único',
              text: 'As despesas de eventual procedimento arbitral serão suportadas pela parte vencida.',
            },
          ],
        },
      ],
    },
    {
      id: 'capitulo-3',
      romanNumeral: 'III',
      title: 'OS DIREITOS E DEVERES DOS ASSOCIADOS',
      subtitle:
        'Os direitos e deveres dos associados da asppibra são regidos nos termos do artigo 54, inciso III, do código civil brasileiro, e pelas disposições deste estatuto e do regimento interno, a participação consciente e responsável dos associados é fundamental para o fortalecimento da associação e a realização de seus objetivos.',
      articles: [
        {
          number: 'Art. 9º',
          title: 'DOS DIREITOS DOS ASSOCIADOS',
          caput: 'São direitos dos associados da ASPPIBRA:',
          items: [
            {
              label: 'I – Participação Institucional –',
              text: 'Participar das Assembleias Gerais, com direito a voz e voto, conforme este Estatuto e a legislação vigente.',
            },
            {
              label: 'II – Acesso à Informação –',
              text: 'Ter acesso transparente às informações institucionais, incluindo relatórios de atividades, demonstrativos financeiros, deliberações e documentos públicos da associação.',
            },
            {
              label: 'III – Representação –',
              text: 'A ASPPIBRA poderá representar os associados em interesses coletivos e difusos relacionados às suas finalidades. A defesa de interesses individuais dependerá de mandato específico e será patrocinada exclusivamente por advogado habilitado constituído pelo interessado, não configurando prestação de serviços jurídicos pela associação.',
            },
            {
              label: 'IV – Participação na Missão Institucional –',
              text: 'Participar e colaborar voluntariamente com os projetos, programas e atividades desenvolvidas pela associação para a consecução de seus objetivos sociais, em conformidade com este Estatuto e com o princípio da universalização dos serviços.',
            },
            {
              label: 'V – Participação Política –',
              text: 'Propor sugestões, alterações e projetos de interesse coletivo, podendo participar ativamente das discussões deliberativas e contribuir para o aprimoramento estatutário e normativo da ASPPIBRA.',
            },
            {
              label: 'VI – Candidatura a Cargos Executivos –',
              text: 'O associado poderá se candidatar aos cargos executivos da associação, observado o disposto no Regimento Interno quanto aos requisitos de elegibilidade, prazos de contribuição e critérios de participação, inclusive os relacionados à titularidade e ao status de sua Credencial de Associado Digital (CAD).',
            },
          ],
        },
        {
          number: 'Art. 10º',
          title: 'DEVERES DOS ASSOCIADOS',
          caput:
            'Constituem deveres irrenunciáveis dos associados, para a fiel observância e cumprimento das normas da ASPPIBRA, os seguintes:',
          items: [
            {
              label: 'I – Observância Legal e Institucional:',
              text: 'Cumprir integralmente o presente Estatuto Social, o Regimento Interno, bem como as deliberações legítimas e vinculantes emanadas dos órgãos competentes da ASPPIBRA, respeitando os princípios éticos e institucionais da associação.',
            },
            {
              label: 'II – Adimplência:',
              text: 'Efetuar pontualmente o pagamento das contribuições, mensalidades e demais encargos associativos, nos valores, prazos e modalidades de pagamento estabelecidos pela Assembleia Geral e devidamente regulamentados pelo Regimento Interno, sob pena de incorrer nas sanções cabíveis.',
            },
            {
              label: 'III – Engajamento Associativo:',
              text: 'Participar de forma ativa e responsável das assembleias gerais, reuniões, eventos e demais atividades promovidas pela associação, contribuindo para o fortalecimento e desenvolvimento das finalidades sociais da ASPPIBRA.',
            },
            {
              label: 'IV – Zeladoria do Patrimônio:',
              text: 'Preservar e proteger o patrimônio material, imaterial e digital da associação, utilizando-o de maneira adequada e responsável, em conformidade com as normas internas e visando à manutenção da integridade e sustentabilidade da entidade.',
            },
            {
              label: 'V – Atualização Cadastral e Proteção de Dados:',
              text: 'Manter seus dados pessoais, documentais e informações de contato sempre atualizados junto à secretaria administrativa da associação, fornecendo informações precisas e completas sempre que solicitado. O tratamento desses dados será realizado em estrita conformidade com a Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/2018), visando exclusivamente garantir a comunicação efetiva, a regularidade administrativa e o pleno cumprimento das finalidades estatutárias.',
            },
          ],
        },
        {
          number: 'Art. 11º',
          title: 'RESPONSABILIDADE PESSOAL',
          caput:
            'Os associados, membros da diretoria e demais dirigentes da ASPPIBRA não respondem, nem solidária nem subsidiariamente, pelas obrigações financeiras, civis, trabalhistas ou tributárias assumidas pela associação, ressalvadas as hipóteses expressamente previstas na legislação vigente, notadamente em casos de comprovada má-fé, gestão temerária, dolo ou desvio de finalidade.',
        },
        {
          number: 'Art. 12º',
          title: 'ORGANIZAÇÃO INTERNA E GRUPOS DE TRABALHO',
          caput:
            'A ASPPIBRA poderá admitir número ilimitado de associados, sendo-lhe facultado instituir comissões, grupos temáticos, núcleos regionais ou quaisquer outras formas de organização interna destinadas a viabilizar, descentralizar ou especializar a atuação institucional. A constituição, funcionamento e eventual extinção desses grupos de trabalho dependerá, cumulativamente, dos seguintes requisitos:',
          items: [
            {
              label: 'I –',
              text: 'Aprovação prévia da Diretoria Executiva: mediante requerimento formal e devidamente fundamentado quanto à sua necessidade e relevância.',
            },
            {
              label: 'II –',
              text: 'Finalidade específica: definição clara de objetivos compatíveis com as finalidades estatutárias da associação.',
            },
            {
              label: 'III –',
              text: 'Conformidade normativa: observância das disposições constantes de regulamento próprio, aprovado pela Assembleia Geral, quando exigido pela natureza ou complexidade do grupo instituído.',
            },
          ],
        },
      ],
    },
    {
      id: 'capitulo-4',
      romanNumeral: 'IV',
      title: 'AS FONTES DE RECURSOS PARA A MANUTENÇÃO',
      subtitle:
        'A asppibra, em conformidade com o artigo 54, inciso iv, do código civil brasileiro, obterá seus recursos financeiros para a manutenção e desenvolvimento de suas atividades da seguinte maneira:',
      articles: [
        {
          number: 'Art. 13º',
          title: 'FONTES DE RECEITA',
          caput: 'A ASPPIBRA poderá auferir receitas oriundas das seguintes fontes:',
          items: [
            {
              label: 'I –',
              text: 'Contribuições associativas, anuais ou periódicas: Pagas pelos associados, nos valores definidos pela Assembleia Geral e regulamentados em regimento próprio;',
            },
            {
              label: 'II –',
              text: 'Doações, legados, subvenções e auxílios: Recursos financeiros, bens móveis ou imóveis, valores ou direitos recebidos de pessoas físicas ou jurídicas, de direito público ou privado, nacionais ou estrangeiras, em estrita conformidade com os artigos 538 a 554 do Código Civil Brasileiro. Tais atos de liberalidade deverão respeitar os princípios da transparência, da finalidade institucional e da não-distribuição de excedentes financeiros;',
            },
            {
              label: 'III –',
              text: 'Receitas decorrentes da execução de serviços e atividades técnicas ou formativas: Valores provenientes da organização e prestação de serviços técnicos, capacitações, treinamentos, cursos, palestras, eventos, feiras, seminários ou outras atividades de caráter educativo ou técnico-científico. Atividades voluntárias serão regidas pela Lei nº 9.608/1998;',
            },
            {
              label: 'IV –',
              text: 'Rendimentos de aplicações financeiras, investimentos e bens patrimoniais pertencentes à associação: Observados os critérios de segurança e legalidade;',
            },
            {
              label: 'V –',
              text: 'Recursos decorrentes de parcerias, convênios e ajustes com entes públicos ou privados: Verbas e benefícios oriundos da celebração de convênios, contratos, termos de colaboração ou de fomento (MROSC - Lei nº 13.019/2014);',
            },
            {
              label: 'VI –',
              text: 'Receitas oriundas da emissão de certificados digitais únicos de participação e reconhecimento (baseados em tecnologia NFT), para fins de validação simbólica, engajamento ou comprovação de participação em projetos, conforme regulamentação específica;',
            },
            {
              label: 'VII –',
              text: 'Patrocínios, campanhas de financiamento coletivo, apoio institucional ou quaisquer outras receitas lícitas: Aprovadas pela Diretoria Executiva e compatíveis com os fins sociais da ASPPIBRA.',
            },
          ],
          paragraphs: [
            {
              number: 'Parágrafo único',
              text: 'Outras fontes de receita poderão ser admitidas, desde que lícitas, aprovadas pela instância competente e compatíveis com os objetivos institucionais da associação.',
            },
          ],
        },
        {
          number: 'Art. 14º',
          title: 'CONTRIBUIÇÃO DOS ASSOCIADOS',
          caput:
            'Todos os associados contribuirão financeiramente com a associação, mediante valor definido anualmente no Regimento Interno. O não pagamento poderá implicar na suspensão ou exclusão do associado inadimplente, conforme disposições estatutárias, observado o devido processo legal, o contraditório e a ampla defesa.',
        },
        {
          number: 'Art. 15º',
          title: 'PRINCÍPIOS DA GESTÃO FINANCEIRA',
          caput: 'A gestão dos recursos obedecerá aos seguintes princípios:',
          items: [
            {
              label: 'I.',
              text: 'Transparência, mediante prestação de contas periódica, publicação de relatórios e acesso garantido aos associados;',
            },
            {
              label: 'II.',
              text: 'Planejamento e controle orçamentário, com elaboração de proposta anual e acompanhamento de execução;',
            },
            {
              label: 'III.',
              text: 'Finalidade exclusiva, sendo vedado o uso dos recursos para fins pessoais, distribuição de lucros, gratificações indevidas ou benefícios diretos a associados, dirigentes, funcionários ou terceiros, salvo em casos expressamente autorizados por este Estatuto e compatíveis com a legislação vigente.',
            },
          ],
        },
        {
          number: 'Art. 16º',
          title: 'EXERCÍCIO FINANCEIRO',
          caput:
            'O exercício financeiro da ASPPIBRA coincidirá com o ano civil, iniciando-se em 1º de janeiro e encerrando-se em 31 de dezembro de cada ano.',
        },
        {
          number: 'Art. 17º',
          title: 'PRESTAÇÃO DE CONTAS',
          caput:
            'A prestação de contas será realizada anualmente, mediante elaboração dos seguintes documentos: I. Relatório de atividades financeiras do exercício; II. Balanço patrimonial; III. Demonstração de resultados; IV. Parecer do Conselho Fiscal.',
          paragraphs: [
            {
              number: 'Parágrafo único',
              text: 'A documentação deverá estar disponível aos associados com, no mínimo, 30 (trinta) dias de antecedência da Assembleia Geral convocada para sua apreciação.',
            },
          ],
        },
        {
          number: 'Art. 18º',
          title: 'PATRIMÔNIO DA ASSOCIAÇÃO',
          caput:
            'O patrimônio da associação é constituído por: I. As contribuições dos associados e emolumentos pagos regularmente; II. As doações, subvenções, auxílios e legados recebidos; III. Os bens móveis, imóveis e valores de titularidade da associação; IV. Os registros e certificados digitais de titularidade da associação, incluindo certificados únicos de reconhecimento (baseados em tecnologia NFT); V. Quaisquer outras receitas ou bens adquiridos legalmente.',
          paragraphs: [
            {
              number: '§ 1º',
              text: 'Atualmente, a ASPPIBRA não possui patrimônio declarado.',
            },
            {
              number: '§ 2º',
              text: 'Todos os bens e receitas da associação serão utilizados exclusivamente para atingir seus objetivos institucionais, sendo proibida qualquer forma de apropriação ou repasse a título de participação financeira ou lucro individual.',
            },
            {
              number: '§ 3º',
              text: 'Em caso de dissolução, o patrimônio líquido remanescente será destinado a entidade sem fins lucrativos, com objeto social compatível e regularidade fiscal, escolhida em Assembleia Geral, respeitado o disposto no art. 61 do Código Civil.',
            },
            {
              number: 'Parágrafo adicional',
              text: 'A Credencial de Associado Digital (CAD) detida por associados serve apenas como identificação e habilitação, não configurando participação societária nem dando direito à divisão de bens da associação.',
            },
          ],
        },
      ],
    },
    {
      id: 'capitulo-5',
      romanNumeral: 'V',
      title: 'ÓRGÃOS DELIBERATIVOS E SEU FUNCIONAMENTO',
      subtitle:
        'Em conformidade com o artigo 54, inciso v, do código civil brasileiro, a asppibra estabelece a seguinte estrutura para constituição, competência e funcionamento de seus órgãos deliberativos:',
      articles: [
        {
          number: 'Art. 19º',
          title: 'ESTRUTURA ADMINISTRATIVA',
          caput:
            'A administração da associação será exercida pelos seguintes órgãos: I – Assembleia Geral (órgão soberano da associação); II – Diretoria Executiva (órgão de gestão e representação institucional); III – Conselho Fiscal (órgão autônomo de fiscalização e controle contábil, financeiro e patrimonial).',
        },
        {
          number: 'Art. 20º',
          title: 'REUNIÕES DA ASSEMBLEIA GERAL',
          caput:
            'A Assembleia Geral reunir-se-á ordinariamente uma vez ao ano, até o mês de março, para deliberar sobre as contas e o relatório do exercício anterior; e extraordinariamente sempre que convocada pelo Presidente, pela maioria da Diretoria Executiva ou por, no mínimo, 1/5 (um quinto) dos associados.',
        },
        {
          number: 'Art. 21º',
          title: 'QUÓRUM PARA DELIBERAÇÕES ESPECIAIS',
          caput:
            'Será exigido o voto concorde de dois terços (2/3) dos presentes à Assembleia Geral especialmente convocada para esse fim para deliberar sobre: I – Alterações do Estatuto Social; II – Alienação de bens imóveis ou constituição de ônus reais.',
          paragraphs: [
            {
              number: 'Parágrafo único',
              text: 'A deliberação sobre a dissolução da associação seguirá o rito e o quórum específico previsto no Art. 38 deste Estatuto.',
            },
          ],
        },
        {
          number: 'Art. 22º',
          title: 'QUÓRUM PARA DELIBERAÇÕES ORDINÁRIAS',
          caput:
            'As demais deliberações da Assembleia Geral serão tomadas por maioria simples de votos dos associados presentes.',
        },
        {
          number: 'Art. 23º',
          title: 'REUNIÕES DA DIRETORIA EXECUTIVA',
          caput:
            'A Diretoria Executiva reunir-se-á ordinariamente uma vez por mês; e extraordinariamente sempre que convocada pelo Presidente ou por maioria de seus membros. As deliberações serão tomadas por maioria simples observados os procedimentos de condução estabelecidos no Regimento Interno.',
        },
        {
          number: 'Art. 24º',
          title: 'REUNIÕES DO CONSELHO FISCAL',
          caput:
            'O Conselho Fiscal reunir-se-á ordinariamente a cada trimestre; e extraordinariamente sempre que convocado pelo Presidente do Conselho ou pela maioria de seus membros.',
        },
        {
          number: 'Art. 25º',
          title: 'CONVOCAÇÃO DAS ASSEMBLEIAS',
          caput:
            'As convocações ocorrerão por edital, com pauta específica, publicado: I - Nas redes sociais oficiais da associação; II - Afixado na sede; III - Enviado por e-mail aos associados, com antecedência mínima de 30 (trinta) dias, com comprovação de entrega (confirmação de leitura, opt-in ou registro em sistema eletrônico); IV - Convocada por 1/5 dos associados mediante requerimento formal.',
          paragraphs: [
            {
              number: 'Parágrafo único',
              text: 'A associação poderá utilizar plataforma eletrônica própria de convocações, com registro automático de envio e recebimento, valendo como prova de ciência.',
            },
          ],
        },
        {
          number: 'Art. 26º',
          title: 'INSTALAÇÃO DAS ASSEMBLEIAS',
          caput:
            'Em primeira convocação, com 2/3 dos associados; em segunda convocação, 30 (trinta) minutos após, com qualquer número de presentes. Aplica-se a reuniões ordinárias e extraordinárias.',
        },
        {
          number: 'Art. 27º',
          title: 'COMPOSIÇÃO E MANDATO DA DIRETORIA EXECUTIVA',
          caput:
            'A Diretoria Executiva da ASPPIBRA, órgão de administração e representação da associação, é composta pelos seguintes cargos: I – Presidente; II – Vice-Presidente; III – 1º Secretário; IV – 2º Secretário; V – 1º Tesoureiro; VI – 2º Tesoureiro.',
          paragraphs: [
            {
              number: '§ 1º',
              title: 'Duração e Limite de Mandato Consecutivo',
              text: 'O mandato dos membros da Diretoria Executiva e do Conselho Fiscal será de 5 (Cinco) anos, permitindo-se uma única reeleição consecutiva para o mesmo cargo. Desta forma, nenhum membro poderá exercer a mesma função por mais de 10 (Dez) anos contínuos.',
            },
            {
              number: '§ 2º',
              title: 'Possibilidade de Retorno ao Cargo',
              text: 'Após cumprir o período máximo de 10 (Dez) anos consecutivos no mesmo cargo, o ex-integrante da diretoria torna-se inelegível para aquele cargo específico na eleição imediatamente seguinte. Contudo, após um intervalo mínimo de 1 (um) mandato completo (5 anos) fora do cargo, ele readquire o direito de se candidatar novamente à mesma posição, iniciando-se um novo ciclo.',
            },
            {
              number: '§ 3º',
              title: 'Hipóteses de Destituição',
              text: 'Os integrantes da Diretoria poderão ser destituídos antes do término do mandato, mediante deliberação da Assembleia Geral, nas seguintes hipóteses: I – Por renúncia formal, mediante comunicação escrita à Assembleia Geral; II – Por destituição justificada, em caso de: a) Improbidade administrativa; b) Reiterado descumprimento estatutário; c) Conduta incompatível com os valores da associação; d) Descumprimento reiterado de suas obrigações.',
            },
          ],
        },
        {
          number: 'Art. 28º',
          title: 'PROCEDIMENTO EM CASO DE VACÂNCIA NA DIRETORIA',
          caput:
            'Ocorrendo vacância em qualquer cargo da diretoria, a Assembleia Geral será convocada no prazo máximo de 30 (trinta) dias para eleger o novo integrante.',
        },
        {
          number: 'Art. 29º',
          title: 'COMPETÊNCIAS DA DIRETORIA EXECUTIVA',
          caput:
            'Compete à Diretoria Executiva: I - Elaborar e executar o programa anual de atividades; II - Elaborar e apresentar à Assembleia Geral o relatório anual e demonstrativo de resultados; III - Elaborar o orçamento anual; IV - Elaborar os regimentos internos da ASPPIBRA; V - Estabelecer colaborações com instituições públicas e privadas; VI - Instituir comissões e grupos de trabalho subordinados à Diretoria.',
        },
        {
          number: 'Art. 30º',
          title: 'COMPETÊNCIAS DO PRESIDENTE',
          caput:
            'Compete ao Presidente: representar a associação extrajudicialmente e, judicialmente, por meio de advogado constituído; cumprir e fazer cumprir este Estatuto e os regimentos; convocar e presidir as reuniões da Diretoria; dirigir e supervisionar todas as atividades da Associação; assinar documentos relacionados às operações da Associação.',
        },
        {
          number: 'Art. 31º',
          title: 'COMPETÊNCIAS DO VICE-PRESIDENTE',
          caput: 'Colaborar com o Presidente e substituí-lo na sua ausência.',
        },
        {
          number: 'Art. 32º',
          title: 'COMPETÊNCIAS DOS SECRETÁRIOS',
          caput:
            'Ao Primeiro Secretário compete secretariar reuniões, lavrar atas, manter livros e arquivos atualizados, expedir editais e manter atualizado o cadastro de associados. Ao Segundo Secretário compete auxiliar o Primeiro e substituí-lo em suas ausências ou impedimentos.',
        },
        {
          number: 'Art. 33º',
          title: 'COMPETÊNCIAS DOS TESOUREIROS',
          caput:
            'Arrecadar e contabilizar contribuições, efetuar pagamentos, supervisionar a contabilidade e obrigações fiscais/trabalhistas, apresentar balancetes e relatórios financeiros, elaborar proposta orçamentária, manter numerário em estabelecimento de crédito e assinar cheques em conjunto com o Presidente.',
        },
        {
          number: 'Art. 34º',
          title: 'COMPOSIÇÃO DO CONSELHO FISCAL',
          caput:
            'O Conselho Fiscal será composto por 6 (seis) membros de reconhecida idoneidade e seus respectivos suplentes, sendo permitida uma única recondução. O mandato dos membros do Conselho Fiscal coincidirá com o da Diretoria.',
        },
        {
          number: 'Art. 35º',
          title: 'PROCEDIMENTO EM CASO DE VACÂNCIA NO CONSELHO FISCAL',
          caput:
            'Ocorrendo vacância em qualquer cargo do Conselho Fiscal, o suplente correspondente substituirá o titular até o final do mandato.',
        },
        {
          number: 'Art. 36º',
          title: 'COMPETÊNCIAS DO CONSELHO FISCAL',
          caput:
            'Examinar documentos e livros de escrituração da entidade; examinar o balancete semestral apresentado pelo tesoureiro e opinar a respeito; apreciar os balanços e inventários que acompanham o relatório anual da Diretoria; opinar sobre a aquisição, alienação e oneração de bens pertencentes à Associação.',
          paragraphs: [
            {
              number: 'Parágrafo Único',
              text: 'O Conselho Fiscal reunir-se-á a cada 6 (seis) meses e extraordinariamente sempre que necessário.',
            },
          ],
        },
      ],
    },
    {
      id: 'capitulo-6',
      romanNumeral: 'VI',
      title: 'ALTERAÇÃO ESTATUTÁRIA E DISSOLUÇÃO',
      subtitle:
        'A asppibra, em conformidade com o artigo 54, inciso vi, do código civil brasileiro, estabelece as condições para alteração deste estatuto e eventual dissolução da associação, conforme segue:',
      articles: [
        {
          number: 'Art. 37º',
          title: 'REFORMA DO ESTATUTO',
          caput:
            'Este estatuto poderá ser reformado a qualquer tempo por decisão da Assembleia Geral especialmente convocada para esse fim, exigindo-se o voto favorável de 2/3 (dois terços) dos associados presentes, vedada qualquer alteração contrária à legislação vigente.',
        },
        {
          number: 'Art. 38º',
          title: 'DISSOLUÇÃO DA ASSOCIAÇÃO',
          caput:
            'A dissolução da associação dependerá de deliberação da Assembleia Geral Extraordinária, convocada para esse fim, com voto favorável de 3/4 (três quartos) dos associados presentes.',
        },
        {
          number: 'Art. 39º',
          title: 'DESTINAÇÃO DO PATRIMÔNIO EM CASO DE DISSOLUÇÃO',
          caput:
            'Em caso de dissolução da associação, ou em caso de perda da qualificação como Organização da Sociedade Civil de Interesse Público, o acervo patrimonial disponível, adquirido com recursos públicos durante o período em que perdurou aquela qualificação, será contabilmente apurado e transferido a outra pessoa jurídica qualificada nos termos da Lei nº 9.790/1999, preferencialmente com o mesmo objeto social. Na hipótese de não haver no município, no estado ou no Distrito Federal entidade com tais características, o respectivo patrimônio será transferido à União, Estado ou Município, conforme a origem dos recursos.',
        },
      ],
    },
    {
      id: 'capitulo-7',
      romanNumeral: 'VII',
      title: 'GESTÃO ADMINISTRATIVA E APROVAÇÃO DAS CONTAS',
      subtitle:
        'A associação dos proprietários e possuidores de imóveis no brasil (asppibra), em estrita observância ao disposto no artigo 54, inciso vii, do código civil brasileiro, estabelecerá as diretrizes normativas para a gestão administrativa e a subsequente aprovação das respectivas contas, as quais deverão ser conduzidas nos termos das seguintes disposições:',
      articles: [
        {
          number: 'Art. 40º',
          title: 'NORMAS GERAIS DE GESTÃO E APROVAÇÃO DE CONTAS',
          caput:
            'A gestão administrativa e a aprovação das contas da ASPPIBRA observarão as seguintes normas e procedimentos, em conformidade com o Art. 54, VII, do Código Civil:',
          paragraphs: [
            {
              number: '§ 1º',
              title: 'Diretrizes de Gestão Administrativa',
              text: 'A gestão administrativa da ASPPIBRA será executada de forma transparente, eficiente e responsável, com o propósito de cumprir as finalidades estatutárias da entidade e promover o interesse coletivo dos associados.',
            },
            {
              number: '§ 2º',
              title: 'Competência da Diretoria Executiva',
              text: 'Compete à Diretoria Executiva a gestão operacional da associação, cabendo-lhe a tomada de decisões estratégicas que visem à sustentabilidade e ao desenvolvimento das atividades da ASPPIBRA.',
            },
            {
              number: '§ 3º',
              title: 'Elaboração do Relatório de Atividades',
              text: 'Ao final de cada exercício social, a Diretoria Executiva deverá elaborar um relatório de atividades, contendo a descrição detalhada das ações realizadas, os resultados alcançados e a situação financeira da associação.',
            },
            {
              number: '§ 4º',
              title: 'Aprovação das Contas',
              text: 'As contas da ASPPIBRA deverão ser submetidas à Assembleia Geral anualmente, ocasião em que os associados terão a prerrogativa de discutir e aprovar as demonstrações financeiras, incluindo o balanço patrimonial, a demonstração de resultados e o fluxo de caixa.',
            },
            {
              number: '§ 5º',
              title: 'Auditoria',
              text: 'A associação poderá constituir uma comissão de auditoria, composta por associados sem vínculo direto com a Diretoria, para avaliar a conformidade das contas e a regularidade das operações financeiras.',
            },
            {
              number: '§ 6º',
              title: 'Registro das Deliberações',
              text: 'Todas as deliberações relacionadas à gestão administrativa e à aprovação das contas deverão ser registradas em ata, a qual será disponibilizada a todos os associados.',
            },
            {
              number: '§ 7º',
              title: 'Responsabilidade dos Membros da Diretoria',
              text: 'Os membros da Diretoria Executiva serão responsáveis pela fiel execução das diretrizes estabelecidas e pela prestação de contas à Assembleia Geral.',
            },
          ],
        },
        {
          number: 'Art. 41º',
          title: 'COMPROMISSO DE GESTÃO',
          caput:
            'A ASPPIBRA compromete-se com uma gestão administrativa orientada pela responsabilidade, eficiência e transparência, assegurando a confiança dos associados e a estabilidade da estrutura organizacional, com foco na plena realização de suas finalidades estatutárias.',
        },
        {
          number: 'Art. 42º',
          title: 'APLICAÇÃO DOS RECURSOS',
          caput:
            'A associação aplicará a integralidade de seus recursos na manutenção e no desenvolvimento de seus objetivos sociais, sendo vedada a distribuição de lucros, superávits ou qualquer parcela de seu patrimônio.',
          paragraphs: [
            {
              number: '§ 1º',
              text: 'É permitida a adoção de mecanismos de reconhecimento de natureza simbólica e não financeira a colaboradores, diretores e parceiros que prestem contribuições relevantes à associação.',
            },
            {
              number: '§ 2º',
              text: 'Fica expressamente vedada a concessão de qualquer forma de remuneração, bônus ou vantagem financeira variável, que seja atrelada ao desempenho institucional, ao superávit financeiro ou ao crescimento patrimonial da entidade.',
            },
            {
              number: '§ 3º',
              text: 'A remuneração de dirigentes e funcionários, quando houver e nos termos permitidos pela legislação, deverá observar estritamente os limites, critérios e demais exigências legais aplicáveis às organizações da sociedade civil.',
            },
          ],
        },
        {
          number: 'Art. 43º',
          title: 'REMUNERAÇÃO E CONTRATAÇÃO DE SERVIÇOS',
          caput:
            'Os cargos eletivos da associação não serão, em si, remunerados a título de função. Entretanto, a associação poderá contratar formalmente associados ou terceiros para o desempenho de funções específicas de natureza técnica, consultiva, estratégica, executiva ou operacional, mediante remuneração compatível com os serviços prestados e com os valores praticados no mercado para atividades semelhantes.',
          paragraphs: [
            {
              number: '§ 1º',
              text: 'A celebração de tais contratos observará critérios internos de conveniência e oportunidade, devendo ser previamente aprovada pela Diretoria Executiva, com parecer do Conselho Fiscal, garantindo a transparência e a justificativa da necessidade dos serviços.',
            },
            {
              number: '§ 2º',
              text: 'A remuneração dos serviços contratados deverá ser fixada de forma objetiva, considerando a complexidade, a duração e a natureza dos serviços prestados, sendo vedada qualquer forma de remuneração ou bonificação baseada exclusivamente no desempenho institucional ou no crescimento patrimonial da associação, de modo a preservar o seu caráter não lucrativo.',
            },
            {
              number: '§ 3º',
              text: 'As prestações de serviços poderão abranger desde funções administrativas e técnicas até atividades de representação institucional, mediação externa, gestão de ativos ou captação de recursos, conforme demanda interna e critérios definidos pela Diretoria, sempre com a devida formalização contratual.',
            },
            {
              number: '§ 4º',
              text: 'Os membros beneficiados por tais contratos poderão acumular o exercício de suas funções estatutárias com a prestação de serviços, desde que respeitados os princípios gerais da legalidade, da moralidade e da compatibilidade de funções, e que a contratação seja devidamente justificada e transparente.',
            },
            {
              number: '§ 5º',
              text: 'A título de reconhecimento e engajamento, os apoiadores financeiros da associação, inclusive diretores, poderão receber Certificados Digitais de Reconhecimento ou outros registros criptográficos de natureza puramente simbólica, desde que tais registros não possuam valor monetário intrínseco ou sejam distribuídos em detrimento das finalidades não lucrativas da associação.',
            },
            {
              number: '§ 6º',
              text: 'Na hipótese de qualificação como OSCIP ou outra certificação, aplicar-se-ão integralmente as regras legais específicas sobre remuneração de dirigentes e transparência.',
            },
          ],
        },
        {
          number: 'Art. 44º',
          title: 'REGIME DE CONTRATAÇÃO DE PROFISSIONAIS',
          caput:
            'Os profissionais contratados para prestação contínua de serviços estarão sujeitos à CLT quando presentes os requisitos dos Arts. 2º e 3º da CLT (pessoalidade, onerosidade, não eventualidade e subordinação). Os demais prestadores reger-se-ão pela legislação civil aplicável e pelos contratos firmados.',
        },
        {
          number: 'Art. 44-A',
          title: 'DO PROGRAMA DE INTEGRIDADE E CÓDIGO DE CONDUTA',
          caput:
            'A ASPPIBRA manterá um programa de integridade (compliance) efetivo e contínuo, com o objetivo de prevenir, detectar e sanar desvios, fraudes, irregularidades e atos ilícitos praticados em suas atividades ou contra a associação.',
          paragraphs: [
            {
              number: '§ 1º',
              text: 'Compete à Diretoria Executiva elaborar e propor, no prazo de 12 (doze) meses a contar da aprovação desta alteração estatutária, um Código de Conduta Ética e as políticas do Programa de Integridade, os quais deverão ser submetidos à aprovação da Assembleia Geral.',
            },
            {
              number: '§ 2º',
              text: 'O Código de Conduta e as demais normas de integridade são de observância obrigatória por todos os membros da Diretoria Executiva, Conselho Fiscal, associados, funcionários, prestadores de serviços e voluntários, devendo ser amplamente divulgados, periodicamente revisados e ter seus procedimentos de aplicação detalhados no Regimento Interno.',
            },
          ],
        },
        {
          number: 'Art. 44-B',
          title: 'DA GESTÃO DE CONFLITO DE INTERESSES',
          caput:
            'Caracteriza-se o conflito de interesses quando qualquer membro dos órgãos da associação, funcionário ou prestador de serviços possuir interesse privado ou de terceiro que possa influenciar, ou parecer influenciar, seu julgamento e comprometer o seu dever de agir no melhor e exclusivo interesse da ASPPIBRA.',
          paragraphs: [
            {
              number: '§ 1º',
              text: 'É dever de qualquer pessoa na situação descrita no caput comunicar a existência do potencial ou real conflito, por escrito, à Diretoria Executiva e ao Conselho Fiscal, tão logo dele tenha ciência.',
            },
            {
              number: '§ 2º',
              text: 'O membro em situação de conflito de interesses deverá abster-se integralmente de participar das discussões e do processo deliberativo sobre o assunto em pauta, sob pena de nulidade do ato e aplicação das sanções estatutárias cabíveis.',
            },
          ],
        },
        {
          number: 'Art. 44-C',
          title: 'DO CANAL DE DENÚNCIAS',
          highlight: true,
          caput:
            'A ASPPIBRA instituirá e manterá canal independente, seguro e confidencial, acessível a públicos internos e externos, destinado ao recebimento de relatos sobre violações a este Estatuto, ao Código de Conduta, às políticas internas ou à legislação vigente, cujo funcionamento será regulamentado pelo Regimento Interno.',
          paragraphs: [
            {
              number: '§ 1º',
              text: 'A gestão do canal de denúncias, incluindo o recebimento e a apuração preliminar, será de responsabilidade do Conselho Fiscal, que assegurará o tratamento imparcial de cada relato, garantindo a proteção dos dados e o anonimato do denunciante, se por ele solicitado.',
            },
            {
              number: '§ 2º',
              text: 'Fica expressamente vedada e será considerada falta gravíssima qualquer forma de retaliação, intimidação ou ato adverso contra o denunciante de boa-fé.',
            },
          ],
        },
      ],
    },
    {
      id: 'capitulo-8',
      romanNumeral: 'VIII',
      title: 'DA PROPRIEDADE INTELECTUAL',
      subtitle:
        'Nos termos da Lei nº 9.610/1998 (Lei de Direitos Autorais) e da Lei nº 9.279/1996 (Lei da Propriedade Industrial), pertencem, com exclusividade e de pleno direito, à ASPPIBRA todos os ativos de propriedade intelectual desenvolvidos no âmbito de suas atividades institucionais ou com a utilização de seus recursos materiais, humanos, tecnológicos ou financeiros.',
      articles: [
        {
          number: 'Art. 45º',
          title: 'TITULARIDADE DA PROPRIEDADE INTELECTUAL',
          highlight: true,
          caput:
            'Pertencem, com exclusividade e de pleno direito, à ASPPIBRA todos os ativos de propriedade intelectual desenvolvidos no âmbito de suas atividades institucionais ou com a utilização de seus recursos materiais, humanos, tecnológicos ou financeiros.',
          paragraphs: [
            {
              number: '§ 1º',
              text: 'A titularidade disposta neste artigo aplica-se às criações desenvolvidas por diretores, conselheiros, associados, funcionários, prestadores de serviço, bolsistas, voluntários ou qualquer pessoa física ou jurídica que atue em nome ou em colaboração formal com a associação, desde que relacionadas às suas finalidades estatutárias.',
            },
            {
              number: '§ 2º',
              text: 'O vínculo com a associação implica, como condição expressa de participação, na cessão integral dos direitos patrimoniais das criações referidas neste artigo, por meio da assinatura de termo de adesão, contrato específico ou instrumento congênere, sem prejuízo da preservação e do respeito aos direitos morais dos criadores, em especial o de serem identificados como autores.',
            },
            {
              number: '§ 3º',
              text: 'Para assegurar a plena eficácia da cessão, o criador obriga-se a assinar, a qualquer tempo e sem ônus adicional, termos complementares de cessão, licenças ou demais instrumentos jurídicos necessários à formalização, registro ou proteção dos direitos patrimoniais em nome da ASPPIBRA.',
            },
            {
              number: '§ 4º',
              text: 'Não se incluem nesta cessão as criações estritamente pessoais, realizadas sem qualquer utilização de recursos da associação e sem relação com suas atividades institucionais, salvo disposição contratual em contrário.',
            },
            {
              number: '§ 5º',
              text: 'Os ativos de propriedade intelectual abrangidos por este artigo incluem, de forma exemplificativa e não exaustiva: produção técnico-científica, obras intelectuais, publicações, materiais didáticos, softwares, códigos-fonte, aplicativos, plataformas digitais, bases de dados, marcas, patentes e demais criações protegidas pela legislação vigente.',
            },
            {
              number: '§ 6º',
              text: 'A ASPPIBRA poderá, a seu critério, conceder ao criador licença de uso não exclusiva e não onerosa da criação cedida, para fins acadêmicos, científicos, artísticos ou pessoais, desde que não conflitantes com os interesses da associação.',
            },
          ],
        },
      ],
    },
    {
      id: 'capitulo-9',
      romanNumeral: 'IX',
      title: 'DAS DISPOSIÇÕES GERAIS E TRANSITÓRIAS',
      articles: [
        {
          number: 'Art. 46º',
          title: 'CASOS OMISSOS',
          caput:
            'Os casos omissos neste Estatuto e as dúvidas em sua aplicação serão dirimidos pela Diretoria Executiva, que poderá, conforme o caso, solicitar parecer ao Conselho Fiscal.',
          paragraphs: [
            {
              number: '§ 1º',
              text: 'A deliberação da Diretoria Executiva sobre casos omissos poderá ser submetida a referendo da Assembleia Geral, por iniciativa da própria Diretoria ou a requerimento de 1/5 (um quinto) dos associados.',
            },
            {
              number: '§ 2º',
              text: 'Persistindo a controvérsia após tentativa de mediação, as partes poderão submeter-se à arbitragem, desde que exista cláusula compromissória por adesão em instrumento apartado, com assinatura específica do associado, nos termos do art. 4º, §2º, da Lei nº 9.307/1996.',
            },
          ],
        },
        {
          number: 'Art. 47º',
          title: 'DISPOSIÇÃO TRANSITÓRIA SOBRE REELEIÇÃO',
          caput:
            '(Disposição transitória) Para fins de aplicação do limite de reeleição consecutiva previsto no Art. 27º, § 1º, apenas os mandatos iniciados após a aprovação deste Estatuto serão computados. O mandato que se inicia em 14 de setembro de 2025 será considerado o primeiro para todos os efeitos.',
        },
        {
          number: 'Art. 48º',
          title: 'FORO',
          caput:
            'Fica eleito o foro da Comarca de Maricá, Estado do Rio de Janeiro, para dirimir quaisquer questões judiciais ou administrativas referentes à associação, em consonância com o disposto no Art. 2º deste Estatuto, renunciando-se a qualquer outro, por mais privilegiado que seja.',
        },
        {
          number: 'Art. 49º',
          title: 'VIGÊNCIA',
          caput:
            'O presente estatuto entra em vigor na data de sua aprovação pela Assembleia Geral, revogadas as disposições em contrário.',
        },
      ],
    },
  ],
  signatories: [
    {
      name: 'Sandro',
      role: 'Presidente da Assembleia',
    },
    {
      name: 'Priscila',
      role: 'Secretária da Mesa',
    },
    {
      name: 'Ygor',
      role: 'Auditor da Mesa',
    },
    {
      name: 'Cristiano',
      role: 'Presidente',
    },
    {
      name: 'Felipe',
      role: 'Advogado',
      oab: 'OAB Nº ****',
    },
  ],
};
