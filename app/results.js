
const results_num_errors = {
'singleop': [0,0,1,0,0,0,0,2,0,0,1,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
'singleq': [0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
'multiarith': [0,0,1,0,0,1,0,0,1,0,0,0,0,0,0,1,1,1,0,0,0,0,1,1,0,1,0,0,0,0,0,0,0],
'svamp': [3,2,1,5,6,6,7,7,5,12,11,1,6,4,1,8,3,0,2,4,1,0,1,1,1,3,0,0,0,0,3,0,1],
'gsm8k': [2,5,2,7,4,6,3,7,6,11,19,2,7,3,3,10,8,4,3,7,2,2,1,1,7,2,3,1,1,2,4,3,4],
'mmlu_math': [28,29,4,20,22,13,33,39,24,23,62,2,44,14,21,43,5,2,12,16,1,0,1,1,5,11,14,4,3,8,7,0,2],
'bbh_logical_deduction_three_objects': [0,0,1,0,0,2,4,4,2,5,27,0,0,1,0,4,0,4,0,3,0,0,0,1,0,1,0,0,0,0,0,0,0],
'bbh_object_counting': [1,0,2,4,0,9,1,2,14,15,18,15,1,2,0,5,0,5,10,10,0,0,0,1,4,5,1,0,0,0,0,0,0],
'bbh_navigate': [5,0,1,4,4,9,11,9,7,18,30,3,10,5,1,11,7,3,0,3,0,0,1,0,7,3,0,0,0,0,2,2,0],
'tab_fact': [1,3,1,1,1,5,3,4,14,17,11,3,4,5,1,13,2,2,1,3,0,0,1,0,3,2,0,1,0,0,3,1,3],
'hotpotqa': [2,0,3,2,3,1,3,1,4,3,10,3,2,1,0,3,3,3,1,4,0,0,1,2,1,1,0,1,1,1,1,1,3],
'squad': [4,3,9,7,9,14,11,7,15,13,21,11,8,8,3,9,7,6,7,8,8,5,6,35,7,9,4,5,3,0,8,7,6],
'drop': [4,3,3,3,3,7,10,9,13,12,24,5,7,5,6,10,6,6,3,5,2,0,6,3,4,5,4,3,2,2,4,1,3],
'winograd_wsc': [8,8,19,12,10,17,11,17,27,21,39,6,14,15,3,31,22,17,16,12,8,5,7,14,11,7,5,4,7,3,10,2,6],
}



export const model_score = {
'gemini-2.5-pro-exp-03-25': 0.532887087564488,
'o1-2024-12-17-high': 0.744551208319324,
'grok-3-beta': 0.785760515719738,
'claude-3-7-sonnet-20250219-thinking': 0.93044839246394,
'gpt-4.5-preview-2025-02-27': 0.992599448758693,
'claude-3-7-sonnet-20250219': 1.0529499687703,
'claude-3-5-sonnet-20241022': 1.08676793661843,
'o1-2024-12-17-med': 1.26532598262471,
'deepseek-r1': 1.40330895685757,
'grok-3-mini-beta': 1.51198254504106,
'claude-3-5-sonnet': 1.84439285716567,
'meta-llama/Meta-Llama-3.1-405B-Instruct': 1.91948865658197,
'Qwen2.5-Max': 2.05176328125018,
'meta-llama/Llama-4-Maverick-17B-128E-Instruct-FP8': 2.11753366378125,
'gpt-4o-2024-08-06': 2.25569047248107,
'o1-preview-2024-09-12': 2.38444216723371,
'gemini-2.0-pro-02-05': 2.47261845802908,
'gpt-4o-2024-11-20': 2.48101103896069,
'deepseek/deepseek-chat': 2.76685652021152,
'o1-mini': 2.911802691938,
'gemini-2.0-flash-thinking': 3.03333941449384,
'Qwen/Qwen2.5-72B-Instruct': 3.11124276338011,
'o3-mini-2025-01-31-high': 3.17996898880687,
'grok-2-1212': 3.21229318680904,
'mistral-large': 3.44035784989104,
'gemini-2.0-flash': 3.53670094694453,
'meta-llama/Llama-3.3-70B-Instruct': 3.61710933054387,
'meta-llama/Meta-Llama-3.1-70B-Instruct': 4.04004601904843,
'gemini-1.5-pro': 4.18904064807972,
'gpt-4o-mini': 6.88991808237092,
'claude-3-5-haiku': 6.97605715368369,
'gemini-1.5-flash': 7.09745783648561,
'mistral-small': 11.0059810399101,
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
      count: "267",
      errors: [3, 2, 1, 4, 6, 7, 7, 6, 13, 11, 4, 7, 4, 1, 8, 4, 0, 3],
      description: 'Elementary-level math word problems'
    },
    {
      name: "GSM8K",
      key: "gsm8k",
      type: "Math",
      count: "271",
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
      count: "162",
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
}
