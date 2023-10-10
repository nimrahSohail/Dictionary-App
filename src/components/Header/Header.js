import React from "react";
import "./Header.css";
import {
  TextField,
  ThemeProvider,
  createTheme,
  MenuItem,
} from "@material-ui/core";
import categories from "../../data/category";

function Header({ setcategory, category, word, setword }) {
  const darkTheme = createTheme({
    palette: {
      // primary works when we click on the textfield
      primary: {
        main: "#fff",
      },
      type: "dark",
    },
  });

  const handleChange = (language) => {
    setcategory(language);
    setword("");
  };

  return (
    <div className="header">
      <span className="title">{word ? word : "Word Hunt"}</span>

      <div className="inputs">
        <ThemeProvider theme={darkTheme}>
          <TextField
            variant="standard"
            className="search"
            label="Search a word"
            value={word}
            onChange={(e) => setword(e.target.value)}
          />

          <TextField
            className="select"
            select
            label="Language"
            value={category}
            onChange={(e) => handleChange(e.target.value)}
            //   defaultValue="EUR"
          >
            {categories.map((option) => (
              <MenuItem key={option.label} value={option.label}>
                {option.value}
              </MenuItem>
            ))}
          </TextField>
        </ThemeProvider>
      </div>
    </div>
  );
}

export default Header;
