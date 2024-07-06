
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { Box } from '@mui/material';

interface Component1Prop {
    data: Array<{ userId: number; id: number; title: string; body: string }>;
}

function Component1({ data }: Component1Prop) {

    const columns: GridColDef[] = [
        { field: 'id', headerName: 'ID', width: 80, },
        { field: 'title', headerName: 'Title', width: 500 },
        { field: 'body', headerName: 'Body', width: 500 }
    ];

    return (
        <Box sx={{ height: 630, width: "80%", marginBottom: 5 }}>
            {/* <div className='table'> */}
            <DataGrid
                rows={data}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: { page: 0, pageSize: 10 },
                    },
                }}
                pageSizeOptions={[10, 20]}
            />
            {/* </div> */}
        </Box>
    )
}

export default Component1