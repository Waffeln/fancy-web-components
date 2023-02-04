import React from "react";
import {ComponentMeta} from "@storybook/react";
import seal1 from "../../assets/seal1.png";
import seal2 from "../../assets/seal2.png";
import seal3 from "../../assets/seal3.png";
import seal4 from "../../assets/seal4.png";

import SelectCards from "./SelectCards";
import {Box, SxProps} from "@mui/material";

export default {
	title: "Example/SelectCards",
	component: SelectCards,
} as ComponentMeta<typeof SelectCards>;

const cardStyle: SxProps = {
	transition: "rotate 0.2s",
	backgroundColor: "#474747"
};

const Template = () => (
	<Box sx={{display: "flex", justifyContent: "center"}}>
		<SelectCards sxProps={cardStyle} cardItems={[
			{
				displayContent: (<Box component={"img"} src={seal1} maxWidth={"inherit"}/>)
			},
			{
				displayContent: (<Box component={"img"} src={seal2} maxWidth={"inherit"}/>)
			},
			{
				displayContent: (<Box component={"img"} src={seal3} maxWidth={"inherit"}/>)
			},
			{
				displayContent: (<Box component={"img"} src={seal4} maxWidth={"inherit"}/>)
			}
		]} maxRotation={30}/>

	</Box>
);

export const ExampleConfig = Template.bind({});