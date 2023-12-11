import { List, ListItem } from "@mui/material";
import { Entry } from "../../types";
import Diagnosis from "./Diagnosis";
import "./index.css";
const Entries = ({ entry }: { entry: Entry }) => {
  return (
    <div id="Entry">
      <h3>{entry.date}</h3>
      {entry.description}
      <List>
        {entry.diagnosisCodes?.map((x) => (
          <ListItem>
            {x} <Diagnosis code={x} />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default Entries;
