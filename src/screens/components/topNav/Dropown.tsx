import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import Flags from "../json/CountryFlags.json";

export default function MultilineTextFields() {
  const Queries = [
    {
      value: "Selected Properies",
      label: "Selected Properies"
    },
    {
      value: "Vacant Properies",
      label: "Vacant Properies"
    },
    {
      value: "All Properties",
      label: "All Properties"
    }
  ];

  const [countryFlag, setCountryFlag] = useState(Flags[101].file_url);
  const [Query, setQuery] = useState("All Properties");

  const useStyles = makeStyles((theme) => ({
    root: {
      "& .MuiTextField-root": {
        margin: theme.spacing(1)
      }
    }
  }));
  const classes = useStyles();

  const handleChange = (event :any) => {
    setCountryFlag(event.target.value);
  };

  const handlePropertties = (event :any) => {
    setQuery(event.target.value);
  };

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div>
        <TextField
          select
          value={countryFlag}
          onChange={handleChange}
          variant="outlined"
        >
          {Flags.map((option) => (
            <MenuItem
              key={option.file_url}
              value={option.file_url}
              onClick={() => setCountryFlag(option.file_url)}
            >
              <img src={option.file_url} width="20px" height="20px" alt="" />
            </MenuItem>
          ))}
        </TextField>

        <TextField
          select
          variant="outlined"
          value={Query}
          onChange={handlePropertties}
          style={{ width: "180px" }}
        >
          {Queries.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </div>
    </form>
  );
}
