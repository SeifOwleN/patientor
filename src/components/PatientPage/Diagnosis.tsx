import { useEffect, useState } from "react";
import patients from "../../services/patients";

const Diagnosis = ({ code }: { code: string }) => {
  const [name, setName] = useState("");
  useEffect(() => {
    const xdd = async () => {
      const diaName = await patients.getDiagnosis(code);
      setName(diaName);
      console.log("diaName", diaName);
    };
    xdd();
  }, []);
  return <>{name}</>;
};

export default Diagnosis;
