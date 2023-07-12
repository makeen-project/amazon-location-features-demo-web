import { useEffect } from "react";

import { EventTypeEnum } from "types/Enums";

import { record } from "utils/analyticsUtils";

const usePinpointAnalytics = (pageName: string) => {
	useEffect(() => {
		const path = location.pathname;

		record([
			{
				EventType: EventTypeEnum.VIEW_PAGE,
				Attributes: { path, pageName }
			}
		]);

		return () =>
			record([
				{
					EventType: EventTypeEnum.LEAVE_PAGE,
					Attributes: { path, pageName }
				}
			]);
	}, [pageName]);
};

export default usePinpointAnalytics;
