<script>
  const { minimize, restore_down, close } = $props()
</script>

<div class="flex flex-row gap-1">
  <button
    class="btn btn-xs btn-primary btn-outline inset-shadow-base-content/50 shadow-base-content/70 rounded-none shadow-[0_0_3px_1px] inset-shadow-[0_0_3px_1.5px]"
    style="--btn-p: 0.3em;">
    {@render minimize?.()}
  </button>
  <button
    class="btn btn-xs btn-primary btn-outline inset-shadow-base-content/50 shadow-base-content/70 rounded-none shadow-[0_0_3px_1px] inset-shadow-[0_0_3px_1.5px]"
    style="--btn-p: 0.3em;">
    {@render restore_down?.()}
  </button>
  <button
    class="btn btn-xs btn-primary btn-outline inset-shadow-base-content/50 shadow-base-content/70 rounded-none shadow-[0_0_3px_1px] inset-shadow-[0_0_3px_1.5px]"
    style="--btn-p: 0.3em;">
    {@render close?.()}
  </button>
</div>
