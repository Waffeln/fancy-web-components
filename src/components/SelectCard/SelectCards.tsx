import React, {ReactNode} from "react";
import {Box, Paper, SxProps} from "@mui/material";

interface CardItemProps {
    displayContent: ReactNode,
    onClick?: (e: Event) => void,
}

interface SelectCardProps {
    /**
     * Is this the principal call to action on the page?
     */
    cardItems: CardItemProps[],
    maxRotation: number,
    sxProps?: SxProps,
}

const cardStyle: SxProps = {
	height: "120px",
	maxWidth: "80px",
	border: "1px solid #000",
	position: "fixed"
};

/**
 * Primary UI component for user interaction
 */
const SelectCards = (props: SelectCardProps) => {
	const setCardRotation = (idx: number): number => idx / (props.cardItems.length - 1) * props.maxRotation * 2 - props.maxRotation;

	return (
		<Box>
			{props.cardItems.map((el, idx) => (
				<Paper key={idx}
					sx={{
						...cardStyle,
						rotate: setCardRotation(idx) + "deg",
						"&:hover": {
							rotate: (setCardRotation(idx) - 10) + "deg"
						},
						transformOrigin: "50% 100%",
						...props.sxProps
					}}>
					{el.displayContent}
				</Paper>
			))}
		</Box>
	);
};

SelectCards.defaultProps = {
	cardItem: [{
		displayContent: <>card</>
	}],
	maxRotation: 20
};
export default SelectCards;