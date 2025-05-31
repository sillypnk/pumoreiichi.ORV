<script lang="ts">
  import { type Snippet } from "svelte"
  import AugmentedUI from "../AugmentedUI/augmented-ui.svelte"

  const { children, controls }: { children: Snippet; controls: Snippet } =
    $props()
</script>

<!-- Cut borders in the outer window or something -->
<div class="absolute">
  <div
    class="slanted-edge-left inline-block h-14 w-10 bg-blue-500"
    style="--p: 70px;">
  </div>
  <div class="h-14 w-10 bg-blue-500 inline-block"></div>
  <div
    class="slanted-edge-right inline-block h-14 w-10 bg-blue-500"
    style="--p: 70px;">
  </div>
</div>

<!-- Main Window -->
<AugmentedUI
  class=" min-h-[620px] w-full max-w-[1219px] bg-blue-500 p-1"
  style="--aug-tr: 1.3em; --aug-bl: 1.3em; --aug-br: 2em; --aug-tl: 2em;"
  data-augmented-ui="tl-clip tr-clip br-clip bl-clip"
  options={{
    topLeft: "clip",
    topRight: "clip",
    bottomRight: "clip",
    bottomLeft: "clip",
  }}>
  <AugmentedUI
    class="h-full w-full p-1.5 inset-shadow-[1px_1px_24px_0px_var(--color-base-content)]"
    style="--aug-border-all: 2px; --aug-tr: 1.3em; --aug-bl: 1.3em; --aug-br: 2em; --aug-tl: 2em;"
    border
    options={{
      topLeft: "clip",
      topRight: "clip",
      bottomRight: "clip",
      bottomLeft: "clip",
    }}>
    <AugmentedUI
      class="relative h-full w-full overflow-auto"
      style="--aug-border-all: 2px; --aug-tr: 1.3em; --aug-bl: 1.3em; --aug-br: 2em; --aug-tl: 2em;"
      border
      options={{
        topLeft: "clip",
        topRight: "clip",
        bottomRight: "clip",
        bottomLeft: "clip",
      }}>
      <div class="px-1 py-3">
        <!-- Caption Controls -->
        <div class="absolute top-5 right-10">
          {@render controls?.()}
        </div>
        {@render children?.()}
      </div>
    </AugmentedUI>
  </AugmentedUI>
</AugmentedUI>
