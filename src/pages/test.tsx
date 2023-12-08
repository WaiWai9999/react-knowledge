// eslint-disable-next-line @typescript-eslint/no-restricted-imports
import { DataGrid, GridColDef, GridRowsProp } from '@mui/x-data-grid'
import * as React from 'react'

interface VoteGridProps {
  rows: GridRowsProp
  columnsAll: GridColDef[]
}

const VoteGrid: React.FC<VoteGridProps> = ({ rows, columnsAll }) => {
  let isOnlyOneRow = false

  if (rows.length === 1) {
    isOnlyOneRow = true
  }

  return (
    <DataGrid
      rows={rows}
      columns={columnsAll}
      autoHeight
      pageSizeOptions={[10, 20, 30, 40]}
      initialState={{
        pagination: {
          paginationModel: { page: 0, pageSize: 10 },
        },
      }}
      disableColumnMenu
      disableRowSelectionOnClick={false}
      rowSelection={false}
      sx={{
        color: 'gray',
        width: '100%',
        overflow: 'hidden',
        border: 'none !important',
        '& .MuiDataGrid-root': {
          overflow: 'visible !important',
          whiteSpace: 'normal !important',
        },
        '@media screen and (max-width: 1000px)': {
          overflow: 'hidden',
          '& .MuiDataGrid-autoHeight': {
            maxHeight: 'none !important',
            height: isOnlyOneRow ? '400px !important' : 'auto',
          },
          '& .css-1kwdphh-MuiDataGrid-virtualScrollerContent': {
            maxHeight: 'none !important',
            height: isOnlyOneRow ? '400px !important' : 'auto',
          },
        },

        '& .MuiDataGrid-columnHeader': {
          maxWidth: 'none !important',
          padding: '0px 24px !important',
          '&:focus, &:focus-within': {
            outline: 'none !important',
          },
          '&:hover': {
            border: 'none !important',
          },
        },
        '& .css-1iyq7zh-MuiDataGrid-columnHeaders': {
          '@media screen and (max-width: 1000px)': {
            display: 'none',
          },
        },
        '& .MuiDataGrid-row': {
          ...(isOnlyOneRow
            ? {
                boxShadow:
                  'rgb(126, 137, 253) 2px 2px 0px 0px inset, ' +
                  'rgb(126, 137, 253) -2px 0px 0px 0px inset, ' +
                  'rgb(126, 137, 253) 0px -2px 0px 0px inset, ' +
                  'rgb(126, 137, 253) -2px 1px 0px 0px inset',
                borderRadius: '8px 8px 8px 8px',
              }
            : {
                '&:first-child': {
                  boxShadow:
                    'inset 0px 2px 0px rgba(126, 137, 253), ' +
                    'inset -2px 0px 0px rgba(126, 137, 253), ' +
                    'inset 2px 0px 0px rgba(126, 137, 253)',
                  borderRadius: '8px 8px 0px 0px',
                },
                '&:last-child': {
                  boxShadow:
                    'rgb(126, 137, 253) 2px 1px 0px 0px inset, ' +
                    'rgb(126, 137, 253) -2px 0px 0px 0px inset, ' +
                    'rgb(126, 137, 253) 0px -2px 0px 0px inset, ' +
                    'rgb(126, 137, 253) -2px 1px 0px 0px inset',
                  borderRadius: '0px 0px 8px 8px',
                },
              }),
          '&:not(:first-child):not(:last-child)': {
            boxShadow:
              'inset 0px 1px 0px rgba(126, 137, 253), ' +
              'inset -2px 0px 0px rgba(126, 137, 253), ' +
              'inset 2px 0px 0px rgba(126, 137, 253), ' +
              'inset 0px 0px 0px #7e89fd',
          },
          '&:hover': {
            background: 'none !important',
          },
          '@media screen and (max-width: 1000px)': {
            maxHeight: 'none !important',
            height: 'auto',
            flexWrap: 'wrap',
            fontSize: '18px',
            alignItems: 'flex-start',
            padding: '8px 0',
          },
        },
        '& .MuiDataGrid-cell': {
          height: 'auto',
          lineHeight: 1.2,
          fontWeight: 600,
          whiteSpace: 'normal !important',
          wordBreak: 'break-word',
          borderBottom: 'none !important',
          padding: '16px 24px !important',
          '&:focus, &:focus-within': {
            outline: 'none !important',
          },
          '&:last-child': {
            padding: '0px !important',
          },
          '@media screen and (max-width: 1000px)': {
            alignItems: 'left',
            width: '50%',
            maxHeight: 'none !important',
            maxWidth: 'none !important',
            '&:first-child, &:last-child': {
              maxWidth: 'none !important',
              maxHeight: 'none !important',
              width: '100%',
            },
            '&:last-child': {
              padding: '16px 24px !important',
            },
          },
          '@media screen and (max-width: 500px)': {
            minWidth: 'none !important',
            maxWidth: 'none !important',
            '&:first-child': {
              width: '100%',
            },
            '&:last-child': {
              width: '100%',
            },
          },
        },
        '& .MuiDataGrid-cell .smTxt': {
          opacity: 0.7,
          fontWeight: 450,
          fontSize: 13,
          '@media screen and (max-width: 1000px)': {
            fontSize: 14,
            opacity: 'inherit',
            fontWeight: 400,
          },
        },
        '& .css-wop1k0-MuiDataGrid-footerContainer': {
          borderStyle: 'none !important',
        },
        '& .css-axafay-MuiDataGrid-virtualScroller': {
          height: '100%',
          '@media screen and (max-width: 1000px)': {
            overflowX: 'hidden',
            overflowY: 'scroll !important',
          },
        },
        '& .css-5wly58-MuiDataGrid-root .MuiDataGrid-withBorderColor': {
          borderColor: 'none',
        },
        '& .MuiDataGrid-withBorderColor': {
          border: 'none !important',
        },
      }}
    />
  )
}

export default VoteGrid
