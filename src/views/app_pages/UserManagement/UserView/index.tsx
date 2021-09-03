import { PageHeader } from "antd";
import { observer } from "mobx-react";
import React from "react";
import BreadcrumbComponent from "../../../../components/BreadcrumbComponent/BreadcrumbComponent";
import ContentBox from "../../../../components/ContentBox/ContentBox";
import { UserBreadcrumb } from "../../../../config/BreadcrumbConfig";
import HeaderButtons from "./components/HeaderButtons";
import { AgGridColumn, AgGridReact } from "ag-grid-react";
import AgGridWrapper from "../../../../components/AgGridWrapper/AgGridWrapper";

const UserView: React.FC = observer(() => {
	const rowData = [
		{ make: "Toyota", model: "Celica", price: 35000 },
		{ make: "Ford", model: "Mondeo", price: 32000 },
		{ make: "Porsche", model: "Boxter", price: 72000 },
	];

	return (
		<>
			<BreadcrumbComponent items={UserBreadcrumb.path} />
			<PageHeader
				title={UserBreadcrumb.title}
				extra={[<HeaderButtons key={1} />]}
			/>
			<ContentBox>
				<AgGridWrapper>
					<AgGridReact rowData={rowData}>
						<AgGridColumn field="make"></AgGridColumn>
						<AgGridColumn field="model"></AgGridColumn>
						<AgGridColumn field="price"></AgGridColumn>
					</AgGridReact>
				</AgGridWrapper>
			</ContentBox>
		</>
	);
});

export default UserView;
