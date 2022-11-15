import { rest } from 'msw';
import { Note } from '../types';

const NOTES: Note[] = [];
const HOST = 'https://localhost:3000';
export const handlers = [
  rest.get('/config.json', (req, res, ctx) => {
    return res(
      ctx.json({
        CdkThreeTierServerlessStack: {
          HttpApiUrl: HOST,
        },
      }),
    );
  }),
  rest.get(`${HOST}/notes`, (req, res, ctx) => {
    return res(ctx.json(NOTES));
  }),
  rest.post<Note>(`${HOST}/notes`, (req, res, ctx) => {
    NOTES.push(req.body);
    return res(ctx.json(req.body));
  }),
];
