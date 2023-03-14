export const detail = [
  { name: "MeSH Heading", value: ["COVID-19"] },
  {
    name: "Tree Number(s)",
    value: [
      "C01.748.610.763.500",
      "C01.925.705.500",
      "C01.925.782.600.550.200.163",
      "C08.381.677.807.500",
      "C08.730.610.763.500",
    ],
  },
  {
    name: "Unique ID",
    value: ["D000086382"],
  },
  {
    name: "RDF Unique Identifier",
    value: ["http://id.nlm.nih.gov/mesh/D000086382"],
  },
  {
    name: "Scope Note",
    isNote: true,
    value: [
      "A viral disorder generally characterized by high FEVER; COUGH; DYSPNEA; CHILLS; PERSISTENT TREMOR; MUSCLE PAIN; HEADACHE; SORE THROAT; a new loss of taste and/or smell (see AGEUSIA and ANOSMIA) and other symptoms of a VIRAL PNEUMONIA. In severe cases, a myriad of coagulopathy associated symptoms often correlating with COVID-19 severity is seen (e.g., BLOOD COAGULATION; THROMBOSIS; ACUTE RESPIRATORY DISTRESS SYNDROME; SEIZURES; HEART ATTACK; STROKE; multiple CEREBRAL INFARCTIONS; KIDNEY FAILURE; catastrophic ANTIPHOSPHOLIPID ANTIBODY SYNDROME and/or DISSEMINATED INTRAVASCULAR COAGULATION). In younger patients, rare inflammatory syndromes are sometimes associated with COVID-19 (e.g., atypical KAWASAKI SYNDROME; TOXIC SHOCK SYNDROME; pediatric multisystem inflammatory disease; and CYTOKINE STORM SYNDROME). A coronavirus, SARS-CoV-2, in the genus BETACORONAVIRUS is the causative agent.",
    ],
  },
  {
    name: "Entry Term(s)",
    value: [
      "2019 Novel Coronavirus Disease",
      "2019 Novel Coronavirus Infection",
      "2019-nCoV Disease",
      "2019-nCoV Infection",
      "COVID-19 Pandemic",
      "COVID-19 Pandemics",
      "COVID-19 Virus Disease",
      "COVID-19 Virus Infection",
      "COVID19",
      "Coronavirus Disease 2019",
      "Coronavirus Disease-19",
      "SARS Coronavirus 2 Infection",
      "SARS-CoV-2 Infection",
      "Severe Acute Respiratory Syndrome Coronavirus 2 Infection",
    ],
  },
  {
    name: "See Also",
    value: ["SARS-CoV-2"],
  },
  {
    name: "Public MeSH Note",
    value: [
      "2021; for COVID-19 see PNEUMONIA, VIRAL; CORONAVIRUS INFECTIONS; and PANDEMICS 2020",
    ],
  },
  {
    name: "History Note",
    value: ["2021(2020)"],
  },
  {
    name: "Date Established",
    value: ["2021/01/01"],
  },
  {
    name: "Date of Entry",
    value: ["2020/07/07"],
  },
  {
    name: "Revision Date",
    value: ["2021/06/01"],
  },
];

