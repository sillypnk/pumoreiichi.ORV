<script lang="ts">
	import type { Snippet } from "svelte"
	import Background from "📱/assets/videos/Train_bg.mp4"

	const { children }: { children: Snippet } = $props()
</script>

<div class="relative w-full h-screen overflow-hidden">
	<video
		autoplay
		loop
		muted
		playsinline
		class="absolute top-0 left-0 w-full h-full object-cover opacity-40 blur-md">
		<source
			src={Background}
			type="video/mp4" />
		Your browser does not support the video tag.
	</video>
	{@render children?.()}
</div>
