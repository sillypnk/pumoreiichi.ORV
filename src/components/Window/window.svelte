<script lang="ts">
  import { onMount, type Snippet } from "svelte"
  import AugmentedUI from "../AugmentedUI/augmented-ui.svelte"
  import { createTimeline, stagger } from "animejs"
  import { Howl } from "howler";
  import WindowAppearAudio from "📱/assets/audios/orvwindow-appear01.wav";

  type WindowProps = {
    /**
     * The body of the window
     */
    children: Snippet
    /**
     * Window caption controls
     */
    controls: Snippet
    /**
     * The height of the window
     */
    h?: string
    /**
     * The width of the window
     */
    w?: string
  }
  const {
    children,
    controls,
    h = "38.75rem",
    w = "76.188rem",
  }: WindowProps = $props()

  onMount(() => {
    createTimeline({
      onBegin: () => console.log("It begins!"),
      onComplete: () => console.log("Complete"),
    })
      .label("appearance", 0)
      .label("open!", 310)
      .label("yipee", "<<")
      .add(
        ".window-appearance",
        {
          scale: [0, 1],
          duration: 550,
          ease: "linear(0, 0.115 2.2%, 0.877 9.4%, 1.016 11.9%, 1.081 14.7%, 1.088 16%, 1.084 17.5%, 1.013 25.3%, 0.993 30.8%, 1.001 46.8%, 1)",
        },
        "appearance",
      )
      .add(
        ".window-open",
        {
          "max-width": ["2rem", w],
          duration: 400,
          ease: "cubicBezier(1, 0, 0, 1)",
          onBegin: () => {
            new Howl({
              autoplay: true,
              src: WindowAppearAudio,
              preload: true,
            }).play()
          },
        },
        "open!",
      )
      .add(
        ".content-appearance",
        {
          opacity: [0, 1],
          duration: 1700,
          ease: "linear(0, 0.065 6.1%, 0.118 9.8%, 0.185 13%, 0.274 15.9%, 0.546 21.5%, 0.997 27.7%, 0.543 34.1%, 0.448 36.4%, 0.419 38.5%, 0.453 40.6%, 0.551 42.7%, 0.996 48%, 0.693 51.9%, 0.628 53.4%, 0.605 54.9%, 0.627 56.4%, 0.691 57.9%, 0.999 62%, 0.8 65%, 0.757 66.2%, 0.742 67.4%, 0.756 68.6%, 0.796 69.8%, 0.999 73.4%, 0.886 75.7%, 0.849 77.8%, 0.88 79.9%, 1 83.2%, 0.947 85.1%, 0.93 86.9%, 0.942 88.5%, 1 92%, 0.983 94.5%, 1)",
        },
        "yipee",
      )
  })
</script>

<!-- Window wrapper (For window cut borders) -->
<div
  class={`relative min-h-[${h}] window-appearance window-open max-w-8 scale-[95%] lg:overflow-hidden portrait:scale-[48%] portrait:rotate-90`}>
  <!-- Top left border -->
  <div class="absolute top-2 -left-4 rotate-[315deg]">
    <div class="flex items-center">
      <AugmentedUI
        class="glassmorphism -mt-[2.6px] h-4 w-3 bg-blue-500/60"
        style="--aug-tl: 1em"
        options={{ tl: "clip" }} />
      <div class="glassmorphism h-[12px] w-9 bg-blue-500/60"></div>
      <AugmentedUI
        class="glassmorphism -mt-[2.6px] h-4 w-3 bg-blue-500/60"
        style="--aug-tr: 1em"
        options={{ tr: "clip" }} />
    </div>
  </div>
  <!-- Main Window -->
  <AugmentedUI
    class="glassmorphism bg-blue-500/60 p-1 overflow-hidden"
    style="--aug-tr: 1.5em; --aug-bl: 1.5em; --aug-br: 3.5em; --aug-tl: 2.9em;"
    options={{
      tl: "clip",
      tr: "clip",
      br: "clip",
      bl: "clip",
    }}>
    <!-- ######################## -->
    <AugmentedUI
      class="h-full w-full p-1.5 inset-shadow-[1px_1px_24px_0px_var(--color-base-content)] "
      style="--aug-border-all: 2px; --aug-tr: 1.5em; --aug-bl: 1.5em; --aug-br: 3.5em; --aug-tl: 2.9em;"
      border
      options={{
        tl: "clip",
        tr: "clip",
        br: "clip",
        bl: "clip",
      }}>
      <AugmentedUI
        class="relative h-full w-full"
        style="--aug-border-all: 2px; --aug-tr: 1.5em; --aug-bl: 1.5em; --aug-br: 3.5em; --aug-tl: 2.9em;"
        border
        options={{
          tl: "clip",
          tr: "clip",
          br: "clip",
          bl: "clip",
        }}>
        <div class="px-1 py-3">
          <div class="content-appearance">
            <!-- Caption Controls -->
            <div class="absolute top-5 right-10">
              {@render controls?.()}
            </div>
            {@render children?.()}
          </div>
        </div>
      </AugmentedUI>
    </AugmentedUI>
  </AugmentedUI>

  <!-- Bottom right cut borders -->
  <div class="absolute -right-[17px] bottom-[16px] z-[1] rotate-[135deg]">
    <div class="flex items-center">
      <AugmentedUI
        class="glassmorphism -mt-[2.6px] h-3 w-3 bg-blue-500/60"
        style="--aug-tl: 0.9em"
        options={{ tl: "clip" }} />
      <div class="glassmorphism h-[9px] w-[52px] bg-blue-500/60"></div>
      <AugmentedUI
        class="glassmorphism -mt-[2.6px] h-3 w-3 bg-blue-500/60"
        style="--aug-tr: 0.9em"
        options={{ tr: "clip" }} />
    </div>
  </div>
  <div class="absolute -right-3 bottom-[5px] rotate-[135deg]">
    <div class="flex items-center">
      <AugmentedUI
        class="glassmorphism -mt-[2.6px] h-3 w-3 bg-blue-500/60"
        style="--aug-tl: 0.9em"
        options={{ tl: "clip" }} />
      <div class="glassmorphism h-[9px] w-[22px] bg-blue-500/60"></div>
      <AugmentedUI
        class="glassmorphism -mt-[2.6px] h-3 w-3 bg-blue-500/60"
        style="--aug-tr: 0.9em"
        options={{ tr: "clip" }} />
    </div>
  </div>
</div>
