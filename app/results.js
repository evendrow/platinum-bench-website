
const results_num_errors = {
  'math_eval__singleop': [0,0,1,0,0,0,0,2,0,0,1,0,0,1,0,0,0,0,1,0,0],
  'math_eval__singleq': [0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0],
  'math_eval__multiarith': [0,0,1,0,0,1,0,0,1,0,0,0,0,0,0,1,1,1,0,0,0],
  'svamp': [3,2,1,6,7,6,7,7,6,13,11,1,7,4,1,8,4,0,3,4,0],
  'gsm8k': [2,5,2,7,5,6,3,7,6,11,19,3,7,3,3,10,8,4,3,7,3],
  'mmlu_math': [26,33,4,32,20,18,35,38,30,26,63,6,30,19,19,45,8,8,9,14,2],
  'bbh_logical_deduction_three_object': [0,0,1,0,1,2,4,4,2,5,27,0,0,1,0,4,0,4,0,3,0],
  'bbh_object_counting': [1,0,2,4,0,9,1,2,14,15,18,15,1,2,0,5,0,5,10,10,0],
  'bbh_navigate': [5,0,1,4,4,9,11,9,7,18,30,3,10,5,1,11,7,3,0,3,0],
  'tab_fact': [1,3,2,1,2,5,3,4,14,17,12,4,4,5,1,13,2,2,1,3,1],
  'hotpot_qa': [2,0,3,2,3,1,4,1,4,3,10,3,2,1,0,3,3,5,1,4,3],
  'squad2.0': [4,3,9,7,10,14,11,7,16,13,21,11,8,8,3,10,7,6,9,8,7],
  'drop': [5,4,4,4,5,8,12,10,14,13,26,6,8,6,7,11,7,7,4,6,3],
  'winograd_wsc': [7,8,16,7,8,15,13,14,27,25,36,4,13,12,4,24,22,24,12,10,6],
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
      key: "math_eval__singleop",
      type: "Math",
      count: "153",
      errors: [0, 0, 1, 1, 0, 0, 2, 0, 0, 1, 1, 0, 2, 0, 0, 0, 1, 1],
      description: 'Single operation arithmetic word problems',
    },
    {
      name: "SingleEq",
      key: "math_eval__singleq",
      type: "Math",
      count: "103",
      errors: [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      description: 'Single equation word problems'
    },
    {
      name: "MultiArith",
      key: "math_eval__multiarith",
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
      key: "bbh_logical_deduction_three_object",
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
      key: "hotpot_qa",
      type: "RC",
      type_long: "Reading Comp",
      count: "189",
      errors: [2, 0, 3, 1, 1, 4, 1, 4, 3, 10, 3, 2, 1, 1, 3, 3, 5, 1],
      description: "Natural, multi-hop reading comprehension questions",
    },
    {
      name: "SQuAD2.0",
      key: "squad2.0",
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
    'o1-preview (2024-09-12)',
    'Llama 3.3 70B Inst',
    'Grok 2',
    'Claude Sonnet 3.5 (Oct)',
    'Claude Haiku 3.5',
    'Gemini 2.0 Flash',
    'Gemini 2.0 Flash Thinking',
    'Deepseek V3',
    'Qwen2.5-72B-Instruct',
    'o1-2024-12-17 (high)'
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
    'GPT 4o (Nov)': 'gpt-4o-2024-11-20',
    'GPT 4o (Aug)': 'gpt-4o-2024-08-06',
    'Claude Sonnet 3.5 (June)': 'claude-3-5-sonnet',
    'o1-mini': 'o1-mini',
    'o1-preview (2024-09-12)': 'o1-preview-2024-09-12',
    'Llama 3.3 70B Inst': 'meta-llama/Llama-3.3-70B-Instruct',
    'Grok 2': 'grok-2-1212',
    'Claude Sonnet 3.5 (Oct)': 'claude-3-5-sonnet-20241022',
    'Claude Haiku 3.5': 'claude-3-5-haiku',
    'Gemini 2.0 Flash': 'gemini-2.0-flash',
    'Gemini 2.0 Flash Thinking': 'gemini-2.0-flash-thinking',
    'Deepseek V3': 'deepseek/deepseek-chat',
    'Qwen2.5-72B-Instruct': 'Qwen/Qwen2.5-72B-Instruct',
    'o1-2024-12-17 (high)': 'o1-2024-12-17-high'
}
