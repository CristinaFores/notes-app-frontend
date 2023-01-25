export interface CardNoteProps {
  id?: string;
  owner?: {
    username: string;
    id?: string;
  };
  title: string;
  description: string;
  date?: string;
}

const CardNote = ({ title, date, description }: CardNoteProps): JSX.Element => {
  return (
    <ul>
      <li>{title}</li>
      <li>{description}</li>
      <li>{date}</li>
    </ul>
  );
};

export default CardNote;
