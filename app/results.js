
const results_num_errors = {
'singleop': [0,0,1,0,0,0,0,2,0,0,1,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0],
'singleq': [0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
'multiarith': [0,0,1,0,0,1,0,0,1,0,0,0,0,0,0,1,1,1,0,0,0,0,1,1,0,1,0,0],
'svamp': [3,2,1,6,7,6,7,7,6,13,11,1,7,4,1,8,4,0,3,4,1,0,1,1,2,4,0,0],
'gsm8k': [2,5,2,7,4,6,3,7,6,11,19,2,7,3,3,10,8,4,3,7,2,2,1,1,7,2,3,1],
'mmlu_math': [28,29,4,20,22,13,33,39,24,23,62,2,44,14,21,43,5,2,12,16,1,0,1,1,5,11,14,3],
'bbh_logical_deduction_three_objects': [0,0,1,0,0,2,4,4,2,5,27,0,0,1,0,4,0,4,0,3,0,0,0,1,0,1,0,0],
'bbh_object_counting': [1,0,2,4,0,9,1,2,14,15,18,15,1,2,0,5,0,5,10,10,0,0,0,1,4,5,1,0],
'bbh_navigate': [5,0,1,4,4,9,11,9,7,18,30,3,10,5,1,11,7,3,0,3,0,0,1,0,7,3,0,0],
'tab_fact': [1,3,1,1,1,5,3,4,14,17,11,4,4,5,1,13,2,2,1,3,0,0,1,0,3,2,0,2],
'hotpotqa': [2,0,3,2,3,1,3,1,4,3,10,3,2,1,0,3,3,3,1,4,0,0,1,2,1,1,0,1],
'squad': [4,3,9,7,9,14,11,7,15,13,21,11,8,8,3,10,7,6,8,8,8,5,6,35,7,9,4,5],
'drop': [4,3,3,3,3,7,10,9,13,12,24,5,7,5,6,10,6,6,3,5,2,0,6,3,4,5,4,3],
'winograd_wsc': [8,8,19,12,10,17,11,17,27,21,39,6,14,15,3,31,22,17,16,12,8,5,7,14,11,7,5,4],
}



export const model_score = {
  'o1-2024-12-17-high': 0.745845204178538,
  'claude-3-7-sonnet-20250219-thinking': 1.03986967468493,
  'claude-3-7-sonnet-20250219': 1.05775634890217,
  'claude-3-5-sonnet-20241022': 1.09250497285797,
  'o1-2024-12-17-med': 1.2692819677217,
  'deepseek-r1': 1.41100699822018,
  'claude-3-5-sonnet': 1.84590923293635,
  'meta-llama/Meta-Llama-3.1-405B-Instruct': 1.92526364208005,
  'Qwen2.5-Max': 2.07117740417665,
  'gpt-4o-2024-08-06': 2.27522764523391,
  'gemini-2.0-pro-02-05': 2.48952381360493,
  'gpt-4o-2024-11-20': 2.49919824246537,
  'o1-preview-2024-09-12': 2.51005869963834,
  'deepseek/deepseek-chat': 2.8258780194784,
  'o1-mini': 2.91911348504171,
  'gemini-2.0-flash-thinking': 3.04200606122265,
  'Qwen/Qwen2.5-72B-Instruct': 3.11926821035015,
  'o3-mini-2025-01-31-high': 3.19387232591676,
  'grok-2-1212': 3.21642924818017,
  'mistral-large': 3.45304130277777,
  'gemini-2.0-flash': 3.55820500919739,
  'meta-llama/Llama-3.3-70B-Instruct': 3.63723810733667,
  'meta-llama/Meta-Llama-3.1-70B-Instruct': 4.04839060113496,
  'gemini-1.5-pro': 4.19696733290723,
  'gpt-4o-mini': 6.91257084261796,
  'claude-3-5-haiku': 7.02328054716903,
  'gemini-1.5-flash': 7.11537718559208,
  'mistral-small': 11.0347091313604,
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
      count: "153",
      errors: [0, 0, 1, 1, 0, 0, 2, 0, 0, 1, 1, 0, 2, 0, 0, 0, 1, 1],
      description: 'Single operation arithmetic word problems',
    },
    {
      name: "SingleEq",
      key: "singleq",
      type: "Math",
      count: "103",
      errors: [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      description: 'Single equation word problems'
    },
    {
      name: "MultiArith",
      key: "multiarith",
      type: "Math",
      count: "172",
      errors: [0, 0, 1, 1, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0],
      description: 'Simple multi-step arithmetic word problems'
    },
    {
      name: "SVAMP",
      key: "svamp",
      type: "Math",
      count: "276",
      errors: [3, 2, 1, 4, 6, 7, 7, 6, 13, 11, 4, 7, 4, 1, 8, 4, 0, 3],
      description: 'Elementary-level math word problems'
    },
    {
      name: "GSM8K",
      key: "gsm8k",
      type: "Math",
      count: "280",
      errors: [2, 5, 2, 4, 6, 3, 7, 6, 10, 25, 3, 7, 3, 3, 10, 8, 4, 3],
      description: '8th-grade math word problems',
    },
    {
      name: "MMLU HS Math",
      key: "mmlu_math",
      type: "Math",
      count: "268",
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
      count: "192",
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
      count: "174",
      errors: [1, 3, 2, 0, 5, 3, 4, 14, 17, 12, 4, 4, 5, 1, 14, 2, 8, 1],
      description: "Fact verification from Wikipedia tables",
    },
    {
      name: "Hotpot QA",
      key: "hotpotqa",
      type: "RC",
      type_long: "Reading Comp",
      count: "189",
      errors: [2, 0, 3, 1, 1, 4, 1, 4, 3, 10, 3, 2, 1, 1, 3, 3, 5, 1],
      description: "Natural, multi-hop reading comprehension questions",
    },
    {
      name: "SQuAD2.0",
      key: "squad",
      type: "RC",
      type_long: "Reading Comp",
      count: "169",
      errors: [4, 3, 9, 9, 14, 11, 7, 16, 13, 21, 11, 8, 8, 3, 10, 7, 6, 9],
      description: "Answerable and unanswerable reading comprehension questions",
    },
    {
      name: "DROP",
      key: "drop",
      type: "RC",
      type_long: "Reading Comp",
      count: "210",
      errors: [5, 4, 4, 7, 8, 12, 10, 15, 13, 27, 7, 8, 6, 7, 11, 7, 7, 4],
      description: "English reading comprehension over paragraphs",
    },
    {
      name: "Winograd WSC",
      key: "winograd_wsc",
      type: "CR",
      type_long: "Commonsense",
      count: "196",
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
}
