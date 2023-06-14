import { useState } from "react";

export default function ShowResources({ children }: any) {
  const [show, setShow] = useState(false);

  return (
    <div className="w-full border-slate-400/30 border rounded-lg p-2 shadow-lg">
      {show ? (
        children
      ) : (
        <div className="w-full h-24 flex items-center">
          <button
            onClick={() => setShow(true)}
            className="mx-auto text-center border border-sky-400 rounded-lg hover:bg-sky-400 transition-all p-2"
          >
            Show Resources
          </button>
        </div>
      )}
    </div>
  );
}
