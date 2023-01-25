import useNote from "../../hooks/useNotes/useNote";
import { Note } from "../../types/types";
import CardNote from "../CardNote/CardNote";

const ListNotes = (): JSX.Element => {
  const token = localStorage.getItem("token");
  const { response } = useNote({
    method: "GET",
    url: `/notes/`,
    headers: {
      Authorization: "Bearer " + token,
      accept: "*/*",
    },
  });

  return (
    <div>
      {response?.data.notes.map((note: Note) => (
        <CardNote
          title={note.title}
          description={note.description}
          date={note.date}
          key={note.id}
        />
      ))}
    </div>
  );
};

export default ListNotes;
