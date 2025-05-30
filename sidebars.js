// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  tutorialSidebar: [
    { type: 'doc', id: 'acesso-inicial', label: '1. Acesso à Página Inicial do CNIEP' },
    { type: 'doc', id: 'painel-inspecao', label: '2. Painel de Inspeção' },
    { type: 'doc', id: 'iniciar-nova-inspecao', label: '3. Iniciar Nova Inspeção' },
    {
      type: 'category',
      label: '4. Formulário de Inspeção Prisional',
      items: [
        '04_1-fontes-verificacao',
        '04_2-questoes',
        '04_3-navegar-secoes',
        '04_4-submeter-formulario',
      ],
    },
    { type: 'doc', id: 'editar-inspecao', label: '5. Editar Inspeção' },
    { type: 'doc', id: 'finalizacao', label: '6. Finalização da Inspeção' },
    { type: 'doc', id: 'relatorio-providencias', label: '7. Relatório de Providências' },
    { type: 'doc', id: 'alterar-meus-dados', label: '8. Como Altero Meus Dados?' },
    { type: 'doc', id: 'solicitar-nova-senha', label: '9. Como Solicito Nova Senha?' },
  ],
};

export default sidebars;
