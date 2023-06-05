export function stressStrategy(VUS, duration = "") {
	return {
		stages: [
			{duration: duration, target: VUS},
			{duration: duration, target: VUS},
			{duration: duration, target: VUS},
		],
	}
}