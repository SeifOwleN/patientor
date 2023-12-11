import { useParams } from "react-router-dom";
import { Patient } from "../../types";
import HealthRatingBar from "../HealthRatingBar";
import { Table, TableBody, TableCell, TableRow } from "@mui/material";
import { useEffect, useState } from "react";
import patientsService from "../../services/patients";
import Entries from "./Entries";
const PatientPage = ({ _patients }: { patients: Patient[] }) => {
  const id = useParams().id;

  const [patient, setPatient] = useState<Patient>([]);

  useEffect(() => {
    const xdd = async () => {
      const aloo = await patientsService.getOne(id);
      setPatient(aloo[0]);
      console.log("aloo", aloo);
    };
    xdd();
  }, []);

  if (patient) {
    return (
      <>
        <Table>
          <TableBody>
            <TableRow key={patient.id}>
              <TableCell>{patient.name}</TableCell>
              <TableCell>{patient.gender}</TableCell>
              <TableCell>{patient.occupation}</TableCell>
              <TableCell>
                <HealthRatingBar showText={false} rating={1} />
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
        <h2>Entries</h2>
        <div>{patient.entriesX?.map((x) => <Entries entry={x} />)}</div>
      </>
    );
  }
};

export default PatientPage;
