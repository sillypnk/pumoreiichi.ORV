<script lang="ts">
  import type { Snippet } from "svelte"
  import Background from "📱/assets/videos/Train_bg.mp4"

  const { children }: { children: Snippet } = $props()
</script>

<div class="relative h-screen w-full overflow-hidden portrait:transform-[rotate3d(0,_0,_0_90deg)]">
  <video
    autoplay
    loop
    muted
    playsinline
    class="absolute top-0 left-0 h-full w-full object-cover opacity-40 blur-md">
    <source
      src={Background}
      type="video/mp4" />
    Your browser does not support the video tag.
  </video>
  {@render children?.()}
</div>
