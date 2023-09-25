import AgGridSolid from 'ag-grid-solid';

export default function MySolidApp ()  {
    return (
        // set fixed size to parent div, and apply grid theme ag-theme-alpine
        <div style={{height: '500px'}} class="ag-theme-alpine">
            <AgGridSolid
                rowData={[]}
                columnDefs={[]}
            />
        </div>
    );
};


