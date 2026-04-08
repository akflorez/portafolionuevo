// src/data/fnaData.ts

export interface AgentMonthData {
  honorarios: number;
  cuentas: number;
}

export interface AgentData {
  id: string;
  name: string;
  photoUrl: string;
  ingreso: string;
  nota: string;
  isNew?: boolean;
  months: {
    diciembre: AgentMonthData;
    enero: AgentMonthData;
    febrero: AgentMonthData;
    marzo?: AgentMonthData;
  };
}

export const fnaAgents: AgentData[] = [
  {
    id: "tatiana",
    name: "TATIANA CELIS ACOSTA",
    photoUrl: "/agents/TATIANA CELIS.png",
    ingreso: "18/03/2025",
    nota: "Experiencia previa en IBG",
    months: {
      diciembre: { honorarios: 23982024, cuentas: 21 },
      enero: { honorarios: 12361321, cuentas: 19 },
      febrero: { honorarios: 22507649, cuentas: 29 },
      marzo: { honorarios: 8099370, cuentas: 27 },
    },
  },
  {
    id: "paola",
    name: "PAOLA ANDREA ECHAVARRIA",
    photoUrl: "/agents/PAOLA ECHEVARRIA.png",
    ingreso: "07/07/2025",
    nota: "Experiencia previa en IBG",
    months: {
      diciembre: { honorarios: 13241975, cuentas: 19 },
      enero: { honorarios: 24080080, cuentas: 25 },
      febrero: { honorarios: 18439656, cuentas: 29 },
      marzo: { honorarios: 6673110, cuentas: 14 },
    },
  },
  {
    id: "esteban",
    name: "BRIAN ESTEBAN DORADO",
    photoUrl: "/agents/ESTEBAN DORADO.png",
    ingreso: "10/07/2024",
    nota: "Primer trabajo como agente de cobranza",
    months: {
      diciembre: { honorarios: 15237746, cuentas: 18 },
      enero: { honorarios: 11254208, cuentas: 17 },
      febrero: { honorarios: 16270122, cuentas: 19 },
      marzo: { honorarios: 6757041, cuentas: 17 },
    },
  },
  {
    id: "yeraldin",
    name: "YERALDIN ORTIZ",
    photoUrl: "/agents/YERALDIN ORTIZ.png",
    ingreso: "16/12/2024",
    nota: "Primer trabajo como agente de cobranza",
    months: {
      diciembre: { honorarios: 6213053, cuentas: 13 },
      enero: { honorarios: 18399994, cuentas: 20 },
      febrero: { honorarios: 19110669, cuentas: 28 },
      marzo: { honorarios: 15519639, cuentas: 26 },
    },
  },
  {
    id: "nidia",
    name: "NIDIA MILENA RODRIGUEZ",
    photoUrl: "/agents/NIDIA RODRIGUEZ.png",
    ingreso: "05/05/2025",
    nota: "Experiencia previa en IBG. En enero estuvo en portafolio de Efigas",
    months: {
      diciembre: { honorarios: 15055083, cuentas: 21 },
      enero: { honorarios: 0, cuentas: 0 },
      febrero: { honorarios: 6363639, cuentas: 18 },
      marzo: { honorarios: 25870860, cuentas: 28 },
    },
  },
  {
    id: "karen",
    name: "KAREN ROJAS",
    photoUrl: "/agents/KAREN ROJAS.png",
    ingreso: "04/03/2026",
    nota: "Nueva incorporación",
    isNew: true,
    months: {
      diciembre: { honorarios: 0, cuentas: 0 },
      enero: { honorarios: 0, cuentas: 0 },
      febrero: { honorarios: 0, cuentas: 0 },
      marzo: { honorarios: 779597, cuentas: 4 },
    },
  },
  {
    id: "juliet",
    name: "JULIET MOSQUERA",
    photoUrl: "/agents/JULIET MOSQUERA.png",
    ingreso: "04/03/2026",
    nota: "Nueva incorporación",
    isNew: true,
    months: {
      diciembre: { honorarios: 0, cuentas: 0 },
      enero: { honorarios: 0, cuentas: 0 },
      febrero: { honorarios: 0, cuentas: 0 },
      marzo: { honorarios: 620479, cuentas: 3 },
    },
  },
];

export const globalFnaData = {
  diciembre: { honorarios: 82985712, cuentas: 105 },
  enero: { honorarios: 66095603, cuentas: 81 },
  febrero: { honorarios: 92185774, cuentas: 134 },
};

// Utils
export const calculateAgentAverages = (agent: AgentData) => {
  const { diciembre, enero, febrero } = agent.months;
  const marzo = agent.months.marzo;

  if (agent.isNew && marzo) {
    // Nuevas: solo marzo
    return {
      avgHonorarios: marzo.honorarios,
      avgCuentas: marzo.cuentas,
      totalHonorarios: marzo.honorarios,
      totalCuentas: marzo.cuentas,
    };
  }

  const totalHon = diciembre.honorarios + enero.honorarios + febrero.honorarios;
  const totalCue = diciembre.cuentas + enero.cuentas + febrero.cuentas;
  return {
    avgHonorarios: totalHon / 3,
    avgCuentas: totalCue / 3,
    totalHonorarios: totalHon,
    totalCuentas: totalCue
  };
};

export const getAgentTrend = (agent: AgentData) => {
  if (agent.isNew) return "Nueva incorporación 🌟";
  
  const { diciembre, enero, febrero } = agent.months;
  if (febrero.honorarios > enero.honorarios * 1.05 && enero.honorarios > diciembre.honorarios * 1.05) return "Sube constante 🔥";
  if (febrero.honorarios > enero.honorarios) return "En crecimiento 📈";
  if (febrero.honorarios < enero.honorarios * 0.95) return "En bajada 📉";
  return "Estable ⚡";
};

export const getAgentInsight = (agent: AgentData) => {
  if (agent.isNew) return "Ingresó en marzo 2026, en período de adaptación y formación inicial.";
  
  const avgs = calculateAgentAverages(agent);
  if (avgs.avgHonorarios > 18000000) return "Alto volumen de recuperación con excelentes honorarios en promedio.";
  if (avgs.avgHonorarios > 12000000) return "Rendimiento sólido y consistente en gestión de portafolio.";
  if (avgs.avgCuentas > 20 && avgs.avgHonorarios < 12000000) return "Alto volumen de cuentas abordadas, con oportunidad de optimizar el ticket promedio de cierre.";
  if (agent.months.enero.honorarios === 0) return "Participación parcial en el trimestre, con reactivación en el último mes.";
  return "Oportunidad de crecimiento en volumen de cuentas gestionadas y ticket de honorarios.";
};