const relations = {
  root: {
    value: 'COVID-19',
    children: [
      {
        pathName: 'hasEntryTerm',
        children: [
          { value: '2019 Novel Coronavirus Disease' },
          { value: '2019 Novel Coronavirus Infection' },
          { value: '2019-nCoV Disease' },
          { value: '2019-nCoV Infection' },
          { value: 'COVID-19 Pandemic' },
          { value: 'COVID-19 Pandemics' },
          { value: 'COVID-19 Virus Disease' },
          { value: 'COVID-19 Virus Infection' },
          { value: 'COVID19' },
          { value: 'Coronavirus Disease 2019' },
          { value: 'Coronavirus Disease-19' },
          { value: 'SARS Coronavirus 2 Infection' },
          { value: 'SARS-CoV-2 Infection' },
          { value: 'Severe Acute Respiratory Syndrome Coronavirus 2 Infection' }
        ]
      },
      {
        pathName: 'hasQualifier',
        children: [
          { value: 'Allowable Qualifiers' },
          { value: 'blood (BL)' },
          { value: 'cerebrospinal fluid (CF)' },
          { value: 'chemically induced (CI)' },
          { value: 'classification (CL)' },
          { value: 'complications (CO)' },
          { value: 'congenital (CN)' },
          { value: 'diagnosis (DI)' },
          { value: 'diagnostic imaging (DG)' },
          { value: 'diet therapy (DH)' },
          { value: 'drug therapy (DT)' },
          { value: 'economics (EC)' },
          { value: 'embryology (EM)' },
          { value: 'enzymology (EN)' },
          { value: 'epidemiology (EP)' },
          { value: 'ethnology (EH)' },
          { value: 'etiology (ET)' },
          { value: 'genetics (GE)' },
          { value: 'history (HI)' },
        ]
      },
      {
        pathName: 'hasSymptom',
        children: [
          {
            secondRoot: 'General',
            children: [
              { value: 'chills' },
              { value: 'cough' },
              { value: 'dyspnea' },
              { value: 'headache' },
              { value: 'high fever' },
              { value: 'loss of taste or smell' },
              { value: 'muscle pain' },
              { value: 'persistent tremor' },
              { value: 'sore throat' }
            ]
          },
          {
            secondRoot: 'Severe',
            children: [
              {value: 'acute respiratory'},
              {value: 'distress syndrome'},
              {value: 'coagulation disorders'},
              {value: 'heart attack'},
              {value: 'kidney failure'},
              {value: 'multiple cerebral infarctions'},
              {value: 'seizures'},
              {value: 'stroke'},
              {value: 'thrombosis'},
            ]
          },
        ]
      },
      {
        pathName: 'hasCheckMthod',
        children: [
          {
            secondRoot: 'anal',
            children: [
              {value: 'swab'},
              {value: 'nasopharyngeal swab'},
              {value: 'oropharyngeal swab'},
            ]
          }
        ]
      }
    ]
  }
}
// root
// // root-children
// const rootChildren = relations.root.children.map((node) => node.children)
// const nodes = []
// for (const i of rootChildren) {
//   for (const node of i) {
//     nodes.push({name: node.value})
//   }
// }
// // 
// export const dataNodes = [{name: relations.root.value}, ...nodes]

const rootColor = "#e2c3c9";

const secondColor = "#80afbf";

const nodes = [
  {
    name: "COVID-19",
    x: 300,
    y: 300,
    symbolSize: 100,
    itemStyle: {
      color: rootColor,
    },
    label: {
      fontWeight: "500",
      fontSize: 14,
    },
  },
  {
    name: "General",
    x: 300,
    y: 60,
    itemStyle: {
      color: "#dfc286",
    },
  },
  { x: 380, y: 60, name: "chills" },
  { x: 230, y: 20, name: "cough" },
  { x: 230, y: 90, name: "dyspnea" },
  { x: 320, y: -50, name: "headache" },
  { x: 330, y: 140, name: "loss of taste or smell" },
  { x: 230, y: -30, name: "muscle pain" },
  { x: 380, y: 130, name: "persistent tremor" },
  { x: 380, y: 20, name: "sore throat" },

  {
    name: "Severe",
    x: 0,
    y: 100,
    itemStyle: {
      color: "#dfc286",
    },
  },
  { x: 0, y: 170, name: "acute respiratory distress syndrome" },
  { x: -80, y: 90, name: "heart attack" },
  { x: -90, y: 40, name: "coagulation disorders" },
  { x: 0, y: 0, name: "multiple cerebral infarctions" },
  { x: -120, y: 130, name: "seizures" },
  { x: 35, y: 35, name: "stroke" },
  { x: 80, y: 80, name: "thrombosis" },

  { name: "anal swab", x: 540, y: 260 },
  { name: "nasopharyngeal swab", x: 480, y: 220 },
  { name: "oropharyngeal swab", x: 490, y: 320 },

  { x: 390, y: 480, name: "2019 Novel Coronavirus Disease" },
  { x: 230, y: 510, name: "2019 Novel Coronavirus Infection" },
  { x: 300, y: 500, name: "2019-nCoV Disease" },

  { x: 90, y: 380, name: "congenital (CN)" },
  { x: 130, y: 420, name: "blood (BL)" },
  { x: 90, y: 320, name: "cerebrospinal fluid (CF)" },
  { x: 160, y: 460, name: "chemically induced (CI)" },
]
export const data_nodes = nodes.map(item => item?.itemStyle?.color ? item : {
  ...item,
  itemStyle: {
    color: '#9DC3E7'
  }
})