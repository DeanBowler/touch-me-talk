import "./styles.css";

import { ApplicationForm } from "./components/ApplicationForm";

export default function App() {
  return (
    <div className="App">
      <h1 className="brand__title">Oakly Loans</h1>
      <ApplicationForm onSubmit={console.log} />
    </div>
  );
}
