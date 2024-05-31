import OpenAI from 'openai';

const getOpenAIClinet = (): OpenAI => {
  const openai = new OpenAI({
    apiKey: process.env["OPENAI_API_KEY"], // This is the default and can be omitted
  });
  return openai;
};

export { getOpenAIClinet }