import { useEffect } from "react";

const useNote = () => {
  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random").then((response) =>
      response.json()
    );
  }, []);
};

export default useNote;
