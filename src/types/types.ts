export interface Note {
  id: string;
  owner: {
    username: string;
    id?: string;
  };
  title: string;
  description: string;
  date?: string;
}
