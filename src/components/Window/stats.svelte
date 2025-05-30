<script lang="ts">
	import { onMount } from "svelte"
	import Chart, { type ChartItem, type Plugin } from "chart.js/auto"

	let stats: HTMLCanvasElement
	onMount(() => {
		const ctx = stats.getContext("2d")
		let textColor = "#f9fdfe"

		// Line Gradient
		let ctxGradient = ctx?.createLinearGradient(20, 220, 0, 95)
		ctxGradient?.addColorStop(0, "rgba(83, 234, 253, 0.70)")
		ctxGradient?.addColorStop(1, "rgba(43, 127, 255, 0.21)")
		// Radar Background Gradient
		let radarBackground = ctx?.createRadialGradient(120, 100, 150, 120, 250, 10)
		radarBackground?.addColorStop(0, "rgba(83, 234, 253, 0)")
		radarBackground?.addColorStop(1, "rgba(83, 234, 253, 0.5)")
		// Shadow
		let ctxShadow: Plugin<"radar"> = {
			id: "glowing-textawawawa",
			beforeDatasetsDraw: ({ ctx }) => {
				ctx.shadowColor = "rgba(249, 253, 254, 0.5)"
				ctx.shadowBlur = 10
			},
		}

		const chartData = {
			labels: ["STR", "STA", "SPECIAL STAT:", "MP", "AGI"],
			datasets: [
				// Setting up the border for the data
				{
					data: [10, 10, 10, 10, 10],
					borderColor: textColor,
					backgroundColor: "transparent",
					borderWidth: 2,
					pointBackgroundColor: textColor,
				},
				{
					data: [4.8, 5.6, 10.0, 3.0, 5.8],
					fill: true,
					pointBackgroundColor: textColor,
					backgroundColor: ctxGradient,
					borderColor: textColor,
				},
			],
		}

		new Chart(ctx as ChartItem, {
			data: chartData,
			type: "radar",
			plugins: [ctxShadow],
			options: {
				maintainAspectRatio: false,
				// layout: {
				//   padding: 80,
				// },
				scales: {
					r: {
						backgroundColor: radarBackground,
						min: 0.5,
						max: 10.0,
						angleLines: {
							color: textColor,
						},
						grid: {
							color: textColor,
						},
						ticks: {
							display: false,
							stepSize: 3.3,
						},
						pointLabels: {
							color: "#f9fdfe",
							font: {
								size: 15,
								family: "ORV Font-30ccdf6cf58db256",
							},
						},
					},
				},
				plugins: {
					tooltip: {
						enabled: false,
					},
					legend: {
						display: false,
					},
				},
			},
		})
	})
</script>

<div class="size-[275px]">
	<canvas bind:this={stats}>
		Your browser does not support the <code>canvas</code>
		element! That sucks :(
	</canvas>
</div>
