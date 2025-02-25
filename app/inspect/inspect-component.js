'use client';

import { usePathname, useSearchParams } from 'next/navigation'
import { useRouter } from 'next/navigation';
import { Suspense, useEffect, useState } from 'react';
import * as Icons from "react-bootstrap-icons";
import { results, model_name_to_key } from '../results';
import { Nav } from '@/components/nav';

function DatasetTypeBadge({ children, className }) {
    var colorScheme = 'bg-slate-200 text-black';
    if (children === 'Math') {
      colorScheme = 'bg-blue-200 text-blue-800';
    } else if (children === 'Logic') {
      colorScheme = 'bg-red-200 text-red-800';
    } else if (children === 'Tab' || children === 'Table') {
      colorScheme = 'bg-yellow-200 text-yellow-800';
    } else if (children === 'RC' || children === 'Reading Comprehension' || children === 'Reading Comp' || children === 'Reading') {
      colorScheme = 'bg-green-200 text-green-800';
    }
    return <div className={"inline-block text-xs font-bold px-2 py-0 rounded-full " + colorScheme + " " + className}>{children}</div>;
  }


function InspectPageContents() {
    const [data, setData] = useState([]);
    const [datasetNamePretty, setDatasetNamePretty] = useState("");

    // const model_names = ['gpt-3.5-turbo-0125', 'gpt-4-0613', 'gpt-4o-mini', 'gpt-4o', 'o1-mini'];
    // const model_names = ['gpt-4o', 'gpt-4o-mini', 'claude-3-5-sonnet', 'meta-llama/Meta-Llama-3.1-70B-Instruct', 'meta-llama/Meta-Llama-3.1-405B-Instruct', 'gemini-1.5-flash', 'gemini-1.5-pro', 'mistral-small', 'mistral-large', 'o1-mini'];
    

    const model_names = [
        'mistral-small',
        'mistral-large',
        'gemini-1.5-flash',
        'gemini-1.5-pro',
        'meta-llama/Meta-Llama-3.1-70B-Instruct',
        'meta-llama/Meta-Llama-3.1-405B-Instruct',
        'gpt-4o-mini',
        'gpt-4o-2024-11-20',
        'gpt-4o-2024-08-06',
        'claude-3-5-sonnet',
        'meta-llama/Llama-3.3-70B-Instruct',
        'grok-2-1212',
        'claude-3-5-sonnet-20241022',
        'claude-3-5-haiku',
        'gemini-2.0-flash',
        'gemini-2.0-flash-thinking',
        'deepseek/deepseek-chat',
        'Qwen/Qwen2.5-72B-Instruct',
        'deepseek-r1',
        'o1-mini',
        'o1-preview-2024-09-12',
        'o1-2024-12-17-med',
        'o1-2024-12-17-high',
        'o3-mini-2025-01-31-high',
        'gemini-2.0-pro-02-05',
        'Qwen2.5-Max',
        'claude-3-7-sonnet-20250219',
        'claude-3-7-sonnet-20250219-thinking',
    ]
    const key_to_model_name = Object.fromEntries(Object.entries(model_name_to_key).map(([key, value]) => [value, key]))
    

    // const metadata = [{
    //     name: 'MMLU Math',
    //     key: 'mmlu_math',
    //     description: 'High school math',
    //     difficulty: 'High School',
    //     accuracy: [null, null, 91.9, 92.9, 98.0, 100, 100, 100, 100, 100],
    //     count: 197,
    //   }, {
    //     name: 'GSM8K',
    //     key: 'gsm8k',
    //     description: '8th-grade math word problems',
    //     difficulty: 'Middle School',
    //     accuracy: [null, null, 98.2, 98.9, 98.9, 100, 100, 100, 100, 100],
    //     count: 284,
    //   }, {
    //     name: 'SVAMP',
    //     key: 'svamp',
    //     description: 'Elementary-level math word problems',
    //     difficulty: 'Elementary School',
    //     accuracy: [null, null, 97.8, 98.5, 99.6, 100, 100, 100, 100, 100],
    //     count: 270,
    //   }, {
    //     name: 'MultiArith',
    //     key: 'math_eval__multiarith',
    //     description: 'Simple multi-step arithmetic word problems',
    //     difficulty: 'Elementary School',
    //     accuracy: [96.0, 100.0, 98.0, 100.0, 99.0, 100, 100, 100, 100, 100],
    //     count: 100
    //   }, {
    //     name: 'SingleEq',
    //     key: 'math_eval__singleq',
    //     description: 'Single equation word problems',
    //     difficulty: 'Elementary School',
    //     accuracy: [97.0, 100.0, 100.0, 100.0, 100.0, 100, 100, 100, 100, 100],
    //     count: 100
    //   }, {
    //     name: 'SingleOp',
    //     key: 'math_eval__singleop',
    //     description: 'Single operation arithmetic word problems',
    //     difficulty: 'Early Elementary School',
    //     accuracy: [99.0, 100.0, 100.0, 100.0, 100.0, 100, 100, 100, 100, 100],
    //     count: 99
    //   }
    //   ]

    const metadata = results;

    const searchParams = useSearchParams();
    const pathname = usePathname();
    const router = useRouter();
 
    const model = searchParams.get('model')
    const dataset = searchParams.get('dataset')

    useEffect(() => {
        // console.log("model", model);
        // console.log("dataset", dataset);

        if (model == null || model == 'null' || dataset == null || dataset == 'null') {
            const newModel = (model == null || model == 'null') ? "o1-mini" : model;
            const newDataset = (dataset == null || dataset == 'null') ? "math_eval__multiarith" : dataset;
            // console.log("No model or dataset provided");
            const newRoute = `${pathname}?model=${newModel}&dataset=${newDataset}`;
            // console.log("New route:", newRoute);
            router.push(newRoute);
        }
    }, [model, dataset]);

    useEffect(() => {
        const datasetObj = metadata.filter(item => item.key == dataset)[0];
        if (datasetObj) {
            setDatasetNamePretty(datasetObj.name);
        }
    }, [dataset]);
    

    const fetchData = async () => {
        if (model == null || model == 'null' || dataset == null || dataset == 'null') {
            return;
        }
        // try {
        //     const response = await fetch('/api/get_data?data_name='+dataset);
        //     const data = await response.json();
        //     setData(data['data']);
        //     console.log('got data')
        //     console.log(data)
        // } catch (error) {
        //     console.error('Error fetching data:', error);
        // }

        try {
            const response = await fetch('/errors/errors_'+dataset.replace('math_eval__', '')+'.json');
            const data = await response.json();
            setData(data);
            // console.log('got data')
            // console.log(data)
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        fetchData();
    }, [dataset]);
    
    const setIsExpanded = (index, value) => {
        const newData = {...data};
        newData[model][index]['is_expanded'] = value;
        setData(newData);
    }

    return (
      <div className="grow flex flex-row w-full overflow-hidden max-w-[1200px] pt-4">
        <div className="w-72 lg:w-96 shrink-0 h-full overflow-scroll border-r-none border-slate-300 pe-2">
          <h1 className="text-lg text-left px-7 pt-6 h-16 font-medium">
            Datasets
          </h1>
          <div>
            {metadata.map((item, index) => (
              <div
                key={index}
                className="border-none border-slate-200 first:border-t"
              >
                <a
                  href={`/inspect?model=${model}&dataset=${item.key}`}
                  className={
                    `block mx-4 my-1 px-3 py-2 hover:bg-slate-200 text-slate-600 hover:text-slate-900 rounded-lg ` +
                    (item.key == dataset && "bg-slate-200 text-slate-900")
                  }
                >
                  <div className="flex flex-row items-center">
                    <div className="grow pe-2">
                      <div className="font-medium text-sm">
                        {item.name}
                        <DatasetTypeBadge className="inline-block ms-2">
                          {item.type_long || item.type}
                        </DatasetTypeBadge>
                      </div>
                      <div className="font-medium text-xs text-slate-500">
                        {item.description}
                      </div>
                    </div>
                    <Icons.ChevronRight className="inline-block shrink-0 float-right w-3 h-3" />
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
        <div className="h-full grow flex flex-col">
          <div className="shrink-0 border-b border-slate-300 px-6 py-3">
            {/* <h1 className="text-3xl mb-6 text-left font-serif">Error Viewer</h1> */}
            <h1 className="text-xl mb-6 text-left font-medium">
              Showing errors on <b className="text-blue-600">{dataset}</b>{" "}
              from <b className="text-blue-600">{model}</b>
            </h1>
            <div className="text-md">Pick a model to view errors for:</div>
            <div className="mt-0">
              {model_names.map((model_name, index) => (
                <div key={index}
                  className={
                    `inline-block px-0.5 py-0 rounded-lg  mx-0.5 mt-1 text-sm ` +
                    (model_name == model
                      ? `bg-slate-700 text-white border border-slate-700 hover:bg-slate-600`
                      : `border border-slate-600 hover:bg-slate-200` +
                          (data[model_name]?.length 
                          ? " bg-transparent text-slate-700 " 
                          : " bg-slate-200 text-slate-500")
                      )
                  }
                >
                  <a
                    href={`/inspect?model=${model_name}&dataset=${dataset}`}
                    className={"inline-flex items-center px-2"
                    }
                  >
                    {key_to_model_name[model_name]}
                    {/* number of errors */}
                    {data[model_name]?.length ? (
                      <div
                        className={
                          "inline-flex items-center justify-center ms-2 px-1 text-xs rounded-full h-4 min-w-4 " +
                          (model_name == model
                            ? "bg-white text-slate-700"
                            : "bg-slate-700 text-white")
                        }
                      >
                        {data[model_name]?.length}
                      </div>
                    ) : (
                      ``
                    )}
                  </a>
                </div>
              ))}
            </div>
          </div>
          <div className="grow w-full px-8 py-6 overflow-y-scroll">
            {data[model]?.length == 0 && (
              <div className="text-center text-lg text-slate-600">
                No errors made by <b>{key_to_model_name[model]}</b> on <b>{datasetNamePretty}</b>
              </div>
            )}
            {data[model]?.map((error, index) => {
              // const prediction = question['predictions'].filter(pred => pred['model_name'] == model)[0];
              // if (!prediction) return null;
              // const solution = question['user_answer'] != undefined ? question['user_answer'] : question['answer'];
              // const is_bad_question = question['is_bad_question'] != undefined ? question['is_bad_question'] : false;
              // if (prediction['prediction'] == solution || is_bad_question) return null;
              const question = error["prompt"];
              const prediction = error["prediction"];
              const solution = error["platinum_target"].join("; ");

              return (
                <div
                  key={index}
                  className="bg-white rounded-lg py-4 px-4 mb-4 border border-slate-300"
                >
                  <div className="flex flex-row mb-4">
                    <div className="w-20 text-sm shrink-0 font-bold text-slate-600 mt-1">
                      Question
                    </div>
                    <div className="grow text-left bg-slate-100 px-3 py-2 rounded-lg whitespace-pre-wrap text-sm">
                      {question}
                    </div>
                  </div>
                  <div className="flex flex-row flex-wrap items-center justify-end gap-3">
                    <div className="grow flex flex-row flex-wrap items-center">
                      <div className="w-20 text-sm shrink-0 font-bold text-slate-600">
                        Solution
                      </div>
                      <div className="text-left text-md bg-slate-100 px-3 py-2 rounded-lg font-bold">
                        {solution}
                      </div>
                      <div className="ms-5 text-sm shrink-0 font-bold text-slate-600 me-2">
                        Prediction by {key_to_model_name[model]}
                      </div>
                      <div className="text-left text-md bg-red-100 px-3 py-2 rounded-lg font-bold">
                        {prediction}
                      </div>
                    </div>
                    <button
                      onClick={() =>
                        setIsExpanded(index, !error["is_expanded"])
                      }
                      className="shrink-0 ms-8 inline-block text-slate-700 border border-slate-600 px-4 py-2 rounded-lg hover:bg-slate-300 text-sm underline"
                    >
                      {error["is_expanded"] ? "Hide" : "Show"} output
                    </button>
                  </div>
                  {error["is_expanded"] && (
                    <div className="mt-4 flex flex-row">
                      <div className="w-20 text-sm shrink-0 font-bold text-slate-600">
                        Output
                      </div>
                      <div className="grow border border-slate-400 px-3 py-2 rounded-lg whitespace-pre-wrap text-xs font-mono">
                        {error["explanation"]}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
}

export default function InspectPage() {
  return (
    <main className="flex flex-col items-center h-screen text-left bg-slate-50 min-w-[800px]">
      <Nav active="inspect" />
      <Suspense fallback={<div className='mt-8 text-lg'>Loading...</div>}>
        <InspectPageContents />
      </Suspense>
    </main>
  )
}
