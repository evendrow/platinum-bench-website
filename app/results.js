
const results_num_errors = {
'singleop': [0,0,1,0,0,0,0,2,0,0,1,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
'singleq': [0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
'multiarith': [0,0,1,0,0,1,0,0,1,0,0,0,0,0,0,1,1,1,0,0,0,0,1,1,0,1,0,0,0,0,0,0,0,0],
'svamp': [3,2,1,5,6,6,7,7,5,12,11,1,6,4,1,8,3,0,2,4,1,0,1,1,1,3,0,0,0,0,3,0,1,1],
'gsm8k': [2,5,2,5,3,6,3,7,6,11,18,1,7,3,3,10,8,4,3,7,2,2,1,1,7,2,3,1,1,2,4,3,4,4],
'mmlu_math': [28,29,4,20,22,13,33,39,24,23,62,2,44,14,21,43,5,2,12,16,1,0,1,1,5,11,14,4,3,8,7,0,2,4],
'bbh_logical_deduction_three_objects': [0,0,1,0,0,2,4,4,2,5,27,0,0,1,0,4,0,4,0,3,0,0,0,1,0,1,0,0,0,0,0,0,0,0],
'bbh_object_counting': [1,0,2,4,0,9,1,2,14,15,18,15,1,2,0,5,0,5,10,10,0,0,0,1,4,5,1,0,0,0,0,0,0,0],
'bbh_navigate': [5,0,1,4,4,9,11,9,7,18,30,3,10,5,1,11,7,3,0,3,0,0,1,0,7,3,0,0,0,0,2,2,0,3],
'tab_fact': [1,3,1,1,1,5,3,4,14,17,11,3,4,5,1,13,2,2,1,3,0,0,1,0,3,2,0,1,0,0,3,1,3,0],
'hotpotqa': [2,0,3,2,3,1,3,1,4,3,9,3,2,1,0,3,3,3,1,4,0,0,1,2,1,1,0,1,1,1,1,1,3,3],
'squad': [4,3,9,7,9,14,11,7,15,13,21,10,8,8,3,9,7,6,7,8,8,5,6,35,7,9,4,5,3,0,8,7,6,6],
'drop': [4,3,3,3,3,7,10,9,13,12,24,5,7,5,6,10,6,6,3,5,2,0,6,3,4,5,4,3,2,2,4,1,3,4],
'winograd_wsc': [8,8,19,12,10,17,11,17,27,21,39,6,14,15,3,31,22,17,16,12,8,5,7,14,11,7,5,4,7,3,10,2,6,4],
}



export const model_score = {
'gemini-2.5-pro-exp-03-25': 0.533071351430344,
'o1-2024-12-17-high': 0.74473547218518,
'grok-3-beta': 0.786036911518522,
'claude-3-7-sonnet-20250219-thinking': 0.930540524396868,
'gpt-4.5-preview-2025-02-27': 0.992691580691621,
'claude-3-7-sonnet-20250219': 1.05322636456908,
'claude-3-5-sonnet-20241022': 1.08704433241721,
'gpt-4.1-2025-04-14': 1.10905999749425,
'o1-2024-12-17-med': 1.26551024649057,
'deepseek-r1': 1.4034010887905,
'grok-3-mini-beta': 1.51235107277277,
'claude-3-5-sonnet': 1.84485351683031,
'meta-llama/Meta-Llama-3.1-405B-Instruct': 1.91967292044783,
'Qwen2.5-Max': 2.05194754511604,
'meta-llama/Llama-4-Maverick-17B-128E-Instruct-FP8': 2.11790219151296,
'gpt-4o-2024-08-06': 2.2436211892675,
'o1-preview-2024-09-12': 2.33078075265947,
'gpt-4o-2024-11-20': 2.45678034060064,
'gemini-2.0-pro-02-05': 2.47326338155957,
'deepseek/deepseek-chat': 2.76713291601031,
'o1-mini': 2.91198695580385,
'gemini-2.0-flash-thinking': 3.03370794222555,
'Qwen/Qwen2.5-72B-Instruct': 3.1118876869106,
'o3-mini-2025-01-31-high': 3.1800611207398,
'grok-2-1212': 3.21256958260783,
'mistral-large': 3.44063424568982,
'gemini-2.0-flash': 3.53743800240796,
'meta-llama/Llama-3.3-70B-Instruct': 3.61775425407436,
'meta-llama/Meta-Llama-3.1-70B-Instruct': 4.04069094257892,
'gemini-1.5-pro': 4.18959343967729,
'gpt-4o-mini': 6.89047087396849,
'claude-3-5-haiku': 6.97697847301297,
'gemini-1.5-flash': 7.09847128774782,
'mistral-small': 10.9584613231674,
}
//   "singleop": [0, 0, 1, 1, 0, 0, 2, 0, 0, 1, 1, 0, 2, 0, 0, 0, 1, 1],
//   "singleq": [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//   "multiarith": [0, 0, 1, 1, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0],
//   "svamp": [3, 2, 1, 4, 6, 7, 7, 6, 13, 11, 4, 7, 4, 1, 8, 4, 0, 3],
//   "gsm8k": [2, 5, 2, 4, 6, 3, 7, 6, 10, 25, 3, 7, 3, 3, 10, 8, 4, 3],
//   "mmlu_math": [26, 33, 4, 22, 18, 38, 38, 30, 26, 63, 9, 30, 19, 19, 45, 8, 8, 9],
//   "bbh_logical_deduction_three_objects": [0, 0, 1, 0, 2, 4, 4, 2, 5, 27, 0, 0, 1, 0, 4, 0, 4, 0],
//   "bbh_object_counting": [2, 0, 7, 2, 7, 7, 4, 14, 13, 16, 5, 3, 4, 0, 3, 1, 5, 5],
//   "bbh_navigate": [2, 3, 0, 2, 12, 11, 12, 7, 12, 39, 1, 6, 5, 6, 13, 4, 4, 3],
//   "tab_fact": [1, 3, 2, 0, 5, 3, 4, 14, 17, 12, 4, 4, 5, 1, 14, 2, 8, 1],
//   "hotpotqa": [2, 0, 3, 1, 1, 4, 1, 4, 3, 10, 3, 2, 1, 1, 3, 3, 5, 1],
//   "squad": [4, 3, 9, 9, 14, 11, 7, 16, 13, 21, 11, 8, 8, 3, 10, 7, 6, 9],
//   "drop": [5, 4, 4, 7, 8, 12, 10, 15, 13, 27, 7, 8, 6, 7, 11, 7, 7, 4],
//   "winograd_wsc": [7, 8, 16, 12, 15, 13, 14, 27, 25, 36, 4, 13, 12, 4, 24, 22, 24, 12]
// };


export const results = (() => {

  let results_without_errors = [
    {
      name: "SingleOp",
      key: "singleop",
      type: "Math",
      count: "150",
      errors: [0, 0, 1, 1, 0, 0, 2, 0, 0, 1, 1, 0, 2, 0, 0, 0, 1, 1],
      description: 'Single operation arithmetic word problems',
    },
    {
      name: "SingleEq",
      key: "singleq",
      type: "Math",
      count: "100",
      errors: [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      description: 'Single equation word problems'
    },
    {
      name: "MultiArith",
      key: "multiarith",
      type: "Math",
      count: "170",
      errors: [0, 0, 1, 1, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0],
      description: 'Simple multi-step arithmetic word problems'
    },
    {
      name: "SVAMP",
      key: "svamp",
      type: "Math",
      count: "265",
      errors: [3, 2, 1, 4, 6, 7, 7, 6, 13, 11, 4, 7, 4, 1, 8, 4, 0, 3],
      description: 'Elementary-level math word problems'
    },
    {
      name: "GSM8K",
      key: "gsm8k",
      type: "Math",
      count: "268",
      errors: [2, 5, 2, 4, 6, 3, 7, 6, 10, 25, 3, 7, 3, 3, 10, 8, 4, 3],
      description: '8th-grade math word problems',
    },
    {
      name: "MMLU HS Math",
      key: "mmlu_math",
      type: "Math",
      count: "267",
      errors: [26, 33, 4, 22, 18, 38, 38, 30, 26, 63, 9, 30, 19, 19, 45, 8, 8, 9],
      description: 'High school math',
    },
    {
      name: "Logic 3-Obj",
      key: "bbh_logical_deduction_three_objects",
      type: "Logic",
      count: "200",
      errors: [0, 0, 1, 0, 2, 4, 4, 2, 5, 27, 0, 0, 1, 0, 4, 0, 4, 0],
      description: "3 object logic deduction",
    },
    {
      name: "Object Counting",
      key: "bbh_object_counting",
      type: "Logic",
      count: "190",
      errors: [2, 0, 7, 2, 7, 7, 4, 14, 13, 16, 5, 3, 4, 0, 3, 1, 5, 5],
      description: "Count quantities of objects from a list",
    },
    {
      name: "Navigate",
      key: "bbh_navigate",
      type: "Logic",
      count: "200",
      errors: [2, 3, 0, 2, 12, 11, 12, 7, 12, 39, 1, 6, 5, 6, 13, 4, 4, 3],
      description: "Determine the position of an object after a series of navigation steps",
    },
    {
      name: "TabFact",
      key: "tab_fact",
      type: "Table",
      count: "169",
      errors: [1, 3, 2, 0, 5, 3, 4, 14, 17, 12, 4, 4, 5, 1, 14, 2, 8, 1],
      description: "Fact verification from Wikipedia tables",
    },
    {
      name: "Hotpot QA",
      key: "hotpotqa",
      type: "RC",
      type_long: "Reading Comp",
      count: "181",
      errors: [2, 0, 3, 1, 1, 4, 1, 4, 3, 10, 3, 2, 1, 1, 3, 3, 5, 1],
      description: "Natural, multi-hop reading comprehension questions",
    },
    {
      name: "SQuAD2.0",
      key: "squad",
      type: "RC",
      type_long: "Reading Comp",
      count: "161",
      errors: [4, 3, 9, 9, 14, 11, 7, 16, 13, 21, 11, 8, 8, 3, 10, 7, 6, 9],
      description: "Answerable and unanswerable reading comprehension questions",
    },
    {
      name: "DROP",
      key: "drop",
      type: "RC",
      type_long: "Reading Comp",
      count: "209",
      errors: [5, 4, 4, 7, 8, 12, 10, 15, 13, 27, 7, 8, 6, 7, 11, 7, 7, 4],
      description: "English reading comprehension over paragraphs",
    },
    {
      name: "Winograd WSC",
      key: "winograd_wsc",
      type: "CR",
      type_long: "Commonsense",
      count: "195",
      errors: [7, 8, 16, 12, 15, 13, 14, 27, 25, 36, 4, 13, 12, 4, 24, 22, 24, 12],
      description: "Common-sense reasoning for word disambiguation",
    },
  //   {
  //     name: "VQA v2.0",
  //     key: "vqa_v2.0",
  //     type: "Vis",
  //     count: "248",
  //     errors: [, , 14, 13, , , 33, 11, 26],
  //     description: "TODO",
  //   },
  ];

  return results_without_errors.map((r, i) => {
    r.errors = results_num_errors[r.key];
    return r;
  });
})();


export const models = [
  'Llama 3.1 405B Inst',
  'Claude Sonnet 3.5 (June)',
  'o1-mini',
  'GPT-4o (Nov)',
  'GPT-4o (Aug)',
  'Gemini 1.5 Pro',
  'Mistral Large',
  'Llama 3.1 70B Inst',
  'GPT 4o mini',
  'Gemini 1.5 Flash',
  'Mistral Small',
    // meta-llama/Meta-Llama-3.1-405B-Instruct
    // claude-3-5-sonnet
    // o1-mini
    // gpt-4o
    // gemini-1.5-pro
    // mistral-large
    // meta-llama/Meta-Llama-3.1-70B-Instruct
    // gpt-4o-mini
    // gemini-1.5-flash
    // mistral-small
    'o1-preview',
    'Llama 3.3 70B Inst',
    'Grok 2',
    'Claude Sonnet 3.5 (Oct)',
    'Claude Haiku 3.5',
    'Gemini 2.0 Flash',
    'Gemini 2.0 Flash Thinking (12/19)',
    'Deepseek-V3',
    'Qwen2.5-72B-Instruct',
    'o1 (med)',
    'o1 (high)',
    'Deepseek-R1',
    'o3-mini (high)',
    'Gemini 2.0 Pro',
    'Qwen2.5-Max',
    'Claude 3.7 Sonnet',
    'Claude 3.7 Sonnet Thinking 16k',
    'GPT-4.5 (Preview)',
    'Gemini 2.5 Pro (Exp)',
    'Llama 4 Maverick',
    'Grok 3 Beta',
    'Grok 3 Mini Beta (high)',
    'GPT 4.1 (2025-04-14)',
];

// # model_names = ['gpt-4o', 'gpt-4o-mini', 'claude-3-5-sonnet', 'meta-llama/Meta-Llama-3.1-70B-Instruct', 'meta-llama/Meta-Llama-3.1-405B-Instruct', 'gemini-1.5-flash', 'gemini-1.5-pro', 'mistral-small', 'mistral-large', 'o1-mini']

export const model_name_to_key = {
    'Mistral Small': 'mistral-small',
    'Mistral Large': 'mistral-large',
    'Gemini 1.5 Flash': 'gemini-1.5-flash',
    'Gemini 1.5 Pro': 'gemini-1.5-pro',
    'Llama 3.1 70B Inst': 'meta-llama/Meta-Llama-3.1-70B-Instruct',
    'Llama 3.1 405B Inst': 'meta-llama/Meta-Llama-3.1-405B-Instruct',
    'GPT 4o mini': 'gpt-4o-mini',
    'GPT-4o (Nov)': 'gpt-4o-2024-11-20',
    'GPT-4o (Aug)': 'gpt-4o-2024-08-06',
    'Claude Sonnet 3.5 (June)': 'claude-3-5-sonnet',
    'Llama 3.3 70B Inst': 'meta-llama/Llama-3.3-70B-Instruct',
    'Grok 2': 'grok-2-1212',
    'Claude Sonnet 3.5 (Oct)': 'claude-3-5-sonnet-20241022',
    'Claude Haiku 3.5': 'claude-3-5-haiku',
    'Gemini 2.0 Flash': 'gemini-2.0-flash',
    'Gemini 2.0 Flash Thinking (12/19)': 'gemini-2.0-flash-thinking',
    'Deepseek-V3': 'deepseek/deepseek-chat',
    'Qwen2.5-72B-Instruct': 'Qwen/Qwen2.5-72B-Instruct',
    'Deepseek-R1': 'deepseek-r1',
    'o1-mini': 'o1-mini',
    'o1-preview': 'o1-preview-2024-09-12',
    'o1 (high)': 'o1-2024-12-17-high',
    'o1 (med)': 'o1-2024-12-17-med',
    'o3-mini (high)': 'o3-mini-2025-01-31-high',
    'Gemini 2.0 Pro': 'gemini-2.0-pro-02-05',
    'Qwen2.5-Max': 'Qwen2.5-Max',
    'Claude 3.7 Sonnet': 'claude-3-7-sonnet-20250219',
    'Claude 3.7 Sonnet Thinking 16k': 'claude-3-7-sonnet-20250219-thinking',
    'GPT-4.5 (Preview)': 'gpt-4.5-preview-2025-02-27',
    'Gemini 2.5 Pro (Exp)': 'gemini-2.5-pro-exp-03-25',
    'Llama 4 Maverick': 'meta-llama/Llama-4-Maverick-17B-128E-Instruct-FP8',
    'Grok 3 Beta': 'grok-3-beta',
    'Grok 3 Mini Beta (high)': 'grok-3-mini-beta',
    'GPT 4.1 (2025-04-14)': 'gpt-4.1-2025-04-14',
}
