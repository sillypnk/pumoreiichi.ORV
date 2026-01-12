<style>
  .window__inner,
  .window__border-01,
  .window__border-02 {
    --aug-tr: 1.5em;
    --aug-bl: 1.5em;
    --aug-br: 3.5em;
    --aug-tl: 2.9em;

    /*     @media screen and (max-width: calc(40 * 16px)) and (max-width: calc(48 * 16px)) {
      --aug-tr: 1em;
      --aug-bl: 1em;
      --aug-br: 2.5em;
      --aug-tl: 1.9em;
    }
 */
  }
</style>

<script lang="ts">
  import { type Snippet } from "svelte"

  // Props stuff for TW classes
  import { cn } from "📱/scripts/helpers"

  interface WindowProps {
    children: Snippet
    controls: Snippet
    className?: string
  }
  const { children, controls, className }: WindowProps = $props()
</script>

<div class={cn("window__main relative z-10 h-[38rem] w-[77rem]", className)}>
  <div class="absolute top-2 -left-4 rotate-[315deg]">
    <div class="flex items-center">
      <div
        class="glassmorphism bg-base-300/60 -mt-[0.47em] h-4 w-2 sm:-mt-[0.163em] sm:h-4 sm:w-3 sm:[--aug-tr:_1em]"
        data-augmented-ui="tl-clip">
      </div>
      <div
        class="glassmorphism bg-base-300/60 h-[0.60rem] w-6 sm:h-[0.75rem] sm:w-9">
      </div>
      <div
        class="glassmorphism bg-base-300/60 -mt-[0.47em] h-[1.1rem] w-2 [--aug-tr:_7em] sm:-mt-[0.163em] sm:h-4 sm:w-3 sm:[--aug-tr:_1em]"
        data-augmented-ui="tr-clip">
      </div>
    </div>
  </div>
  <div
    class="window__inner bg-base-300/60 h-full w-full p-1"
    data-augmented-ui="tl-clip tr-clip br-clip bl-clip">
    <!-- ######################## -->
    <div
      class="window__border-01 h-full w-full p-1.5 inset-shadow-[1px_1px_24px_0px_var(--color-base-100)]"
      data-augmented-ui="tl-clip tr-clip br-clip bl-clip border">
      <div
        class="window__border-02 h-full w-full inset-shadow-[1px_1px_24px_0px_var(--color-base-100)]"
        data-augmented-ui="tl-clip tr-clip br-clip bl-clip border">
        <div
          class="window__inner-content h-full w-full overflow-auto px-1 py-3">
          <!-- Caption Controls -->
          <div class="absolute top-4 right-6 z-20">
            {@render controls?.()}
          </div>
          {@render children?.()}
        </div>
      </div>
    </div>
  </div>

  <!-- Bottom right cut borders -->
  <div class="absolute -right-[17px] bottom-[16px] z-[1] rotate-[135deg]">
    <div class="flex items-center">
      <div
        class="glassmorphism bg-base-300/60 -mt-[2.6px] h-3 w-3 [--aug-tl:_0.9em]"
        data-augmented-ui="tl-clip">
      </div>
      <div class="glassmorphism bg-base-300/60 h-[9px] w-[52px]"></div>
      <div
        class="glassmorphism bg-base-300/60 -mt-[2.6px] h-3 w-3 [--aug-tr:_0.9em]"
        data-augmented-ui="tr-clip">
      </div>
    </div>
  </div>

  <div class="absolute -right-3 bottom-[5px] rotate-[135deg]">
    <div class="flex items-center">
      <div
        class="glassmorphism bg-base-300/60 -mt-[2.6px] h-3 w-3 [--aug-tl:_0.9em]"
        data-augmented-ui="tl-clip">
      </div>
      <div class="glassmorphism bg-base-300/60 h-[9px] w-[22px]"></div>
      <div
        class="glassmorphism bg-base-300/60 -mt-[2.6px] h-3 w-3 [--aug-tr:_0.9em]"
        data-augmented-ui="tr-clip">
      </div>
    </div>
  </div>
</div>
