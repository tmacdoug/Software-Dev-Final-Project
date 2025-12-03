import { Component } from '@angular/core';
import { TopbarComponent } from '../../components/topbar/topbar.component';

@Component({
  selector: 'app-dashboard',
  template: `
    <h2>Dashboard</h2>
    <p>
      Generative AI has had several major developments across the past few months. One such development is the next frontier of Generative AI— Agentic AI's. Companies like Microsoft
      are already implementing specialized Agentic AI's into tools like Copilot, which can be used to automate repetitive tasks for users. Retrieval-Augmented Generation 
      has seen an uptick in use as well, with some LLM's considering its usage to augment information retrieval and reasoning capabilities. Self-training models are becoming more
      and more prevalent as well, with their effectiveness coming to match supervised models in recent times. Additionally, Inference Scaling is making models more and more efficient,
      as can be seen in the graphs on the Report and Summary pages. Inference scaling seeks to reduce inference time for different models, making them more efficient
      and quicker to use. With a higher focus on reducing inference time, models will become more and more accessible for everyone, and capable of being applied to 
      a variety of different tasks. Finally, strides towards more ethical AI's are being made as well. AI governance platforms have begun to be put into place, ensuring adherence to
      copyright laws, ethical usage (stopping deepfakes and other malicious uses), etc. This topic continues to remain massively important as time goes on.
      
    </p>
    <p>Technical overview: This website was built using Angular as the frontend, and NodeJS as the backend. Data is held in a Mongo database, and is displayed using Chart.js.</p>
    <p>Reference: https://synoptek.com/insights/thought-leadership/data-insights/genai-trends-key-developments-to-watch-out-for/</p>
  `
})
export class DashboardComponent {}
