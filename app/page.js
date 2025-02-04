'use client';
import Image from "next/image";
import { useState } from "react";
import * as Icons from "react-bootstrap-icons";
import { results, models, model_score, model_name_to_key } from "./results";
import { Nav } from "@/components/nav";

function DatasetName({ children }) {
  return <div className="h-full w-full min-w-40 shrink-0 text-left flex flex-col justify-center px-2">{children}</div>;
}

// function for a grid block that acepts a child prop and a classname prop
function GridBlock({ children, className, style, url }) {
  if (url) {
    return <a className={`h-10 w-16 shrink-0 mx-0 flex flex-col items-center justify-center ${className}`} style={style} href={url}>{children}</a>;
  }
  return <div className={`h-10 w-16 shrink-0 mx-0 flex flex-col items-center justify-center ${className}`} style={style}>{children}</div>;
}

function GridBlockCheckmark() {
  return <GridBlock className="bg-green-500">
    <Icons.Check className="w-8 h-8 text-white mt-[-4px]" />
    <p className="text-xs mt-[-8px] text-white">100%</p>
    {/* <p className="text-xs mt-[-8px] text-white">No errors</p> */}
  </GridBlock>;
}

function GridBlockRed({ children }) {
  return <GridBlock className="bg-red-500 text-white">
    {children}
  </GridBlock>;
}

function GridBlockRedErrors({ children }) {
  return <GridBlockRed>
    <h1 className="text-md">{children}</h1>
    <p className="text-xs mt-[-4px]">errors</p>
  </GridBlockRed>;
}


function OutlineButtonWithURL({ children, url }) {
  return <a
    href={
      url
    }
    className="mx-1.5 text-white text-sm font-medium h-10 bg-slate-700 rounded-lg px-4 py-2 hover:bg-slate-300 cursor-pointer inline-flex items-center"
  >
    {children}
  </a>;
}


function ModelOutput({ model, reasoning, answer, answer_className}) {
  const [isExpanded, setIsExpanded] = useState(false);
  
  return (
    <div className="border border-slate-300 rounded-lg p-4 my-4 bg-slate-100">
      <div className="font-bold text-slate-700 mb-2">{model}</div>
      {isExpanded ? (
        <>
          <div className="text-slate-600 whitespace-pre-wrap my-3 font-mono text-sm">{reasoning}</div>
          <div className="font-bold font-mono text-sm">Answer: <span className={answer_className}>{answer}</span></div>
          <button 
            onClick={() => setIsExpanded(false)}
            className="text-blue-600 hover:text-blue-800 mt-2 text-sm"
          >
            Show less
          </button>
        </>
      ) : (
        <div className="flex justify-between items-center">
          <div className="font-bold font-mono text-sm text-slate-700">Answer: <span className={answer_className}>{answer}</span></div>
          <button 
            onClick={() => setIsExpanded(true)}
            className="text-blue-600 hover:text-blue-800 text-sm"
          >
            Show reasoning
          </button>
        </div>
      )}
    </div>
  );
}


function DatasetTypeBadge({ children }) {
  var colorScheme = 'bg-slate-200 text-black';
  if (children === 'Math') {
    colorScheme = 'bg-blue-200 text-blue-800';
  } else if (children === 'Logic') {
    colorScheme = 'bg-red-200 text-red-800';
  } else if (children === 'Tab' || children === 'Table') {
    colorScheme = 'bg-yellow-200 text-yellow-800';
  } else if (children === 'RC' || children === 'Reading Comprehension' || children === 'Reading') {
    colorScheme = 'bg-green-200 text-green-800';
  }
  return <div className={"inline-block text-xs font-bold px-2 py-0.5 rounded-full " + colorScheme}>{children}</div>;
}

