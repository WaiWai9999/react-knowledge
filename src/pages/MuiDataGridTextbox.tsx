import React, { useState, useEffect } from "react";
import { DataGrid, GridColDef, GridRowsProp } from "@mui/x-data-grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { alpha, styled } from "@mui/material/styles";
import styledCompo from "styled-components/macro";

export default function MuiDataGridTextbox() {
  const CustomDataGrid = styledCompo(DataGrid)`
    color: gray !important;
  `;

  type CustomRow = {
    id: number;
    pair: string;
    type: string;
    customCell: string;
  };

  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "pair", headerName: "Pair", width: 120 },
    { field: "type", headerName: "Type", width: 120 },
    {
      field: "customCell",
      headerName: "Custom Cell",
      width: 200,
      //editable: true,
      renderCell: (params) => {
        const row = params.row;
        const textboxId = `voteTextbox-${row.id}`;
        const vote = votesArray[row.pair] ? votesArray[row.pair].vote : 0;
        console.log("hasOwnProperty");
        const displayedValue = vote === 0 ? "" : vote;
        return (
          <div>
            <TextField
              type="text"
              placeholder="Enter Vote"
              value={displayedValue}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                handleTextFieldChange(e, row)
              }
              id={textboxId}
            />
            <Button
              onClick={() => {
                handleButtonClick(row);
              }}
            >
              MAX
            </Button>
          </div>
        );
      },
    },
  ];
  type VoteData = {
    [pair: string]: {
      vote: number;
      type: string;
    };
  };
  const [votesArray, setVotesArray] = useState<VoteData>({});

  const rows: GridRowsProp = [
    {
      id: 1,
      pair: "USDC-ETH",
      type: "Variation",
      customCell: "",
    },
    {
      id: 2,
      pair: "SKY-ETH",
      type: "Variation",
      customCell: "",
    },
    {
      id: 3,
      pair: "SKY-MATIC",
      type: "Variation",
      customCell: "",
    },
    // Add more rows here...
  ];

  function handleButtonClick(row: CustomRow) {
    console.log("Button clicked for row with ID:", row.id);
  }
  function handleTextFieldChange(
    e: React.ChangeEvent<HTMLInputElement>,
    row: CustomRow
  ) {
    console.log("handleTextFieldChange");

    const vote = Number(e.target.value); // Parse the value to a number
    const type = row.type;
    const pair = row.pair;

    console.log(vote);

    setVotesArray((prevVotes: VoteData) => ({
      ...prevVotes,
      [pair]: { ...prevVotes[pair], vote, type },
    }));

    console.log("After");
    console.log(votesArray);
  }

  useEffect(() => {
    // Function to initialize the votesArray with pair, type, and vote set to 0
    const initializeVotesArray = () => {
      const initialVotes: VoteData = {};

      rows.forEach((row) => {
        initialVotes[row.pair] = {
          vote: 0,
          type: row.type,
        };
      });
      setVotesArray(initialVotes);
      console.log("initialVotes");
      console.log(initialVotes);
    };
    initializeVotesArray();
  }, []);
  return (
    // <div style={{ height: 400, width: "100%" }}>
    <DataGrid
      rows={rows}
      columns={columns}
      autoHeight
      disableRowSelectionOnClick={false}
      rowSelection={true}
    />
    // </div>
  );
}
