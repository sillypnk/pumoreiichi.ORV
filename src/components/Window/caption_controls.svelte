<script lang="ts">
  const { minimize, restore_down, close } = $props()
</script>

<div class="flex flex-row gap-1">
  <button
    class="btn btn-xs btn-secondary btn-outline inset-shadow-secondary/50 shadow-secondary/70 rounded-none shadow-[0_0_3px_1px] inset-shadow-[0_0_3px_1.5px]"
    style="--btn-p: 0.3em;">
    {@render minimize?.()}
  </button>
  <button
    class="btn btn-xs btn-secondary btn-outline inset-shadow-secondary/50 shadow-secondary/70 rounded-none shadow-[0_0_3px_1px] inset-shadow-[0_0_3px_1.5px]"
    style="--btn-p: 0.3em;">
    {@render restore_down?.()}
  </button>
  <button
    class="btn btn-xs btn-secondary btn-outline inset-shadow-secondary/50 shadow-secondary/70 rounded-none shadow-[0_0_3px_1px] inset-shadow-[0_0_3px_1.5px]"
    style="--btn-p: 0.3em;">
    {@render close?.()}
  </button>
</div>
