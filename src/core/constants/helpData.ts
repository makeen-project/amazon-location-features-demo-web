/* Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved. */
/* SPDX-License-Identifier: MIT-0 */

import {
	ConfirmDeletePolicy,
	ConfirmDeleteStack,
	ConnectSuccess,
	CreateStack1,
	CreateStack2,
	CreateStack34,
	DeleteFailed,
	DeleteStack,
	DisconnectAccount,
	EmptyConnectModal,
	FilledConnectModal,
	HostedUiLogin1,
	HostedUiLogin2,
	Login,
	SearchCloudFormation,
	SearchIotCore,
	SelectPolicy,
	SelectStack,
	StackOutputs,
	SuccessLogin
} from "@demo/assets";
import { HelpAccordionEnum } from "@demo/types";

const helpData = [
	{
		key: HelpAccordionEnum.CREATE,
		title: "HELP.ITEM_1.TITLE",
		description: "HELP.ITEM_1.DESC",
		content: [
			{
				text: "HELP.ITEM_1.CONTENT_1.TEXT",
				image: EmptyConnectModal
			},
			{
				text: "HELP.ITEM_1.CONTENT_2.TEXT",
				image: Login
			},
			{
				text: "HELP.ITEM_1.CONTENT_3.TEXT",
				image: CreateStack1
			},
			{
				text: "HELP.ITEM_1.CONTENT_4.TEXT",
				image: CreateStack2
			},
			{
				text: "HELP.ITEM_1.CONTENT_5.TEXT",
				image: CreateStack34
			},
			{
				text: "HELP.ITEM_1.CONTENT_6.TEXT",
				image: StackOutputs
			},
			{
				text: "HELP.ITEM_1.CONTENT_7.TEXT",
				image: FilledConnectModal
			},
			{
				text: "HELP.ITEM_1.CONTENT_8.TEXT",
				image: ConnectSuccess
			},
			{
				text: "HELP.ITEM_1.CONTENT_9.TEXT",
				image: HostedUiLogin1
			},
			{
				text: "HELP.ITEM_1.CONTENT_10.TEXT",
				image: HostedUiLogin2
			},
			{
				text: "HELP.ITEM_1.CONTENT_11.TEXT",
				image: SuccessLogin
			}
		]
	},
	{
		key: HelpAccordionEnum.DELETE,
		title: "HELP.ITEM_2.TITLE",
		description: "HELP.ITEM_2.DESC",
		content: [
			{
				text: "HELP.ITEM_2.CONTENT_1.TEXT",
				image: SuccessLogin
			},
			{
				text: "HELP.ITEM_2.CONTENT_2.TEXT",
				image: DisconnectAccount
			},
			{
				text: "HELP.ITEM_2.CONTENT_3.TEXT",
				image: SearchCloudFormation
			},
			{
				text: "HELP.ITEM_2.CONTENT_4.TEXT",
				image: SelectStack
			},
			{
				text: "HELP.ITEM_2.CONTENT_5.TEXT",
				image: DeleteStack
			}
		]
	},
	{
		key: HelpAccordionEnum.TROUBLESHOOT,
		title: "HELP.ITEM_3.TITLE",
		description: "HELP.ITEM_3.DESC",
		content: [
			{
				text: "HELP.ITEM_3.CONTENT_1.TEXT",
				image: DeleteFailed
			},
			{
				text: "HELP.ITEM_3.CONTENT_2.TEXT",
				image: SearchIotCore
			},
			{
				text: "HELP.ITEM_3.CONTENT_3.TEXT",
				image: SelectPolicy
			},
			{
				text: "HELP.ITEM_3.CONTENT_4.TEXT",
				image: ConfirmDeletePolicy
			},
			{
				text: "HELP.ITEM_3.CONTENT_5.TEXT",
				image: DeleteFailed
			},
			{
				text: "HELP.ITEM_3.CONTENT_6.TEXT",
				image: ConfirmDeleteStack
			}
		]
	}
];

export default helpData;
