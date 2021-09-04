import { AgGridReact } from "ag-grid-react";
import { AgGridReactProps, AgReactUiProps } from "ag-grid-react/lib/interfaces";
import React from "react";
import Config from "../../config/Config";

const AgGridWrapper: React.FC<AgReactUiProps | AgGridReactProps> = ({
	children,
	...rest
}) => {
	return (
		<div className="ag-theme-alpine ag-grid-wrapper">
			<AgGridReact {...Config.grid.local} {...rest}>
				{children}
			</AgGridReact>
		</div>
	);
};

export default AgGridWrapper;
