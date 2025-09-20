
import {genkit, ai} from 'genkit';
import {googleAI} from 'genkit/plugins/googleai';

genkit({
  plugins: [
    googleAI({
      apiVersion: 'v1beta',
    }),
  ],
  logLevel: 'debug',
  enableTracingAndMetrics: true,
});

export {ai};
