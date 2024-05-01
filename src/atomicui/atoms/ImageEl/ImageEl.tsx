import { CSSProperties, FC, Fragment, useState } from "react";

import { Image, Placeholder } from "@aws-amplify/ui-react";

import { IconReloadFilled } from "@demo/assets/svgs";

interface ImageElProps {
	key?: string | number;
	dataTestId?: string;
	id?: string;
	placeholderClass?: string;
	placeholderStyle?: CSSProperties;
	className?: string;
	style?: CSSProperties;
	src: string;
	alt?: string;
	loading?: "eager" | "lazy";
	onClick?: () => void;
}

const ImageEl: FC<ImageElProps> = ({
	key = "",
	dataTestId = "",
	id = "",
	placeholderClass = "",
	placeholderStyle = {},
	className = "",
	style = {},
	src,
	alt = "",
	loading,
	onClick = () => {}
}) => {
	const [isLoading, setIsLoading] = useState(true);
	const [imageSrc, setImageSrc] = useState(src);
	const [showReload, setShowReload] = useState(false);
	const isGif = src.toLowerCase().endsWith(".gif");

	const onLoad = () => setIsLoading(false);

	const onMouseEnter = () => setShowReload(true);

	const onMouseLeave = () => setShowReload(false);

	const reloadGif = () => {
		setImageSrc("");
		setIsLoading(true);
		setShowReload(false);
		setTimeout(() => setImageSrc(src), 0);
	};

	if (isGif) {
		return (
			<div key={key} style={{ position: "relative" }}>
				<Placeholder
					data-testid={`placeholder-${dataTestId}`}
					id={`placeholder-${id}`}
					className={`${className}${placeholderClass ? placeholderClass : ""}`}
					style={{ ...style, ...placeholderStyle, display: isLoading ? "block" : "none" }}
				/>
				<Image
					data-testid={dataTestId}
					id={id}
					className={className}
					style={{ ...style, display: isLoading ? "none" : "block", position: "relative", zIndex: 1 }}
					src={imageSrc}
					alt={alt}
					loading={loading}
					onLoad={onLoad}
					onMouseEnter={onMouseEnter}
					onMouseLeave={onMouseLeave}
				/>
				{!isLoading && (
					<IconReloadFilled
						style={{
							width: "2rem",
							height: "2rem",
							position: "absolute",
							bottom: "1.6rem",
							left: "1rem",
							cursor: "pointer",
							zIndex: showReload ? 2 : 0
						}}
						onClick={reloadGif}
						onMouseEnter={onMouseEnter}
					/>
				)}
			</div>
		);
	} else {
		return (
			<Fragment key={key}>
				<Placeholder
					data-testid={`placeholder-${dataTestId}`}
					id={`placeholder-${id}`}
					className={`${className}${placeholderClass ? placeholderClass : ""}`}
					style={{ ...style, ...placeholderStyle, display: isLoading ? "block" : "none" }}
				/>
				<Image
					data-testid={dataTestId}
					id={id}
					className={className}
					style={{ ...style, display: isLoading ? "none" : "block" }}
					src={imageSrc}
					alt={alt}
					loading={loading}
					onLoad={onLoad}
					onClick={onClick}
				/>
			</Fragment>
		);
	}
};

export default ImageEl;
