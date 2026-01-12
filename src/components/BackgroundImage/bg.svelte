<style>
  .grid-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-size: 40px 40px;
    opacity: 10%;
    background-image:
      linear-gradient(to right, var(--color-secondary) 1px, transparent 1px),
      linear-gradient(to bottom, var(--color-secondary) 1px, transparent 1px);
    z-index: 2;
  }

  .noise-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0.05;
    z-index: 5;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
  }
</style>

<div class="absolute top-0 left-0 h-full w-full">
  <div
    class="mask-from-black mask-from-70% mask-to-transparent mask-to-110% absolute top-0 right-0 bottom-0 left-0 bg-[radial-gradient(#ffffff33_1px,transparent_1px)] mask-radial-[ellipse_80%_50%_at_61%_46%] [background-size:16px_16px]">
  </div>
  <div
    class="absolute top-0 right-0 bottom-0 left-0 bg-radial-[at_25%_75%] from-[rgba(50,49,49,0.5)] from-40% to-[rgba(21,27,40,1)] to-100%">
  </div>
  <!-- <div class="grid-overlay"></div> -->
  <!-- <div class="noise-overlay"></div> -->
</div>
