import React, { ReactElement } from "react";

import { Flex, Text } from "@aws-amplify/ui-react";
import "./styles.scss";

interface IconicInfoCardProps {
	IconComponent?: ReactElement;
	title: string;
	description: string;
	textContainerMarginLeft?: string;
	cardMargin?: string;
	cardAlignItems?: string;
	subDescription?: string;
	gap?: string;
	direction?: "row" | "row-reverse" | string;
	onClickHandler?: () => void;
}

const IconicInfoCard: React.FC<IconicInfoCardProps> = ({
	IconComponent,
	title,
	description,
	textContainerMarginLeft = "0.7rem",
	cardMargin = "1rem 0",
	cardAlignItems = "flex-start",
	subDescription = "",
	gap = "large",
	direction = "row",
	onClickHandler
}) => {
	return (
		<Flex
			className={`iconic-container-${direction}`}
			direction={direction}
			gap={gap}
			margin={cardMargin}
			alignItems={cardAlignItems}
			onClick={onClickHandler}
		>
			{IconComponent}
			<Flex direction="column" gap={subDescription ? 0 : "3px"} marginLeft={textContainerMarginLeft}>
				<Text fontSize="1rem" variation="secondary">
					{title}
				</Text>
				<Text color={"var(--grey-color)"} fontSize="1rem" variation="tertiary">
					{description}
				</Text>
				{subDescription && (
					<Text color="var(--grey-color)" fontSize="1rem" variation="tertiary">
						{subDescription}
					</Text>
				)}
			</Flex>
		</Flex>
	);
};

export default IconicInfoCard;
