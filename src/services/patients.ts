import axios from "axios";
import { Diagnosis, Patient, PatientFormValues } from "../types";

import { apiBaseUrl } from "../constants";

const getAll = async () => {
  const { data } = await axios.get<Patient[]>(`${apiBaseUrl}/patients`);

  return data;
};

const create = async (object: PatientFormValues) => {
  const { data } = await axios.post<Patient>(`${apiBaseUrl}/patients`, object);
  console.log(data);

  return data;
};

const getOne = async (id: string) => {
  const { data } = await axios.get<Patient>(`${apiBaseUrl}/patients/${id}`);
  return data;
};

const getDiagnosis = async (code: string) => {
  const { data } = await axios.get<Diagnosis>(
    `${apiBaseUrl}/diagnoses/${code}`,
  );
  return data[0].name;
};

export default {
  getAll,
  create,
  getOne,
  getDiagnosis,
};
