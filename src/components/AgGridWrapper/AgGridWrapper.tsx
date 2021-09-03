import React from "react";

const AgGridWrapper: React.FC = ({ children }) => {
	return <div className="ag-theme-alpine ag-grid-wrapper">{children}</div>;
};

export default AgGridWrapper;
