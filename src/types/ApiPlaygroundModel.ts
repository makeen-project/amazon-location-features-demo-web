export type RequestParam = {
	name: string;
	description: string;
	required: boolean;
	type: string;
	defaultValue: string | number | boolean;
	validValues: string[] | number[] | boolean[] | null;
	visibleIf: string[] | null;
	shouldRender: boolean;
	isEditable: boolean;
	subParams: string[] | null;
	fieldType: string | null;
};

export type ApiListItem = {
	id: string;
	imageSource: string;
	title: string;
	description: string;
	shouldRenderMap: boolean;
	requestParams: RequestParam[];
	codeSnippets: {
		[key: string]: string;
	};
};

export type ApiListData = {
	[key: string]: ApiListItem[];
};
