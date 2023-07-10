import React, { FC, ReactElement } from "react";

import { Flex } from "@aws-amplify/ui-react";
import { TextEl } from "@demo/atomicui/atoms";

interface IconicInfoCardProps {
	IconComponent?: ReactElement;
	title: string;
	description: string;
	textContainerMarginLeft?: string;
	cardMargin?: string;
	cardAlignItems?: string;
	subDescription?: string;
}

const IconicInfoCard: FC<IconicInfoCardProps> = ({
	IconComponent,
	title,
	description,
	textContainerMarginLeft = "0.7rem",
	cardMargin = "1rem 0",
	cardAlignItems = "flex-start",
	subDescription = ""
}) => {
	return (
		<Flex direction="row" gap="large" margin={cardMargin} alignItems={cardAlignItems} justifyContent="flex-start">
			{IconComponent}
			<Flex direction="column" gap={subDescription ? 0 : "3px"} marginLeft={textContainerMarginLeft}>
				<TextEl fontSize="1rem" variation="secondary" fontFamily="AmazonEmber-Regular" text={title} />
				<TextEl className="simulation-title" fontSize="13px" variation="tertiary" text={description} />
				{subDescription && (
					<TextEl className="simulation-title" fontSize="13px" variation="tertiary" text={subDescription} />
				)}
			</Flex>
		</Flex>
	);
};

export default IconicInfoCard;