export default function Home() {
  const [showPercent, setShowPercent] = useState(false);
  // const model_names = ['LLaMA 3.1 7B', 'LLaMA 3.1 405B', 'GPT-4o mini', 'GPT-4o'];


  // # Qs	# Bad Qs	# Mislabeled	# Good Qs	gpt-3.5-turbo-0125	gpt-4-0613	gpt-4o-mini	gpt-4o	o1-mini
  // math_eval__multiarith	100	0	1	100	100	100	100	100	100
  // math_eval__singleop	100	1	0	99	98	98	98	98	98
  // math_eval__singleq	100	0	0	100	95	94	94	94	94
  // const model_names = models; //['gpt-3.5-turbo-0125', 'gpt-4-0613', 'gpt-4o-mini', 'gpt-4o', 'o1-mini'];

  // const data = [{
  //   name: 'MMLU College Math',
  //   key: 'mmlu_college_math',
  //   description: 'College math problems',
  //   difficulty: 'University Undergraduate',
  //   accuracy: [null, null, 81.0, 75.0, 94.0],
  //   count: 100,
  // }, {
  //   name: 'MMLU Math',
  //   key: 'mmlu_math',
  //   description: 'High school math',
  //   difficulty: 'High School',
  //   accuracy: [null, null, 91.9, 92.9, 98.0],
  //   count: 197,
  // }, {
  //   name: 'GSM8K',
  //   key: 'gsm8k',
  //   description: '8th-grade math word problems',
  //   difficulty: 'Middle School',
  //   accuracy: [null, null, 98.2, 98.9, 98.9],
  //   count: 284,
  // }, {
  //   name: 'SVAMP',
  //   key: 'svamp',
  //   description: 'Elementary-level math word problems',
  //   difficulty: 'Elementary School',
  //   accuracy: [null, null, 97.8, 98.5, 99.6],
  //   count: 270,
  // }, {
  //   name: 'MultiArith',
  //   key: 'math_eval__multiarith',
  //   description: 'Simple multi-step arithmetic word problems',
  //   difficulty: 'Elementary School',
  //   accuracy: [96.0, 100.0, 98.0, 100.0, 99.0],
  //   count: 100
  // }, {
  //   name: 'SingleEq',
  //   key: 'math_eval__singleq',
  //   description: 'Single equation word problems',
  //   difficulty: 'Elementary School',
  //   accuracy: [97.0, 100.0, 100.0, 100.0, 100.0],
  //   count: 100
  // }, {
  //   name: 'SingleOp',
  //   key: 'math_eval__singleop',
  //   description: 'Single operation arithmetic word problems',
  //   difficulty: 'Early Elementary School',
  //   accuracy: [99.0, 100.0, 100.0, 100.0, 100.0],
  //   count: 99
  // }
  // ]

  const avg_accuracy_per_model = models.map((model_name, model_index) => {
    // const accuracies = results.map((dataset, dataset_index) => {
    //   const accuracy = (dataset.count - dataset.errors[model_index]) / dataset.count * 100;
    //   return accuracy;
    // });
    // const avg_accuracy = accuracies.reduce((a, b) => a + b, 0) / accuracies.length;
    // return 2;
    console.log(model_name, model_name_to_key[model_name], model_score[model_name_to_key[model_name]]);
    return model_score[model_name_to_key[model_name]];
  });
  console.log(avg_accuracy_per_model);


  // const data = results;
  const accuracy_order_index = avg_accuracy_per_model.map((_, i) => i).sort((a, b) => avg_accuracy_per_model[a] - avg_accuracy_per_model[b]);
  const data = results;
  console.log(accuracy_order_index);

  const model_names = models;
  const model_names_sorted = accuracy_order_index.map(i => model_names[i]);
  const data_sorted = data.map(dataset => {
    return {
      ...dataset,
      errors: accuracy_order_index.map(i => dataset.errors[i])
    };
  })
  // .sort((a, b) => a.type.localeCompare(b.type))
  .sort((a, b) => (a.errors.reduce((x, y) => x + y, 0) / Number.parseInt(a.count)) - (
    b.errors.reduce((x, y) => x + y, 0) / Number.parseInt(b.count)));

  
  // const data = [{
  //   name: 'One Digit Addition',
  //   description: '100 easy addition questions',
  //   accuracy: [100, 100, 100, 100]
  // }, {
  //   name: '10-Document Context Retrieval',
  //   description: '500 context retrieval problems',
  //   num_errors: [29, 0, 0, 0],
  //   accuracy: [94, 100, 100, 100]
  // }, {
  //   name: 'Open-book QA',
  //   description: '500 multiple choice questions from context.',
  //   num_errors: [29, 12, 0, 0],
  //   accuracy: [94.2, 97.6, 100, 100]
  // }, {
  //   name: 'Winograd Schema Challenge',
  //   description: '285 semantic reasoning',
  //   num_errors: [58, 15, 3, 1],
  //   accuracy: [79.6, 94.7, 98.9, 99.6]
  // }, {
  //   name: 'Math Word Problems',
  //   description: '100 8th-grade math word problems',
  //   num_errors: [57, 12, 8, 5],
  //   accuracy: [92, 95, 97.3, 98.5]
  // }];


  return (
    <main className="flex flex-col items-center min-h-screen pb-8 px-4 md:px-8 text-center bg-slate-50">
      <Nav active="overview" />


      <section className="w-full min-h-[500px] flex flex-col items-center justify-center px-10 py-16 mt-8" >

        <div className="text-center">

          <h1 className="text-3xl md:text-6xl mb-10 font-serif font-medium leading-normal md:leading-normal">Do Large Language Model  <br /> Benchmarks Test Reliability?</h1>

          {/* Header Section

  Title: "Large Language Model Benchmarks Do Not Test Reliability"
  Authors: Joshua Vendrow, Edward Vendrow, Sara Beery, Aleksander Mądry
  Institutional affiliation: MIT
  Links to paper, code (if available), and authors' pages

  Abstract/Overview Section */}

          <p className="text-lg mb-3 font-medium">Joshua Vendrow*, Edward Vendrow*, Sara Beery†, and Aleksander Mądry†</p>
          <p className="text-lg mb-3">Massachusetts Institute of Technology</p>
          <p className="text-sm mb-5">*Equal contribution. †Equal advising.</p>

          <div className="inline-flex">
            <OutlineButtonWithURL>
              <Icons.FileEarmarkPdf className="w-4 h-4 inline-block mr-1" />
              Paper
            </OutlineButtonWithURL>
            <OutlineButtonWithURL>
              <Icons.Link45deg className="w-4 h-4 inline-block mr-1" />
              arXiv
            </OutlineButtonWithURL>
            <OutlineButtonWithURL>
              <Icons.Github className="w-4 h-4 inline-block mr-1" />
              Code
            </OutlineButtonWithURL>
           
          </div>
          <div className="mt-4">
          <a className="rounded-lg px-4 py-1 mx-2 inline-block hover:bg-slate-200" href="https://huggingface.co/datasets/madrylab/platinum-bench" target="_blank">
              <div className="text-sm font-medium flex items-center mb-0.5">
                <img src="/images/hf-logo.svg" alt="Hugging Face" className="w-5 h-5 inline-block me-1" />
                HuggingFace
              </div>
              <div>
                <p className="text-xs font-mono">load_dataset("madryml/platinum-bench")</p>
              </div>
            </a>
          </div>
        </div>

      </section>

      {/* <h1 className="text-3xl mb-5">🎯 Model Reliability</h1> */}
      <div className="w-full max-w-[800px] flex flex-col items-start font-medium text-left mb-6">
        {/* <p className="mb-8">Language models have achieved impressive capabilities, from solving graduate-level problems to generating complex code. However, when deploying these models in real-world applications, reliability is crucial - models need to consistently provide correct answers, not just perform well on average.</p> */}
        {/* <p className="mb-8">We propose <b className="text-sky-500 italic">Platinum Benchmarks</b> that are carefully curated to minimize label errors and ambiguity, where perfect performance is possible. This dataset containts fifteen platinum benchmarks created by manually revising questions from existing datasets. We ran a variety of frontier models on our benchmarks and verified that all errors they make are genuine.</p> */}
        <p className="mb-8">
          When deploying LLMs in real-world applications, reliability is crucial - models need to consistently provide correct answers, not just perform well on average. To measure this kind of reliability, We propose <b className="text-sky-500 font-bold italic">Platinum Benchmarks</b> that are carefully curated to minimize label errors and ambiguity, where perfect performance is possible. As a first attempt at constructing such benchmarks, we manually revised fifteen existing benchmarks remove dataset errors.
        </p>

        <p className="mb-8">Along the way, we realized we can use these benchmarks to make an interpretable leaderboard. Sometimes, it can be hard to understand what the performance on a benchmark really means. In our case, every single error corresponds to a genuine error that a frontier LLM makes on a simple task. By clicking on each model/benchmark pair below, you can look at the exact questions the model failed on and how it messed up. Doing so can actually tell us a lot about the ways that LLMs fail (hint: look at “New Failure Patterns” below)</p>

        <p><b>Turns out, frontier language models still make mistakes on surprisingly simple tasks:</b></p>

        <p className="text-slate-600 text-sm">Press on a box to view the corresponding errors.</p>

{/* 
        <p className="mb-8">Language models need to be reliabile to be used in the real world. <br />
          To test their capabilities, we created problem sets where perfect performance is possible. <br />
          <b>A reliable and performant model could pass each of these tests.</b></p> */}
      </div>

      <div className="flex max-w-full items-start">

        <div className="flex bg-white rounded-lg border border-slate-200 py-4 px-3 overflow-scroll">
          {/* Left pane */}
          <div className="border-r border-r-slate-300">

            {/* # Errors Button */}
            <div className="h-24 mb-2 flex justify-start">
              <button className="ms-2 text-slate-700 text-sm font-bold h-10 border border-slate-400 rounded-lg px-4 underline py-2 hover:bg-slate-300" onClick={() => setShowPercent(!showPercent)}>
                {showPercent ? 'Show # Errors' : 'Show Accuracy'}
              </button>
            </div>


            {/* a grid block with rotated text of the title */}
            {model_names_sorted.map((model_name, index) => (
              <div key={index} className="h-10 my-0 me-2 flex justify-center">
                <DatasetName>
                  <div className="text-md font-bold text-slate-700">
                    {model_name}
                  </div>
                  {/* <div className="text-slate-700 text-xs italic">{dataset.description}</div> */}
                </DatasetName>
              </div>
            ))}
          </div>

          {/* Right side of pane */}
          <div className="ps-4">
            <div className="h-24 mb-2 flex flex-row justify-start">
              <div className='w-14 mx-1 shrink-0 flex flex-col font-bold text-sm justify-end'>
                Score
              </div>
              {data_sorted.map((dataset, index) => (
                  <div key={index} className='w-14 mx-1 shrink-0 flex flex-col font-medium text-xs justify-end'>
                    {dataset.name}

                    <div className="text-slate-600 text-xs font-bold mt-2">
                      {/* <Icons.MortarboardFill className="w-4 h-4 inline-block mr-1 mt-[-3px]" /> */}
                      
                      {/* badge goes here */}
                      <DatasetTypeBadge>
                        {dataset.type}
                      </DatasetTypeBadge>
                    </div>
                    <div className="text-slate-600 text-xs font-bold mt-1">
                      {dataset.count} Qs
                    </div>
                  </div>
              ))}
            </div>
            {model_names_sorted.map((model_name, index) => (
              <div key={index} className="my-0 flex justify-start">
                
                {/* Overall score */}
                <GridBlock className={`text-slate-800 bg-slate-200`}
                          url={`/inspect?model=${model_name_to_key[model_name]}`}>

                  {/* {showPercent ? (
                      <h1 className="text-sm font-bold">{avg_accuracy_per_model[model_names.indexOf(model_name)].toFixed(1)}%</h1>) : 
                    (
                      <h1 className="text-sm font-bold">{(data_sorted.reduce((acc, dataset) => acc + dataset.errors[index], 0) / data_sorted.length).toFixed(1)}</h1>
                    )
                  } */}
                  <h1 className="text-sm font-bold">{avg_accuracy_per_model[model_names.indexOf(model_name)].toFixed(1)}%</h1>
                </GridBlock>

                {data_sorted.map((dataset, d_index) => {
                  const errors = dataset.errors[index];
                  const accuracy = (dataset.count - errors) / dataset.count * 100;
                  if (accuracy == null) {
                    return <GridBlock key={d_index} className="bg-slate-300 text-slate-700"
                        >N/A</GridBlock>;
                  }
                  let bgColor = 'bg-red-700';
                  let bgColorHover = 'bg-red-600';
                  if (accuracy == 100) {
                    return <GridBlockCheckmark key={d_index} 
                            url={`/inspect?model=${model_name_to_key[model_name]}&dataset=${dataset.key}`}/>;
                  }


                  if (accuracy >= 90) {
                    bgColor = 'bg-red-500';
                    bgColorHover = 'bg-red-600';
                  }
                  if (accuracy >= 96) {
                    bgColor = 'bg-orange-500';
                    bgColorHover = 'bg-orange-600';
                  }
                  if (accuracy >= 98) {
                    bgColor = 'bg-yellow-500';
                    bgColorHover = 'bg-yellow-600';
                  }
                  // if (accuracy >= 99) {
                  //   // something between yellow and green green-500
                  //   bgColor = 'bg-lime-500';
                  //   bgColorHover = 'bg-lime-600';
                  // }
                  if (accuracy == 100) {
                    bgColor = 'bg-green-500';
                    bgColorHover = 'bg-green-600';
                  }

                  // // gradual color from red to green based on accuracy
                  // let accScale = Math.max(accuracy - 90, 0) * 5 / 100;
                  // const r = Math.max(200 - accScale*200, 0);
                  // const g = Math.min(accScale*150, 150);
                  // const b = 0
                  // bgColor = `rgb(${r},${g},${b})`;


                    return (
                    // <GridBlock key={index} className={`text-white ` + bgColor}>
                    <GridBlock key={d_index} className={`text-white ` + bgColor + ` hover:bg-slate-600`}
                              url={`/inspect?model=${model_name_to_key[model_name]}&dataset=${dataset.key}`}>
                      {showPercent ? <h1 className="text-sm">{accuracy.toFixed(1)}%</h1> : (
                        <>
                          <h1 className="text-md font-bold">{dataset.errors[index]}</h1>
                          <p className="text-xs mt-[-6px] text-white">Error{dataset.errors[index] > 1 && `s`}</p>
                        </>
                      )}
                      {/* // {/* <h1 className="text-lg">{accuracy.toFixed(1)}%</h1> */}
                      {/* // <h1 className="text-xl">{Math.round((100-accuracy) * dataset.count / 100)}</h1> */}
                    </GridBlock>
                    );
                })}
              </div>
            ))}

            <div className="mt-3 italics text-sm font-medium text-slate-700">
              Number of errors per model on each benchmark
            </div>
            
          </div>
          {/* <div className="h-20 my-2 flex justify-center">
            <DatasetName>
              <div className="text-md font-medium">Math Word Problems</div>
              <div className="text-slate-700 text-sm">100 8th-grade math word problems</div>
            </DatasetName>
            <GridBlockRedErrors>57</GridBlockRedErrors>
            <GridBlockRedErrors>12</GridBlockRedErrors>
            <GridBlockRedErrors>8</GridBlockRedErrors>
            <GridBlockRedErrors>5</GridBlockRedErrors>
          </div> */}
        </div>
      </div>
      <div>
              {/* key */}
      <div className="mt-4 max-w-full">
        <div className="flex flex-wrap mt-2 text-sm">
          <h2 className="text-md font-bold mr-4 ">Key:</h2>
          <div className="flex items-center mr-4 mb-2">
            <DatasetTypeBadge>Math</DatasetTypeBadge>
            <span className="ml-2 text-sm">Mathematics</span>
          </div>
          <div className="flex items-center mr-4 mb-2">
            <DatasetTypeBadge>Logic</DatasetTypeBadge>
            <span className="ml-2 text-sm">Logical Reasoning</span>
          </div>
          <div className="flex items-center mr-4 mb-2">
            <DatasetTypeBadge>Tab</DatasetTypeBadge>
            <span className="ml-2 text-sm">Table Understanding</span>
          </div>
          <div className="flex items-center mr-4 mb-2">
            <DatasetTypeBadge>RC</DatasetTypeBadge>
            <span className="ml-2 text-sm">Reading Comprehension</span>
          </div>
          <div className="flex items-center mr-4 mb-2">
            <DatasetTypeBadge>CR</DatasetTypeBadge>
            <span className="ml-2 text-sm">Commonsense Reasoning</span>
          </div>
        </div>
      </div>
    </div>


    <section className="text-left w-full max-w-[800px] mt-10">
      <h1 className="text-4xl mt-12 font-serif">Key Findings</h1>

      <h2 className="text-xl mb-2 font-bold font-serif mt-6">No Model is Truly Reliable</h2>
      <p>Despite demonstrating advanced capabilities like solving graduate-level problems, every model we tested still makes mistakes on basic tasks. For instance, we found models that could tackle complex calculus problems failing to perform elementary arithmetic or answer simple questions about event sequences. These aren't rare edge cases - the failures occur consistently and predictically.</p>

      <h2 className="text-xl mb-2 font-bold font-serif mt-6">Current Benchmarks Hide Problems</h2>
      <p>When we examined popular benchmarks like GSM8K and SVAMP, we found significant rates of errors and ambiguities in the questions themselves. In GSM8K, about 5% of questions contained problems. This benchmark noise has masked true model performance - many reported "errors" were actually correct responses to flawed questions.</p>

      <h2 className="text-xl mb-2 font-bold font-serif mt-6">Different Models, Different Strengths</h2>
      <p>While no model achieved perfect performance across our tests, we found interesting patterns in their reliability. OpenAI's o1-mini showed the strongest performance on mathematics, while Claude Sonnet 3.5 excelled at reading comprehension. This suggests that choosing the right model depends on the specific task.</p>
    </section>

    <section className="text-left w-full max-w-[800px] mt-10">
        <h1 className="text-4xl mt-12 font-serif">Revising Noisy Benchmarks</h1>

        <p className="mt-8">Nearly all benchmarks have some level of noise, whether from mislabeled answers or ambigous questions. But to clean them, manually inspecting every example from a benchmark would be extremely time-consuming. To speed up the process, we first show each question to twenty different LLMs, and inspect any question for which any of the models made a mistake. We expect that if a question is ambiguous, models would disagree among themselves, and if a question is mislabeled, models would be likely to have a different answer than the stated solution. So, this approach should catch these kinds of errors. Here are examples of some of the benchmark errors that we found:</p>

          
          
          {/* Indeed, once a benchmark reaches a sufficiently high score (typically around 95%), it is usually deemed "saturated" and the community moves on to harder benchmarks. Instead, we use a simple strategy to clean up these benchmarks to ensure that all model failures are genuine.</p> */}



        <div className="p-6 rounded-lg mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border border-slate-400 rounded-lg overflow-hidden">
              <div className="font-medium px-6 py-3 bg-slate-200 border-b border-b-slate-400">
              Mislabeled question, <span className="font-bold text-slate-600">SVAMP</span>
              </div>
              <div className="px-6 py-4">
                <p className="mb-4 text-sm">You had 14 bags with equal number of cookies. If you had 28 cookies and 86 can- dies in total. How many bags of cookies do you have?
                  <br /> <br />
                Given Answer: 2</p>
                <div className="text-red-600 bg-red-100 px-2 py-1 rounded-lg">There are 14 bags, not 2.</div>
              </div>
            </div>

            <div className="border border-slate-400 rounded-lg overflow-hidden">
              <div className="font-medium px-6 py-3 bg-slate-200 border-b border-b-slate-400">
              Logical contradiction, <span className="font-bold text-slate-600">GSM8K</span>
              </div>
              <div className="px-6 py-4">
                <p className="mb-4 text-sm"><span className="text-red-600">Ten stalls</span> have 20 cows each. Mr. Sylas buys 40 cows and divides them equally, putting an equal number of the new cows into each of the <span className="text-red-600">twenty stalls</span>. How many cows are in 8 of the stalls?</p>
                <div className="text-red-600 bg-red-100 px-2 py-1 rounded-lg">There are both ten and twenty stalls.</div>
              </div>
            </div>

            <div className="border border-slate-400 rounded-lg overflow-hidden">
              <div className="font-medium px-6 py-3 bg-slate-200 border-b border-b-slate-400">
              Ambiguity, <span className="font-bold text-slate-600">VQA v2.0</span>
              </div>
              <div className="px-6 py-4">
                <div className="flex flex-row items-center mb-4">
                  <img src="/images/vqa_question.png" alt="VQA Ambiguity" className="w-1/2 h-auto inline" /> 
                  <p className="grow ps-2 text-sm">Question: Does the baby have socks on?</p>
                </div>
                <div className="text-red-600 bg-red-100 px-2 py-1 rounded-lg">There is no way to tell.</div>
              </div>
            </div>

            <div className="border border-slate-400 rounded-lg overflow-hidden">
              <div className="px-6 py-3 bg-slate-200 border-b border-b-slate-400">
              Clear flaw / ill-posed, <span className="font-bold text-slate-600">MMLU HS Math</span>
              </div>
              <div className="px-6 py-4">
                <p className="mb-6 text-sm">
                  A curve is given parametrically by the equations <br /><br />
                  Options: <br /><br />
                  A)π/2 B)π C)2+π D)2π
                </p>
                <div className="text-red-600 bg-red-100 px-2 py-1 rounded-lg">
                The curve equations are missing.</div>
              </div>
            </div>


          </div>
          <p className="text-sm mt-4 text-slate-600 text-center">Examples of errors in current LLM benchmarks.</p>
          </div>

          <p className="mt-8">
            It turns out that many “saturated” benchmarks are indeed riddled with errors. Now that we have cleaned up these benchmarks, what can they tell us about LLM reliability?
          </p>
        
      </section>



        
      <section className="text-left w-full max-w-[800px] mt-10">
        <h1 className="text-4xl mt-12 font-serif">New Failure Patterns</h1>
        <p className="mt-4">Through careful analysis of model mistakes, we identified previously unknown patterns of questions where models consistently fail in predictable ways.</p>

        <h2 className="text-xl mb-4 font-bold font-serif mt-8">First Event Bias</h2>
        <p className="mb-4">When asked "What happened second: X or Y?" several models consistently answer with the first event - even while explicitly acknowledging in their reasoning that they've identified the first event rather than the second.</p>

        <div className="border border-slate-400 rounded-lg my-6 overflow-hidden">
          <div className="font-medium px-6 py-3 bg-slate-200 border-b border-b-slate-400">
            Example Question
            </div>
          <div className="px-6 py-4">
            <p className="mb-4"><i>[context paragraph]</i> What happened second: Russians blocked Azov or Treaty of Constantinople?</p>
            <div className="font-bold text-green-600 mb-4">Correct Answer: Treaty of Constantinople</div>
            
            <ModelOutput 
              model="Claude 3.5 Sonnet"
              reasoning="...we can conclude that the Russians blocking Azov happened before the Treaty of Constantinople."
              answer="Russians blocked Azov"
              answer_className={'text-red-500'}
            />
            
            <ModelOutput 
              model="Mistral Small"
              reasoning="...Therefore, the Russians blocked Azov first, and the Treaty of Constantinople was signed later."
              answer="The Russians blocked Azov second"
              answer_className={'text-red-500'}
            />
            
            <ModelOutput 
              model="Gemini 1.5 Pro"
              reasoning="...Since the Treaty of Constantinople followed the events at Azov and the Dnieper campaign, the blockade of Azov happened first."
              answer="Russians blocked Azov"
              answer_className={'text-red-500'}
            />
          </div>
        </div>

        <h2 className="text-xl mb-4 font-bold font-serif mt-8">Prime Number Effects</h2>
        <p className="mb-4">We discovered that Claude 3.5 Sonnet frequently makes arithmetic errors when answers are prime numbers or close to prime numbers. For example, when dividing to get a whole number result, the model often incorrectly rounds up if the answer is prime, even though no rounding is needed.</p>

        <div className="border border-slate-400 rounded-lg my-6 overflow-hidden">
          <div className="font-medium px-6 py-3 bg-slate-200 border-b border-b-slate-400">
            Example Question
            </div>
          <div className="px-6 py-4">
            <p className="mb-4">The school is planning a field trip. The school has 67 classrooms. There are 66 students in each classroom in the school. If there are 6 seats on each school bus. How many buses are needed to take the trip?</p>
            <div className="font-bold text-green-600 mb-4">Correct Answer: 737</div>
            
            <ModelOutput 
              model="Claude 3.5 Sonnet"
              reasoning="To find the number of buses needed, we divide the total number of students by the number of seats per bus: 4,422 ÷ 6 = 737. However, since we can't have a fraction of a bus, we need to round up to the next whole number to ensure all students have a seat."
              answer="738"
            />
          </div>
        </div>
      </section>


      <section className="text-left w-full max-w-[800px] mt-10">
        <h1 className="text-4xl mt-12 font-serif">Conclusion</h1>

        <p className="mt-6">
          Our work demonstrates that even the most advanced language models still struggle with basic tasks. The platinum benchmarks we've constructed are an initial step towards evaluating reliability, and we encourage researchers to use them to evaluate their frontier models&mdash;but more work is needed to create comprehensive tests that cover a wide range of tasks and domains.
        </p>
        <p className="mt-4">
          We hope that our work motivates the adoption of platinum benchmarks in evaluating LLMs to ensure they meet the high reliability standards required for real-world applications.
        </p>
      </section>
      

      <section className="text-left w-full max-w-[800px] mt-10 pb-8">

          <div className="border-t border-slate-300 mt-8 pt-6 px-4">
            <h3 className="text-2xl font-serif mb-4">Authors</h3>
            {/* grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">

              
              <div className="flex flex-row justify-center items-center mt-4">
                <img
                  src="/images/josh.png"
                  className="rounded-full border border-slate-200 w-12 h-12"
                />
                <div className="grow px-4">
                  <div className="text-lg font-medium font-serif">Joshua Vendrow</div>
                  <div>
                    <a target="_blank" href="https://joshvendrow.com/" className="text-black inline-block w-7 h-7 me-2">
                      <Icons.Globe className="w-full h-full inline rounded-lg text-slate-700 hover:text-black hover:bg-slate-200 p-1" />
                    </a>
                    <a target="_blank" href="https://x.com/josh_vendrow" className="text-black inline-block w-7 h-7 me-2">
                      <Icons.TwitterX className="w-full h-full inline rounded-lg text-slate-700 hover:text-black hover:bg-slate-200 p-1" />
                    </a>
                    <a target="_blank" href="https://github.com/jvendrow" className="text-black inline-block w-7 h-7 me-2">
                      <Icons.Github className="w-full h-full inline rounded-lg text-slate-700 hover:text-black hover:bg-slate-200 p-1" />
                    </a>
                  </div>
                </div>
              </div>


              <div className="flex flex-row justify-center items-center mt-4">
                <img
                  src="/images/eddie.png"
                  className="rounded-full border border-slate-200 w-12 h-12"
                />
                <div className="grow px-4">
                  <div className="text-lg font-medium font-serif">Edward Vendrow</div>
                  <div>
                    <a target="_blank" href="https://edwardv.com" className="text-black inline-block w-7 h-7 me-2">
                      <Icons.Globe className="w-full h-full inline rounded-lg text-slate-700 hover:text-black hover:bg-slate-200 p-1" />
                    </a>
                    <a target="_blank" href="https://x.com/EdwardVendrow" className="text-black inline-block w-7 h-7 me-2">
                      <Icons.TwitterX className="w-full h-full inline rounded-lg text-slate-700 hover:text-black hover:bg-slate-200 p-1" />
                    </a>
                    <a target="_blank" href="https://github.com/evendrow" className="text-black inline-block w-7 h-7 me-2">
                      <Icons.Github className="w-full h-full inline rounded-lg text-slate-700 hover:text-black hover:bg-slate-200 p-1" />
                    </a>
                  </div>
                </div>
              </div>


              <div className="flex flex-row justify-center items-center mt-4">
                <img
                  src="/images/sara.jpeg"
                  className="rounded-full border border-slate-200 w-12 h-12"
                />
                <div className="grow px-4">
                  <div className="text-lg font-medium font-serif">Sara Beery</div>
                  <div>
                    <a target="_blank" href="https://beerys.github.io/" className="text-black inline-block w-7 h-7 me-2">
                      <Icons.Globe className="w-full h-full inline rounded-lg text-slate-700 hover:text-black hover:bg-slate-200 p-1" />
                    </a>
                    <a target="_blank" href="https://x.com/sarameghanbeery" className="text-black inline-block w-7 h-7 me-2">
                      <Icons.TwitterX className="w-full h-full inline rounded-lg text-slate-700 hover:text-black hover:bg-slate-200 p-1" />
                    </a>
                  </div>
                </div>
              </div>


              <div className="flex flex-row justify-center items-center mt-4">
                <img
                  src="/images/aleks.png"
                  className="rounded-full border border-slate-200 w-12 h-12"
                />
                <div className="grow px-4">
                  <div className="text-lg font-medium font-serif">Aleksander Mądry</div>
                  <div>
                    <a target="_blank" href="https://madry.mit.edu/" className="text-black inline-block w-7 h-7 me-2">
                      <Icons.Globe className="w-full h-full inline rounded-lg text-slate-700 hover:text-black hover:bg-slate-200 p-1" />
                    </a>
                    <a target="_blank" href="https://x.com/aleks_madry" className="text-black inline-block w-7 h-7 me-2">
                      <Icons.TwitterX className="w-full h-full inline rounded-lg text-slate-700 hover:text-black hover:bg-slate-200 p-1" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

      </section>


    </main>
  );
}
