
import {genkit, ai} from 'genkit';
import {googleAI} from '@genkit-ai/googleai';

genkit({
  plugins: [
    googleAI({
      apiVersion: 'v1beta',
    }),
  ],
});

export {ai};

