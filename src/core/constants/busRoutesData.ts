/* Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved. */
/* SPDX-License-Identifier: MIT-0 */

const busRoutesData = [
	{
		id: "bus_route_01",
		name: "Bus 01 Macdonald",
		geofenceCollection: "BusStopsCollection06",
		coordinates: [
			[-123.121987, 49.286464],
			[-123.120436, 49.287492],
			[-123.119488, 49.287212],
			[-123.118428, 49.286845],
			[-123.117889, 49.286556],
			[-123.119392, 49.285601],
			[-123.120017, 49.285153],
			[-123.121665, 49.284014],
			[-123.122804, 49.283282],
			[-123.124422, 49.282225],
			[-123.126038, 49.281195],
			[-123.127079, 49.280479],
			[-123.129182, 49.279077],
			[-123.130786, 49.278037],
			[-123.132228, 49.277089],
			[-123.13234, 49.277061],
			[-123.132653, 49.276903],
			[-123.133215, 49.276722],
			[-123.134217, 49.276384],
			[-123.144191, 49.273176],
			[-123.14581, 49.272681],
			[-123.146347, 49.272537],
			[-123.146792, 49.272458],
			[-123.162103, 49.272694],
			[-123.164713, 49.272717],
			[-123.164963, 49.272681],
			[-123.165447, 49.272539],
			[-123.166238, 49.272231],
			[-123.168168, 49.271455],
			[-123.168254, 49.269247],
			[-123.16828, 49.268381],
			[-123.168393, 49.265801],
			[-123.168405, 49.264979],
			[-123.16816, 49.26408],
			[-123.16822, 49.263215],
			[-123.168318, 49.25958],
			[-123.168314, 49.258663],
			[-123.168368, 49.257747],
			[-123.168389, 49.257591],
			[-123.168385, 49.257164],
			[-123.167987, 49.256407],
			[-123.167798, 49.256067],
			[-123.167763, 49.255508],
			[-123.167843, 49.249097],
			[-123.167863, 49.248195],
			[-123.168049, 49.248244],
			[-123.168748, 49.248603],
			[-123.169873, 49.249287],
			[-123.171031, 49.249903],
			[-123.17134, 49.25],
			[-123.171697, 49.25008],
			[-123.172219, 49.250113],
			[-123.17089, 49.248408],
			[-123.170476, 49.248091],
			[-123.170203, 49.24794],
			[-123.170175, 49.247737],
			[-123.170179, 49.247039],
			[-123.170207, 49.246124],
			[-123.170186, 49.245159],
			[-123.170219, 49.242336],
			[-123.170244, 49.241353],
			[-123.170243, 49.239461],
			[-123.170254, 49.238532],
			[-123.17026, 49.236597],
			[-123.170253, 49.234719],
			[-123.175755, 49.234741],
			[-123.178715, 49.234761],
			[-123.185325, 49.234769],
			[-123.185332, 49.234325],
			[-123.185668, 49.234334],
			[-123.18584, 49.234409],
			[-123.18589, 49.234553],
			[-123.185877, 49.234774],
			[-123.18589, 49.234553],
			[-123.185877, 49.234774],
			[-123.178715, 49.234761],
			[-123.175755, 49.234741],
			[-123.170253, 49.234719],
			[-123.17026, 49.236597],
			[-123.170254, 49.238532],
			[-123.170243, 49.239461],
			[-123.170244, 49.241353],
			[-123.170219, 49.242336],
			[-123.170186, 49.245159],
			[-123.170207, 49.246124],
			[-123.170179, 49.247039],
			[-123.170175, 49.247737],
			[-123.170203, 49.24794],
			[-123.170476, 49.248091],
			[-123.17089, 49.248408],
			[-123.172066, 49.249915],
			[-123.171591, 49.249885],
			[-123.171295, 49.249799],
			[-123.171076, 49.249705],
			[-123.1684, 49.24822],
			[-123.168115, 49.24812],
			[-123.167851, 49.248061],
			[-123.167863, 49.248195],
			[-123.167843, 49.249097],
			[-123.167763, 49.255508],
			[-123.167798, 49.256067],
			[-123.167987, 49.256407],
			[-123.168385, 49.257164],
			[-123.168389, 49.257591],
			[-123.168368, 49.257747],
			[-123.168314, 49.258663],
			[-123.168318, 49.25958],
			[-123.16822, 49.263215],
			[-123.16816, 49.26408],
			[-123.168405, 49.264979],
			[-123.168393, 49.265801],
			[-123.16828, 49.268381],
			[-123.168254, 49.269247],
			[-123.168168, 49.271455],
			[-123.166238, 49.272231],
			[-123.165447, 49.272539],
			[-123.164963, 49.272681],
			[-123.164713, 49.272717],
			[-123.162103, 49.272694],
			[-123.148977, 49.272494],
			[-123.146793, 49.272459],
			[-123.14667, 49.272433],
			[-123.146285, 49.27243],
			[-123.145554, 49.272487],
			[-123.145393, 49.272537],
			[-123.14448, 49.272953],
			[-123.143831, 49.273223],
			[-123.134146, 49.276326],
			[-123.132597, 49.27686],
			[-123.132402, 49.27695],
			[-123.132288, 49.277013],
			[-123.132228, 49.277089],
			[-123.130786, 49.278037],
			[-123.129182, 49.279077],
			[-123.127079, 49.280479],
			[-123.126038, 49.281195],
			[-123.124422, 49.282225],
			[-123.122804, 49.283282],
			[-123.121665, 49.284014],
			[-123.120017, 49.285153],
			[-123.119392, 49.285601],
			[-123.120015, 49.285893],
			[-123.121125, 49.28609],
			[-123.121506, 49.286198],
			[-123.121987, 49.286464],
			[-123.120861, 49.287209],
			[-123.17228, 49.257645],
			[-123.168388, 49.257591],
			[-123.168368, 49.257747],
			[-123.168314, 49.258663],
			[-123.168318, 49.25958],
			[-123.16822, 49.263215],
			[-123.16816, 49.26408],
			[-123.168405, 49.264979],
			[-123.168393, 49.265801],
			[-123.16828, 49.268381],
			[-123.168254, 49.269247],
			[-123.168168, 49.271455],
			[-123.166238, 49.272231],
			[-123.165447, 49.272539],
			[-123.164963, 49.272681],
			[-123.164713, 49.272717],
			[-123.162103, 49.272694],
			[-123.148977, 49.272494],
			[-123.146793, 49.272459],
			[-123.14667, 49.272433],
			[-123.146285, 49.27243],
			[-123.145554, 49.272487],
			[-123.145393, 49.272537],
			[-123.14448, 49.272953],
			[-123.143831, 49.273223],
			[-123.134146, 49.276326],
			[-123.132597, 49.27686],
			[-123.132402, 49.27695],
			[-123.132288, 49.277013],
			[-123.132228, 49.277089],
			[-123.130786, 49.278037],
			[-123.129182, 49.279077],
			[-123.127079, 49.280479],
			[-123.126038, 49.281195],
			[-123.124422, 49.282225],
			[-123.122804, 49.283282],
			[-123.121665, 49.284014],
			[-123.120017, 49.285153],
			[-123.119392, 49.285601],
			[-123.120015, 49.285893],
			[-123.121125, 49.28609],
			[-123.121506, 49.286198],
			[-123.121987, 49.286464],
			[-123.120861, 49.287209],
			[-123.121987, 49.286464],
			[-123.120436, 49.287492],
			[-123.119488, 49.287212],
			[-123.118428, 49.286845],
			[-123.117889, 49.286556],
			[-123.119392, 49.285601],
			[-123.120017, 49.285153],
			[-123.121665, 49.284014],
			[-123.122804, 49.283282],
			[-123.124422, 49.282225],
			[-123.126038, 49.281195],
			[-123.127079, 49.280479],
			[-123.129182, 49.279077],
			[-123.130786, 49.278037],
			[-123.132228, 49.277089],
			[-123.13234, 49.277061],
			[-123.132653, 49.276903],
			[-123.133215, 49.276722],
			[-123.134217, 49.276384],
			[-123.144191, 49.273176],
			[-123.14581, 49.272681],
			[-123.146347, 49.272537],
			[-123.146792, 49.272458],
			[-123.162103, 49.272694],
			[-123.164713, 49.272717],
			[-123.164963, 49.272681],
			[-123.165447, 49.272539],
			[-123.166238, 49.272231],
			[-123.168168, 49.271455],
			[-123.168254, 49.269247],
			[-123.16828, 49.268381],
			[-123.168393, 49.265801],
			[-123.168405, 49.264979],
			[-123.16816, 49.26408],
			[-123.16822, 49.263215],
			[-123.168318, 49.25958],
			[-123.168314, 49.258663],
			[-123.168368, 49.257747],
			[-123.176149, 49.257868],
			[-123.176097, 49.257704],
			[-123.170389, 49.257617]
		],
		stopCoordinates: [
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.148302, 49.272539]
				},
				properties: {
					id: 549620011,
					stop_id: "101",
					stop_name: "Westbound Cornwall Ave @ Cypress St"
				},
				id: 549620011
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.152989, 49.272608]
				},
				properties: {
					id: 549620137,
					stop_id: "103",
					stop_name: "Westbound Cornwall Ave @ Arbutus St"
				},
				id: 549620137
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.155439, 49.272645]
				},
				properties: {
					id: 549620200,
					stop_id: "104",
					stop_name: "Westbound Cornwall Ave @ Yew St"
				},
				id: 549620200
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.160216, 49.272731]
				},
				properties: {
					id: 549620260,
					stop_id: "105",
					stop_name: "Westbound Cornwall Ave @ Point Grey Rd"
				},
				id: 549620260
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.159332, 49.272582]
				},
				properties: {
					id: 549620274,
					stop_id: "10542",
					stop_name: "Eastbound Cornwall Ave @ Balsam St"
				},
				id: 549620274
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.164636, 49.272799]
				},
				properties: {
					id: 549620308,
					stop_id: "106",
					stop_name: "Westbound Cornwall Ave @ Trafalgar St"
				},
				id: 549620308
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.168323, 49.270753]
				},
				properties: {
					id: 549620371,
					stop_id: "107",
					stop_name: "Southbound Macdonald St @ W 1st Ave"
				},
				id: 549620371
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.168483, 49.266274]
				},
				properties: {
					id: 549620520,
					stop_id: "109",
					stop_name: "Southbound Macdonald St @ W 6th Ave"
				},
				id: 549620520
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.168373, 49.264268]
				},
				properties: {
					id: 549620578,
					stop_id: "110",
					stop_name: "Southbound Macdonald St @ W Broadway"
				},
				id: 549620578
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.16835, 49.261885]
				},
				properties: {
					id: 549620660,
					stop_id: "111",
					stop_name: "Southbound Macdonald St @ W 11 Ave"
				},
				id: 549620660
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.168421, 49.260226]
				},
				properties: {
					id: 549620755,
					stop_id: "112",
					stop_name: "Southbound Macdonald St @ W 13 Ave"
				},
				id: 549620755
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.168496, 49.257315]
				},
				properties: {
					id: 549620848,
					stop_id: "113",
					stop_name: "Southbound Macdonald St @ W 16 Ave"
				},
				id: 549620848
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.168896, 49.257816]
				},
				properties: {
					id: 549620912,
					stop_id: "114",
					stop_name: "Westbound W 16 Ave @ Macdonald St"
				},
				id: 549620912
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.170777, 49.257839]
				},
				properties: {
					id: 549620970,
					stop_id: "115",
					stop_name: "Westbound W 16 Ave @ Mackenzie St"
				},
				id: 549620970
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.17458, 49.257904]
				},
				properties: {
					id: 549621043,
					stop_id: "116",
					stop_name: "Westbound W 16 Ave @ Balaclava St"
				},
				id: 549621043
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.126431, 49.280758]
				},
				properties: {
					id: 549621254,
					stop_id: "11881",
					stop_name: "Northbound Burrard St @ Comox St"
				},
				id: 549621254
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.16787, 49.253375]
				},
				properties: {
					id: 549621262,
					stop_id: "119",
					stop_name: "Southbound Macdonald St @ W 21 Ave"
				},
				id: 549621262
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.163937, 49.272658]
				},
				properties: {
					id: 549621381,
					stop_id: "12040",
					stop_name: "Eastbound Cornwall Ave @ Trafalgar St"
				},
				id: 549621381
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.167913, 49.249858]
				},
				properties: {
					id: 549621427,
					stop_id: "121",
					stop_name: "Southbound Macdonald St @ Alamein Ave"
				},
				id: 549621427
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.168633, 49.248641]
				},
				properties: {
					id: 549621489,
					stop_id: "122",
					stop_name: "Westbound W King Edward Ave @ Macdonald St"
				},
				id: 549621489
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.170432, 49.249627]
				},
				properties: {
					id: 549621584,
					stop_id: "123",
					stop_name: "Westbound W King Edward Ave @ Puget Dr"
				},
				id: 549621584
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.171914, 49.249603]
				},
				properties: {
					id: 549621661,
					stop_id: "124",
					stop_name: "Southbound Quesnel Dr @ W King Edward Ave"
				},
				id: 549621661
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.131265, 49.277837]
				},
				properties: {
					id: 549621749,
					stop_id: "12494",
					stop_name: "Southbound Burrard St @ Harwood St"
				},
				id: 549621749
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.170308, 49.245848]
				},
				properties: {
					id: 549621814,
					stop_id: "126",
					stop_name: "Southbound Mackenzie St @ W 29 Ave"
				},
				id: 549621814
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.124019, 49.282359]
				},
				properties: {
					id: 549621818,
					stop_id: "12603",
					stop_name: "Northbound Burrard St @ Smithe St"
				},
				id: 549621818
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.168239, 49.260225]
				},
				properties: {
					id: 549621828,
					stop_id: "12619",
					stop_name: "Northbound Macdonald St @ W 13 Ave"
				},
				id: 549621828
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.173495, 49.23467]
				},
				properties: {
					id: 549621864,
					stop_id: "12663",
					stop_name: "Eastbound W 41 Ave @ Carnarvon St"
				},
				id: 549621864
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.174148, 49.234826]
				},
				properties: {
					id: 549621872,
					stop_id: "12671",
					stop_name: "Westbound W 41 Ave @ Carnarvon St"
				},
				id: 549621872
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.170182, 49.237919]
				},
				properties: {
					id: 549621883,
					stop_id: "1269",
					stop_name: "Northbound Mackenzie St @ W 38 Ave"
				},
				id: 549621883
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.170144, 49.241595]
				},
				properties: {
					id: 549621897,
					stop_id: "1271",
					stop_name: "Northbound Mackenzie St @ W 34 Ave"
				},
				id: 549621897
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.17011, 49.245547]
				},
				properties: {
					id: 549621910,
					stop_id: "1273",
					stop_name: "Northbound Mackenzie St @ W 30 Ave"
				},
				id: 549621910
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.1717, 49.249571]
				},
				properties: {
					id: 549621919,
					stop_id: "1275",
					stop_name: "Northbound Quesnel Dr @ W King Edward Ave"
				},
				id: 549621919
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.167771, 49.248517]
				},
				properties: {
					id: 549621921,
					stop_id: "1276",
					stop_name: "Northbound Macdonald St @ W King Edward Ave"
				},
				id: 549621921
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.167732, 49.249455]
				},
				properties: {
					id: 549621929,
					stop_id: "1277",
					stop_name: "Northbound Macdonald St @ Oliver Cres"
				},
				id: 549621929
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.167687, 49.253089]
				},
				properties: {
					id: 549621939,
					stop_id: "1279",
					stop_name: "Northbound Macdonald St @ W 22 Ave"
				},
				id: 549621939
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.170345, 49.241997]
				},
				properties: {
					id: 549621943,
					stop_id: "128",
					stop_name: "Southbound Mackenzie St @ W 33 Ave"
				},
				id: 549621943
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.170377, 49.238254]
				},
				properties: {
					id: 549622051,
					stop_id: "130",
					stop_name: "Southbound Mackenzie St @ W 37 Ave"
				},
				id: 549622051
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.168411, 49.268064]
				},
				properties: {
					id: 549622126,
					stop_id: "1379",
					stop_name: "Southbound Macdonald St @ W 4th Ave"
				},
				id: 549622126
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.12119, 49.286899]
				},
				properties: {
					id: 549622532,
					stop_id: "1856",
					stop_name: "Burrard Station @ Bay 4"
				},
				id: 549622532
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.170795, 49.234819]
				},
				properties: {
					id: 549623371,
					stop_id: "296",
					stop_name: "Westbound W 41 Ave @ Mackenzie St"
				},
				id: 549623371
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.179103, 49.234831]
				},
				properties: {
					id: 549623400,
					stop_id: "299",
					stop_name: "Westbound W 41 Ave @ Blenheim St"
				},
				id: 549623400
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.12214, 49.283593]
				},
				properties: {
					id: 549623408,
					stop_id: "30",
					stop_name: "Northbound Burrard St @ Robson St"
				},
				id: 549623408
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.182673, 49.234842]
				},
				properties: {
					id: 549623409,
					stop_id: "300",
					stop_name: "Westbound W 41 Ave @ Collingwood St"
				},
				id: 549623409
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.120503, 49.284688]
				},
				properties: {
					id: 549623502,
					stop_id: "31",
					stop_name: "Burrard Station @ Bay 7"
				},
				id: 549623502
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.181639, 49.234687]
				},
				properties: {
					id: 549624025,
					stop_id: "378",
					stop_name: "Eastbound W 41 Ave @ Collingwood St"
				},
				id: 549624025
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.178303, 49.234696]
				},
				properties: {
					id: 549624032,
					stop_id: "379",
					stop_name: "Eastbound W 41 Ave @ Blenheim St"
				},
				id: 549624032
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.123336, 49.283087]
				},
				properties: {
					id: 549624631,
					stop_id: "45",
					stop_name: "Southbound Burrard St @ Robson St"
				},
				id: 549624631
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.12488, 49.282068]
				},
				properties: {
					id: 549624727,
					stop_id: "46",
					stop_name: "Southbound Burrard St @ Barclay St"
				},
				id: 549624727
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.126516, 49.280981]
				},
				properties: {
					id: 549624828,
					stop_id: "47",
					stop_name: "Southbound Burrard St @ Nelson St"
				},
				id: 549624828
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.175459, 49.257636]
				},
				properties: {
					id: 549625416,
					stop_id: "54",
					stop_name: "Eastbound W 16 Ave @ Trutch St"
				},
				id: 549625416
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.17185, 49.257583]
				},
				properties: {
					id: 549625495,
					stop_id: "55",
					stop_name: "Eastbound W 16 Ave @ Carnarvon St"
				},
				id: 549625495
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.168299, 49.258079]
				},
				properties: {
					id: 549625593,
					stop_id: "56",
					stop_name: "Northbound Macdonald St @ W 16 Ave"
				},
				id: 549625593
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.168164, 49.261778]
				},
				properties: {
					id: 549625796,
					stop_id: "58",
					stop_name: "Northbound Macdonald St @ W 12 Ave"
				},
				id: 549625796
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.168174, 49.264458]
				},
				properties: {
					id: 549625976,
					stop_id: "60",
					stop_name: "Northbound Macdonald St @ W Broadway"
				},
				id: 549625976
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.168302, 49.266074]
				},
				properties: {
					id: 549626070,
					stop_id: "61",
					stop_name: "Northbound Macdonald St @ W 7th Ave"
				},
				id: 549626070
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.168204, 49.268707]
				},
				properties: {
					id: 549626243,
					stop_id: "63",
					stop_name: "Northbound Macdonald St @ W 4th Ave"
				},
				id: 549626243
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.168148, 49.270381]
				},
				properties: {
					id: 549626318,
					stop_id: "64",
					stop_name: "Northbound Macdonald St @ W 2nd Ave"
				},
				id: 549626318
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.18575, 49.234593]
				},
				properties: {
					id: 549626335,
					stop_id: "646",
					stop_name: "Dunbar Loop @ Bay 2"
				},
				id: 549626335
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.154568, 49.272507]
				},
				properties: {
					id: 549626754,
					stop_id: "69",
					stop_name: "Eastbound Cornwall Ave @ Yew St"
				},
				id: 549626754
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.152226, 49.272471]
				},
				properties: {
					id: 549626851,
					stop_id: "70",
					stop_name: "Eastbound Cornwall Ave @ Arbutus St"
				},
				id: 549626851
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.14734, 49.272368]
				},
				properties: {
					id: 549627018,
					stop_id: "72",
					stop_name: "Eastbound Cornwall Ave @ Cypress St"
				},
				id: 549627018
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.131783, 49.277226]
				},
				properties: {
					id: 549627092,
					stop_id: "73",
					stop_name: "Northbound Burrard St @ Pacific St"
				},
				id: 549627092
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.129252, 49.278885]
				},
				properties: {
					id: 549627249,
					stop_id: "75",
					stop_name: "Northbound Burrard St @ Davie St"
				},
				id: 549627249
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.119982, 49.285306]
				},
				properties: {
					id: 549627924,
					stop_id: "8535",
					stop_name: "Burrard Station @ Bay 1"
				},
				id: 549627924
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.12964, 49.278914]
				},
				properties: {
					id: 549628651,
					stop_id: "98",
					stop_name: "Southbound Burrard St @ Davie St"
				},
				id: 549628651
			}
		]
	},
	{
		id: "bus_route_02",
		name: "Bus 02 Main",
		geofenceCollection: "BusStopsCollection07",
		coordinates: [
			[-123.116589, 49.209164],
			[-123.117103, 49.208972],
			[-123.117103, 49.208935],
			[-123.117089, 49.208926],
			[-123.117035, 49.208917],
			[-123.115872, 49.209366],
			[-123.115101, 49.209686],
			[-123.115115, 49.20975],
			[-123.115064, 49.210588],
			[-123.115065, 49.210883],
			[-123.114448, 49.211063],
			[-123.11234, 49.211454],
			[-123.10998, 49.212114],
			[-123.10905, 49.212278],
			[-123.108308, 49.212348],
			[-123.107623, 49.212354],
			[-123.106576, 49.212284],
			[-123.105323, 49.21204],
			[-123.102227, 49.211047],
			[-123.102094, 49.213255],
			[-123.102056, 49.214138],
			[-123.101642, 49.224713],
			[-123.10164, 49.225649],
			[-123.101566, 49.226659],
			[-123.101519, 49.227577],
			[-123.101523, 49.228481],
			[-123.101513, 49.22938],
			[-123.101435, 49.231175],
			[-123.101447, 49.231709],
			[-123.101516, 49.233004],
			[-123.101666, 49.23634],
			[-123.101592, 49.238154],
			[-123.101563, 49.239059],
			[-123.101468, 49.240504],
			[-123.101423, 49.241993],
			[-123.10131, 49.244459],
			[-123.101261, 49.245727],
			[-123.101151, 49.247229],
			[-123.101117, 49.247982],
			[-123.10107, 49.248771],
			[-123.101013, 49.250251],
			[-123.100939, 49.251803],
			[-123.100937, 49.252709],
			[-123.100875, 49.253711],
			[-123.100844, 49.25438],
			[-123.100927, 49.254631],
			[-123.101007, 49.254787],
			[-123.101236, 49.255295],
			[-123.101268, 49.255684],
			[-123.101238, 49.256579],
			[-123.101197, 49.257507],
			[-123.101131, 49.258397],
			[-123.101085, 49.260005],
			[-123.101008, 49.260101],
			[-123.101002, 49.260191],
			[-123.100962, 49.261206],
			[-123.101043, 49.261293],
			[-123.100978, 49.262393],
			[-123.100903, 49.262451],
			[-123.100842, 49.264302],
			[-123.10077, 49.265504],
			[-123.100731, 49.266408],
			[-123.100729, 49.266488],
			[-123.100783, 49.266609],
			[-123.100756, 49.267313],
			[-123.100745, 49.268047],
			[-123.100657, 49.268138],
			[-123.100586, 49.270704],
			[-123.100453, 49.27093],
			[-123.10002, 49.271891],
			[-123.099939, 49.272746],
			[-123.099763, 49.277279],
			[-123.099721, 49.277685],
			[-123.09972, 49.278009],
			[-123.099812, 49.278081],
			[-123.099772, 49.278569],
			[-123.099699, 49.280381],
			[-123.099687, 49.281347],
			[-123.103853, 49.281433],
			[-123.104327, 49.281474],
			[-123.107193, 49.282001],
			[-123.109418, 49.282437],
			[-123.109961, 49.282772],
			[-123.112855, 49.284665],
			[-123.111852, 49.285326],
			[-123.110918, 49.284708],
			[-123.111852, 49.285326],
			[-123.10884, 49.28333],
			[-123.108544, 49.28323],
			[-123.106794, 49.282928],
			[-123.104267, 49.28243],
			[-123.103578, 49.28235],
			[-123.102225, 49.282346],
			[-123.099631, 49.282289],
			[-123.099687, 49.281347],
			[-123.099699, 49.280381],
			[-123.099772, 49.278569],
			[-123.099812, 49.278081],
			[-123.099877, 49.278018],
			[-123.099901, 49.277699],
			[-123.099909, 49.277088],
			[-123.09993, 49.276763],
			[-123.099994, 49.274936],
			[-123.100141, 49.272039],
			[-123.100333, 49.27156],
			[-123.100602, 49.270957],
			[-123.100726, 49.270709],
			[-123.100736, 49.270128],
			[-123.100825, 49.268144],
			[-123.100745, 49.268047],
			[-123.100756, 49.267313],
			[-123.100783, 49.266609],
			[-123.100864, 49.26643],
			[-123.100994, 49.264549],
			[-123.101063, 49.262453],
			[-123.100978, 49.262393],
			[-123.100996, 49.26201],
			[-123.101043, 49.261293],
			[-123.101131, 49.261211],
			[-123.101137, 49.261116],
			[-123.101159, 49.260104],
			[-123.101085, 49.260005],
			[-123.101131, 49.258397],
			[-123.101197, 49.257507],
			[-123.101268, 49.255684],
			[-123.101236, 49.255295],
			[-123.101007, 49.254787],
			[-123.100927, 49.254631],
			[-123.100844, 49.25438],
			[-123.100875, 49.253711],
			[-123.100937, 49.252709],
			[-123.100939, 49.251803],
			[-123.101013, 49.250251],
			[-123.10107, 49.248771],
			[-123.101117, 49.247982],
			[-123.101151, 49.247229],
			[-123.101261, 49.245727],
			[-123.10131, 49.244459],
			[-123.101423, 49.241993],
			[-123.101468, 49.240504],
			[-123.101563, 49.239059],
			[-123.101592, 49.238154],
			[-123.101666, 49.23634],
			[-123.101516, 49.233004],
			[-123.101447, 49.231709],
			[-123.101435, 49.231175],
			[-123.101513, 49.22938],
			[-123.101523, 49.228481],
			[-123.101519, 49.227577],
			[-123.101566, 49.226659],
			[-123.10164, 49.225649],
			[-123.101642, 49.224713],
			[-123.101679, 49.223745],
			[-123.102056, 49.214138],
			[-123.102094, 49.213255],
			[-123.102183, 49.211788],
			[-123.100288, 49.211734],
			[-123.100321, 49.210831],
			[-123.100735, 49.210843],
			[-123.101545, 49.210982],
			[-123.102221, 49.211152],
			[-123.105272, 49.212132],
			[-123.10657, 49.212385],
			[-123.107639, 49.212465],
			[-123.108321, 49.21247],
			[-123.109093, 49.212415],
			[-123.109968, 49.212262],
			[-123.112204, 49.211597],
			[-123.112815, 49.211474],
			[-123.1145, 49.211188],
			[-123.115059, 49.211027],
			[-123.115064, 49.210588],
			[-123.115115, 49.20975],
			[-123.116589, 49.209164],
			[-123.117103, 49.208972]
		],
		stopCoordinates: [
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.101698, 49.235131]
				},
				properties: {
					id: 549620204,
					stop_id: "10404",
					stop_name: "Southbound Main St @ E 39 Ave"
				},
				id: 549620204
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.100866, 49.251452]
				},
				properties: {
					id: 549620318,
					stop_id: "10611",
					stop_name: "Northbound Main St @ E 22 Ave"
				},
				id: 549620318
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.101649, 49.22134]
				},
				properties: {
					id: 549620324,
					stop_id: "10617",
					stop_name: "Northbound Main St @ 54 Ave"
				},
				id: 549620324
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.10178, 49.225333]
				},
				properties: {
					id: 549620450,
					stop_id: "10812",
					stop_name: "Southbound Main St @ E 49 Ave"
				},
				id: 549620450
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.100898, 49.268688]
				},
				properties: {
					id: 549620452,
					stop_id: "10814",
					stop_name: "Southbound Main St @ E 2nd Ave"
				},
				id: 549620452
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.101068, 49.256943]
				},
				properties: {
					id: 549620454,
					stop_id: "10816",
					stop_name: "Northbound Main St @ E 16 Ave"
				},
				id: 549620454
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.116823, 49.209087]
				},
				properties: {
					id: 549620798,
					stop_id: "11251",
					stop_name: "Marine Drive Station @ Bay 1"
				},
				id: 549620798
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.116116, 49.209383]
				},
				properties: {
					id: 549620799,
					stop_id: "11252",
					stop_name: "Marine Drive Station @ Bay 2"
				},
				id: 549620799
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.101378, 49.245403]
				},
				properties: {
					id: 549621436,
					stop_id: "12115",
					stop_name: "Southbound Main St @ E 28 Ave"
				},
				id: 549621436
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.104634, 49.282442]
				},
				properties: {
					id: 549621905,
					stop_id: "12720",
					stop_name: "Eastbound W Cordova St @ Carrall St"
				},
				id: 549621905
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.101128, 49.263326]
				},
				properties: {
					id: 549621918,
					stop_id: "12749",
					stop_name: "Southbound Main St @ E Broadway"
				},
				id: 549621918
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.102035, 49.211565]
				},
				properties: {
					id: 549622159,
					stop_id: "142",
					stop_name: "Northbound Main St @ SE Marine Dr"
				},
				id: 549622159
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.101909, 49.214623]
				},
				properties: {
					id: 549622179,
					stop_id: "144",
					stop_name: "Northbound Main St @ E 62 Ave"
				},
				id: 549622179
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.101819, 49.217015]
				},
				properties: {
					id: 549622199,
					stop_id: "146",
					stop_name: "Northbound Main St @ E 59 Ave"
				},
				id: 549622199
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.10174, 49.218788]
				},
				properties: {
					id: 549622210,
					stop_id: "147",
					stop_name: "Northbound Main St @ E 57 Ave"
				},
				id: 549622210
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.101593, 49.223638]
				},
				properties: {
					id: 549622230,
					stop_id: "150",
					stop_name: "Northbound Main St @ E 51 Ave"
				},
				id: 549622230
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.10147, 49.225975]
				},
				properties: {
					id: 549622237,
					stop_id: "151",
					stop_name: "Northbound Main St @ E 49 Ave"
				},
				id: 549622237
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.101386, 49.228719]
				},
				properties: {
					id: 549622248,
					stop_id: "152",
					stop_name: "Northbound Main St @ E 46 Ave"
				},
				id: 549622248
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.101306, 49.231454]
				},
				properties: {
					id: 549622262,
					stop_id: "154",
					stop_name: "Northbound Main St @ E 43 Ave"
				},
				id: 549622262
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.101394, 49.233445]
				},
				properties: {
					id: 549622270,
					stop_id: "155",
					stop_name: "Northbound Main St @ E 41 Ave"
				},
				id: 549622270
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.101505, 49.235734]
				},
				properties: {
					id: 549622333,
					stop_id: "162",
					stop_name: "Northbound Main St @ E 39 Ave"
				},
				id: 549622333
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.101502, 49.23802]
				},
				properties: {
					id: 549622343,
					stop_id: "163",
					stop_name: "Northbound Main St @ E 36 Ave"
				},
				id: 549622343
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.101314, 49.241308]
				},
				properties: {
					id: 549622363,
					stop_id: "165",
					stop_name: "Northbound Main St @ E 33 Ave"
				},
				id: 549622363
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.101232, 49.243554]
				},
				properties: {
					id: 549622371,
					stop_id: "166",
					stop_name: "Northbound Main St @ E 30 Ave"
				},
				id: 549622371
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.101101, 49.245968]
				},
				properties: {
					id: 549622381,
					stop_id: "167",
					stop_name: "Northbound Main St @ E 28 Ave"
				},
				id: 549622381
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.100891, 49.249121]
				},
				properties: {
					id: 549622397,
					stop_id: "169",
					stop_name: "Northbound Main St @ E King Edward Ave"
				},
				id: 549622397
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.100763, 49.253226]
				},
				properties: {
					id: 549622408,
					stop_id: "170",
					stop_name: "Northbound Main St @ E 20 Ave"
				},
				id: 549622408
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.100984, 49.255006]
				},
				properties: {
					id: 549622419,
					stop_id: "171",
					stop_name: "Northbound Main St @ E 18 Ave"
				},
				id: 549622419
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.100989, 49.258782]
				},
				properties: {
					id: 549622435,
					stop_id: "173",
					stop_name: "Northbound Main St @ E 14 Ave"
				},
				id: 549622435
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.100888, 49.260528]
				},
				properties: {
					id: 549622441,
					stop_id: "174",
					stop_name: "Northbound Main St @ E 12 Ave"
				},
				id: 549622441
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.100792, 49.263233]
				},
				properties: {
					id: 549622455,
					stop_id: "176",
					stop_name: "Northbound Main St @ E Broadway"
				},
				id: 549622455
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.100685, 49.265339]
				},
				properties: {
					id: 549622462,
					stop_id: "177",
					stop_name: "Northbound Main St @ E 6th Ave"
				},
				id: 549622462
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.100662, 49.266719]
				},
				properties: {
					id: 549622472,
					stop_id: "178",
					stop_name: "Northbound Main St @ E 5th Ave"
				},
				id: 549622472
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.100505, 49.269455]
				},
				properties: {
					id: 549622478,
					stop_id: "179",
					stop_name: "Northbound Main St @ E 2nd Ave"
				},
				id: 549622478
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.100432, 49.270803]
				},
				properties: {
					id: 549622486,
					stop_id: "180",
					stop_name: "Northbound Main St @ Industrial Ave"
				},
				id: 549622486
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.099831, 49.273395]
				},
				properties: {
					id: 549622491,
					stop_id: "181",
					stop_name: "Main Street-Science World Station @ Bay 2"
				},
				id: 549622491
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.099748, 49.275321]
				},
				properties: {
					id: 549622499,
					stop_id: "182",
					stop_name: "Northbound Main St @ National Ave"
				},
				id: 549622499
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.099607, 49.278968]
				},
				properties: {
					id: 549622518,
					stop_id: "184",
					stop_name: "Northbound Main St @ E Georgia St"
				},
				id: 549622518
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.105366, 49.281733]
				},
				properties: {
					id: 549622536,
					stop_id: "186",
					stop_name: "Westbound W Hastings St @ Carrall St"
				},
				id: 549622536
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.110279, 49.283085]
				},
				properties: {
					id: 549622553,
					stop_id: "188",
					stop_name: "Westbound W Hastings St @ Hamilton St"
				},
				id: 549622553
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.109277, 49.212198]
				},
				properties: {
					id: 549622727,
					stop_id: "2151",
					stop_name: "Eastbound SW Marine Dr @ Manitoba St"
				},
				id: 549622727
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.106006, 49.21214]
				},
				properties: {
					id: 549622728,
					stop_id: "2152",
					stop_name: "Eastbound SE Marine Dr @ Ontario St"
				},
				id: 549622728
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.103214, 49.211554]
				},
				properties: {
					id: 549622796,
					stop_id: "2234",
					stop_name: "Westbound SE Marine Dr @ Main St"
				},
				id: 549622796
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.107012, 49.212459]
				},
				properties: {
					id: 549622797,
					stop_id: "2235",
					stop_name: "Westbound SW Marine Dr @ Ontario St"
				},
				id: 549622797
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.110409, 49.212212]
				},
				properties: {
					id: 549622798,
					stop_id: "2236",
					stop_name: "Westbound SW Marine Dr @ Manitoba St"
				},
				id: 549622798
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.099988, 49.282229]
				},
				properties: {
					id: 549622832,
					stop_id: "230",
					stop_name: "Eastbound E Cordova St @ Main St"
				},
				id: 549622832
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.099812, 49.28081]
				},
				properties: {
					id: 549622840,
					stop_id: "231",
					stop_name: "Southbound Main St @ E Hastings St"
				},
				id: 549622840
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.099896, 49.279029]
				},
				properties: {
					id: 549622850,
					stop_id: "232",
					stop_name: "Southbound Main St @ Keefer St"
				},
				id: 549622850
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.100141, 49.274506]
				},
				properties: {
					id: 549622866,
					stop_id: "234",
					stop_name: "Southbound Main St @ National Ave"
				},
				id: 549622866
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.100189, 49.273072]
				},
				properties: {
					id: 549622874,
					stop_id: "235",
					stop_name: "Main Street-Science World Station @ Bay 1"
				},
				id: 549622874
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.100821, 49.270621]
				},
				properties: {
					id: 549622881,
					stop_id: "236",
					stop_name: "Southbound Main St @ Switchmen St"
				},
				id: 549622881
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.100989, 49.265849]
				},
				properties: {
					id: 549622895,
					stop_id: "238",
					stop_name: "Southbound Main St @ E 5th Ave"
				},
				id: 549622895
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.10127, 49.259888]
				},
				properties: {
					id: 549622925,
					stop_id: "242",
					stop_name: "Southbound Main St @ E 12 Ave"
				},
				id: 549622925
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.101305, 49.258082]
				},
				properties: {
					id: 549622935,
					stop_id: "243",
					stop_name: "Southbound Main St @ E 14 Ave"
				},
				id: 549622935
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.101386, 49.256251]
				},
				properties: {
					id: 549622944,
					stop_id: "244",
					stop_name: "Southbound Main St @ E 16 Ave"
				},
				id: 549622944
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.100959, 49.254339]
				},
				properties: {
					id: 549622954,
					stop_id: "245",
					stop_name: "Southbound Main St @ E 18 Ave"
				},
				id: 549622954
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.101095, 49.252395]
				},
				properties: {
					id: 549622956,
					stop_id: "246",
					stop_name: "Southbound Main St @ E 20 Ave"
				},
				id: 549622956
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.101089, 49.250676]
				},
				properties: {
					id: 549622963,
					stop_id: "247",
					stop_name: "Southbound Main St @ E 22 Ave"
				},
				id: 549622963
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.101194, 49.248466]
				},
				properties: {
					id: 549622974,
					stop_id: "248",
					stop_name: "Southbound Main St @ E King Edward Ave"
				},
				id: 549622974
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.101498, 49.243003]
				},
				properties: {
					id: 549622992,
					stop_id: "250",
					stop_name: "Southbound Main St @ E 30 Ave"
				},
				id: 549622992
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.101629, 49.240211]
				},
				properties: {
					id: 549622999,
					stop_id: "251",
					stop_name: "Southbound Main St @ E 33 Ave"
				},
				id: 549622999
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.101715, 49.23788]
				},
				properties: {
					id: 549623005,
					stop_id: "252",
					stop_name: "Southbound Main St @ E 36 Ave"
				},
				id: 549623005
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.101636, 49.232735]
				},
				properties: {
					id: 549623041,
					stop_id: "256",
					stop_name: "Southbound Main St @ E 41 Ave"
				},
				id: 549623041
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.101591, 49.230612]
				},
				properties: {
					id: 549623043,
					stop_id: "257",
					stop_name: "Southbound Main St @ E 43 Ave"
				},
				id: 549623043
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.101625, 49.228145]
				},
				properties: {
					id: 549623051,
					stop_id: "258",
					stop_name: "Southbound Main St @ E 46 Ave"
				},
				id: 549623051
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.101804, 49.223508]
				},
				properties: {
					id: 549623069,
					stop_id: "260",
					stop_name: "Southbound Main St @ E 51 Ave"
				},
				id: 549623069
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.101949, 49.22075]
				},
				properties: {
					id: 549623080,
					stop_id: "261",
					stop_name: "Southbound Main St @ E 54 Ave"
				},
				id: 549623080
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.102003, 49.218969]
				},
				properties: {
					id: 549623089,
					stop_id: "262",
					stop_name: "Southbound Main St @ E 56 Ave"
				},
				id: 549623089
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.102076, 49.216491]
				},
				properties: {
					id: 549623097,
					stop_id: "263",
					stop_name: "Southbound Main St @ E 59 Ave"
				},
				id: 549623097
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.102217, 49.213842]
				},
				properties: {
					id: 549623115,
					stop_id: "265",
					stop_name: "Southbound Main St @ E 62 Ave"
				},
				id: 549623115
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.102245, 49.212975]
				},
				properties: {
					id: 549623122,
					stop_id: "266",
					stop_name: "Southbound Main St @ E 63 Ave"
				},
				id: 549623122
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.101625, 49.211695]
				},
				properties: {
					id: 549623130,
					stop_id: "267",
					stop_name: "Eastbound E 65 Ave @ Main St"
				},
				id: 549623130
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.1003, 49.28144]
				},
				properties: {
					id: 549623752,
					stop_id: "3428",
					stop_name: "Westbound E Hastings St @ Main St"
				},
				id: 549623752
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.108043, 49.282221]
				},
				properties: {
					id: 549623753,
					stop_id: "3429",
					stop_name: "Westbound W Hastings St @ Abbott St"
				},
				id: 549623753
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.111191, 49.284786]
				},
				properties: {
					id: 549623801,
					stop_id: "35",
					stop_name: "Waterfront Station @ Bay 3"
				},
				id: 549623801
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.109649, 49.283765]
				},
				properties: {
					id: 549623886,
					stop_id: "36",
					stop_name: "Eastbound W Cordova St @ Homer St"
				},
				id: 549623886
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.112367, 49.284435]
				},
				properties: {
					id: 549627950,
					stop_id: "859",
					stop_name: "Westbound W Hastings St @ Richards St"
				},
				id: 549627950
			}
		]
	},
	{
		id: "bus_route_03",
		name: "Bus 03 Robson",
		geofenceCollection: "BusStopsCollection08",
		coordinates: [
			[-123.113277, 49.279321],
			[-123.110118, 49.281467],
			[-123.110066, 49.281561],
			[-123.110956, 49.282119],
			[-123.111922, 49.282763],
			[-123.112864, 49.283416],
			[-123.117889, 49.286556],
			[-123.119392, 49.285601],
			[-123.120017, 49.285153],
			[-123.121665, 49.284014],
			[-123.122804, 49.283281],
			[-123.124848, 49.284599],
			[-123.129948, 49.287918],
			[-123.131119, 49.288661],
			[-123.13388, 49.290468],
			[-123.135476, 49.291479],
			[-123.136527, 49.290778],
			[-123.137549, 49.290071],
			[-123.139697, 49.288673],
			[-123.141822, 49.28727],
			[-123.140236, 49.286242],
			[-123.140236, 49.286242],
			[-123.141822, 49.28727],
			[-123.139697, 49.288673],
			[-123.137549, 49.290071],
			[-123.136527, 49.290778],
			[-123.135476, 49.291479],
			[-123.13388, 49.290468],
			[-123.131119, 49.288661],
			[-123.129948, 49.287918],
			[-123.124848, 49.284599],
			[-123.122804, 49.283281],
			[-123.121665, 49.284014],
			[-123.120017, 49.285153],
			[-123.119392, 49.285601],
			[-123.117889, 49.286556],
			[-123.112864, 49.283416],
			[-123.111922, 49.282763],
			[-123.110956, 49.282119],
			[-123.110066, 49.281561],
			[-123.110118, 49.281467],
			[-123.111557, 49.280488]
		],
		stopCoordinates: [
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.111842, 49.280182]
				},
				properties: {
					id: 549620302,
					stop_id: "10591",
					stop_name: "Northbound Cambie St @ Dunsmuir St"
				},
				id: 549620302
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.133644, 49.29023]
				},
				properties: {
					id: 549620952,
					stop_id: "11477",
					stop_name: "Eastbound Robson St @ Bidwell St"
				},
				id: 549620952
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.126771, 49.285774]
				},
				properties: {
					id: 549620953,
					stop_id: "11480",
					stop_name: "Eastbound Robson St @ Bute St"
				},
				id: 549620953
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.123086, 49.283556]
				},
				properties: {
					id: 549620954,
					stop_id: "11481",
					stop_name: "Westbound Robson St @ Burrard St"
				},
				id: 549620954
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.127216, 49.286249]
				},
				properties: {
					id: 549620955,
					stop_id: "11483",
					stop_name: "Westbound Robson St @ Bute St"
				},
				id: 549620955
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.130152, 49.288152]
				},
				properties: {
					id: 549620956,
					stop_id: "11484",
					stop_name: "Westbound Robson St @ Broughton St"
				},
				id: 549620956
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.132542, 49.289693]
				},
				properties: {
					id: 549620957,
					stop_id: "11485",
					stop_name: "Westbound Robson St @ Cardero St"
				},
				id: 549620957
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.11137, 49.282472]
				},
				properties: {
					id: 549621074,
					stop_id: "11638",
					stop_name: "Westbound W Pender St @ Hamilton St"
				},
				id: 549621074
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.132046, 49.2892]
				},
				properties: {
					id: 549621846,
					stop_id: "12641",
					stop_name: "Eastbound Robson St @ Cardero St"
				},
				id: 549621846
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.139345, 49.288812]
				},
				properties: {
					id: 549621911,
					stop_id: "12730",
					stop_name: "Northbound Denman St @ Comox St"
				},
				id: 549621911
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.129709, 49.287679]
				},
				properties: {
					id: 549621912,
					stop_id: "12732",
					stop_name: "Eastbound Robson St @ Broughton St"
				},
				id: 549621912
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.12214, 49.283593]
				},
				properties: {
					id: 549623408,
					stop_id: "30",
					stop_name: "Northbound Burrard St @ Robson St"
				},
				id: 549623408
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.120503, 49.284688]
				},
				properties: {
					id: 549623502,
					stop_id: "31",
					stop_name: "Burrard Station @ Bay 7"
				},
				id: 549623502
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.141411, 49.287084]
				},
				properties: {
					id: 549626097,
					stop_id: "613",
					stop_name: "Westbound Davie St @ Denman St"
				},
				id: 549626097
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.136163, 49.290911]
				},
				properties: {
					id: 549626123,
					stop_id: "616",
					stop_name: "Northbound Denman St @ Haro St"
				},
				id: 549626123
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.135926, 49.29124]
				},
				properties: {
					id: 549626279,
					stop_id: "635",
					stop_name: "Southbound Denman St @ Robson St"
				},
				id: 549626279
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.137908, 49.289924]
				},
				properties: {
					id: 549626288,
					stop_id: "636",
					stop_name: "Southbound Denman St @ Barclay St"
				},
				id: 549626288
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.140021, 49.288522]
				},
				properties: {
					id: 549626294,
					stop_id: "637",
					stop_name: "Southbound Denman St @ Comox St"
				},
				id: 549626294
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.141166, 49.287773]
				},
				properties: {
					id: 549626305,
					stop_id: "638",
					stop_name: "Southbound Denman St @ Pendrell St"
				},
				id: 549626305
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.141124, 49.286705]
				},
				properties: {
					id: 549626316,
					stop_id: "639",
					stop_name: "Eastbound Davie St @ Denman St"
				},
				id: 549626316
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.111471, 49.2844]
				},
				properties: {
					id: 549626327,
					stop_id: "645",
					stop_name: "Southbound Richards St @ W Cordova St"
				},
				id: 549626327
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.117245, 49.286121]
				},
				properties: {
					id: 549627354,
					stop_id: "76",
					stop_name: "Eastbound W Pender St @ Burrard St"
				},
				id: 549627354
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.115231, 49.284791]
				},
				properties: {
					id: 549627447,
					stop_id: "77",
					stop_name: "Eastbound W Pender St @ Granville St"
				},
				id: 549627447
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.113589, 49.283753]
				},
				properties: {
					id: 549627540,
					stop_id: "78",
					stop_name: "Eastbound W Pender St @ Seymour St"
				},
				id: 549627540
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.110618, 49.281799]
				},
				properties: {
					id: 549627688,
					stop_id: "80",
					stop_name: "Eastbound W Pender St @ Hamilton St"
				},
				id: 549627688
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.111146, 49.280808]
				},
				properties: {
					id: 549627775,
					stop_id: "81",
					stop_name: "Southbound Cambie St @ Dunsmuir St"
				},
				id: 549627775
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.119982, 49.285306]
				},
				properties: {
					id: 549627924,
					stop_id: "8535",
					stop_name: "Burrard Station @ Bay 1"
				},
				id: 549627924
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.113429, 49.283818]
				},
				properties: {
					id: 549628489,
					stop_id: "95",
					stop_name: "Westbound W Pender St @ Seymour St"
				},
				id: 549628489
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.114596, 49.284575]
				},
				properties: {
					id: 549628571,
					stop_id: "96",
					stop_name: "Westbound W Pender St @ Granville St"
				},
				id: 549628571
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.116055, 49.285523]
				},
				properties: {
					id: 549628619,
					stop_id: "97",
					stop_name: "Westbound W Pender St @ Howe St"
				},
				id: 549628619
			}
		]
	},
	{
		id: "bus_route_04",
		name: "Bus 04 Davie",
		geofenceCollection: "BusStopsCollection01",
		coordinates: [
			[-123.141822, 49.28727],
			[-123.137481, 49.284453],
			[-123.136304, 49.283712],
			[-123.133353, 49.281806],
			[-123.131214, 49.280383],
			[-123.126192, 49.277155],
			[-123.123274, 49.275247],
			[-123.122665, 49.274872],
			[-123.122137, 49.274525],
			[-123.121567, 49.274176],
			[-123.121488, 49.274088],
			[-123.121333, 49.273981],
			[-123.120348, 49.274247],
			[-123.120169, 49.27434],
			[-123.119316, 49.274534],
			[-123.119203, 49.274619],
			[-123.11812, 49.275974],
			[-123.117936, 49.276103],
			[-123.117902, 49.276212],
			[-123.116625, 49.277111],
			[-123.116587, 49.277168],
			[-123.114963, 49.27821],
			[-123.113277, 49.279321],
			[-123.111557, 49.280488],
			[-123.110118, 49.281467],
			[-123.113277, 49.279321],
			[-123.114963, 49.27821],
			[-123.116587, 49.277168],
			[-123.116625, 49.277111],
			[-123.117902, 49.276212],
			[-123.11807, 49.276185],
			[-123.118284, 49.276035],
			[-123.119415, 49.274599],
			[-123.119985, 49.274496],
			[-123.121401, 49.274113],
			[-123.121567, 49.274176],
			[-123.122137, 49.274525],
			[-123.122665, 49.274872],
			[-123.123274, 49.275247],
			[-123.126192, 49.277155],
			[-123.131214, 49.280383],
			[-123.133353, 49.281806],
			[-123.136304, 49.283712],
			[-123.137481, 49.284453],
			[-123.141822, 49.28727]
		],
		stopCoordinates: [
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.136106, 49.283478]
				},
				properties: {
					id: 549620000,
					stop_id: "10070",
					stop_name: "Eastbound Davie St @ Broughton St"
				},
				id: 549620000
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.124555, 49.276179]
				},
				properties: {
					id: 549620213,
					stop_id: "10424",
					stop_name: "Westbound Davie St @ Richards St"
				},
				id: 549620213
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.111842, 49.280182]
				},
				properties: {
					id: 549620302,
					stop_id: "10591",
					stop_name: "Northbound Cambie St @ Dunsmuir St"
				},
				id: 549620302
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.126971, 49.27755]
				},
				properties: {
					id: 549620577,
					stop_id: "11",
					stop_name: "Eastbound Davie St @ Howe St"
				},
				id: 549620577
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.115404, 49.277999]
				},
				properties: {
					id: 549620674,
					stop_id: "11119",
					stop_name: "Southbound Cambie St @ Robson St"
				},
				id: 549620674
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.122521, 49.274863]
				},
				properties: {
					id: 549620859,
					stop_id: "11310",
					stop_name: "Yaletown-Roundhouse Station @ Bay 1"
				},
				id: 549620859
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.121876, 49.274278]
				},
				properties: {
					id: 549620860,
					stop_id: "11311",
					stop_name: "Yaletown-Roundhouse Station @ Bay 2"
				},
				id: 549620860
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.118424, 49.275952]
				},
				properties: {
					id: 549621606,
					stop_id: "12329",
					stop_name: "Southbound Cambie St @ Nelson St"
				},
				id: 549621606
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.117748, 49.276256]
				},
				properties: {
					id: 549621607,
					stop_id: "12330",
					stop_name: "Northbound Cambie St @ Nelson St"
				},
				id: 549621607
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.114655, 49.278318]
				},
				properties: {
					id: 549621608,
					stop_id: "12331",
					stop_name: "Northbound Cambie St @ Robson St"
				},
				id: 549621608
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.124529, 49.275982]
				},
				properties: {
					id: 549621611,
					stop_id: "12334",
					stop_name: "Eastbound Davie St @ Richards St"
				},
				id: 549621611
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.125976, 49.276918]
				},
				properties: {
					id: 549621620,
					stop_id: "12348",
					stop_name: "Eastbound Davie St @ Granville St"
				},
				id: 549621620
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.112876, 49.279676]
				},
				properties: {
					id: 549621803,
					stop_id: "12581",
					stop_name: "Southbound Cambie St @ W Georgia St"
				},
				id: 549621803
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.126514, 49.277437]
				},
				properties: {
					id: 549622991,
					stop_id: "25",
					stop_name: "Westbound Davie St @ Granville St"
				},
				id: 549622991
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.127493, 49.278073]
				},
				properties: {
					id: 549623068,
					stop_id: "26",
					stop_name: "Westbound Davie St @ Howe St"
				},
				id: 549623068
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.129617, 49.279449]
				},
				properties: {
					id: 549624921,
					stop_id: "48",
					stop_name: "Westbound Davie St @ Burrard St"
				},
				id: 549624921
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.131638, 49.280756]
				},
				properties: {
					id: 549624994,
					stop_id: "49",
					stop_name: "Westbound Davie St @ Thurlow St"
				},
				id: 549624994
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.133574, 49.282009]
				},
				properties: {
					id: 549625080,
					stop_id: "50",
					stop_name: "Westbound Davie St @ Bute St"
				},
				id: 549625080
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.135121, 49.283006]
				},
				properties: {
					id: 549625167,
					stop_id: "51",
					stop_name: "Westbound Davie St @ Jervis St"
				},
				id: 549625167
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.136507, 49.283898]
				},
				properties: {
					id: 549625260,
					stop_id: "52",
					stop_name: "Westbound Davie St @ Broughton St"
				},
				id: 549625260
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.138909, 49.28546]
				},
				properties: {
					id: 549625338,
					stop_id: "53",
					stop_name: "Westbound Davie St @ Cardero St"
				},
				id: 549625338
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.141411, 49.287084]
				},
				properties: {
					id: 549626097,
					stop_id: "613",
					stop_name: "Westbound Davie St @ Denman St"
				},
				id: 549626097
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.141124, 49.286705]
				},
				properties: {
					id: 549626316,
					stop_id: "639",
					stop_name: "Eastbound Davie St @ Denman St"
				},
				id: 549626316
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.13847, 49.285009]
				},
				properties: {
					id: 549626319,
					stop_id: "640",
					stop_name: "Eastbound Davie St @ Cardero St"
				},
				id: 549626319
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.13726, 49.284219]
				},
				properties: {
					id: 549626322,
					stop_id: "641",
					stop_name: "Eastbound Davie St @ Nicola St"
				},
				id: 549626322
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.13477, 49.282579]
				},
				properties: {
					id: 549626323,
					stop_id: "642",
					stop_name: "Eastbound Davie St @ Jervis St"
				},
				id: 549626323
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.132973, 49.28144]
				},
				properties: {
					id: 549626324,
					stop_id: "643",
					stop_name: "Eastbound Davie St @ Bute St"
				},
				id: 549626324
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.13096, 49.280147]
				},
				properties: {
					id: 549626325,
					stop_id: "644",
					stop_name: "Eastbound Davie St @ Thurlow St"
				},
				id: 549626325
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.128901, 49.278793]
				},
				properties: {
					id: 549627165,
					stop_id: "74",
					stop_name: "Eastbound Davie St @ Burrard St"
				},
				id: 549627165
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.111146, 49.280808]
				},
				properties: {
					id: 549627775,
					stop_id: "81",
					stop_name: "Southbound Cambie St @ Dunsmuir St"
				},
				id: 549627775
			}
		]
	},
	{
		id: "bus_route_05",
		name: "Bus 05 Fraser",
		geofenceCollection: "BusStopsCollection03",
		coordinates: [
			[-123.091135, 49.211072],
			[-123.093292, 49.211075],
			[-123.09329, 49.211836],
			[-123.091123, 49.211818],
			[-123.091102, 49.213023],
			[-123.09092, 49.219117],
			[-123.09087, 49.221994],
			[-123.090841, 49.222717],
			[-123.090842, 49.223571],
			[-123.090805, 49.224518],
			[-123.090711, 49.225443],
			[-123.090723, 49.226525],
			[-123.090701, 49.227363],
			[-123.090675, 49.228273],
			[-123.090586, 49.230094],
			[-123.090601, 49.230994],
			[-123.090549, 49.232917],
			[-123.090529, 49.234769],
			[-123.090396, 49.238319],
			[-123.090377, 49.240303],
			[-123.090334, 49.24172],
			[-123.090305, 49.243532],
			[-123.090271, 49.244741],
			[-123.090211, 49.245542],
			[-123.090194, 49.246618],
			[-123.090166, 49.247611],
			[-123.090155, 49.248662],
			[-123.090118, 49.250092],
			[-123.090078, 49.251008],
			[-123.090059, 49.251897],
			[-123.089992, 49.252795],
			[-123.089961, 49.253725],
			[-123.089953, 49.254632],
			[-123.089914, 49.255533],
			[-123.089835, 49.256404],
			[-123.089786, 49.256691],
			[-123.089713, 49.256831],
			[-123.089277, 49.257364],
			[-123.089223, 49.257531],
			[-123.089209, 49.257939],
			[-123.089172, 49.26062],
			[-123.089135, 49.262482],
			[-123.094953, 49.262519],
			[-123.095594, 49.26255],
			[-123.096, 49.262639],
			[-123.096704, 49.262775],
			[-123.099402, 49.262866],
			[-123.100833, 49.26449],
			[-123.10077, 49.265504],
			[-123.100729, 49.266488],
			[-123.100783, 49.266609],
			[-123.100756, 49.267313],
			[-123.100745, 49.268047],
			[-123.100657, 49.268138],
			[-123.100586, 49.270704],
			[-123.100453, 49.27093],
			[-123.10002, 49.271891],
			[-123.099939, 49.272746],
			[-123.099763, 49.277279],
			[-123.099721, 49.277685],
			[-123.09972, 49.278009],
			[-123.099812, 49.278081],
			[-123.099772, 49.278569],
			[-123.099699, 49.280381],
			[-123.099687, 49.281347],
			[-123.103853, 49.281433],
			[-123.104327, 49.281474],
			[-123.107193, 49.282001],
			[-123.109418, 49.282437],
			[-123.109961, 49.282772],
			[-123.112855, 49.284665],
			[-123.111852, 49.285326],
			[-123.110918, 49.284708],
			[-123.111852, 49.285326],
			[-123.10884, 49.28333],
			[-123.108544, 49.28323],
			[-123.106794, 49.282928],
			[-123.104267, 49.28243],
			[-123.103578, 49.28235],
			[-123.102225, 49.282346],
			[-123.099631, 49.282289],
			[-123.099687, 49.281347],
			[-123.099699, 49.280381],
			[-123.099772, 49.278569],
			[-123.099812, 49.278081],
			[-123.099877, 49.278018],
			[-123.099901, 49.277699],
			[-123.099909, 49.277088],
			[-123.09993, 49.276763],
			[-123.099994, 49.274936],
			[-123.100141, 49.272039],
			[-123.100333, 49.27156],
			[-123.100602, 49.270957],
			[-123.100726, 49.270709],
			[-123.100736, 49.270128],
			[-123.100825, 49.268144],
			[-123.100745, 49.268047],
			[-123.100756, 49.267313],
			[-123.100783, 49.266609],
			[-123.100864, 49.26643],
			[-123.100994, 49.264549],
			[-123.100921, 49.264503],
			[-123.100919, 49.264393],
			[-123.099653, 49.262875],
			[-123.096704, 49.262775],
			[-123.096, 49.262639],
			[-123.095594, 49.26255],
			[-123.094953, 49.262519],
			[-123.089135, 49.262482],
			[-123.089172, 49.26062],
			[-123.089209, 49.257939],
			[-123.089223, 49.257531],
			[-123.089277, 49.257364],
			[-123.089713, 49.256831],
			[-123.089786, 49.256691],
			[-123.089835, 49.256404],
			[-123.089914, 49.255533],
			[-123.089953, 49.254632],
			[-123.089961, 49.253725],
			[-123.089992, 49.252795],
			[-123.090059, 49.251897],
			[-123.090078, 49.251008],
			[-123.090118, 49.250092],
			[-123.090155, 49.248662],
			[-123.090166, 49.247611],
			[-123.090194, 49.246618],
			[-123.090211, 49.245542],
			[-123.090271, 49.244741],
			[-123.090305, 49.243532],
			[-123.090334, 49.24172],
			[-123.090377, 49.240303],
			[-123.090396, 49.238319],
			[-123.090529, 49.234769],
			[-123.090549, 49.232917],
			[-123.090601, 49.230994],
			[-123.090586, 49.230094],
			[-123.090675, 49.228273],
			[-123.090701, 49.227363],
			[-123.090723, 49.226525],
			[-123.090711, 49.225443],
			[-123.090805, 49.224518],
			[-123.090842, 49.223571],
			[-123.090841, 49.222717],
			[-123.09087, 49.221994],
			[-123.09092, 49.219117],
			[-123.091102, 49.213023],
			[-123.091135, 49.211072],
			[-123.091122, 49.211818],
			[-123.091135, 49.211072],
			[-123.093292, 49.211075],
			[-123.09329, 49.211836],
			[-123.091123, 49.211818],
			[-123.091102, 49.213023],
			[-123.09092, 49.219117],
			[-123.09087, 49.221994],
			[-123.090841, 49.222717],
			[-123.090842, 49.223571],
			[-123.090805, 49.224518],
			[-123.090711, 49.225443],
			[-123.090723, 49.226525],
			[-123.090701, 49.227363],
			[-123.090675, 49.228273],
			[-123.090586, 49.230094],
			[-123.090601, 49.230994],
			[-123.090549, 49.232917],
			[-123.090529, 49.234769],
			[-123.090396, 49.238319],
			[-123.090377, 49.240303],
			[-123.090334, 49.24172],
			[-123.090305, 49.243532],
			[-123.090271, 49.244741],
			[-123.090211, 49.245542],
			[-123.090194, 49.246618],
			[-123.090166, 49.247611],
			[-123.090155, 49.248662],
			[-123.090118, 49.250092],
			[-123.090078, 49.251008],
			[-123.090059, 49.251897],
			[-123.089992, 49.252795],
			[-123.089961, 49.253725],
			[-123.089953, 49.254632],
			[-123.089914, 49.255533],
			[-123.089835, 49.256404],
			[-123.089786, 49.256691],
			[-123.089713, 49.256831],
			[-123.089277, 49.257364],
			[-123.089223, 49.257531],
			[-123.089209, 49.257939],
			[-123.089172, 49.26062],
			[-123.089135, 49.262482],
			[-123.094953, 49.262519],
			[-123.095594, 49.26255],
			[-123.096, 49.262639],
			[-123.096704, 49.262775],
			[-123.099402, 49.262866],
			[-123.100833, 49.26449],
			[-123.10077, 49.265504],
			[-123.100729, 49.266488],
			[-123.100783, 49.266609],
			[-123.100756, 49.267313],
			[-123.100745, 49.268047],
			[-123.100657, 49.268138],
			[-123.100586, 49.270704],
			[-123.100453, 49.27093],
			[-123.10002, 49.271891],
			[-123.099939, 49.272746],
			[-123.099763, 49.277279],
			[-123.099721, 49.277685],
			[-123.09972, 49.278009],
			[-123.099812, 49.278081],
			[-123.099772, 49.278569],
			[-123.099699, 49.280381],
			[-123.099687, 49.281347],
			[-123.103853, 49.281433],
			[-123.104327, 49.281474],
			[-123.107193, 49.282001],
			[-123.109418, 49.282437],
			[-123.109961, 49.282772],
			[-123.112855, 49.284665],
			[-123.111852, 49.285326],
			[-123.110918, 49.284708]
		],
		stopCoordinates: [
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.091221, 49.211303]
				},
				properties: {
					id: 549620224,
					stop_id: "10439",
					stop_name: "Southbound Fraser St @ SE Marine Dr"
				},
				id: 549620224
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.09009, 49.262593]
				},
				properties: {
					id: 549620325,
					stop_id: "10619",
					stop_name: "Westbound E Broadway @ Fraser St"
				},
				id: 549620325
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.100898, 49.268688]
				},
				properties: {
					id: 549620452,
					stop_id: "10814",
					stop_name: "Southbound Main St @ E 2nd Ave"
				},
				id: 549620452
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.090881, 49.215947]
				},
				properties: {
					id: 549620981,
					stop_id: "11521",
					stop_name: "Northbound Fraser St @ E 60 Ave"
				},
				id: 549620981
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.089851, 49.253266]
				},
				properties: {
					id: 549621747,
					stop_id: "12487",
					stop_name: "Northbound Fraser St @ E 20 Ave"
				},
				id: 549621747
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.091581, 49.233019]
				},
				properties: {
					id: 549621869,
					stop_id: "12668",
					stop_name: "Westbound E 41 Ave @ Fraser St"
				},
				id: 549621869
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.104634, 49.282442]
				},
				properties: {
					id: 549621905,
					stop_id: "12720",
					stop_name: "Eastbound W Cordova St @ Carrall St"
				},
				id: 549621905
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.090815, 49.219428]
				},
				properties: {
					id: 549621978,
					stop_id: "12843",
					stop_name: "Northbound Fraser St @ E 56 Ave"
				},
				id: 549621978
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.090467, 49.232426]
				},
				properties: {
					id: 549622026,
					stop_id: "12891",
					stop_name: "Northbound Fraser St @ E 41 Ave"
				},
				id: 549622026
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.100685, 49.265339]
				},
				properties: {
					id: 549622462,
					stop_id: "177",
					stop_name: "Northbound Main St @ E 6th Ave"
				},
				id: 549622462
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.100662, 49.266719]
				},
				properties: {
					id: 549622472,
					stop_id: "178",
					stop_name: "Northbound Main St @ E 5th Ave"
				},
				id: 549622472
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.100505, 49.269455]
				},
				properties: {
					id: 549622478,
					stop_id: "179",
					stop_name: "Northbound Main St @ E 2nd Ave"
				},
				id: 549622478
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.100432, 49.270803]
				},
				properties: {
					id: 549622486,
					stop_id: "180",
					stop_name: "Northbound Main St @ Industrial Ave"
				},
				id: 549622486
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.099831, 49.273395]
				},
				properties: {
					id: 549622491,
					stop_id: "181",
					stop_name: "Main Street-Science World Station @ Bay 2"
				},
				id: 549622491
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.099748, 49.275321]
				},
				properties: {
					id: 549622499,
					stop_id: "182",
					stop_name: "Northbound Main St @ National Ave"
				},
				id: 549622499
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.099607, 49.278968]
				},
				properties: {
					id: 549622518,
					stop_id: "184",
					stop_name: "Northbound Main St @ E Georgia St"
				},
				id: 549622518
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.105366, 49.281733]
				},
				properties: {
					id: 549622536,
					stop_id: "186",
					stop_name: "Westbound W Hastings St @ Carrall St"
				},
				id: 549622536
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.110279, 49.283085]
				},
				properties: {
					id: 549622553,
					stop_id: "188",
					stop_name: "Westbound W Hastings St @ Hamilton St"
				},
				id: 549622553
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.099988, 49.282229]
				},
				properties: {
					id: 549622832,
					stop_id: "230",
					stop_name: "Eastbound E Cordova St @ Main St"
				},
				id: 549622832
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.099812, 49.28081]
				},
				properties: {
					id: 549622840,
					stop_id: "231",
					stop_name: "Southbound Main St @ E Hastings St"
				},
				id: 549622840
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.099896, 49.279029]
				},
				properties: {
					id: 549622850,
					stop_id: "232",
					stop_name: "Southbound Main St @ Keefer St"
				},
				id: 549622850
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.100141, 49.274506]
				},
				properties: {
					id: 549622866,
					stop_id: "234",
					stop_name: "Southbound Main St @ National Ave"
				},
				id: 549622866
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.100189, 49.273072]
				},
				properties: {
					id: 549622874,
					stop_id: "235",
					stop_name: "Main Street-Science World Station @ Bay 1"
				},
				id: 549622874
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.100821, 49.270621]
				},
				properties: {
					id: 549622881,
					stop_id: "236",
					stop_name: "Southbound Main St @ Switchmen St"
				},
				id: 549622881
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.1003, 49.28144]
				},
				properties: {
					id: 549623752,
					stop_id: "3428",
					stop_name: "Westbound E Hastings St @ Main St"
				},
				id: 549623752
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.108043, 49.282221]
				},
				properties: {
					id: 549623753,
					stop_id: "3429",
					stop_name: "Westbound W Hastings St @ Abbott St"
				},
				id: 549623753
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.111191, 49.284786]
				},
				properties: {
					id: 549623801,
					stop_id: "35",
					stop_name: "Waterfront Station @ Bay 3"
				},
				id: 549623801
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.109649, 49.283765]
				},
				properties: {
					id: 549623886,
					stop_id: "36",
					stop_name: "Eastbound W Cordova St @ Homer St"
				},
				id: 549623886
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.100514, 49.263824]
				},
				properties: {
					id: 549627519,
					stop_id: "778",
					stop_name: "Eastbound Kingsway @ Main St"
				},
				id: 549627519
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.098055, 49.262719]
				},
				properties: {
					id: 549627530,
					stop_id: "779",
					stop_name: "Eastbound E Broadway @ Kingsway"
				},
				id: 549627530
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.095524, 49.262454]
				},
				properties: {
					id: 549627541,
					stop_id: "780",
					stop_name: "Eastbound E Broadway @ Prince Edward St"
				},
				id: 549627541
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.092514, 49.262402]
				},
				properties: {
					id: 549627547,
					stop_id: "781",
					stop_name: "Eastbound E Broadway @ St. George St"
				},
				id: 549627547
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.089232, 49.262021]
				},
				properties: {
					id: 549627548,
					stop_id: "782",
					stop_name: "Southbound Fraser St @ E Broadway"
				},
				id: 549627548
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.089275, 49.26032]
				},
				properties: {
					id: 549627556,
					stop_id: "783",
					stop_name: "Southbound Fraser St @ E 11 Ave"
				},
				id: 549627556
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.089284, 49.258479]
				},
				properties: {
					id: 549627567,
					stop_id: "784",
					stop_name: "Southbound Fraser St @ E 13 Ave"
				},
				id: 549627567
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.090058, 49.25611]
				},
				properties: {
					id: 549627575,
					stop_id: "785",
					stop_name: "Southbound Fraser St @ E 16 Ave"
				},
				id: 549627575
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.090123, 49.25348]
				},
				properties: {
					id: 549627583,
					stop_id: "786",
					stop_name: "Southbound Fraser St @ E 19 Ave"
				},
				id: 549627583
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.090186, 49.25162]
				},
				properties: {
					id: 549627592,
					stop_id: "787",
					stop_name: "Southbound Fraser St @ E 21 Ave"
				},
				id: 549627592
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.090246, 49.249808]
				},
				properties: {
					id: 549627595,
					stop_id: "788",
					stop_name: "Southbound Fraser St @ E 23 Ave"
				},
				id: 549627595
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.090273, 49.248306]
				},
				properties: {
					id: 549627603,
					stop_id: "789",
					stop_name: "Southbound Fraser St @ E King Edward Ave"
				},
				id: 549627603
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.090308, 49.246305]
				},
				properties: {
					id: 549627614,
					stop_id: "790",
					stop_name: "Southbound Fraser St @ E 27 Ave"
				},
				id: 549627614
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.090388, 49.244247]
				},
				properties: {
					id: 549627625,
					stop_id: "791",
					stop_name: "Southbound Fraser St @ E 29 Ave"
				},
				id: 549627625
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.090417, 49.242261]
				},
				properties: {
					id: 549627635,
					stop_id: "792",
					stop_name: "Southbound Fraser St @ E 31 Ave"
				},
				id: 549627635
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.090476, 49.239976]
				},
				properties: {
					id: 549627644,
					stop_id: "793",
					stop_name: "Southbound Fraser St @ E 33 Ave"
				},
				id: 549627644
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.090514, 49.238045]
				},
				properties: {
					id: 549627655,
					stop_id: "794",
					stop_name: "Southbound Fraser St @ E 35 Ave"
				},
				id: 549627655
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.090613, 49.236049]
				},
				properties: {
					id: 549627665,
					stop_id: "795",
					stop_name: "Southbound Fraser St @ E 37 Ave"
				},
				id: 549627665
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.090651, 49.234521]
				},
				properties: {
					id: 549627667,
					stop_id: "796",
					stop_name: "Southbound Fraser St @ E 39 Ave"
				},
				id: 549627667
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.090705, 49.232478]
				},
				properties: {
					id: 549627676,
					stop_id: "797",
					stop_name: "Southbound Fraser St @ E 41 Ave"
				},
				id: 549627676
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.090713, 49.230719]
				},
				properties: {
					id: 549627679,
					stop_id: "798",
					stop_name: "Southbound Fraser St @ E 43 Ave"
				},
				id: 549627679
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.090762, 49.228897]
				},
				properties: {
					id: 549627687,
					stop_id: "799",
					stop_name: "Southbound Fraser St @ E 45 Ave"
				},
				id: 549627687
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.090813, 49.227099]
				},
				properties: {
					id: 549627689,
					stop_id: "800",
					stop_name: "Southbound Fraser St @ E 47 Ave"
				},
				id: 549627689
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.090918, 49.225133]
				},
				properties: {
					id: 549627699,
					stop_id: "801",
					stop_name: "Southbound Fraser St @ E 49 Ave"
				},
				id: 549627699
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.090958, 49.223292]
				},
				properties: {
					id: 549627702,
					stop_id: "802",
					stop_name: "Southbound Fraser St @ E 51 Ave"
				},
				id: 549627702
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.091, 49.22148]
				},
				properties: {
					id: 549627713,
					stop_id: "803",
					stop_name: "Southbound Fraser St @ E 53 Ave"
				},
				id: 549627713
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.091056, 49.219642]
				},
				properties: {
					id: 549627724,
					stop_id: "804",
					stop_name: "Southbound Fraser St @ E 55 Ave"
				},
				id: 549627724
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.091092, 49.217937]
				},
				properties: {
					id: 549627735,
					stop_id: "805",
					stop_name: "Southbound Fraser St @ E 57 Ave"
				},
				id: 549627735
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.091124, 49.216234]
				},
				properties: {
					id: 549627746,
					stop_id: "806",
					stop_name: "Southbound Fraser St @ E 59 Ave"
				},
				id: 549627746
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.091155, 49.214571]
				},
				properties: {
					id: 549627757,
					stop_id: "807",
					stop_name: "Southbound Fraser St @ E 61 Ave"
				},
				id: 549627757
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.091181, 49.212749]
				},
				properties: {
					id: 549627767,
					stop_id: "808",
					stop_name: "Southbound Fraser St @ E 63 Ave"
				},
				id: 549627767
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.091218, 49.211508]
				},
				properties: {
					id: 549627770,
					stop_id: "809",
					stop_name: "Southbound Fraser St @ E 65 Ave"
				},
				id: 549627770
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.090933, 49.212147]
				},
				properties: {
					id: 549627792,
					stop_id: "827",
					stop_name: "Northbound Fraser St @ E 65 Ave"
				},
				id: 549627792
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.090903, 49.214241]
				},
				properties: {
					id: 549627794,
					stop_id: "828",
					stop_name: "Northbound Fraser St @ E 62 Ave"
				},
				id: 549627794
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.090756, 49.22126]
				},
				properties: {
					id: 549627805,
					stop_id: "831",
					stop_name: "Northbound Fraser St @ E 54 Ave"
				},
				id: 549627805
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.090707, 49.223033]
				},
				properties: {
					id: 549627807,
					stop_id: "832",
					stop_name: "Northbound Fraser St @ E 52 Ave"
				},
				id: 549627807
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.090643, 49.225766]
				},
				properties: {
					id: 549627812,
					stop_id: "834",
					stop_name: "Northbound Fraser St @ E 49 Ave"
				},
				id: 549627812
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.090596, 49.227632]
				},
				properties: {
					id: 549627813,
					stop_id: "835",
					stop_name: "Northbound Fraser St @ E 47 Ave"
				},
				id: 549627813
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.090556, 49.229442]
				},
				properties: {
					id: 549627820,
					stop_id: "836",
					stop_name: "Northbound Fraser St @ E 45 Ave"
				},
				id: 549627820
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.0905, 49.231265]
				},
				properties: {
					id: 549627826,
					stop_id: "837",
					stop_name: "Northbound Fraser St @ E 43 Ave"
				},
				id: 549627826
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.090364, 49.235102]
				},
				properties: {
					id: 549627837,
					stop_id: "839",
					stop_name: "Northbound Fraser St @ E 39 Ave"
				},
				id: 549627837
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.090324, 49.236772]
				},
				properties: {
					id: 549627840,
					stop_id: "840",
					stop_name: "Northbound Fraser St @ E 37 Ave"
				},
				id: 549627840
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.090274, 49.23862]
				},
				properties: {
					id: 549627842,
					stop_id: "841",
					stop_name: "Northbound Fraser St @ E 35 Ave"
				},
				id: 549627842
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.09022, 49.240627]
				},
				properties: {
					id: 549627847,
					stop_id: "842",
					stop_name: "Northbound Fraser St @ E 33 Ave"
				},
				id: 549627847
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.090196, 49.242872]
				},
				properties: {
					id: 549627852,
					stop_id: "844",
					stop_name: "Northbound Fraser St @ E 31 Ave"
				},
				id: 549627852
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.090107, 49.245869]
				},
				properties: {
					id: 549627854,
					stop_id: "845",
					stop_name: "Northbound Fraser St @ E 28 Ave"
				},
				id: 549627854
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.089998, 49.248973]
				},
				properties: {
					id: 549627868,
					stop_id: "847",
					stop_name: "Northbound Fraser St @ E King Edward Ave"
				},
				id: 549627868
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.089924, 49.251282]
				},
				properties: {
					id: 549627877,
					stop_id: "848",
					stop_name: "Northbound Fraser St @ E 22 Ave"
				},
				id: 549627877
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.089737, 49.255774]
				},
				properties: {
					id: 549627895,
					stop_id: "850",
					stop_name: "Northbound Fraser St @ E 17 Ave"
				},
				id: 549627895
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.089096, 49.258292]
				},
				properties: {
					id: 549627905,
					stop_id: "851",
					stop_name: "Northbound Fraser St @ E 14 Ave"
				},
				id: 549627905
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.089055, 49.260077]
				},
				properties: {
					id: 549627915,
					stop_id: "852",
					stop_name: "Northbound Fraser St @ E 12 Ave"
				},
				id: 549627915
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.08903, 49.261837]
				},
				properties: {
					id: 549627921,
					stop_id: "853",
					stop_name: "Northbound Fraser St @ E 10 Ave"
				},
				id: 549627921
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.093535, 49.262598]
				},
				properties: {
					id: 549627929,
					stop_id: "855",
					stop_name: "Westbound E Broadway @ St. George St"
				},
				id: 549627929
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.096513, 49.262835]
				},
				properties: {
					id: 549627932,
					stop_id: "856",
					stop_name: "Westbound E Broadway @ Prince Edward St"
				},
				id: 549627932
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.098697, 49.262926]
				},
				properties: {
					id: 549627938,
					stop_id: "857",
					stop_name: "Westbound E Broadway @ Scotia St"
				},
				id: 549627938
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.112367, 49.284435]
				},
				properties: {
					id: 549627950,
					stop_id: "859",
					stop_name: "Westbound W Hastings St @ Richards St"
				},
				id: 549627950
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.099681, 49.263296]
				},
				properties: {
					id: 549627967,
					stop_id: "8622",
					stop_name: "Westbound Kingsway @ E Broadway"
				},
				id: 549627967
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.100973, 49.266106]
				},
				properties: {
					id: 549628223,
					stop_id: "9067",
					stop_name: "Southbound Main St @ E 5th Ave"
				},
				id: 549628223
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.092844, 49.211133]
				},
				properties: {
					id: 549628244,
					stop_id: "9103",
					stop_name: "Westbound SE Marine Dr @ Poplar St"
				},
				id: 549628244
			}
		]
	},
	{
		id: "bus_route_06",
		name: "Bus 06 Granville",
		geofenceCollection: "BusStopsCollection04",
		coordinates: [
			[-123.110919, 49.284708],
			[-123.112864, 49.283416],
			[-123.114846, 49.284652],
			[-123.121393, 49.280325],
			[-123.12304, 49.279252],
			[-123.124606, 49.278201],
			[-123.126192, 49.277155],
			[-123.127762, 49.276097],
			[-123.128026, 49.275928],
			[-123.128114, 49.275916],
			[-123.128608, 49.275592],
			[-123.128985, 49.275436],
			[-123.129539, 49.275029],
			[-123.131896, 49.273452],
			[-123.136054, 49.270693],
			[-123.137196, 49.269968],
			[-123.13742, 49.26979],
			[-123.137787, 49.269414],
			[-123.138266, 49.268779],
			[-123.138379, 49.268494],
			[-123.138445, 49.268092],
			[-123.138482, 49.267235],
			[-123.138451, 49.266874],
			[-123.138468, 49.266182],
			[-123.138563, 49.26359],
			[-123.138541, 49.262639],
			[-123.138573, 49.26171],
			[-123.138697, 49.260801],
			[-123.138729, 49.259815],
			[-123.138727, 49.258921],
			[-123.138741, 49.258014],
			[-123.138794, 49.257054],
			[-123.13891, 49.254609],
			[-123.138938, 49.253151],
			[-123.139025, 49.251906],
			[-123.1391, 49.249311],
			[-123.139149, 49.248332],
			[-123.139168, 49.247417],
			[-123.139174, 49.246483],
			[-123.139162, 49.245447],
			[-123.139173, 49.245274],
			[-123.139206, 49.24368],
			[-123.139257, 49.242187],
			[-123.139313, 49.241887],
			[-123.13933, 49.240891],
			[-123.139392, 49.238985],
			[-123.139448, 49.238013],
			[-123.13951, 49.237121],
			[-123.139557, 49.236259],
			[-123.139624, 49.234343],
			[-123.139592, 49.232466],
			[-123.139948, 49.223516],
			[-123.13999, 49.222613],
			[-123.140015, 49.221704],
			[-123.140129, 49.219331],
			[-123.14018, 49.218516],
			[-123.140217, 49.21737],
			[-123.140244, 49.216811],
			[-123.140298, 49.215037],
			[-123.140355, 49.213998],
			[-123.140369, 49.213145],
			[-123.140631, 49.205792],
			[-123.140629, 49.205495],
			[-123.140528, 49.205283],
			[-123.140382, 49.205136],
			[-123.139883, 49.204854],
			[-123.138888, 49.204453],
			[-123.138742, 49.204369],
			[-123.136062, 49.203401],
			[-123.135427, 49.203164],
			[-123.134824, 49.203004],
			[-123.134217, 49.202888],
			[-123.134039, 49.20287],
			[-123.13345, 49.202863],
			[-123.133236, 49.202882],
			[-123.133082, 49.202951],
			[-123.132951, 49.203227],
			[-123.132925, 49.203461],
			[-123.132101, 49.203809],
			[-123.13189, 49.203975],
			[-123.130395, 49.204587],
			[-123.129392, 49.204982],
			[-123.122766, 49.207726],
			[-123.121471, 49.208264],
			[-123.120378, 49.208746],
			[-123.118961, 49.209294],
			[-123.118193, 49.209623],
			[-123.117072, 49.210088],
			[-123.115065, 49.210882],
			[-123.115064, 49.210588],
			[-123.115115, 49.20975],
			[-123.116589, 49.209164],
			[-123.117103, 49.208972],
			[-123.117184, 49.208935],
			[-123.116589, 49.209164],
			[-123.117103, 49.208972],
			[-123.117184, 49.208935],
			[-123.117185, 49.209145],
			[-123.117166, 49.20986],
			[-123.117077, 49.209964],
			[-123.117072, 49.210088],
			[-123.117053, 49.210248],
			[-123.1183, 49.209734],
			[-123.120381, 49.208857],
			[-123.1217, 49.20827],
			[-123.127606, 49.205809],
			[-123.128264, 49.205549],
			[-123.129825, 49.204901],
			[-123.130586, 49.2046],
			[-123.130966, 49.204534],
			[-123.131425, 49.204389],
			[-123.133825, 49.2034],
			[-123.134047, 49.203315],
			[-123.134224, 49.203269],
			[-123.134559, 49.203229],
			[-123.134782, 49.203239],
			[-123.135147, 49.203328],
			[-123.135894, 49.203637],
			[-123.136782, 49.203951],
			[-123.138169, 49.204423],
			[-123.138759, 49.20457],
			[-123.139587, 49.204862],
			[-123.140005, 49.205046],
			[-123.140243, 49.205186],
			[-123.140395, 49.205325],
			[-123.140532, 49.205506],
			[-123.140631, 49.205792],
			[-123.140369, 49.213145],
			[-123.140355, 49.213998],
			[-123.140298, 49.215037],
			[-123.140244, 49.216811],
			[-123.140217, 49.21737],
			[-123.14018, 49.218516],
			[-123.140129, 49.219331],
			[-123.140015, 49.221704],
			[-123.13999, 49.222613],
			[-123.139948, 49.223516],
			[-123.139592, 49.232466],
			[-123.139624, 49.234343],
			[-123.139557, 49.236259],
			[-123.13951, 49.237121],
			[-123.139448, 49.238013],
			[-123.139392, 49.238985],
			[-123.13933, 49.240891],
			[-123.139313, 49.241887],
			[-123.139257, 49.242187],
			[-123.139206, 49.24368],
			[-123.139173, 49.245274],
			[-123.139162, 49.245447],
			[-123.139174, 49.246483],
			[-123.139168, 49.247417],
			[-123.139149, 49.248332],
			[-123.1391, 49.249311],
			[-123.139025, 49.251906],
			[-123.138938, 49.253151],
			[-123.13891, 49.254609],
			[-123.138794, 49.257054],
			[-123.138741, 49.258014],
			[-123.138727, 49.258921],
			[-123.138729, 49.259815],
			[-123.138697, 49.260801],
			[-123.138573, 49.26171],
			[-123.138541, 49.262639],
			[-123.138563, 49.26359],
			[-123.138468, 49.266182],
			[-123.138452, 49.266874],
			[-123.13838, 49.26725],
			[-123.138335, 49.26794],
			[-123.138316, 49.26813],
			[-123.138256, 49.268485],
			[-123.138135, 49.268768],
			[-123.137705, 49.269361],
			[-123.137524, 49.269558],
			[-123.137105, 49.269896],
			[-123.137025, 49.269955],
			[-123.136, 49.270594],
			[-123.134551, 49.271558],
			[-123.131909, 49.273297],
			[-123.131587, 49.273534],
			[-123.129433, 49.274959],
			[-123.129233, 49.275098],
			[-123.128051, 49.275872],
			[-123.128026, 49.275928],
			[-123.127762, 49.276097],
			[-123.126192, 49.277155],
			[-123.124606, 49.278201],
			[-123.12304, 49.279252],
			[-123.121393, 49.280325],
			[-123.112857, 49.285966],
			[-123.111852, 49.285326],
			[-123.110918, 49.284708],
			[-123.111908, 49.284047],
			[-123.110919, 49.284708],
			[-123.112864, 49.283416],
			[-123.115845, 49.285278],
			[-123.117371, 49.284275],
			[-123.119153, 49.283132],
			[-123.120839, 49.282019],
			[-123.122436, 49.280985],
			[-123.125624, 49.278846],
			[-123.127194, 49.277803],
			[-123.129603, 49.276218],
			[-123.129983, 49.275872],
			[-123.130175, 49.275585],
			[-123.130528, 49.274658],
			[-123.130784, 49.274196],
			[-123.136054, 49.270693],
			[-123.137196, 49.269968],
			[-123.13742, 49.26979],
			[-123.137787, 49.269414],
			[-123.138266, 49.268779],
			[-123.138379, 49.268494],
			[-123.138445, 49.268092],
			[-123.138482, 49.267235],
			[-123.138451, 49.266874],
			[-123.138468, 49.266182],
			[-123.138563, 49.26359],
			[-123.138541, 49.262639],
			[-123.138573, 49.26171],
			[-123.138697, 49.260801],
			[-123.138729, 49.259815],
			[-123.138727, 49.258921],
			[-123.138741, 49.258014],
			[-123.138794, 49.257054],
			[-123.13891, 49.254609],
			[-123.138938, 49.253151],
			[-123.139025, 49.251906],
			[-123.1391, 49.249311],
			[-123.139149, 49.248332],
			[-123.139168, 49.247417],
			[-123.139174, 49.246483],
			[-123.139162, 49.245447],
			[-123.139173, 49.245274],
			[-123.139206, 49.24368],
			[-123.139257, 49.242187],
			[-123.139313, 49.241887],
			[-123.13933, 49.240891],
			[-123.139392, 49.238985],
			[-123.139448, 49.238013],
			[-123.13951, 49.237121],
			[-123.139557, 49.236259],
			[-123.139624, 49.234343],
			[-123.139592, 49.232466],
			[-123.139948, 49.223516],
			[-123.13999, 49.222613],
			[-123.140015, 49.221704],
			[-123.140129, 49.219331],
			[-123.14018, 49.218516],
			[-123.140217, 49.21737],
			[-123.140244, 49.216811],
			[-123.140298, 49.215037],
			[-123.140355, 49.213998],
			[-123.140369, 49.213145],
			[-123.140631, 49.205792],
			[-123.140629, 49.205495],
			[-123.140528, 49.205283],
			[-123.140382, 49.205136],
			[-123.139883, 49.204854],
			[-123.138888, 49.204453],
			[-123.138742, 49.204369],
			[-123.136062, 49.203401],
			[-123.135427, 49.203164],
			[-123.134824, 49.203004],
			[-123.134217, 49.202888],
			[-123.134039, 49.20287],
			[-123.13345, 49.202863],
			[-123.133236, 49.202882],
			[-123.133082, 49.202951],
			[-123.132951, 49.203227],
			[-123.132925, 49.203461],
			[-123.132101, 49.203809],
			[-123.13189, 49.203975],
			[-123.130395, 49.204587],
			[-123.129392, 49.204982],
			[-123.122766, 49.207726],
			[-123.121471, 49.208264],
			[-123.120378, 49.208746],
			[-123.118961, 49.209294],
			[-123.118193, 49.209623],
			[-123.117072, 49.210088],
			[-123.115065, 49.210882],
			[-123.115064, 49.210588],
			[-123.115115, 49.20975],
			[-123.116589, 49.209164],
			[-123.117103, 49.208972],
			[-123.117184, 49.208935]
		],
		stopCoordinates: [
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.124629, 49.276811]
				},
				properties: {
					id: 549620022,
					stop_id: "1013",
					stop_name: "Northbound Seymour St @ Davie St"
				},
				id: 549620022
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.139857, 49.230342]
				},
				properties: {
					id: 549620040,
					stop_id: "1017",
					stop_name: "Southbound Granville St @ W 45 Ave"
				},
				id: 549620040
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.134919, 49.202765]
				},
				properties: {
					id: 549620219,
					stop_id: "10431",
					stop_name: "Southbound Hudson St @ SW Marine Dr"
				},
				id: 549620219
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.116823, 49.209087]
				},
				properties: {
					id: 549620798,
					stop_id: "11251",
					stop_name: "Marine Drive Station @ Bay 1"
				},
				id: 549620798
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.116116, 49.209383]
				},
				properties: {
					id: 549620799,
					stop_id: "11252",
					stop_name: "Marine Drive Station @ Bay 2"
				},
				id: 549620799
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.132871, 49.20325]
				},
				properties: {
					id: 549620837,
					stop_id: "1129",
					stop_name: "Marpole Loop @ Bay 2"
				},
				id: 549620837
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.138458, 49.2631]
				},
				properties: {
					id: 549620915,
					stop_id: "11403",
					stop_name: "Northbound Granville St @ W 10 Ave"
				},
				id: 549620915
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.127092, 49.276487]
				},
				properties: {
					id: 549620926,
					stop_id: "11426",
					stop_name: "Northbound Granville St @ Drake St"
				},
				id: 549620926
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.126905, 49.276786]
				},
				properties: {
					id: 549620927,
					stop_id: "11427",
					stop_name: "Southbound Granville St @ Davie St"
				},
				id: 549620927
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.125372, 49.277584]
				},
				properties: {
					id: 549620928,
					stop_id: "11429",
					stop_name: "Northbound Granville St @ Davie St"
				},
				id: 549620928
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.123712, 49.278877]
				},
				properties: {
					id: 549620950,
					stop_id: "11474",
					stop_name: "Southbound Granville St @ Nelson St"
				},
				id: 549620950
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.128375, 49.275854]
				},
				properties: {
					id: 549620951,
					stop_id: "11475",
					stop_name: "Southbound Granville St @ Drake St"
				},
				id: 549620951
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.119373, 49.28172]
				},
				properties: {
					id: 549620982,
					stop_id: "11522",
					stop_name: "Southbound Granville St @ Robson St"
				},
				id: 549620982
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.118291, 49.282317]
				},
				properties: {
					id: 549620983,
					stop_id: "11523",
					stop_name: "Northbound Granville St @ W Georgia St"
				},
				id: 549620983
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.117951, 49.28266]
				},
				properties: {
					id: 549620984,
					stop_id: "11524",
					stop_name: "Southbound Granville St @ W Georgia St"
				},
				id: 549620984
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.116549, 49.283461]
				},
				properties: {
					id: 549620985,
					stop_id: "11525",
					stop_name: "Northbound Granville St @ Dunsmuir St"
				},
				id: 549620985
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.115939, 49.284039]
				},
				properties: {
					id: 549620986,
					stop_id: "11526",
					stop_name: "Southbound Granville St @ W Pender St"
				},
				id: 549620986
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.11335, 49.285553]
				},
				properties: {
					id: 549620987,
					stop_id: "11527",
					stop_name: "Northbound Granville St @ W Hastings St"
				},
				id: 549620987
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.120537, 49.280784]
				},
				properties: {
					id: 549620990,
					stop_id: "11532",
					stop_name: "Northbound Granville St @ Smithe St"
				},
				id: 549620990
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.115596, 49.282782]
				},
				properties: {
					id: 549620992,
					stop_id: "11535",
					stop_name: "Northbound Seymour St @ Dunsmuir St"
				},
				id: 549620992
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.127034, 49.277974]
				},
				properties: {
					id: 549620999,
					stop_id: "11542",
					stop_name: "Southbound Howe St @ Davie St"
				},
				id: 549620999
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.114994, 49.284493]
				},
				properties: {
					id: 549621060,
					stop_id: "11616",
					stop_name: "Northbound Granville St @ W Pender St"
				},
				id: 549621060
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.123941, 49.207414]
				},
				properties: {
					id: 549621437,
					stop_id: "12116",
					stop_name: "Westbound SW Marine Dr @ Heather St"
				},
				id: 549621437
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.135556, 49.20317]
				},
				properties: {
					id: 549621764,
					stop_id: "12518",
					stop_name: "Eastbound SW Marine Dr @ Hudson St"
				},
				id: 549621764
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.11824, 49.28102]
				},
				properties: {
					id: 549621777,
					stop_id: "12535",
					stop_name: "Northbound Seymour St @ Robson St"
				},
				id: 549621777
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.140092, 49.217685]
				},
				properties: {
					id: 549621986,
					stop_id: "12852",
					stop_name: "Northbound Granville St @ Park Dr"
				},
				id: 549621986
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.139463, 49.234888]
				},
				properties: {
					id: 549622634,
					stop_id: "202",
					stop_name: "Northbound Granville St @ W 41 Ave"
				},
				id: 549622634
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.139374, 49.237418]
				},
				properties: {
					id: 549622649,
					stop_id: "204",
					stop_name: "Northbound Granville St @ W 38 Ave"
				},
				id: 549622649
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.13931, 49.239279]
				},
				properties: {
					id: 549622657,
					stop_id: "205",
					stop_name: "Northbound Granville St @ W 36 Ave"
				},
				id: 549622657
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.13924, 49.241186]
				},
				properties: {
					id: 549622667,
					stop_id: "206",
					stop_name: "Northbound Granville St @ W 34 Ave"
				},
				id: 549622667
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.139178, 49.243144]
				},
				properties: {
					id: 549622675,
					stop_id: "207",
					stop_name: "Northbound Granville St @ Minto Cres"
				},
				id: 549622675
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.139081, 49.245722]
				},
				properties: {
					id: 549622684,
					stop_id: "208",
					stop_name: "Northbound Granville St @ N Connaught Dr"
				},
				id: 549622684
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.139023, 49.24769]
				},
				properties: {
					id: 549622691,
					stop_id: "209",
					stop_name: "Northbound Granville St @ Nanton Ave"
				},
				id: 549622691
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.138924, 49.250127]
				},
				properties: {
					id: 549622698,
					stop_id: "210",
					stop_name: "Northbound Granville St @ W King Edward Ave"
				},
				id: 549622698
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.138834, 49.252263]
				},
				properties: {
					id: 549622703,
					stop_id: "211",
					stop_name: "Northbound Granville St @ Balfour Ave"
				},
				id: 549622703
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.138804, 49.253467]
				},
				properties: {
					id: 549622707,
					stop_id: "212",
					stop_name: "Northbound Granville St @ Matthews Ave"
				},
				id: 549622707
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.138663, 49.257367]
				},
				properties: {
					id: 549622712,
					stop_id: "213",
					stop_name: "Northbound Granville St @ W 16 Ave"
				},
				id: 549622712
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.138595, 49.25921]
				},
				properties: {
					id: 549622722,
					stop_id: "214",
					stop_name: "Northbound Granville St @ W 14 Ave"
				},
				id: 549622722
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.123861, 49.207179]
				},
				properties: {
					id: 549622724,
					stop_id: "2146",
					stop_name: "Eastbound SW Marine Dr @ Heather St"
				},
				id: 549622724
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.118587, 49.209394]
				},
				properties: {
					id: 549622725,
					stop_id: "2148",
					stop_name: "Eastbound SW Marine Dr @ Ash St"
				},
				id: 549622725
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.13852, 49.261157]
				},
				properties: {
					id: 549622726,
					stop_id: "215",
					stop_name: "Northbound Granville St @ W 12 Ave"
				},
				id: 549622726
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.138349, 49.265651]
				},
				properties: {
					id: 549622753,
					stop_id: "218",
					stop_name: "Northbound Granville St @ W 7th Ave"
				},
				id: 549622753
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.119749, 49.209141]
				},
				properties: {
					id: 549622799,
					stop_id: "2239",
					stop_name: "Westbound SW Marine Dr @ Ash St"
				},
				id: 549622799
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.126813, 49.206184]
				},
				properties: {
					id: 549622800,
					stop_id: "2241",
					stop_name: "Westbound SW Marine Dr @ Laurel St"
				},
				id: 549622800
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.127493, 49.278073]
				},
				properties: {
					id: 549623068,
					stop_id: "26",
					stop_name: "Westbound Davie St @ Howe St"
				},
				id: 549623068
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.111191, 49.284786]
				},
				properties: {
					id: 549623801,
					stop_id: "35",
					stop_name: "Waterfront Station @ Bay 3"
				},
				id: 549623801
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.135845, 49.20366]
				},
				properties: {
					id: 549624978,
					stop_id: "4876",
					stop_name: "Marpole Loop @ Bay 4"
				},
				id: 549624978
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.138259, 49.267404]
				},
				properties: {
					id: 549624979,
					stop_id: "4879",
					stop_name: "Northbound Granville St @ W 5th Ave"
				},
				id: 549624979
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.11788, 49.284055]
				},
				properties: {
					id: 549624980,
					stop_id: "4881",
					stop_name: "Southbound Howe St @ Dunsmuir St"
				},
				id: 549624980
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.119595, 49.282906]
				},
				properties: {
					id: 549624981,
					stop_id: "4882",
					stop_name: "Southbound Howe St @ W Georgia St"
				},
				id: 549624981
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.121239, 49.281831]
				},
				properties: {
					id: 549624982,
					stop_id: "4883",
					stop_name: "Southbound Howe St @ Robson St"
				},
				id: 549624982
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.124449, 49.279698]
				},
				properties: {
					id: 549624983,
					stop_id: "4884",
					stop_name: "Southbound Howe St @ Nelson St"
				},
				id: 549624983
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.138572, 49.266704]
				},
				properties: {
					id: 549624984,
					stop_id: "4887",
					stop_name: "Southbound Granville St @ W Cloverleaf"
				},
				id: 549624984
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.138768, 49.261424]
				},
				properties: {
					id: 549625479,
					stop_id: "547",
					stop_name: "Southbound Granville St @ W 11 Ave"
				},
				id: 549625479
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.138834, 49.259524]
				},
				properties: {
					id: 549625488,
					stop_id: "548",
					stop_name: "Southbound Granville St @ W 13 Ave"
				},
				id: 549625488
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.138899, 49.257667]
				},
				properties: {
					id: 549625489,
					stop_id: "549",
					stop_name: "Southbound Granville St @ W 15 Ave"
				},
				id: 549625489
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.13903, 49.254178]
				},
				properties: {
					id: 549625496,
					stop_id: "550",
					stop_name: "Southbound Granville St @ Angus Dr"
				},
				id: 549625496
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.139073, 49.252781]
				},
				properties: {
					id: 549625506,
					stop_id: "551",
					stop_name: "Southbound Granville St @ Matthews Ave"
				},
				id: 549625506
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.139186, 49.2505]
				},
				properties: {
					id: 549625517,
					stop_id: "552",
					stop_name: "Southbound Granville St @ Laurier Ave"
				},
				id: 549625517
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.139289, 49.247111]
				},
				properties: {
					id: 549625537,
					stop_id: "554",
					stop_name: "Southbound Granville St @ Nanton Ave"
				},
				id: 549625537
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.139357, 49.244793]
				},
				properties: {
					id: 549625546,
					stop_id: "555",
					stop_name: "Southbound Granville St @ N Connaught Dr"
				},
				id: 549625546
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.139408, 49.243251]
				},
				properties: {
					id: 549625556,
					stop_id: "556",
					stop_name: "Southbound Granville St @ W 32 Ave"
				},
				id: 549625556
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.139454, 49.241525]
				},
				properties: {
					id: 549625563,
					stop_id: "557",
					stop_name: "Southbound Granville St @ W 33 Ave"
				},
				id: 549625563
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.139528, 49.239615]
				},
				properties: {
					id: 549625572,
					stop_id: "558",
					stop_name: "Southbound Granville St @ W 35 Ave"
				},
				id: 549625572
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.139593, 49.237706]
				},
				properties: {
					id: 549625582,
					stop_id: "559",
					stop_name: "Southbound Granville St @ W 37 Ave"
				},
				id: 549625582
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.139659, 49.235947]
				},
				properties: {
					id: 549625594,
					stop_id: "560",
					stop_name: "Southbound Granville St @ S Connaught Dr"
				},
				id: 549625594
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.139751, 49.235048]
				},
				properties: {
					id: 549625604,
					stop_id: "561",
					stop_name: "Southbound Granville St @ W 40 Ave"
				},
				id: 549625604
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.111471, 49.2844]
				},
				properties: {
					id: 549626327,
					stop_id: "645",
					stop_name: "Southbound Richards St @ W Cordova St"
				},
				id: 549626327
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.130671, 49.204348]
				},
				properties: {
					id: 549627211,
					stop_id: "746",
					stop_name: "Eastbound SW Marine Dr @ Oak St"
				},
				id: 549627211
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.139869, 49.205047]
				},
				properties: {
					id: 549627387,
					stop_id: "763",
					stop_name: "Westbound SW Marine Dr @ Granville St"
				},
				id: 549627387
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.14035, 49.208885]
				},
				properties: {
					id: 549627403,
					stop_id: "765",
					stop_name: "Northbound Granville St @ W 70 Ave"
				},
				id: 549627403
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.140317, 49.211168]
				},
				properties: {
					id: 549627412,
					stop_id: "766",
					stop_name: "Northbound Granville St @ W 67 Ave"
				},
				id: 549627412
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.140212, 49.213646]
				},
				properties: {
					id: 549627421,
					stop_id: "767",
					stop_name: "Northbound Granville St @ W 64 Ave"
				},
				id: 549627421
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.140165, 49.215299]
				},
				properties: {
					id: 549627428,
					stop_id: "768",
					stop_name: "Northbound Granville St @ W 62 Ave"
				},
				id: 549627428
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.14, 49.219694]
				},
				properties: {
					id: 549627448,
					stop_id: "770",
					stop_name: "Northbound Granville St @ W 57 Ave"
				},
				id: 549627448
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.139943, 49.221123]
				},
				properties: {
					id: 549627459,
					stop_id: "771",
					stop_name: "Northbound Granville St @ W 55 Ave"
				},
				id: 549627459
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.139886, 49.222949]
				},
				properties: {
					id: 549627468,
					stop_id: "772",
					stop_name: "Northbound Granville St @ W 53 Ave"
				},
				id: 549627468
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.139703, 49.227422]
				},
				properties: {
					id: 549627484,
					stop_id: "774",
					stop_name: "Northbound Granville St @ W 49 Ave"
				},
				id: 549627484
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.139609, 49.229985]
				},
				properties: {
					id: 549627500,
					stop_id: "776",
					stop_name: "Northbound Granville St @ W 46 Ave"
				},
				id: 549627500
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.139507, 49.232803]
				},
				properties: {
					id: 549627510,
					stop_id: "777",
					stop_name: "Northbound Granville St @ W 43 Ave"
				},
				id: 549627510
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.131063, 49.20453]
				},
				properties: {
					id: 549627791,
					stop_id: "826",
					stop_name: "Westbound SW Marine Dr @ Oak St"
				},
				id: 549627791
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.1404, 49.207431]
				},
				properties: {
					id: 549627838,
					stop_id: "8394",
					stop_name: "Northbound Granville St @ W 71 Ave"
				},
				id: 549627838
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.139775, 49.233799]
				},
				properties: {
					id: 549627952,
					stop_id: "860",
					stop_name: "Southbound Granville St @ W 41 Ave"
				},
				id: 549627952
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.139799, 49.232098]
				},
				properties: {
					id: 549627957,
					stop_id: "861",
					stop_name: "Southbound Granville St @ W 43 Ave"
				},
				id: 549627957
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.139921, 49.228469]
				},
				properties: {
					id: 549627964,
					stop_id: "862",
					stop_name: "Southbound Granville St @ W 47 Ave"
				},
				id: 549627964
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.139991, 49.226415]
				},
				properties: {
					id: 549627971,
					stop_id: "863",
					stop_name: "Southbound Granville St @ W 49 Ave"
				},
				id: 549627971
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.140097, 49.223822]
				},
				properties: {
					id: 549627976,
					stop_id: "864",
					stop_name: "Southbound Granville St @ W 52 Ave"
				},
				id: 549627976
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.140195, 49.221382]
				},
				properties: {
					id: 549627981,
					stop_id: "865",
					stop_name: "Southbound Granville St @ W 54 Ave"
				},
				id: 549627981
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.140294, 49.218967]
				},
				properties: {
					id: 549627990,
					stop_id: "866",
					stop_name: "Southbound Granville St @ W 57 Ave"
				},
				id: 549627990
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.140361, 49.217067]
				},
				properties: {
					id: 549628000,
					stop_id: "867",
					stop_name: "Southbound Granville St @ W 59 Ave"
				},
				id: 549628000
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.140408, 49.215526]
				},
				properties: {
					id: 549628007,
					stop_id: "868",
					stop_name: "Southbound Granville St @ W 61 Ave"
				},
				id: 549628007
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.140485, 49.213531]
				},
				properties: {
					id: 549628014,
					stop_id: "869",
					stop_name: "Southbound Granville St @ W 63 Ave"
				},
				id: 549628014
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.140547, 49.211828]
				},
				properties: {
					id: 549628020,
					stop_id: "870",
					stop_name: "Southbound Granville St @ W 65 Ave"
				},
				id: 549628020
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.140672, 49.209597]
				},
				properties: {
					id: 549628024,
					stop_id: "871",
					stop_name: "Southbound Granville St @ W 68 Ave"
				},
				id: 549628024
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.140764, 49.205733]
				},
				properties: {
					id: 549628030,
					stop_id: "873",
					stop_name: "Southbound Granville St @ SW Marine Dr"
				},
				id: 549628030
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.139224, 49.248838]
				},
				properties: {
					id: 549628256,
					stop_id: "9124",
					stop_name: "Southbound Granville St @ W King Edward Ave"
				},
				id: 549628256
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.140711, 49.20811]
				},
				properties: {
					id: 549628264,
					stop_id: "9135",
					stop_name: "Southbound Granville St @ W 70 Ave"
				},
				id: 549628264
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.138707, 49.263073]
				},
				properties: {
					id: 549628265,
					stop_id: "9136",
					stop_name: "Southbound Granville St @ W Broadway"
				},
				id: 549628265
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.121579, 49.278835]
				},
				properties: {
					id: 549628412,
					stop_id: "9366",
					stop_name: "Northbound Seymour St @ Nelson St"
				},
				id: 549628412
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.113429, 49.283818]
				},
				properties: {
					id: 549628489,
					stop_id: "95",
					stop_name: "Westbound W Pender St @ Seymour St"
				},
				id: 549628489
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.140233, 49.213461]
				},
				properties: {
					id: 549628526,
					stop_id: "9551",
					stop_name: "Northbound Granville St @ W 64 Ave"
				},
				id: 549628526
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.114596, 49.284575]
				},
				properties: {
					id: 549628571,
					stop_id: "96",
					stop_name: "Westbound W Pender St @ Granville St"
				},
				id: 549628571
			}
		]
	},
	{
		id: "bus_route_07",
		name: "Bus 07 Downtown, Oak",
		geofenceCollection: "BusStopsCollection02",
		coordinates: [
			[-123.115115, 49.20975],
			[-123.116589, 49.209164],
			[-123.117103, 49.208972],
			[-123.117184, 49.208935],
			[-123.117185, 49.209145],
			[-123.117166, 49.20986],
			[-123.117077, 49.209964],
			[-123.117072, 49.210088],
			[-123.117053, 49.210248],
			[-123.1183, 49.209734],
			[-123.120381, 49.208857],
			[-123.1217, 49.20827],
			[-123.127606, 49.205809],
			[-123.128264, 49.205549],
			[-123.128652, 49.205979],
			[-123.128813, 49.206073],
			[-123.128979, 49.206125],
			[-123.129272, 49.206146],
			[-123.129765, 49.206049],
			[-123.129882, 49.206056],
			[-123.129998, 49.206111],
			[-123.130069, 49.206201],
			[-123.130162, 49.206734],
			[-123.130251, 49.206791],
			[-123.130258, 49.206997],
			[-123.130313, 49.207054],
			[-123.130257, 49.208473],
			[-123.130189, 49.210743],
			[-123.130099, 49.212983],
			[-123.130024, 49.214459],
			[-123.129915, 49.215397],
			[-123.129715, 49.216117],
			[-123.129418, 49.216852],
			[-123.12925, 49.217118],
			[-123.128809, 49.218186],
			[-123.128557, 49.219207],
			[-123.128482, 49.222812],
			[-123.128441, 49.223909],
			[-123.128296, 49.226543],
			[-123.128216, 49.230214],
			[-123.128151, 49.232091],
			[-123.128078, 49.233888],
			[-123.127793, 49.242381],
			[-123.127684, 49.243577],
			[-123.127659, 49.244498],
			[-123.12765, 49.245404],
			[-123.127663, 49.246307],
			[-123.127601, 49.247226],
			[-123.127569, 49.24815],
			[-123.12751, 49.249136],
			[-123.127514, 49.249339],
			[-123.12749, 49.25082],
			[-123.127251, 49.256236],
			[-123.127183, 49.257607],
			[-123.126782, 49.25816],
			[-123.12671, 49.260545],
			[-123.124551, 49.260526],
			[-123.124434, 49.260573],
			[-123.121951, 49.260524],
			[-123.119937, 49.260498],
			[-123.117629, 49.260441],
			[-123.114922, 49.260395],
			[-123.114857, 49.262238],
			[-123.114779, 49.263204],
			[-123.114732, 49.265379],
			[-123.11478, 49.266721],
			[-123.11482, 49.269392],
			[-123.114721, 49.273177],
			[-123.114664, 49.27425],
			[-123.114561, 49.275209],
			[-123.114613, 49.275515],
			[-123.114745, 49.275777],
			[-123.115156, 49.276234],
			[-123.115575, 49.276538],
			[-123.116587, 49.277168],
			[-123.11749, 49.277773],
			[-123.117396, 49.277861],
			[-123.115953, 49.27884],
			[-123.116882, 49.279473],
			[-123.115953, 49.27884],
			[-123.116882, 49.279473],
			[-123.117871, 49.280109],
			[-123.118797, 49.280722],
			[-123.119815, 49.281368],
			[-123.114846, 49.284652],
			[-123.112864, 49.283416],
			[-123.111922, 49.282763],
			[-123.110956, 49.282119],
			[-123.110066, 49.281561],
			[-123.110118, 49.281467],
			[-123.113277, 49.279321],
			[-123.114963, 49.27821],
			[-123.116587, 49.277168],
			[-123.116625, 49.277111],
			[-123.117902, 49.276212],
			[-123.11807, 49.276185],
			[-123.118162, 49.27612],
			[-123.117146, 49.275512],
			[-123.116045, 49.274838],
			[-123.115464, 49.274453],
			[-123.115138, 49.274152],
			[-123.114892, 49.273533],
			[-123.114831, 49.273352],
			[-123.114988, 49.270559],
			[-123.114967, 49.268028],
			[-123.114906, 49.266536],
			[-123.114891, 49.265643],
			[-123.114866, 49.264971],
			[-123.11488, 49.264114],
			[-123.115056, 49.260398],
			[-123.117629, 49.260441],
			[-123.119937, 49.260498],
			[-123.121951, 49.260524],
			[-123.124307, 49.260569],
			[-123.124434, 49.260573],
			[-123.124549, 49.260602],
			[-123.125442, 49.260608],
			[-123.126707, 49.260629],
			[-123.126782, 49.25816],
			[-123.127183, 49.257607],
			[-123.127251, 49.256236],
			[-123.12749, 49.25082],
			[-123.127514, 49.249339],
			[-123.12751, 49.249136],
			[-123.127569, 49.24815],
			[-123.127601, 49.247226],
			[-123.127663, 49.246307],
			[-123.12765, 49.245404],
			[-123.127659, 49.244498],
			[-123.127684, 49.243577],
			[-123.127793, 49.242381],
			[-123.128078, 49.233888],
			[-123.128151, 49.232091],
			[-123.128216, 49.230214],
			[-123.128296, 49.226543],
			[-123.128441, 49.223909],
			[-123.128482, 49.222812],
			[-123.128557, 49.219207],
			[-123.128809, 49.218186],
			[-123.12925, 49.217118],
			[-123.129418, 49.216852],
			[-123.129715, 49.216117],
			[-123.129915, 49.215397],
			[-123.130024, 49.214459],
			[-123.130099, 49.212983],
			[-123.130189, 49.210743],
			[-123.130257, 49.208473],
			[-123.130313, 49.207054],
			[-123.130372, 49.206996],
			[-123.130374, 49.206915],
			[-123.13033, 49.206493],
			[-123.130458, 49.204652],
			[-123.130395, 49.204587],
			[-123.129392, 49.204982],
			[-123.121471, 49.208264],
			[-123.120378, 49.208746],
			[-123.118961, 49.209294],
			[-123.118193, 49.209623],
			[-123.117072, 49.210088],
			[-123.115065, 49.210882],
			[-123.115064, 49.210588],
			[-123.115115, 49.20975],
			[-123.116589, 49.209164],
			[-123.117103, 49.208972]
		],
		stopCoordinates: [
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.115404, 49.277999]
				},
				properties: {
					id: 549620674,
					stop_id: "11119",
					stop_name: "Southbound Cambie St @ Robson St"
				},
				id: 549620674
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.114982, 49.264477]
				},
				properties: {
					id: 549620772,
					stop_id: "11221",
					stop_name: "Southbound Cambie St @ W 7th Ave"
				},
				id: 549620772
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.114622, 49.264648]
				},
				properties: {
					id: 549620778,
					stop_id: "11227",
					stop_name: "Northbound Cambie St @ W 7th Ave"
				},
				id: 549620778
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.116823, 49.209087]
				},
				properties: {
					id: 549620798,
					stop_id: "11251",
					stop_name: "Marine Drive Station @ Bay 1"
				},
				id: 549620798
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.116116, 49.209383]
				},
				properties: {
					id: 549620799,
					stop_id: "11252",
					stop_name: "Marine Drive Station @ Bay 2"
				},
				id: 549620799
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.130464, 49.205381]
				},
				properties: {
					id: 549620808,
					stop_id: "11262",
					stop_name: "Southbound Oak St @ W 72 Ave"
				},
				id: 549620808
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.11464, 49.262826]
				},
				properties: {
					id: 549620884,
					stop_id: "11352",
					stop_name: "Broadway-City Hall Station @ Bay 2"
				},
				id: 549620884
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.118291, 49.282317]
				},
				properties: {
					id: 549620983,
					stop_id: "11523",
					stop_name: "Northbound Granville St @ W Georgia St"
				},
				id: 549620983
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.116549, 49.283461]
				},
				properties: {
					id: 549620985,
					stop_id: "11525",
					stop_name: "Northbound Granville St @ Dunsmuir St"
				},
				id: 549620985
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.115596, 49.282782]
				},
				properties: {
					id: 549620992,
					stop_id: "11535",
					stop_name: "Northbound Seymour St @ Dunsmuir St"
				},
				id: 549620992
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.114994, 49.284493]
				},
				properties: {
					id: 549621060,
					stop_id: "11616",
					stop_name: "Northbound Granville St @ W Pender St"
				},
				id: 549621060
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.114934, 49.276112]
				},
				properties: {
					id: 549621371,
					stop_id: "12026",
					stop_name: "Northbound Smithe St @ Expo Blvd"
				},
				id: 549621371
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.123941, 49.207414]
				},
				properties: {
					id: 549621437,
					stop_id: "12116",
					stop_name: "Westbound SW Marine Dr @ Heather St"
				},
				id: 549621437
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.11824, 49.28102]
				},
				properties: {
					id: 549621777,
					stop_id: "12535",
					stop_name: "Northbound Seymour St @ Robson St"
				},
				id: 549621777
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.115153, 49.261616]
				},
				properties: {
					id: 549621784,
					stop_id: "12548",
					stop_name: "Broadway-City Hall Station @ Bay 3"
				},
				id: 549621784
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.112876, 49.279676]
				},
				properties: {
					id: 549621803,
					stop_id: "12581",
					stop_name: "Southbound Cambie St @ W Georgia St"
				},
				id: 549621803
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.12604, 49.260482]
				},
				properties: {
					id: 549621895,
					stop_id: "12708",
					stop_name: "Eastbound W 12 Ave @ Oak St"
				},
				id: 549621895
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.12392, 49.260473]
				},
				properties: {
					id: 549621896,
					stop_id: "12709",
					stop_name: "Eastbound W 12th Ave @ Laurel St"
				},
				id: 549621896
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.124667, 49.260622]
				},
				properties: {
					id: 549621898,
					stop_id: "12710",
					stop_name: "Westbound W 12th Ave @ Laurel St"
				},
				id: 549621898
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.120306, 49.260394]
				},
				properties: {
					id: 549621899,
					stop_id: "12711",
					stop_name: "Eastbound W 12th Ave @ Heather St"
				},
				id: 549621899
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.12041, 49.260557]
				},
				properties: {
					id: 549621900,
					stop_id: "12712",
					stop_name: "Westbound W 12th Ave @ Heather St"
				},
				id: 549621900
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.11559, 49.260482]
				},
				properties: {
					id: 549621901,
					stop_id: "12713",
					stop_name: "Westbound W 12th Ave @ Cambie St"
				},
				id: 549621901
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.130057, 49.210429]
				},
				properties: {
					id: 549622037,
					stop_id: "12911",
					stop_name: "Northbound Oak St @ W 67th Ave"
				},
				id: 549622037
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.119551, 49.28128]
				},
				properties: {
					id: 549622576,
					stop_id: "193",
					stop_name: "Westbound Robson St @ Granville St"
				},
				id: 549622576
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.123861, 49.207179]
				},
				properties: {
					id: 549622724,
					stop_id: "2146",
					stop_name: "Eastbound SW Marine Dr @ Heather St"
				},
				id: 549622724
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.118587, 49.209394]
				},
				properties: {
					id: 549622725,
					stop_id: "2148",
					stop_name: "Eastbound SW Marine Dr @ Ash St"
				},
				id: 549622725
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.119749, 49.209141]
				},
				properties: {
					id: 549622799,
					stop_id: "2239",
					stop_name: "Westbound SW Marine Dr @ Ash St"
				},
				id: 549622799
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.126813, 49.206184]
				},
				properties: {
					id: 549622800,
					stop_id: "2241",
					stop_name: "Westbound SW Marine Dr @ Laurel St"
				},
				id: 549622800
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.126842, 49.260251]
				},
				properties: {
					id: 549623682,
					stop_id: "335",
					stop_name: "Southbound Oak St @ W 12 Ave"
				},
				id: 549623682
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.127351, 49.256751]
				},
				properties: {
					id: 549623698,
					stop_id: "337",
					stop_name: "Southbound Oak St @ W 16 Ave"
				},
				id: 549623698
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.127471, 49.254123]
				},
				properties: {
					id: 549623716,
					stop_id: "339",
					stop_name: "Southbound Oak St @ Douglas Cres"
				},
				id: 549623716
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.12759, 49.251423]
				},
				properties: {
					id: 549623726,
					stop_id: "340",
					stop_name: "Southbound Oak St @ Balfour Ave"
				},
				id: 549623726
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.127716, 49.248653]
				},
				properties: {
					id: 549623736,
					stop_id: "341",
					stop_name: "Southbound Oak St @ W King Edward Ave"
				},
				id: 549623736
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.127793, 49.245988]
				},
				properties: {
					id: 549623747,
					stop_id: "342",
					stop_name: "Southbound Oak St @ Nanton Ave"
				},
				id: 549623747
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.127861, 49.244095]
				},
				properties: {
					id: 549623754,
					stop_id: "343",
					stop_name: "Southbound Oak St @ Devonshire Cres"
				},
				id: 549623754
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.12796, 49.241077]
				},
				properties: {
					id: 549623772,
					stop_id: "345",
					stop_name: "Southbound Oak St @ W 33 Ave"
				},
				id: 549623772
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.128102, 49.237306]
				},
				properties: {
					id: 549623777,
					stop_id: "346",
					stop_name: "Southbound Oak St @ W 37 Ave"
				},
				id: 549623777
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.117719, 49.275788]
				},
				properties: {
					id: 549624336,
					stop_id: "415",
					stop_name: "Eastbound Nelson St @ Cambie St"
				},
				id: 549624336
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.12785, 49.237021]
				},
				properties: {
					id: 549624677,
					stop_id: "455",
					stop_name: "Northbound Oak St @ W 38 Ave"
				},
				id: 549624677
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.12769, 49.241748]
				},
				properties: {
					id: 549624696,
					stop_id: "457",
					stop_name: "Northbound Oak St @ W 33 Ave"
				},
				id: 549624696
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.127493, 49.244894]
				},
				properties: {
					id: 549624707,
					stop_id: "458",
					stop_name: "Northbound Oak St @ Devonshire Cres"
				},
				id: 549624707
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.12749, 49.247506]
				},
				properties: {
					id: 549624717,
					stop_id: "459",
					stop_name: "Northbound Oak St @ W 27 Ave"
				},
				id: 549624717
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.127357, 49.249632]
				},
				properties: {
					id: 549624728,
					stop_id: "460",
					stop_name: "Northbound Oak St @ W King Edward Ave"
				},
				id: 549624728
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.127311, 49.251967]
				},
				properties: {
					id: 549624738,
					stop_id: "461",
					stop_name: "Northbound Oak St @ W 22 Ave"
				},
				id: 549624738
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.127236, 49.253935]
				},
				properties: {
					id: 549624748,
					stop_id: "462",
					stop_name: "Northbound Oak St @ W 20 Ave"
				},
				id: 549624748
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.127109, 49.256575]
				},
				properties: {
					id: 549624759,
					stop_id: "463",
					stop_name: "Northbound Oak St @ W 17 Ave"
				},
				id: 549624759
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.114831, 49.260758]
				},
				properties: {
					id: 549624960,
					stop_id: "485",
					stop_name: "Northbound Cambie St @ W 12 Ave"
				},
				id: 549624960
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.116259, 49.279145]
				},
				properties: {
					id: 549626222,
					stop_id: "628",
					stop_name: "Westbound Robson St @ Hamilton St"
				},
				id: 549626222
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.128497, 49.205921]
				},
				properties: {
					id: 549627222,
					stop_id: "747",
					stop_name: "Northbound Oak Cloverleaf @ SW Marine Dr"
				},
				id: 549627222
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.13011, 49.208777]
				},
				properties: {
					id: 549627239,
					stop_id: "749",
					stop_name: "Northbound Oak St @ W 70 Ave"
				},
				id: 549627239
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.129909, 49.214711]
				},
				properties: {
					id: 549627269,
					stop_id: "752",
					stop_name: "Northbound Oak St @ Park Dr"
				},
				id: 549627269
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.129005, 49.217412]
				},
				properties: {
					id: 549627280,
					stop_id: "753",
					stop_name: "Northbound Oak St @ W 59 Ave"
				},
				id: 549627280
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.128433, 49.219518]
				},
				properties: {
					id: 549627291,
					stop_id: "754",
					stop_name: "Northbound Oak St @ W 57 Ave"
				},
				id: 549627291
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.128353, 49.221798]
				},
				properties: {
					id: 549627302,
					stop_id: "755",
					stop_name: "Northbound Oak St @ W 54 Ave"
				},
				id: 549627302
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.128159, 49.226867]
				},
				properties: {
					id: 549627332,
					stop_id: "758",
					stop_name: "Northbound Oak St @ W 49 Ave"
				},
				id: 549627332
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.128098, 49.229544]
				},
				properties: {
					id: 549627343,
					stop_id: "759",
					stop_name: "Northbound Oak St @ W 46 Ave"
				},
				id: 549627343
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.128003, 49.232346]
				},
				properties: {
					id: 549627355,
					stop_id: "760",
					stop_name: "Northbound Oak St @ W 43 Ave"
				},
				id: 549627355
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.127934, 49.23366]
				},
				properties: {
					id: 549627366,
					stop_id: "761",
					stop_name: "Northbound Oak St @ W 41 Ave"
				},
				id: 549627366
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.113589, 49.283753]
				},
				properties: {
					id: 549627540,
					stop_id: "78",
					stop_name: "Eastbound W Pender St @ Seymour St"
				},
				id: 549627540
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.110618, 49.281799]
				},
				properties: {
					id: 549627688,
					stop_id: "80",
					stop_name: "Eastbound W Pender St @ Hamilton St"
				},
				id: 549627688
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.128231, 49.233541]
				},
				properties: {
					id: 549627777,
					stop_id: "812",
					stop_name: "Southbound Oak St @ W 41 Ave"
				},
				id: 549627777
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.128278, 49.231779]
				},
				properties: {
					id: 549627780,
					stop_id: "813",
					stop_name: "Southbound Oak St @ W 43 Ave"
				},
				id: 549627780
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.128376, 49.229046]
				},
				properties: {
					id: 549627782,
					stop_id: "814",
					stop_name: "Southbound Oak St @ W 46 Ave"
				},
				id: 549627782
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.128478, 49.22616]
				},
				properties: {
					id: 549627784,
					stop_id: "815",
					stop_name: "Southbound Oak St @ W 49 Ave"
				},
				id: 549627784
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.128635, 49.221231]
				},
				properties: {
					id: 549627785,
					stop_id: "817",
					stop_name: "Southbound Oak St @ W 54 Ave"
				},
				id: 549627785
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.128765, 49.218926]
				},
				properties: {
					id: 549627786,
					stop_id: "818",
					stop_name: "Southbound Oak St @ W 57 Ave"
				},
				id: 549627786
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.129581, 49.216857]
				},
				properties: {
					id: 549627787,
					stop_id: "819",
					stop_name: "Southbound Oak St @ W 59 Ave"
				},
				id: 549627787
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.130177, 49.214689]
				},
				properties: {
					id: 549627788,
					stop_id: "820",
					stop_name: "Southbound Oak St @ Park Dr"
				},
				id: 549627788
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.130325, 49.21048]
				},
				properties: {
					id: 549627789,
					stop_id: "822",
					stop_name: "Southbound Oak St @ W 67 Ave"
				},
				id: 549627789
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.130386, 49.208654]
				},
				properties: {
					id: 549627790,
					stop_id: "823",
					stop_name: "Southbound Oak St @ W 70 Ave"
				},
				id: 549627790
			}
		]
	},
	{
		id: "bus_route_08",
		name: "Bus 08 Victoria",
		geofenceCollection: "BusStopsCollection10",
		coordinates: [
			[-123.06575, 49.210615],
			[-123.066092, 49.210625],
			[-123.06605, 49.212224],
			[-123.066055, 49.213233],
			[-123.066022, 49.214503],
			[-123.065968, 49.215316],
			[-123.065985, 49.216176],
			[-123.06587, 49.220267],
			[-123.065868, 49.221272],
			[-123.065812, 49.223429],
			[-123.065806, 49.224282],
			[-123.065668, 49.227186],
			[-123.06566, 49.227639],
			[-123.065614, 49.228564],
			[-123.065586, 49.229464],
			[-123.065566, 49.230505],
			[-123.065516, 49.232071],
			[-123.065524, 49.232692],
			[-123.065511, 49.232802],
			[-123.065468, 49.233921],
			[-123.0655, 49.234917],
			[-123.065444, 49.236914],
			[-123.065421, 49.238131],
			[-123.06535, 49.240685],
			[-123.065304, 49.241523],
			[-123.065231, 49.244063],
			[-123.065174, 49.245143],
			[-123.065148, 49.245807],
			[-123.06501, 49.250912],
			[-123.065042, 49.251416],
			[-123.065218, 49.251868],
			[-123.065687, 49.252442],
			[-123.066273, 49.25296],
			[-123.066992, 49.253486],
			[-123.068001, 49.254251],
			[-123.068858, 49.254922],
			[-123.069077, 49.255138],
			[-123.069626, 49.256],
			[-123.06982, 49.256364],
			[-123.069879, 49.2566],
			[-123.06986, 49.258688],
			[-123.069815, 49.261398],
			[-123.069679, 49.267792],
			[-123.069675, 49.269587],
			[-123.069559, 49.273952],
			[-123.069532, 49.275761],
			[-123.06947, 49.276656],
			[-123.06946, 49.276915],
			[-123.069522, 49.277077],
			[-123.069679, 49.277247],
			[-123.070071, 49.277572],
			[-123.070282, 49.277776],
			[-123.070472, 49.278098],
			[-123.070471, 49.278482],
			[-123.070451, 49.27938],
			[-123.070399, 49.281248],
			[-123.07263, 49.281293],
			[-123.078055, 49.281357],
			[-123.078568, 49.281274],
			[-123.07916, 49.281115],
			[-123.079643, 49.281012],
			[-123.080061, 49.280986],
			[-123.081305, 49.280967],
			[-123.087162, 49.281092],
			[-123.089531, 49.281164],
			[-123.097466, 49.281313],
			[-123.099687, 49.281347],
			[-123.103853, 49.281433],
			[-123.104327, 49.281474],
			[-123.107193, 49.282001],
			[-123.109418, 49.282437],
			[-123.109961, 49.282772],
			[-123.111908, 49.284047],
			[-123.116191, 49.281213],
			[-123.114455, 49.282367],
			[-123.116191, 49.281213],
			[-123.117871, 49.280109],
			[-123.118797, 49.280722],
			[-123.119815, 49.281368],
			[-123.113846, 49.285313],
			[-123.109961, 49.282772],
			[-123.109418, 49.282437],
			[-123.107193, 49.282001],
			[-123.104327, 49.281474],
			[-123.103853, 49.281433],
			[-123.099687, 49.281347],
			[-123.097466, 49.281313],
			[-123.089531, 49.281164],
			[-123.087162, 49.281092],
			[-123.081305, 49.280967],
			[-123.080061, 49.280986],
			[-123.079643, 49.281012],
			[-123.07916, 49.281115],
			[-123.078568, 49.281274],
			[-123.078055, 49.281357],
			[-123.07263, 49.281293],
			[-123.070399, 49.281248],
			[-123.070451, 49.27938],
			[-123.070471, 49.278482],
			[-123.070472, 49.278098],
			[-123.070282, 49.277776],
			[-123.070071, 49.277572],
			[-123.069679, 49.277247],
			[-123.069522, 49.277077],
			[-123.06946, 49.276915],
			[-123.06947, 49.276656],
			[-123.069532, 49.275761],
			[-123.069559, 49.273952],
			[-123.069675, 49.269587],
			[-123.069679, 49.267792],
			[-123.069815, 49.261398],
			[-123.06986, 49.258688],
			[-123.069879, 49.2566],
			[-123.06982, 49.256364],
			[-123.069626, 49.256],
			[-123.069077, 49.255138],
			[-123.068858, 49.254922],
			[-123.068001, 49.254251],
			[-123.066992, 49.253486],
			[-123.066273, 49.25296],
			[-123.065687, 49.252442],
			[-123.065218, 49.251868],
			[-123.065042, 49.251416],
			[-123.06501, 49.250912],
			[-123.065148, 49.245807],
			[-123.065174, 49.245143],
			[-123.065231, 49.244063],
			[-123.065304, 49.241523],
			[-123.06535, 49.240685],
			[-123.065421, 49.238131],
			[-123.065444, 49.236914],
			[-123.0655, 49.234917],
			[-123.065468, 49.233921],
			[-123.065511, 49.232802],
			[-123.065524, 49.232692],
			[-123.065516, 49.232071],
			[-123.065566, 49.230505],
			[-123.065586, 49.229464],
			[-123.065614, 49.228564],
			[-123.06566, 49.227639],
			[-123.065668, 49.227186],
			[-123.065806, 49.224282],
			[-123.065812, 49.223429],
			[-123.065868, 49.221272],
			[-123.06587, 49.220267],
			[-123.065985, 49.216176],
			[-123.065968, 49.215316],
			[-123.066022, 49.214503],
			[-123.066055, 49.213233],
			[-123.06605, 49.212224],
			[-123.066092, 49.210626],
			[-123.06575, 49.210615],
			[-123.065418, 49.210546]
		],
		stopCoordinates: [
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.118291, 49.282317]
				},
				properties: {
					id: 549620983,
					stop_id: "11523",
					stop_name: "Northbound Granville St @ W Georgia St"
				},
				id: 549620983
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.116549, 49.283461]
				},
				properties: {
					id: 549620985,
					stop_id: "11525",
					stop_name: "Northbound Granville St @ Dunsmuir St"
				},
				id: 549620985
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.115596, 49.282782]
				},
				properties: {
					id: 549620992,
					stop_id: "11535",
					stop_name: "Northbound Seymour St @ Dunsmuir St"
				},
				id: 549620992
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.065448, 49.210486]
				},
				properties: {
					id: 549621032,
					stop_id: "11587",
					stop_name: "Eastbound Harrison Dr @ Victoria Dr"
				},
				id: 549621032
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.114994, 49.284493]
				},
				properties: {
					id: 549621060,
					stop_id: "11616",
					stop_name: "Northbound Granville St @ W Pender St"
				},
				id: 549621060
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.065682, 49.219851]
				},
				properties: {
					id: 549621246,
					stop_id: "11871",
					stop_name: "Victoria Dr @ 54th Avenue Loop"
				},
				id: 549621246
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.065781, 49.210673]
				},
				properties: {
					id: 549621434,
					stop_id: "1211",
					stop_name: "Westbound Harrison Dr @ Victoria Dr"
				},
				id: 549621434
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.065964, 49.212765]
				},
				properties: {
					id: 549621438,
					stop_id: "1212",
					stop_name: "Northbound Victoria Dr @ Fraserview Dr"
				},
				id: 549621438
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.065913, 49.214832]
				},
				properties: {
					id: 549621441,
					stop_id: "1213",
					stop_name: "Northbound Victoria Dr @ E 61 Ave"
				},
				id: 549621441
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.065874, 49.21691]
				},
				properties: {
					id: 549621446,
					stop_id: "1214",
					stop_name: "Northbound Victoria Dr @ Brigadoon Ave"
				},
				id: 549621446
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.065832, 49.218398]
				},
				properties: {
					id: 549621452,
					stop_id: "1215",
					stop_name: "Northbound Victoria Dr @ Upland Dr"
				},
				id: 549621452
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.065738, 49.220662]
				},
				properties: {
					id: 549621457,
					stop_id: "1216",
					stop_name: "Northbound Victoria Dr @ E 54 Ave"
				},
				id: 549621457
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.065653, 49.223425]
				},
				properties: {
					id: 549621465,
					stop_id: "1217",
					stop_name: "Northbound Victoria Dr @ E 51 Ave"
				},
				id: 549621465
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.065603, 49.225458]
				},
				properties: {
					id: 549621469,
					stop_id: "1218",
					stop_name: "Northbound Victoria Dr @ E 49 Ave"
				},
				id: 549621469
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.065556, 49.227465]
				},
				properties: {
					id: 549621478,
					stop_id: "1219",
					stop_name: "Northbound Victoria Dr @ Waverley Ave"
				},
				id: 549621478
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.065483, 49.229847]
				},
				properties: {
					id: 549621490,
					stop_id: "1220",
					stop_name: "Northbound Victoria Dr @ E 45 Ave"
				},
				id: 549621490
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.065432, 49.231503]
				},
				properties: {
					id: 549621501,
					stop_id: "1221",
					stop_name: "Northbound Victoria Dr @ E 43 Ave"
				},
				id: 549621501
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.064952, 49.247959]
				},
				properties: {
					id: 549621510,
					stop_id: "1222",
					stop_name: "Northbound Victoria Dr @ E 26 Ave"
				},
				id: 549621510
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.064898, 49.250596]
				},
				properties: {
					id: 549621530,
					stop_id: "1224",
					stop_name: "Northbound Victoria Dr @ E 22 Ave"
				},
				id: 549621530
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.066572, 49.253274]
				},
				properties: {
					id: 549621540,
					stop_id: "1225",
					stop_name: "Northbound Victoria Diversion @ Victoria Dr"
				},
				id: 549621540
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.068394, 49.254682]
				},
				properties: {
					id: 549621551,
					stop_id: "1226",
					stop_name: "Northbound Commercial Dr @ Findlay St"
				},
				id: 549621551
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.069745, 49.258015]
				},
				properties: {
					id: 549621567,
					stop_id: "1228",
					stop_name: "Northbound Commercial Dr @ E 14 Ave"
				},
				id: 549621567
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.069673, 49.259948]
				},
				properties: {
					id: 549621575,
					stop_id: "1229",
					stop_name: "Northbound Commercial Dr @ E 12 Ave"
				},
				id: 549621575
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.069636, 49.262699]
				},
				properties: {
					id: 549621593,
					stop_id: "1231",
					stop_name: "Commercial-Broadway Station @ Bay 3"
				},
				id: 549621593
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.069518, 49.269918]
				},
				properties: {
					id: 549621622,
					stop_id: "1235",
					stop_name: "Northbound Commercial Dr @ E 1st Ave"
				},
				id: 549621622
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.069481, 49.271608]
				},
				properties: {
					id: 549621629,
					stop_id: "1236",
					stop_name: "Northbound Commercial Dr @ Grant St"
				},
				id: 549621629
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.06943, 49.273323]
				},
				properties: {
					id: 549621636,
					stop_id: "1237",
					stop_name: "Northbound Commercial Dr @ Charles St"
				},
				id: 549621636
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.069418, 49.275134]
				},
				properties: {
					id: 549621641,
					stop_id: "1238",
					stop_name: "Northbound Commercial Dr @ Napier St"
				},
				id: 549621641
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.069433, 49.277014]
				},
				properties: {
					id: 549621662,
					stop_id: "1240",
					stop_name: "Northbound Commercial Diversion @ Venables St"
				},
				id: 549621662
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.070346, 49.278704]
				},
				properties: {
					id: 549621672,
					stop_id: "1241",
					stop_name: "Northbound Commercial Dr @ E Georgia St"
				},
				id: 549621672
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.070272, 49.280571]
				},
				properties: {
					id: 549621683,
					stop_id: "1242",
					stop_name: "Northbound Commercial Dr @ E Pender St"
				},
				id: 549621683
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.070549, 49.280806]
				},
				properties: {
					id: 549621702,
					stop_id: "1244",
					stop_name: "Southbound Commercial Dr @ E Hastings St"
				},
				id: 549621702
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.070545, 49.279104]
				},
				properties: {
					id: 549621711,
					stop_id: "1245",
					stop_name: "Southbound Commercial Dr @ Frances St"
				},
				id: 549621711
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.069881, 49.277328]
				},
				properties: {
					id: 549621721,
					stop_id: "1246",
					stop_name: "Southbound Commercial Diversion @ Adanac St"
				},
				id: 549621721
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.06961, 49.275512]
				},
				properties: {
					id: 549621732,
					stop_id: "1247",
					stop_name: "Southbound Commercial Dr @ Parker St"
				},
				id: 549621732
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.069647, 49.273685]
				},
				properties: {
					id: 549621741,
					stop_id: "1248",
					stop_name: "Southbound Commercial Dr @ William St"
				},
				id: 549621741
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.069692, 49.271878]
				},
				properties: {
					id: 549621748,
					stop_id: "1249",
					stop_name: "Southbound Commercial Dr @ Kitchener St"
				},
				id: 549621748
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.069755, 49.270207]
				},
				properties: {
					id: 549621755,
					stop_id: "1250",
					stop_name: "Southbound Commercial Dr @ Graveley St"
				},
				id: 549621755
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.069776, 49.268438]
				},
				properties: {
					id: 549621762,
					stop_id: "1251",
					stop_name: "Southbound Commercial Dr @ E 2nd Ave"
				},
				id: 549621762
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.069808, 49.266576]
				},
				properties: {
					id: 549621766,
					stop_id: "1252",
					stop_name: "Southbound Commercial Dr @ E 4th Ave"
				},
				id: 549621766
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.069842, 49.264806]
				},
				properties: {
					id: 549621771,
					stop_id: "1253",
					stop_name: "Southbound Commercial Dr @ E 6th Ave"
				},
				id: 549621771
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.11824, 49.28102]
				},
				properties: {
					id: 549621777,
					stop_id: "12535",
					stop_name: "Northbound Seymour St @ Robson St"
				},
				id: 549621777
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.065682, 49.232253]
				},
				properties: {
					id: 549621779,
					stop_id: "1254",
					stop_name: "Southbound Victoria Dr @ E 41 Ave"
				},
				id: 549621779
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.065727, 49.230264]
				},
				properties: {
					id: 549621786,
					stop_id: "1255",
					stop_name: "Southbound Victoria Dr @ E 43 Ave"
				},
				id: 549621786
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.065819, 49.226693]
				},
				properties: {
					id: 549621792,
					stop_id: "1256",
					stop_name: "Southbound Victoria Dr @ Waverley Ave"
				},
				id: 549621792
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.065873, 49.224857]
				},
				properties: {
					id: 549621801,
					stop_id: "1258",
					stop_name: "Southbound Victoria Dr @ E 49 Ave"
				},
				id: 549621801
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.065922, 49.223127]
				},
				properties: {
					id: 549621807,
					stop_id: "1259",
					stop_name: "Southbound Victoria Dr @ E 51 Ave"
				},
				id: 549621807
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.065964, 49.221481]
				},
				properties: {
					id: 549621815,
					stop_id: "1260",
					stop_name: "Southbound Victoria Dr @ E 53 Ave"
				},
				id: 549621815
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.065976, 49.219611]
				},
				properties: {
					id: 549621821,
					stop_id: "1261",
					stop_name: "Southbound Victoria Dr @ Argyle Dr"
				},
				id: 549621821
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.066039, 49.217768]
				},
				properties: {
					id: 549621829,
					stop_id: "1262",
					stop_name: "Southbound Victoria Dr @ Upland Dr"
				},
				id: 549621829
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.066092, 49.215036]
				},
				properties: {
					id: 549621844,
					stop_id: "1264",
					stop_name: "Southbound Victoria Dr @ Newport Ave"
				},
				id: 549621844
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.066138, 49.213015]
				},
				properties: {
					id: 549621851,
					stop_id: "1265",
					stop_name: "Southbound Victoria Dr @ Thornhill Dr"
				},
				id: 549621851
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.066167, 49.21118]
				},
				properties: {
					id: 549621860,
					stop_id: "1266",
					stop_name: "Southbound Victoria Dr @ E 64 Ave"
				},
				id: 549621860
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.066544, 49.232733]
				},
				properties: {
					id: 549621868,
					stop_id: "12667",
					stop_name: "Westbound E 41 Ave @ Victoria Dr"
				},
				id: 549621868
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.113676, 49.28299]
				},
				properties: {
					id: 549621993,
					stop_id: "12859",
					stop_name: "Southbound Richards St @ Dunsmuir St"
				},
				id: 549621993
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.094737, 49.281161]
				},
				properties: {
					id: 549621995,
					stop_id: "12860",
					stop_name: "Eastbound E Hastings St @ Dunlevy Ave"
				},
				id: 549621995
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.099363, 49.281426]
				},
				properties: {
					id: 549622528,
					stop_id: "185",
					stop_name: "Westbound E Hastings St @ Main St"
				},
				id: 549622528
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.105366, 49.281733]
				},
				properties: {
					id: 549622536,
					stop_id: "186",
					stop_name: "Westbound W Hastings St @ Carrall St"
				},
				id: 549622536
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.110279, 49.283085]
				},
				properties: {
					id: 549622553,
					stop_id: "188",
					stop_name: "Westbound W Hastings St @ Hamilton St"
				},
				id: 549622553
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.115253, 49.281944]
				},
				properties: {
					id: 549622564,
					stop_id: "190",
					stop_name: "Southbound Richards St @ Dunsmuir St"
				},
				id: 549622564
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.119551, 49.28128]
				},
				properties: {
					id: 549622576,
					stop_id: "193",
					stop_name: "Westbound Robson St @ Granville St"
				},
				id: 549622576
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.104795, 49.281469]
				},
				properties: {
					id: 549623349,
					stop_id: "2936",
					stop_name: "Eastbound W Hastings St @ Carrall St"
				},
				id: 549623349
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.108043, 49.282221]
				},
				properties: {
					id: 549623753,
					stop_id: "3429",
					stop_name: "Westbound W Hastings St @ Abbott St"
				},
				id: 549623753
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.071174, 49.281362]
				},
				properties: {
					id: 549625100,
					stop_id: "503",
					stop_name: "Westbound E Hastings St @ Commercial Dr"
				},
				id: 549625100
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.074606, 49.281378]
				},
				properties: {
					id: 549625111,
					stop_id: "504",
					stop_name: "Westbound E Hastings St @ McLean Dr"
				},
				id: 549625111
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.077888, 49.281445]
				},
				properties: {
					id: 549625119,
					stop_id: "505",
					stop_name: "Westbound E Hastings St @ Clark Dr"
				},
				id: 549625119
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.085249, 49.281155]
				},
				properties: {
					id: 549625138,
					stop_id: "507",
					stop_name: "Westbound E Hastings St @ Campbell Ave"
				},
				id: 549625138
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.087667, 49.2812]
				},
				properties: {
					id: 549625149,
					stop_id: "508",
					stop_name: "Westbound E Hastings St @ Hawks Ave"
				},
				id: 549625149
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.092019, 49.281282]
				},
				properties: {
					id: 549625160,
					stop_id: "509",
					stop_name: "Westbound E Hastings St @ Princess Ave"
				},
				id: 549625160
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.093904, 49.281321]
				},
				properties: {
					id: 549625168,
					stop_id: "510",
					stop_name: "Westbound E Hastings St @ Jackson Ave"
				},
				id: 549625168
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.095847, 49.281356]
				},
				properties: {
					id: 549625179,
					stop_id: "511",
					stop_name: "Westbound E Hastings St @ Dunlevy Ave"
				},
				id: 549625179
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.069616, 49.232543]
				},
				properties: {
					id: 549626433,
					stop_id: "657",
					stop_name: "Eastbound E 41 Ave @ Bruce St"
				},
				id: 549626433
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.065403, 49.233152]
				},
				properties: {
					id: 549626452,
					stop_id: "659",
					stop_name: "Northbound Victoria Dr @ E 41 Ave"
				},
				id: 549626452
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.065348, 49.234784]
				},
				properties: {
					id: 549626463,
					stop_id: "660",
					stop_name: "Northbound Victoria Dr @ E 39 Ave"
				},
				id: 549626463
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.065307, 49.236203]
				},
				properties: {
					id: 549626471,
					stop_id: "661",
					stop_name: "Northbound Victoria Dr @ E 38 Ave"
				},
				id: 549626471
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.065288, 49.237698]
				},
				properties: {
					id: 549626475,
					stop_id: "662",
					stop_name: "Northbound Victoria Dr @ E 36 Ave"
				},
				id: 549626475
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.065188, 49.24032]
				},
				properties: {
					id: 549626480,
					stop_id: "663",
					stop_name: "Northbound Victoria Dr @ E 33 Ave"
				},
				id: 549626480
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.065138, 49.241893]
				},
				properties: {
					id: 549626491,
					stop_id: "664",
					stop_name: "Northbound Victoria Dr @ E 32 Ave"
				},
				id: 549626491
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.065039, 49.244828]
				},
				properties: {
					id: 549626502,
					stop_id: "665",
					stop_name: "Northbound Victoria Dr @ Kingsway"
				},
				id: 549626502
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.0653, 49.244809]
				},
				properties: {
					id: 549626884,
					stop_id: "704",
					stop_name: "Southbound Victoria Dr @ Kingsway"
				},
				id: 549626884
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.065373, 49.24251]
				},
				properties: {
					id: 549626893,
					stop_id: "705",
					stop_name: "Southbound Victoria Dr @ E 31 Ave"
				},
				id: 549626893
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.065469, 49.239661]
				},
				properties: {
					id: 549626900,
					stop_id: "706",
					stop_name: "Southbound Victoria Dr @ E 33 Ave"
				},
				id: 549626900
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.065531, 49.237254]
				},
				properties: {
					id: 549626908,
					stop_id: "707",
					stop_name: "Southbound Victoria Dr @ E 36 Ave"
				},
				id: 549626908
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.065127, 49.249893]
				},
				properties: {
					id: 549627926,
					stop_id: "8537",
					stop_name: "Southbound Victoria Dr @ E 22 Ave"
				},
				id: 549627926
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.069596, 49.265331]
				},
				properties: {
					id: 549627937,
					stop_id: "8569",
					stop_name: "Northbound Commercial Dr @ E 6th Ave"
				},
				id: 549627937
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.06953, 49.268043]
				},
				properties: {
					id: 549627974,
					stop_id: "8637",
					stop_name: "Northbound Commercial Dr @ E 3rd Ave"
				},
				id: 549627974
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.069903, 49.263232]
				},
				properties: {
					id: 549628112,
					stop_id: "8913",
					stop_name: "Southbound Commercial Dr @ N Grandview Hwy"
				},
				id: 549628112
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.065593, 49.235445]
				},
				properties: {
					id: 549628238,
					stop_id: "9094",
					stop_name: "Southbound Victoria Dr @ E 38 Ave"
				},
				id: 549628238
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.112551, 49.284334]
				},
				properties: {
					id: 549628420,
					stop_id: "938",
					stop_name: "Eastbound W Hastings St @ Seymour St"
				},
				id: 549628420
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.110546, 49.283054]
				},
				properties: {
					id: 549628429,
					stop_id: "939",
					stop_name: "Eastbound W Hastings St @ Homer St"
				},
				id: 549628429
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.107568, 49.281981]
				},
				properties: {
					id: 549628438,
					stop_id: "940",
					stop_name: "Eastbound W Hastings St @ Abbott St"
				},
				id: 549628438
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.099034, 49.281225]
				},
				properties: {
					id: 549628453,
					stop_id: "942",
					stop_name: "Eastbound E Hastings St @ Main St"
				},
				id: 549628453
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.092955, 49.281112]
				},
				properties: {
					id: 549628463,
					stop_id: "944",
					stop_name: "Eastbound E Hastings St @ Jackson Ave"
				},
				id: 549628463
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.090971, 49.281081]
				},
				properties: {
					id: 549628467,
					stop_id: "945",
					stop_name: "Eastbound E Hastings St @ Princess Ave"
				},
				id: 549628467
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.086654, 49.281005]
				},
				properties: {
					id: 549628469,
					stop_id: "946",
					stop_name: "Eastbound E Hastings St @ Hawks Ave"
				},
				id: 549628469
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.084231, 49.280957]
				},
				properties: {
					id: 549628472,
					stop_id: "947",
					stop_name: "Eastbound E Hastings St @ Campbell Ave"
				},
				id: 549628472
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.08086, 49.280904]
				},
				properties: {
					id: 549628479,
					stop_id: "948",
					stop_name: "Eastbound E Hastings St @ Glen Dr"
				},
				id: 549628479
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.076457, 49.281195]
				},
				properties: {
					id: 549628486,
					stop_id: "949",
					stop_name: "Eastbound E Hastings St @ Clark Dr"
				},
				id: 549628486
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.073421, 49.281191]
				},
				properties: {
					id: 549628490,
					stop_id: "950",
					stop_name: "Eastbound E Hastings St @ McLean Dr"
				},
				id: 549628490
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.069913, 49.261929]
				},
				properties: {
					id: 549628631,
					stop_id: "972",
					stop_name: "Commercial-Broadway Station @ Bay 2"
				},
				id: 549628631
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.06995, 49.259177]
				},
				properties: {
					id: 549628639,
					stop_id: "973",
					stop_name: "Southbound Commercial Dr @ E 12 Ave"
				},
				id: 549628639
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.069954, 49.257485]
				},
				properties: {
					id: 549628646,
					stop_id: "974",
					stop_name: "Southbound Commercial Dr @ E 14 Ave"
				},
				id: 549628646
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.067594, 49.253864]
				},
				properties: {
					id: 549628648,
					stop_id: "976",
					stop_name: "Southbound Victoria Diversion @ Commercial St"
				},
				id: 549628648
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.066107, 49.252727]
				},
				properties: {
					id: 549628649,
					stop_id: "977",
					stop_name: "Southbound Victoria Dr @ Victoria Diversion"
				},
				id: 549628649
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.065204, 49.247318]
				},
				properties: {
					id: 549628652,
					stop_id: "980",
					stop_name: "Southbound Victoria Dr @ E 26 Ave"
				},
				id: 549628652
			}
		]
	},
	{
		id: "bus_route_09",
		name: "Bus 09 Knight",
		geofenceCollection: "BusStopsCollection05",
		coordinates: [
			[-123.121506, 49.286198],
			[-123.121987, 49.286464],
			[-123.120436, 49.287492],
			[-123.119488, 49.287212],
			[-123.118428, 49.286845],
			[-123.117889, 49.286556],
			[-123.112864, 49.283416],
			[-123.111922, 49.282763],
			[-123.110956, 49.282119],
			[-123.110066, 49.28156],
			[-123.109758, 49.281458],
			[-123.104379, 49.280492],
			[-123.099699, 49.280381],
			[-123.097304, 49.280336],
			[-123.097067, 49.278532],
			[-123.096963, 49.277617],
			[-123.096879, 49.276696],
			[-123.096626, 49.276668],
			[-123.096279, 49.276659],
			[-123.096153, 49.2767],
			[-123.093627, 49.276673],
			[-123.084998, 49.276493],
			[-123.084485, 49.276506],
			[-123.084012, 49.276595],
			[-123.083233, 49.276806],
			[-123.082856, 49.276837],
			[-123.079984, 49.276801],
			[-123.079305, 49.276813],
			[-123.078601, 49.276781],
			[-123.077265, 49.27676],
			[-123.077288, 49.275855],
			[-123.077299, 49.27404],
			[-123.077365, 49.269649],
			[-123.077385, 49.268754],
			[-123.07738, 49.267849],
			[-123.077408, 49.266925],
			[-123.077429, 49.265175],
			[-123.077487, 49.264234],
			[-123.077528, 49.263332],
			[-123.077547, 49.262579],
			[-123.077619, 49.262485],
			[-123.077623, 49.262393],
			[-123.077571, 49.259629],
			[-123.077589, 49.258496],
			[-123.077488, 49.25821],
			[-123.077219, 49.257919],
			[-123.077071, 49.25782],
			[-123.076504, 49.257498],
			[-123.076096, 49.257168],
			[-123.075959, 49.256927],
			[-123.075925, 49.2566],
			[-123.075927, 49.25651],
			[-123.07587, 49.25643],
			[-123.076001, 49.253493],
			[-123.076, 49.251423],
			[-123.076084, 49.25129],
			[-123.076182, 49.248373],
			[-123.076077, 49.248234],
			[-123.076121, 49.247501],
			[-123.076236, 49.246437],
			[-123.076271, 49.245411],
			[-123.07631, 49.244548],
			[-123.076377, 49.242509],
			[-123.07633, 49.241679],
			[-123.076368, 49.240212],
			[-123.076513, 49.239359],
			[-123.076713, 49.238535],
			[-123.07688, 49.237683],
			[-123.076994, 49.234793],
			[-123.077137, 49.230655],
			[-123.077138, 49.229006],
			[-123.077238, 49.227653],
			[-123.077324, 49.22528],
			[-123.077403, 49.223369],
			[-123.077479, 49.2218],
			[-123.077517, 49.220425],
			[-123.077474, 49.220016],
			[-123.077272, 49.219585],
			[-123.077066, 49.219085],
			[-123.077044, 49.21726],
			[-123.077102, 49.213763],
			[-123.077117, 49.212214],
			[-123.077332, 49.211858],
			[-123.077547, 49.211715],
			[-123.077864, 49.211581],
			[-123.077795, 49.211359],
			[-123.077686, 49.211314],
			[-123.076673, 49.211318],
			[-123.077023, 49.211317],
			[-123.076673, 49.211318],
			[-123.076569, 49.211392],
			[-123.076553, 49.211501],
			[-123.076617, 49.211615],
			[-123.076926, 49.211891],
			[-123.077117, 49.212214],
			[-123.077102, 49.213763],
			[-123.077044, 49.21726],
			[-123.077066, 49.219085],
			[-123.077272, 49.219585],
			[-123.077474, 49.220016],
			[-123.077517, 49.220425],
			[-123.077479, 49.2218],
			[-123.077403, 49.223369],
			[-123.077324, 49.22528],
			[-123.077238, 49.227653],
			[-123.077138, 49.229006],
			[-123.077137, 49.230655],
			[-123.076994, 49.234793],
			[-123.07688, 49.237683],
			[-123.076713, 49.238535],
			[-123.076513, 49.239359],
			[-123.076368, 49.240212],
			[-123.07633, 49.241679],
			[-123.076377, 49.242509],
			[-123.07631, 49.244548],
			[-123.076271, 49.245411],
			[-123.076236, 49.246437],
			[-123.076121, 49.247501],
			[-123.076077, 49.248234],
			[-123.07597, 49.248366],
			[-123.07597, 49.248511],
			[-123.075939, 49.249068],
			[-123.075941, 49.250067],
			[-123.075932, 49.251296],
			[-123.076, 49.251423],
			[-123.076001, 49.253493],
			[-123.07587, 49.25643],
			[-123.075807, 49.256504],
			[-123.075806, 49.256595],
			[-123.075852, 49.256935],
			[-123.076099, 49.257299],
			[-123.076258, 49.257429],
			[-123.07692, 49.257816],
			[-123.077145, 49.257964],
			[-123.077382, 49.258232],
			[-123.077479, 49.258485],
			[-123.07748, 49.262484],
			[-123.077547, 49.262579],
			[-123.077528, 49.263332],
			[-123.077487, 49.264234],
			[-123.077429, 49.265175],
			[-123.077408, 49.266925],
			[-123.07738, 49.267849],
			[-123.077385, 49.268754],
			[-123.077365, 49.269649],
			[-123.077299, 49.27404],
			[-123.077288, 49.275855],
			[-123.077265, 49.27676],
			[-123.078601, 49.276781],
			[-123.079305, 49.276813],
			[-123.079984, 49.276801],
			[-123.082856, 49.276837],
			[-123.083233, 49.276806],
			[-123.084012, 49.276595],
			[-123.084485, 49.276506],
			[-123.084998, 49.276493],
			[-123.093627, 49.276673],
			[-123.096153, 49.2767],
			[-123.096283, 49.276734],
			[-123.096886, 49.276792],
			[-123.096963, 49.277617],
			[-123.097067, 49.278532],
			[-123.097304, 49.280336],
			[-123.099699, 49.280381],
			[-123.104379, 49.280492],
			[-123.109758, 49.281458],
			[-123.110066, 49.28156],
			[-123.110956, 49.282119],
			[-123.111922, 49.282763],
			[-123.112864, 49.283416],
			[-123.117889, 49.286556],
			[-123.119392, 49.285601],
			[-123.120015, 49.285893],
			[-123.121125, 49.28609],
			[-123.121506, 49.286198],
			[-123.121987, 49.286464],
			[-123.099699, 49.280381],
			[-123.097304, 49.280336],
			[-123.097067, 49.278532],
			[-123.096963, 49.277617],
			[-123.096879, 49.276696],
			[-123.096626, 49.276668],
			[-123.096279, 49.276659],
			[-123.096153, 49.2767],
			[-123.093627, 49.276673],
			[-123.084998, 49.276493],
			[-123.084485, 49.276506],
			[-123.084012, 49.276595],
			[-123.083233, 49.276806],
			[-123.082856, 49.276837],
			[-123.079984, 49.276801],
			[-123.079305, 49.276813],
			[-123.078601, 49.276781],
			[-123.077265, 49.27676],
			[-123.077288, 49.275855],
			[-123.077299, 49.27404],
			[-123.077365, 49.269649],
			[-123.077385, 49.268754],
			[-123.07738, 49.267849],
			[-123.077408, 49.266925],
			[-123.077429, 49.265175],
			[-123.077487, 49.264234],
			[-123.077528, 49.263332],
			[-123.077547, 49.262579],
			[-123.077619, 49.262485],
			[-123.077623, 49.262393],
			[-123.077571, 49.259629],
			[-123.077589, 49.258496],
			[-123.077488, 49.25821],
			[-123.077219, 49.257919],
			[-123.077071, 49.25782],
			[-123.076504, 49.257498],
			[-123.076096, 49.257168],
			[-123.075959, 49.256927],
			[-123.075925, 49.2566],
			[-123.075927, 49.25651],
			[-123.07587, 49.25643],
			[-123.076001, 49.253493],
			[-123.076, 49.251423],
			[-123.076084, 49.25129],
			[-123.076182, 49.248373],
			[-123.076077, 49.248234],
			[-123.076121, 49.247501],
			[-123.076236, 49.246437],
			[-123.076271, 49.245411],
			[-123.07631, 49.244548],
			[-123.076377, 49.242509],
			[-123.07633, 49.241679],
			[-123.076368, 49.240212],
			[-123.076513, 49.239359],
			[-123.076713, 49.238535],
			[-123.07688, 49.237683],
			[-123.076994, 49.234793],
			[-123.077137, 49.230655],
			[-123.077138, 49.229006],
			[-123.077238, 49.227653],
			[-123.077324, 49.22528],
			[-123.077403, 49.223369],
			[-123.077479, 49.2218],
			[-123.077517, 49.220425],
			[-123.077474, 49.220016],
			[-123.077272, 49.219585],
			[-123.077066, 49.219085],
			[-123.077044, 49.21726],
			[-123.077102, 49.213763],
			[-123.07712, 49.211521],
			[-123.07723, 49.211462],
			[-123.077321, 49.209362],
			[-123.077559, 49.205294],
			[-123.077553, 49.196834],
			[-123.077568, 49.196345],
			[-123.077552, 49.191998],
			[-123.077544, 49.191469],
			[-123.077808, 49.191155],
			[-123.077925, 49.191077],
			[-123.078241, 49.190976],
			[-123.078424, 49.190967],
			[-123.078576, 49.190987],
			[-123.078849, 49.191081],
			[-123.078995, 49.191198],
			[-123.079083, 49.191381],
			[-123.079036, 49.191594],
			[-123.078953, 49.191704],
			[-123.078672, 49.191856],
			[-123.07782, 49.191996],
			[-123.07333, 49.19201],
			[-123.073274, 49.184627],
			[-123.075349, 49.184641],
			[-123.080306, 49.184541],
			[-123.080294, 49.185651],
			[-123.080311, 49.187415],
			[-123.080294, 49.185651],
			[-123.080325, 49.189235],
			[-123.082976, 49.189242],
			[-123.082983, 49.190171],
			[-123.082629, 49.190543],
			[-123.08257, 49.190681],
			[-123.082571, 49.191243],
			[-123.08256, 49.191984],
			[-123.076818, 49.191999],
			[-123.075989, 49.191878],
			[-123.075845, 49.191838],
			[-123.075552, 49.191693],
			[-123.075374, 49.191479],
			[-123.075335, 49.191367],
			[-123.075354, 49.191145],
			[-123.075481, 49.190936],
			[-123.075756, 49.190753],
			[-123.076094, 49.190656],
			[-123.076348, 49.190641],
			[-123.076587, 49.190668],
			[-123.07681, 49.190729],
			[-123.076982, 49.190814],
			[-123.077123, 49.190922],
			[-123.077354, 49.191539],
			[-123.077382, 49.196402],
			[-123.077369, 49.196888],
			[-123.077391, 49.202843],
			[-123.077368, 49.205313],
			[-123.077274, 49.207108],
			[-123.077015, 49.211466],
			[-123.07712, 49.211521],
			[-123.077102, 49.213763],
			[-123.077044, 49.21726],
			[-123.077066, 49.219085],
			[-123.077272, 49.219585],
			[-123.077474, 49.220016],
			[-123.077517, 49.220425],
			[-123.077479, 49.2218],
			[-123.077403, 49.223369],
			[-123.077324, 49.22528],
			[-123.077238, 49.227653],
			[-123.077138, 49.229006],
			[-123.077137, 49.230655],
			[-123.076994, 49.234793],
			[-123.07688, 49.237683],
			[-123.076713, 49.238535],
			[-123.076513, 49.239359],
			[-123.076368, 49.240212],
			[-123.07633, 49.241679],
			[-123.076377, 49.242509],
			[-123.07631, 49.244548],
			[-123.076271, 49.245411],
			[-123.076236, 49.246437],
			[-123.076121, 49.247501],
			[-123.076077, 49.248234],
			[-123.07597, 49.248366],
			[-123.07597, 49.248511],
			[-123.075939, 49.249068],
			[-123.075941, 49.250067],
			[-123.075932, 49.251296],
			[-123.076, 49.251423],
			[-123.076001, 49.253493],
			[-123.07587, 49.25643],
			[-123.075807, 49.256504],
			[-123.075806, 49.256595],
			[-123.075852, 49.256935],
			[-123.076099, 49.257299],
			[-123.076258, 49.257429],
			[-123.07692, 49.257816],
			[-123.077145, 49.257964],
			[-123.077382, 49.258232],
			[-123.077479, 49.258485],
			[-123.07748, 49.262484],
			[-123.077547, 49.262579],
			[-123.077528, 49.263332],
			[-123.077487, 49.264234],
			[-123.077429, 49.265175],
			[-123.077408, 49.266925],
			[-123.07738, 49.267849],
			[-123.077385, 49.268754],
			[-123.077365, 49.269649],
			[-123.077299, 49.27404],
			[-123.077288, 49.275855],
			[-123.077265, 49.27676],
			[-123.078601, 49.276781],
			[-123.079305, 49.276813],
			[-123.079984, 49.276801],
			[-123.082856, 49.276837],
			[-123.083233, 49.276806],
			[-123.084012, 49.276595],
			[-123.084485, 49.276506],
			[-123.084998, 49.276493],
			[-123.093627, 49.276673],
			[-123.096153, 49.2767],
			[-123.096283, 49.276734],
			[-123.096886, 49.276792],
			[-123.096963, 49.277617],
			[-123.097067, 49.278532],
			[-123.097304, 49.280336],
			[-123.099699, 49.280381],
			[-123.104379, 49.280492],
			[-123.109758, 49.281458],
			[-123.110066, 49.28156],
			[-123.110956, 49.282119],
			[-123.111922, 49.282763],
			[-123.112864, 49.283416],
			[-123.117889, 49.286556],
			[-123.119392, 49.285601],
			[-123.120015, 49.285893],
			[-123.121125, 49.28609],
			[-123.121506, 49.286198],
			[-123.121987, 49.286464]
		],
		stopCoordinates: [
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.07613, 49.253194]
				},
				properties: {
					id: 549620444,
					stop_id: "10807",
					stop_name: "Southbound Knight St @ E 19 Ave"
				},
				id: 549620444
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.100263, 49.280462]
				},
				properties: {
					id: 549620988,
					stop_id: "11529",
					stop_name: "Westbound E Pender St @ Main St"
				},
				id: 549620988
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.11137, 49.282472]
				},
				properties: {
					id: 549621074,
					stop_id: "11638",
					stop_name: "Westbound W Pender St @ Hamilton St"
				},
				id: 549621074
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.119282, 49.285787]
				},
				properties: {
					id: 549621639,
					stop_id: "12375",
					stop_name: "Burrard Station @ Bay 5"
				},
				id: 549621639
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.099245, 49.280323]
				},
				properties: {
					id: 549621966,
					stop_id: "1283",
					stop_name: "Eastbound E Pender St @ Main St"
				},
				id: 549621966
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.097251, 49.279105]
				},
				properties: {
					id: 549621974,
					stop_id: "1284",
					stop_name: "Southbound Gore Ave @ Keefer St"
				},
				id: 549621974
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.09702, 49.27736]
				},
				properties: {
					id: 549621984,
					stop_id: "1285",
					stop_name: "Southbound Gore Ave @ Union St"
				},
				id: 549621984
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.098889, 49.272477]
				},
				properties: {
					id: 549621994,
					stop_id: "1286",
					stop_name: "Eastbound Terminal Ave @ Western St"
				},
				id: 549621994
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.093947, 49.271619]
				},
				properties: {
					id: 549622004,
					stop_id: "1287",
					stop_name: "Eastbound Terminal Ave @ Thornton St"
				},
				id: 549622004
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.087037, 49.270461]
				},
				properties: {
					id: 549622013,
					stop_id: "1288",
					stop_name: "Eastbound Terminal Ave @ Begg St"
				},
				id: 549622013
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.095194, 49.276624]
				},
				properties: {
					id: 549622024,
					stop_id: "1289",
					stop_name: "Eastbound Prior St @ Dunlevy Ave"
				},
				id: 549622024
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.091207, 49.276551]
				},
				properties: {
					id: 549622032,
					stop_id: "1290",
					stop_name: "Eastbound Prior St @ Princess Ave"
				},
				id: 549622032
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.087659, 49.276481]
				},
				properties: {
					id: 549622035,
					stop_id: "1291",
					stop_name: "Eastbound Prior St @ Hawks Ave"
				},
				id: 549622035
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.084506, 49.276442]
				},
				properties: {
					id: 549622043,
					stop_id: "1292",
					stop_name: "Eastbound Prior St @ Campbell Ave"
				},
				id: 549622043
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.080955, 49.276727]
				},
				properties: {
					id: 549622044,
					stop_id: "1293",
					stop_name: "Eastbound Venables St @ Glen Dr"
				},
				id: 549622044
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.07825, 49.276697]
				},
				properties: {
					id: 549622045,
					stop_id: "1294",
					stop_name: "Eastbound Venables St @ Vernon Dr"
				},
				id: 549622045
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.077375, 49.275523]
				},
				properties: {
					id: 549622046,
					stop_id: "1295",
					stop_name: "Southbound Clark Dr @ Parker St"
				},
				id: 549622046
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.07742, 49.27378]
				},
				properties: {
					id: 549622047,
					stop_id: "1296",
					stop_name: "Southbound Clark Dr @ William St"
				},
				id: 549622047
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.077466, 49.271208]
				},
				properties: {
					id: 549622048,
					stop_id: "1297",
					stop_name: "Southbound Clark Dr @ Grant St"
				},
				id: 549622048
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.077555, 49.268967]
				},
				properties: {
					id: 549622049,
					stop_id: "1298",
					stop_name: "Southbound Clark Dr @ E 1st Ave"
				},
				id: 549622049
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.077527, 49.267558]
				},
				properties: {
					id: 549622050,
					stop_id: "1299",
					stop_name: "Southbound Clark Dr @ E 3rd Ave"
				},
				id: 549622050
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.07763, 49.264806]
				},
				properties: {
					id: 549622052,
					stop_id: "1300",
					stop_name: "Southbound Clark Dr @ E 6th Ave"
				},
				id: 549622052
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.07773, 49.262018]
				},
				properties: {
					id: 549622053,
					stop_id: "1301",
					stop_name: "Southbound Clark Dr @ E Broadway"
				},
				id: 549622053
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.077691, 49.259354]
				},
				properties: {
					id: 549622054,
					stop_id: "1302",
					stop_name: "Southbound Clark Dr @ E 12 Ave"
				},
				id: 549622054
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.076054, 49.255003]
				},
				properties: {
					id: 549622055,
					stop_id: "1304",
					stop_name: "Southbound Knight St @ E 17 Ave"
				},
				id: 549622055
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.076243, 49.249651]
				},
				properties: {
					id: 549622056,
					stop_id: "1307",
					stop_name: "Southbound Knight St @ E 23 Ave"
				},
				id: 549622056
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.076298, 49.248155]
				},
				properties: {
					id: 549622057,
					stop_id: "1308",
					stop_name: "Southbound Knight St @ E King Edward Ave"
				},
				id: 549622057
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.076373, 49.24614]
				},
				properties: {
					id: 549622058,
					stop_id: "1309",
					stop_name: "Southbound Knight St @ E 27 Ave"
				},
				id: 549622058
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.076425, 49.244204]
				},
				properties: {
					id: 549622059,
					stop_id: "1310",
					stop_name: "Southbound Knight St @ E 29 Ave"
				},
				id: 549622059
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.076486, 49.242149]
				},
				properties: {
					id: 549622060,
					stop_id: "1311",
					stop_name: "Southbound Knight St @ E 31 Ave"
				},
				id: 549622060
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.07656, 49.23988]
				},
				properties: {
					id: 549622061,
					stop_id: "1312",
					stop_name: "Southbound Knight St @ E 33 Ave"
				},
				id: 549622061
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.076911, 49.238186]
				},
				properties: {
					id: 549622062,
					stop_id: "1313",
					stop_name: "Southbound Knight St @ E 35 Ave"
				},
				id: 549622062
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.07705, 49.236514]
				},
				properties: {
					id: 549622063,
					stop_id: "1314",
					stop_name: "Southbound Knight St @ E 37 Ave"
				},
				id: 549622063
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.077104, 49.234472]
				},
				properties: {
					id: 549622064,
					stop_id: "1315",
					stop_name: "Southbound Knight St @ E 39 Ave"
				},
				id: 549622064
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.077224, 49.232305]
				},
				properties: {
					id: 549622065,
					stop_id: "1316",
					stop_name: "Southbound Knight St @ E 41 Ave"
				},
				id: 549622065
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.077253, 49.230318]
				},
				properties: {
					id: 549622066,
					stop_id: "1317",
					stop_name: "Southbound Knight St @ E 43 Ave"
				},
				id: 549622066
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.077321, 49.228692]
				},
				properties: {
					id: 549622067,
					stop_id: "1318",
					stop_name: "Southbound Knight St @ E 45 Ave"
				},
				id: 549622067
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.077362, 49.227344]
				},
				properties: {
					id: 549622068,
					stop_id: "1319",
					stop_name: "Southbound Knight St @ E 47 Ave"
				},
				id: 549622068
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.077479, 49.224925]
				},
				properties: {
					id: 549622070,
					stop_id: "1320",
					stop_name: "Southbound Knight St @ E 49 Ave"
				},
				id: 549622070
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.077505, 49.223084]
				},
				properties: {
					id: 549622071,
					stop_id: "1321",
					stop_name: "Southbound Knight St @ E 51 Ave"
				},
				id: 549622071
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.077568, 49.221522]
				},
				properties: {
					id: 549622072,
					stop_id: "1322",
					stop_name: "Southbound Knight St @ E 53 Ave"
				},
				id: 549622072
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.077162, 49.218344]
				},
				properties: {
					id: 549622073,
					stop_id: "1324",
					stop_name: "Southbound Knight St @ E 57 Ave"
				},
				id: 549622073
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.077184, 49.216969]
				},
				properties: {
					id: 549622074,
					stop_id: "1325",
					stop_name: "Southbound Knight St @ E 58 Ave"
				},
				id: 549622074
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.077208, 49.215154]
				},
				properties: {
					id: 549622075,
					stop_id: "1326",
					stop_name: "Southbound Knight St @ E 60 Ave"
				},
				id: 549622075
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.077228, 49.213443]
				},
				properties: {
					id: 549622076,
					stop_id: "1327",
					stop_name: "Southbound Knight St @ E 62 Ave"
				},
				id: 549622076
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.077238, 49.212389]
				},
				properties: {
					id: 549622077,
					stop_id: "1328",
					stop_name: "Southbound Knight St @ E 63 Ave"
				},
				id: 549622077
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.076921, 49.21125]
				},
				properties: {
					id: 549622078,
					stop_id: "1329",
					stop_name: "Knight St Underpass @ SE Marine Dr"
				},
				id: 549622078
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.077678, 49.206054]
				},
				properties: {
					id: 549622079,
					stop_id: "1330",
					stop_name: "Southbound Knight St @ Mitchell Rd"
				},
				id: 549622079
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.073404, 49.191598]
				},
				properties: {
					id: 549622080,
					stop_id: "1331",
					stop_name: "Southbound Viking Way @ Bridgeport Rd"
				},
				id: 549622080
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.073374, 49.187824]
				},
				properties: {
					id: 549622081,
					stop_id: "1332",
					stop_name: "Southbound Viking Way @ Crestwood Place"
				},
				id: 549622081
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.080211, 49.186906]
				},
				properties: {
					id: 549622082,
					stop_id: "1334",
					stop_name: "Northbound Jacombs Rd @ Rowan Place"
				},
				id: 549622082
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.082197, 49.191866]
				},
				properties: {
					id: 549622083,
					stop_id: "1335",
					stop_name: "Eastbound Bridgeport Rd @ Sweden Way"
				},
				id: 549622083
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.077182, 49.206873]
				},
				properties: {
					id: 549622084,
					stop_id: "1336",
					stop_name: "Northbound Knight St @ Mitchell Rd"
				},
				id: 549622084
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.076965, 49.213213]
				},
				properties: {
					id: 549622085,
					stop_id: "1337",
					stop_name: "Northbound Knight St @ E 63 Ave"
				},
				id: 549622085
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.076944, 49.214995]
				},
				properties: {
					id: 549622086,
					stop_id: "1338",
					stop_name: "Northbound Knight St @ E 61 Ave"
				},
				id: 549622086
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.076922, 49.216763]
				},
				properties: {
					id: 549622087,
					stop_id: "1339",
					stop_name: "Northbound Knight St @ E 59 Ave"
				},
				id: 549622087
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.076884, 49.218444]
				},
				properties: {
					id: 549622089,
					stop_id: "1340",
					stop_name: "Northbound Knight St @ E 57 Ave"
				},
				id: 549622089
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.077282, 49.221998]
				},
				properties: {
					id: 549622090,
					stop_id: "1341",
					stop_name: "Northbound Knight St @ E 53 Ave"
				},
				id: 549622090
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.077214, 49.223765]
				},
				properties: {
					id: 549622091,
					stop_id: "1342",
					stop_name: "Northbound Knight St @ E 51 Ave"
				},
				id: 549622091
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.077098, 49.225701]
				},
				properties: {
					id: 549622092,
					stop_id: "1343",
					stop_name: "Northbound Knight St @ E 49 Ave"
				},
				id: 549622092
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.077067, 49.227974]
				},
				properties: {
					id: 549622093,
					stop_id: "1344",
					stop_name: "Northbound Knight St @ E 47 Ave"
				},
				id: 549622093
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.077025, 49.229335]
				},
				properties: {
					id: 549622094,
					stop_id: "1345",
					stop_name: "Northbound Knight St @ E 45 Ave"
				},
				id: 549622094
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.076961, 49.230966]
				},
				properties: {
					id: 549622095,
					stop_id: "1346",
					stop_name: "Northbound Knight St @ E 43 Ave"
				},
				id: 549622095
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.076848, 49.233088]
				},
				properties: {
					id: 549622096,
					stop_id: "1347",
					stop_name: "Northbound Knight St @ E 41 Ave"
				},
				id: 549622096
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.07681, 49.235113]
				},
				properties: {
					id: 549622097,
					stop_id: "1348",
					stop_name: "Northbound Knight St @ E 39 Ave"
				},
				id: 549622097
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.076748, 49.237188]
				},
				properties: {
					id: 549622098,
					stop_id: "1349",
					stop_name: "Northbound Knight St @ E 37 Ave"
				},
				id: 549622098
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.076257, 49.240543]
				},
				properties: {
					id: 549622099,
					stop_id: "1350",
					stop_name: "Northbound Knight St @ E 33 Ave"
				},
				id: 549622099
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.076223, 49.24199]
				},
				properties: {
					id: 549622100,
					stop_id: "1351",
					stop_name: "Northbound Knight St @ E 32 Ave"
				},
				id: 549622100
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.076163, 49.244049]
				},
				properties: {
					id: 549622101,
					stop_id: "1352",
					stop_name: "Northbound Knight St @ E 30 Ave"
				},
				id: 549622101
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.076103, 49.245776]
				},
				properties: {
					id: 549622102,
					stop_id: "1353",
					stop_name: "Northbound Knight St @ E 28 Ave"
				},
				id: 549622102
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.075932, 49.248848]
				},
				properties: {
					id: 549622103,
					stop_id: "1354",
					stop_name: "Northbound Knight St @ E King Edward Ave"
				},
				id: 549622103
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.075903, 49.249685]
				},
				properties: {
					id: 549622104,
					stop_id: "1355",
					stop_name: "Northbound Knight St @ Kingsway"
				},
				id: 549622104
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.075894, 49.252354]
				},
				properties: {
					id: 549622105,
					stop_id: "1356",
					stop_name: "Northbound Knight St @ E 20 Ave"
				},
				id: 549622105
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.075837, 49.253818]
				},
				properties: {
					id: 549622106,
					stop_id: "1357",
					stop_name: "Northbound Knight St @ E 19 Ave"
				},
				id: 549622106
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.075773, 49.255554]
				},
				properties: {
					id: 549622107,
					stop_id: "1358",
					stop_name: "Northbound Knight St @ E 17 Ave"
				},
				id: 549622107
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.077343, 49.260268]
				},
				properties: {
					id: 549622108,
					stop_id: "1360",
					stop_name: "Northbound Clark Dr @ E 11 Ave"
				},
				id: 549622108
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.077367, 49.262754]
				},
				properties: {
					id: 549622109,
					stop_id: "1361",
					stop_name: "Northbound Clark Dr @ E Broadway"
				},
				id: 549622109
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.077316, 49.264845]
				},
				properties: {
					id: 549622110,
					stop_id: "1362",
					stop_name: "Northbound Clark Dr @ E 6th Ave"
				},
				id: 549622110
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.077256, 49.268147]
				},
				properties: {
					id: 549622111,
					stop_id: "1363",
					stop_name: "Northbound Clark Dr @ E 3rd Ave"
				},
				id: 549622111
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.087153, 49.270771]
				},
				properties: {
					id: 549622112,
					stop_id: "1364",
					stop_name: "Westbound Terminal Ave @ Begg St"
				},
				id: 549622112
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.093108, 49.271779]
				},
				properties: {
					id: 549622113,
					stop_id: "1365",
					stop_name: "Westbound Terminal Ave @ Thornton St"
				},
				id: 549622113
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.096638, 49.272363]
				},
				properties: {
					id: 549622114,
					stop_id: "1366",
					stop_name: "Westbound Terminal Ave @ 300 Block"
				},
				id: 549622114
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.077215, 49.269991]
				},
				properties: {
					id: 549622115,
					stop_id: "1367",
					stop_name: "Northbound Clark Dr @ E 1st Ave"
				},
				id: 549622115
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.077197, 49.271749]
				},
				properties: {
					id: 549622116,
					stop_id: "1368",
					stop_name: "Northbound Clark Dr @ Grant St"
				},
				id: 549622116
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.077153, 49.274264]
				},
				properties: {
					id: 549622117,
					stop_id: "1369",
					stop_name: "Northbound Clark Dr @ William St"
				},
				id: 549622117
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.077921, 49.276842]
				},
				properties: {
					id: 549622118,
					stop_id: "1370",
					stop_name: "Westbound Venables St @ Clark Dr"
				},
				id: 549622118
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.079737, 49.276868]
				},
				properties: {
					id: 549622119,
					stop_id: "1371",
					stop_name: "Westbound Venables St @ Vernon Dr"
				},
				id: 549622119
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.083149, 49.276876]
				},
				properties: {
					id: 549622120,
					stop_id: "1372",
					stop_name: "Westbound Venables St @ Raymur Ave"
				},
				id: 549622120
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.087839, 49.27661]
				},
				properties: {
					id: 549622121,
					stop_id: "1373",
					stop_name: "Westbound Prior St @ Hawks Ave"
				},
				id: 549622121
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.09021, 49.276651]
				},
				properties: {
					id: 549622122,
					stop_id: "1374",
					stop_name: "Westbound Prior St @ Heatley Ave"
				},
				id: 549622122
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.094157, 49.276725]
				},
				properties: {
					id: 549622123,
					stop_id: "1375",
					stop_name: "Westbound Prior St @ Jackson Ave"
				},
				id: 549622123
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.097008, 49.278838]
				},
				properties: {
					id: 549622124,
					stop_id: "1377",
					stop_name: "Northbound Gore Ave @ E Georgia St"
				},
				id: 549622124
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.097706, 49.280427]
				},
				properties: {
					id: 549622125,
					stop_id: "1378",
					stop_name: "Westbound E Pender St @ Gore Ave"
				},
				id: 549622125
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.099831, 49.273395]
				},
				properties: {
					id: 549622491,
					stop_id: "181",
					stop_name: "Main Street-Science World Station @ Bay 2"
				},
				id: 549622491
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.099748, 49.275321]
				},
				properties: {
					id: 549622499,
					stop_id: "182",
					stop_name: "Northbound Main St @ National Ave"
				},
				id: 549622499
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.099607, 49.278968]
				},
				properties: {
					id: 549622518,
					stop_id: "184",
					stop_name: "Northbound Main St @ E Georgia St"
				},
				id: 549622518
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.121757, 49.286391]
				},
				properties: {
					id: 549622533,
					stop_id: "1857",
					stop_name: "Burrard Station @ Bay 3"
				},
				id: 549622533
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.103799, 49.280394]
				},
				properties: {
					id: 549622697,
					stop_id: "21",
					stop_name: "Eastbound E Pender St @ Carrall St"
				},
				id: 549622697
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.099896, 49.279029]
				},
				properties: {
					id: 549622850,
					stop_id: "232",
					stop_name: "Southbound Main St @ Keefer St"
				},
				id: 549622850
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.100141, 49.274506]
				},
				properties: {
					id: 549622866,
					stop_id: "234",
					stop_name: "Southbound Main St @ National Ave"
				},
				id: 549622866
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.100688, 49.280463]
				},
				properties: {
					id: 549626819,
					stop_id: "696",
					stop_name: "Westbound E Pender St @ Main St"
				},
				id: 549626819
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.073733, 49.184706]
				},
				properties: {
					id: 549626842,
					stop_id: "6991",
					stop_name: "Westbound Cambie Rd @ Viking Way"
				},
				id: 549626842
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.117245, 49.286121]
				},
				properties: {
					id: 549627354,
					stop_id: "76",
					stop_name: "Eastbound W Pender St @ Burrard St"
				},
				id: 549627354
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.115231, 49.284791]
				},
				properties: {
					id: 549627447,
					stop_id: "77",
					stop_name: "Eastbound W Pender St @ Granville St"
				},
				id: 549627447
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.113589, 49.283753]
				},
				properties: {
					id: 549627540,
					stop_id: "78",
					stop_name: "Eastbound W Pender St @ Seymour St"
				},
				id: 549627540
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.110618, 49.281799]
				},
				properties: {
					id: 549627688,
					stop_id: "80",
					stop_name: "Eastbound W Pender St @ Hamilton St"
				},
				id: 549627688
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.106976, 49.280892]
				},
				properties: {
					id: 549628220,
					stop_id: "9063",
					stop_name: "Eastbound W Pender St @ Abbott St"
				},
				id: 549628220
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.104998, 49.280707]
				},
				properties: {
					id: 549628241,
					stop_id: "91",
					stop_name: "Westbound W Pender St @ Carrall St"
				},
				id: 549628241
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.108213, 49.28129]
				},
				properties: {
					id: 549628364,
					stop_id: "93",
					stop_name: "Westbound W Pender St @ Abbott St"
				},
				id: 549628364
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.113429, 49.283818]
				},
				properties: {
					id: 549628489,
					stop_id: "95",
					stop_name: "Westbound W Pender St @ Seymour St"
				},
				id: 549628489
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.114596, 49.284575]
				},
				properties: {
					id: 549628571,
					stop_id: "96",
					stop_name: "Westbound W Pender St @ Granville St"
				},
				id: 549628571
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.116055, 49.285523]
				},
				properties: {
					id: 549628619,
					stop_id: "97",
					stop_name: "Westbound W Pender St @ Howe St"
				},
				id: 549628619
			}
		]
	},
	{
		id: "bus_route_10",
		name: "Bus 10 UBC",
		geofenceCollection: "BusStopsCollection09",
		coordinates: [
			[-123.111852, 49.285326],
			[-123.114583, 49.287068],
			[-123.116194, 49.287664],
			[-123.11696, 49.287174],
			[-123.117889, 49.286556],
			[-123.119392, 49.285601],
			[-123.120017, 49.285153],
			[-123.121665, 49.284014],
			[-123.122804, 49.283282],
			[-123.124422, 49.282225],
			[-123.126038, 49.281195],
			[-123.127079, 49.280479],
			[-123.129182, 49.279077],
			[-123.130786, 49.278037],
			[-123.132228, 49.277089],
			[-123.13234, 49.277061],
			[-123.132653, 49.276903],
			[-123.133215, 49.276722],
			[-123.134217, 49.276384],
			[-123.144191, 49.273176],
			[-123.145065, 49.272848],
			[-123.145319, 49.272662],
			[-123.145393, 49.272537],
			[-123.145516, 49.272299],
			[-123.145464, 49.271648],
			[-123.145484, 49.270666],
			[-123.145561, 49.269783],
			[-123.145594, 49.2689],
			[-123.14564, 49.268005],
			[-123.157502, 49.268187],
			[-123.159845, 49.26825],
			[-123.164539, 49.268326],
			[-123.171073, 49.268422],
			[-123.175751, 49.268463],
			[-123.17971, 49.268536],
			[-123.187629, 49.268633],
			[-123.188983, 49.268659],
			[-123.189279, 49.268723],
			[-123.193452, 49.26879],
			[-123.199126, 49.2689],
			[-123.199512, 49.268865],
			[-123.199924, 49.26877],
			[-123.200441, 49.268583],
			[-123.200561, 49.268499],
			[-123.201497, 49.268244],
			[-123.202286, 49.268173],
			[-123.202859, 49.26821],
			[-123.203452, 49.268319],
			[-123.204508, 49.268578],
			[-123.205903, 49.268905],
			[-123.206289, 49.268965],
			[-123.207707, 49.269002],
			[-123.214998, 49.26911],
			[-123.217362, 49.269121],
			[-123.21808, 49.269102],
			[-123.219599, 49.268979],
			[-123.222601, 49.268662],
			[-123.222797, 49.268681],
			[-123.223064, 49.268654],
			[-123.223655, 49.268645],
			[-123.224164, 49.268684],
			[-123.224806, 49.268805],
			[-123.225313, 49.268955],
			[-123.226273, 49.269368],
			[-123.228921, 49.270633],
			[-123.230219, 49.271145],
			[-123.231707, 49.271662],
			[-123.234331, 49.272398],
			[-123.236318, 49.272838],
			[-123.237244, 49.273005],
			[-123.238696, 49.273222],
			[-123.240964, 49.273444],
			[-123.242157, 49.273543],
			[-123.243897, 49.273582],
			[-123.245949, 49.273538],
			[-123.24721, 49.273439],
			[-123.248443, 49.273299],
			[-123.248829, 49.273229],
			[-123.248045, 49.271268],
			[-123.247666, 49.27007],
			[-123.247736, 49.269923],
			[-123.247705, 49.269665],
			[-123.247836, 49.269396],
			[-123.248167, 49.269155],
			[-123.248615, 49.269004],
			[-123.24844, 49.268743],
			[-123.248281, 49.268728],
			[-123.248171, 49.268648],
			[-123.247452, 49.267601],
			[-123.248216, 49.26728],
			[-123.248621, 49.267133],
			[-123.248444, 49.266924],
			[-123.247213, 49.267365],
			[-123.246659, 49.267522],
			[-123.246483, 49.267586],
			[-123.246687, 49.267795],
			[-123.246726, 49.267851],
			[-123.246978, 49.268124],
			[-123.247319, 49.268699],
			[-123.247487, 49.269335],
			[-123.247558, 49.269937],
			[-123.247666, 49.27007],
			[-123.248045, 49.271268],
			[-123.248773, 49.273091],
			[-123.24768, 49.273264],
			[-123.247155, 49.273303],
			[-123.245494, 49.27341],
			[-123.243812, 49.273449],
			[-123.242107, 49.273414],
			[-123.241007, 49.273349],
			[-123.238283, 49.273066],
			[-123.237271, 49.272933],
			[-123.236349, 49.272768],
			[-123.234369, 49.272329],
			[-123.231756, 49.271595],
			[-123.230274, 49.27108],
			[-123.228983, 49.27057],
			[-123.226338, 49.269308],
			[-123.225367, 49.268889],
			[-123.22473, 49.268702],
			[-123.223924, 49.268601],
			[-123.223432, 49.268581],
			[-123.222763, 49.268615],
			[-123.222602, 49.268662],
			[-123.219599, 49.268979],
			[-123.21808, 49.269102],
			[-123.217362, 49.269121],
			[-123.214998, 49.26911],
			[-123.207707, 49.269002],
			[-123.206289, 49.268965],
			[-123.205903, 49.268905],
			[-123.204508, 49.268578],
			[-123.203452, 49.268319],
			[-123.202859, 49.26821],
			[-123.202286, 49.268173],
			[-123.201497, 49.268244],
			[-123.200561, 49.268499],
			[-123.200387, 49.268497],
			[-123.199687, 49.268713],
			[-123.199176, 49.268756],
			[-123.19345, 49.26864],
			[-123.190658, 49.268591],
			[-123.189277, 49.268599],
			[-123.188983, 49.268659],
			[-123.185687, 49.268607],
			[-123.17971, 49.268536],
			[-123.175751, 49.268463],
			[-123.171073, 49.268422],
			[-123.159845, 49.26825],
			[-123.157502, 49.268187],
			[-123.14564, 49.268005],
			[-123.145594, 49.2689],
			[-123.145561, 49.269783],
			[-123.145484, 49.270666],
			[-123.145464, 49.271648],
			[-123.145385, 49.271759],
			[-123.14528, 49.272116],
			[-123.145114, 49.272376],
			[-123.144896, 49.272618],
			[-123.14448, 49.272953],
			[-123.143831, 49.273223],
			[-123.134146, 49.276326],
			[-123.132597, 49.27686],
			[-123.132402, 49.27695],
			[-123.132288, 49.277013],
			[-123.132228, 49.277089],
			[-123.130786, 49.278037],
			[-123.129182, 49.279077],
			[-123.127079, 49.280479],
			[-123.126038, 49.281195],
			[-123.124422, 49.282225],
			[-123.122804, 49.283282],
			[-123.121665, 49.284014],
			[-123.120017, 49.285153],
			[-123.119392, 49.285601],
			[-123.117889, 49.286556],
			[-123.11383, 49.284019],
			[-123.111852, 49.285326]
		],
		stopCoordinates: [
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.215565, 49.269195]
				},
				properties: {
					id: 549620248,
					stop_id: "10481",
					stop_name: "Westbound W 4th Ave @ Blanca St"
				},
				id: 549620248
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.112535, 49.28481]
				},
				properties: {
					id: 549620277,
					stop_id: "10553",
					stop_name: "Northbound Seymour St @ W Hastings St"
				},
				id: 549620277
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.145428, 49.269179]
				},
				properties: {
					id: 549620949,
					stop_id: "11473",
					stop_name: "Northbound Burrard St @ W 3rd Ave"
				},
				id: 549620949
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.130164, 49.278573]
				},
				properties: {
					id: 549621014,
					stop_id: "11563",
					stop_name: "Southbound Burrard St @ Burnaby St"
				},
				id: 549621014
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.126431, 49.280758]
				},
				properties: {
					id: 549621254,
					stop_id: "11881",
					stop_name: "Northbound Burrard St @ Comox St"
				},
				id: 549621254
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.24863, 49.267177]
				},
				properties: {
					id: 549621630,
					stop_id: "12360",
					stop_name: "UBC Exchange @ Bay 3"
				},
				id: 549621630
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.119282, 49.285787]
				},
				properties: {
					id: 549621639,
					stop_id: "12375",
					stop_name: "Burrard Station @ Bay 5"
				},
				id: 549621639
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.247621, 49.267674]
				},
				properties: {
					id: 549621816,
					stop_id: "12600",
					stop_name: "UBC Exchange @ Unloading Only"
				},
				id: 549621816
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.154472, 49.268111]
				},
				properties: {
					id: 549621954,
					stop_id: "12813",
					stop_name: "Eastbound W 4th Ave @ Yew St"
				},
				id: 549621954
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.155847, 49.268242]
				},
				properties: {
					id: 549621956,
					stop_id: "12815",
					stop_name: "Westbound W 4th Ave @ Yew St"
				},
				id: 549621956
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.167939, 49.268446]
				},
				properties: {
					id: 549622003,
					stop_id: "12869",
					stop_name: "Westbound W 4th Ave @ Macdonald St"
				},
				id: 549622003
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.239004, 49.273342]
				},
				properties: {
					id: 549622577,
					stop_id: "1932",
					stop_name: "Westbound Chancellor Blvd @ Hamber Rd"
				},
				id: 549622577
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.246195, 49.273563]
				},
				properties: {
					id: 549622578,
					stop_id: "1933",
					stop_name: "Westbound Chancellor Blvd @ Allison Rd"
				},
				id: 549622578
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.246837, 49.273301]
				},
				properties: {
					id: 549622579,
					stop_id: "1945",
					stop_name: "Eastbound Chancellor Blvd @ Western Parkway"
				},
				id: 549622579
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.145798, 49.268549]
				},
				properties: {
					id: 549622581,
					stop_id: "1959",
					stop_name: "Southbound Burrard St @ W 3rd Ave"
				},
				id: 549622581
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.12214, 49.283593]
				},
				properties: {
					id: 549623408,
					stop_id: "30",
					stop_name: "Northbound Burrard St @ Robson St"
				},
				id: 549623408
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.120503, 49.284688]
				},
				properties: {
					id: 549623502,
					stop_id: "31",
					stop_name: "Burrard Station @ Bay 7"
				},
				id: 549623502
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.21149, 49.268974]
				},
				properties: {
					id: 549623810,
					stop_id: "351",
					stop_name: "Eastbound W 4th Ave @ Tolmie St"
				},
				id: 549623810
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.197617, 49.268679]
				},
				properties: {
					id: 549623837,
					stop_id: "354",
					stop_name: "Eastbound W 4th Ave @ 4100 Block"
				},
				id: 549623837
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.185205, 49.268538]
				},
				properties: {
					id: 549623867,
					stop_id: "358",
					stop_name: "Eastbound W 4th Ave @ Alma St"
				},
				id: 549623867
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.167779, 49.268274]
				},
				properties: {
					id: 549624175,
					stop_id: "397",
					stop_name: "Eastbound W 4th Ave @ Macdonald St"
				},
				id: 549624175
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.121677, 49.284178]
				},
				properties: {
					id: 549624551,
					stop_id: "44",
					stop_name: "Southbound Burrard St @ W Georgia St"
				},
				id: 549624551
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.126516, 49.280981]
				},
				properties: {
					id: 549624828,
					stop_id: "47",
					stop_name: "Southbound Burrard St @ Nelson St"
				},
				id: 549624828
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.186254, 49.26871]
				},
				properties: {
					id: 549625947,
					stop_id: "596",
					stop_name: "Westbound W 4th Ave @ Alma St"
				},
				id: 549625947
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.200584, 49.268604]
				},
				properties: {
					id: 549625977,
					stop_id: "600",
					stop_name: "Westbound W 4th Ave @ NW Marine Dr"
				},
				id: 549625977
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.129252, 49.278885]
				},
				properties: {
					id: 549627249,
					stop_id: "75",
					stop_name: "Northbound Burrard St @ Davie St"
				},
				id: 549627249
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.115231, 49.284791]
				},
				properties: {
					id: 549627447,
					stop_id: "77",
					stop_name: "Eastbound W Pender St @ Granville St"
				},
				id: 549627447
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.237649, 49.272894]
				},
				properties: {
					id: 549627928,
					stop_id: "8546",
					stop_name: "Eastbound Chancellor Blvd @ Hamber Rd"
				},
				id: 549627928
			},
			{
				type: "Feature",
				geometry: {
					type: "Point",
					coordinates: [-123.112372, 49.285803]
				},
				properties: {
					id: 549628224,
					stop_id: "9069",
					stop_name: "Waterfront Station @ Bay 1"
				},
				id: 549628224
			}
		]
	}
];

export default busRoutesData;
