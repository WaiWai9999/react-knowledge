import React from "react";
import styled from "styled-components/macro";
import {
  DataGrid,
  GridColDef,
  GridRowsProp,
  GridRowModel,
} from "@mui/x-data-grid";

const HeaderStyles = `
  color: white;
  font-weight: 700;
`;
const GridContainer = styled.div`
  display: flex;
  align-items: flex-end;
  margin: 64px;
  height: auto;
  width: auto;
`;
const CustomDataGrid = styled(DataGrid)`
  height: auto;
  width: auto;

  .MuiDataGrid-columnHeaderTitle {
    ${HeaderStyles}
  }
  .MuiDataGrid-columnHeadersInner {
    background-color: #368bcf;
  }
  .MuiDataGrid-cell {
    padding: 8px !important;
  }
  .MuiDataGrid-cell:focus,
  .MuiDataGrid-cell:focus-within {
    outline: none !important;
  }
`;

const MathScoreArea = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: nowrap;
  font-weight: 400;
  text-decoration: none;
  border: none;
  position: relative;

  :hover {
    background: none;
    border: none;
  }

  @media screen and (max-width: 500px) {
    gap: 16px;
  }

  @media screen and (max-width: 1000px) {
    gap: 16px;
  }
`;
const MathTextbox = styled.input`
  width: 92%;
  padding: 6px 6px 6px 10px;
  border: 2px solid #7e89fd;
  border-radius: 8px;
  color: inherit;
  font-size: 14px;
  font-weight: 600;
  text-align: left;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: #007bff;
  }

  @media screen and (max-width: 1000px) {
    width: 100%;
    height: 40px;
  }
  @media screen and (max-width: 500px) {
    width: 100%;
    height: 40px;
    padding: 6px 6px 6px 10px;
  }
`;

const MaxButton = styled.button`
  color: #ffffff;
  background: #7e89fd;
  border: none;
  margin: 3px 0px 0px -5px;
  height: 26px;
  border-radius: 5px;
  transition: 0.3s;
  text-decoration: none;
  display: inline-block;
  -webkit-appearance: none;

  @media screen and (max-width: 1000px) {
    margin: 4px 0px 0px -7px;
    width: 22%;
    height: 32px;
    padding: 4px !important;
  }

  @media screen and (max-width: 500px) {
    width: 20%;
    max-width: none !important;
    text-align: center;
    padding: 4px !important;
    margin-left: -3px;
  }
`;

function EditableGrid() {
  // データグリッドの行データを定義する配列
  const rows: GridRowsProp = [
    {
      id: 1,
      studentId: "1001",
      studentName: "John Doe",
      mathScore: 95,
      scienceScore: 88,
      historyScore: 92,
    },
    {
      id: 2,
      studentId: "1002",
      studentName: "Jane Smith",
      mathScore: 88,
      scienceScore: 92,
      historyScore: 85,
    },
    {
      id: 3,
      studentId: "1003",
      studentName: "Michael Johnson",
      mathScore: 92,
      scienceScore: 78,
      historyScore: 90,
    },
    {
      id: 4,
      studentId: "1004",
      studentName: "Sarah Davis",
      mathScore: 78,
      scienceScore: 85,
      historyScore: 92,
    },
    {
      id: 5,
      studentId: "1005",
      studentName: "David Wilson",
      mathScore: 85,
      scienceScore: 90,
      historyScore: 88,
    },
  ];

  // データグリッドの列の定義
  const columns: GridColDef[] = [
    { field: "studentId", headerName: "Student ID", width: 120, flex: 1 },
    { field: "studentName", headerName: "Student Name", width: 180, flex: 1 },
    {
      field: "mathScore",
      headerName: "Math Score",
      width: 120,
      //editable: true,
      flex: 1,
      type: "number",
      renderCell: (params) => {
        const row = params.row;
        // const textboxId = `voteTextbox-${row.id}`
        // const voteValue = votesArray[row.pair] ? votesArray[row.pair].vote : 0
        // const displayedValue = voteValue === 0 ? '' : voteValue.toString()
        return (
          <MathScoreArea>
            <MathTextbox
              type="text"
              placeholder="Enter Vote"
              //value={displayedValue}
              //onChange={(e) => handleMathTextboxOnChange(e, row.pair, row.type)}
              id={params.row.studentId}
            />
            <MaxButton
              onClick={() => {
                // handleMaxButtonClick(row)
              }}
            >
              MAX
            </MaxButton>
          </MathScoreArea>
        );
      },
    },
    {
      field: "scienceScore",
      headerName: "Science Score",
      width: 150,
      editable: true,
      flex: 1,
      type: "number",
    },
    {
      field: "historyScore",
      headerName: "History Score",
      width: 160,
      editable: true,
      flex: 1,
      type: "number",
    },
    {
      field: "totalScore",
      headerName: "Total Score",
      width: 140,
      flex: 1,
      type: "number",
      renderCell: (params) => {
        const totalScore =
          Number(params.row.mathScore) +
          Number(params.row.scienceScore) +
          Number(params.row.historyScore);
        return totalScore;
      },
    },
  ];

  const handleProcessRowUpdate = (
    newRow: GridRowModel,
    oldRow: GridRowModel
  ) => {
    console.log("newRow:");
    console.log(newRow);
    console.log("oldRow:");
    console.log(oldRow);

    return newRow;
  };

  return (
    <GridContainer>
      <CustomDataGrid
        //システムオーバーライドと追加のCSSスタイルを定義できるシステムプロ
        sx={{
          boxShadow: 2,
          border: 2,
          borderColor: "primary.light",
          "& .MuiDataGrid-cell:hover": {
            color: "primary.main",
          },
        }}
        //行セット
        rows={rows}
        //列セット
        columns={columns}
        //グリッドの高さは動的で、グリッド内の行数に従い
        autoHeight
        // ページネーションフッターを非表示にする
        hideFooterPagination={true}
        //行選択モードを無効化
        rowSelection={false}
        //行の更新を処理するためのコールバック関数を定義
        processRowUpdate={handleProcessRowUpdate}
      />
    </GridContainer>
  );
}

export default EditableGrid;
