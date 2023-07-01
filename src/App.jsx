import { useState } from "react";
import "./App.css";

function App() {
  const faq = [
    { id: 1, title: "Munna", info: "Info about Munna" },
    {
      id: 2,
      title: "Uvais",
      info: "Info about Uvais",
    },
    {
      id: 3,
      title: "Chandran",
      info: "Info about Chandran",
    },

    {
      id: 4,
      title: "Sukhu",
      info: "Info about Sukhu",
    },
  ];

  const [activefaqId, setactivefaqId] = useState("");
  const handleFaq = (faqid) => {
    faqid == activefaqId
      ? setactivefaqId((prev) => (prev = ""))
      : setactivefaqId((prev) => (prev = faqid));
  };
  console.log("current faq", { activefaqId });

  return (
    <>
      <div className="accordion">
        <h1 className="accordion-header">Frequently Asked Questions</h1>
        <hr />
        {faq.map((data) => (
          <section key={data.id}>
            <div className="label">
              <div className="item">{data.title}</div>
              {activefaqId == data.id ? (
                <button onClick={() => handleFaq(data.id)}>-</button>
              ) : (
                <button onClick={() => handleFaq(data.id)}>+</button>
              )}
            </div>

            {activefaqId == data.id && (
              <div className="content">{data.info}</div>
            )}

            <hr />
          </section>
        ))}
      </div>
    </>
  );
}

export default App;
