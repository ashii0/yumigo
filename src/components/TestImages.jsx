import { useEffect, useState } from "react";
import { getImageUrl } from "../services/apiImageUrl";

function TestImages() {
  //   useEffect(() => {
  //     getImageUrl();
  //   }, []);

  //   return <div>Check console</div>;

  const [all, setAll] = useState([]);

  useEffect(() => {
    async function load() {
      const data = await getImageUrl();
      setAll(data);
    }
    load();
  }, []);

  return (
    <div>
      {all.map((folder) => (
        <div key={folder.folder}>
          <h2 className="text-xl font-bold">{folder.folder}</h2>

          <div className="grid grid-cols-4 gap-4">
            {folder.images.map((url) => (
              <img key={url} src={url} className="rounded-lg" />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default TestImages;
