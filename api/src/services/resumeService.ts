import data from '../data/resume';

export const getResume = (): Promise<Resume> => {
  return Promise.resolve(data);
};
