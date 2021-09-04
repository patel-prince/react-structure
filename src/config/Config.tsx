// ColDef

import { AgGridReactProps, AgReactUiProps } from "ag-grid-react/lib/interfaces";

interface ConfigProps {
	[key: string]: any;
	grid: {
		local: AgGridReactProps | AgReactUiProps;
		server?: AgGridReactProps | AgReactUiProps;
	};
}

const Config: ConfigProps = {
	gutter: 24,
	sidebar_width: 260,
	dateFormat: "DD/MM/YYYY",
	dateTimeFormat: "DD/MM/YYYY HH:mm:ss",
	grid: {
		local: {
			gridOptions: {
				animateRows: true,
				pagination: true,
				paginationPageSize: 500,
				rowHeight: 36,
				enableRangeSelection: true,
			},
			defaultColDef: {
				resizable: true,
				sortable: true,
				filter: "agTextColumnFilter",
				filterParams: {
					suppressAndOrCondition: true,
				},
				floatingFilter: true,
				flex: 1,
			},
			columnTypes: {
				actionColumn: {
					cellRenderer: "ActionRenderer",
				},
			},
		},
	},
};

export default Config;
