<script lang="ts">
  import type { Snippet } from "svelte"

  let {
    filename,
    fileicon,
    mode = "normal",
  }: { filename: string; fileicon?: Snippet; mode?: string } = $props()
</script>

<div class="relative bottom-0">
  <div
    class="bg-base-content/5 pointer-events-none mt-5 flex min-w-full justify-evenly">
    <!-- Vim Mode -->
    <span class="bg-primary light:font-bold px-5">
      <svg
        class="inline-block size-3"
        fill="currentColor"
        viewBox="0 0 24 24"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        stroke="currentColor">
        <g
          id="SVGRepo_bgCarrier"
          stroke-width="0">
        </g>
        <g
          id="SVGRepo_tracerCarrier"
          stroke-linecap="round"
          stroke-linejoin="round">
        </g>
        <g id="SVGRepo_iconCarrier">
          <title>Neovim icon</title>
          <path
            d="M2.902,4.998l3.864,5.754v12.151l-4.207-4.198V5.344L2.902,4.998 M2.97,4.287L2.107,5.158v13.734l5.112,5.101 v-13.38L2.97,4.287L2.97,4.287z M21.858,5.207L16.676,0v13.331l4.335,6.519c0,0,0.882-0.957,0.882-0.957L21.858,5.207z M7.215,0.001 l13.29,20.28L16.786,24L3.489,3.765L7.215,0.001z">
          </path>
        </g>
      </svg>
      <span id="mode">{mode.toUpperCase()}</span>
    </span>

    <div
      class="bg-primary aspect-[1] w-2"
      style="clip-path: polygon(0 0,100% 0,0 100%);">
    </div>

    <!-- Empty Bg -->
    <div
      class="bg-base-content/20 -ml-2 aspect-[1] w-2"
      style="
  clip-path: polygon(0 100%,100% 0,100% 100%);
">
    </div>
    <div class="bg-base-content/20 px-2"></div>
    <div
      class="bg-base-content/20 aspect-[1] w-2"
      style="clip-path: polygon(0 0,100% 0,0 100%);">
    </div>

    <!-- Vim File -->
    <div
      class="bg-base-content/10 -ml-2 aspect-[1] w-2"
      style="
  clip-path: polygon(0 100%,100% 0,100% 100%);
">
    </div>
    <span class="bg-base-content/10 px-3">
      {#if !fileicon}
        <svg
          class="inline-block size-3 opacity-50"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <g
            id="SVGRepo_bgCarrier"
            stroke-width="0">
          </g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round">
          </g>
          <g id="SVGRepo_iconCarrier">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M0 3.5C0 2.67157 0.671573 2 1.5 2H13.5C14.3284 2 15 2.67157 15 3.5V11.5C15 12.3284 14.3284 13 13.5 13H1.5C0.671574 13 0 12.3284 0 11.5V3.5ZM10 5V8.29289L8.85359 7.14648L8.14648 7.85359L10.1465 9.85359C10.3417 10.0489 10.6583 10.0489 10.8536 9.85359L12.8536 7.85359L12.1465 7.14648L11 8.29297V5H10ZM2.85355 5.14646C2.71055 5.00346 2.4955 4.96068 2.30866 5.03807C2.12182 5.11547 2 5.29778 2 5.50001V10H3V6.70712L4.5 8.20712L6 6.70712V10H7V5.50001C7 5.29778 6.87818 5.11547 6.69134 5.03807C6.5045 4.96068 6.28945 5.00346 6.14645 5.14646L4.5 6.79291L2.85355 5.14646Z"
              fill="#ffffff">
            </path>
          </g>
        </svg>
      {:else}
        {@render fileicon?.()}
      {/if}
      {filename}
    </span>
    <div
      class="bg-base-content/10 aspect-[1] w-2"
      style="clip-path: polygon(0 0,100% 0,0 100%);">
    </div>

    <!-- Github -->
    <span class="text-base-content ml-2">
      <svg
        class="inline-block size-4"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <g
          id="SVGRepo_bgCarrier"
          stroke-width="0">
        </g>
        <g
          id="SVGRepo_tracurrentColorerCarrier"
          stroke-linecap="round"
          stroke-linejoin="round">
        </g>
        <g id="SVGRepo_icurrentColoronCarrier">
          <path
            d="M9.35003 16.88C9.35003 16.95 9.28003 17 9.18003 17C9.08003 17 9.00003 17 9.00003 16.88C9.00003 16.76 9.08003 16.76 9.17003 16.76C9.26003 16.76 9.35003 16.81 9.35003 16.88ZM8.35003 16.73C8.35003 16.8 8.35003 16.88 8.49003 16.9C8.52584 16.9172 8.56701 16.9195 8.6045 16.9064C8.642 16.8933 8.67275 16.8658 8.69003 16.83C8.69003 16.76 8.69003 16.69 8.55003 16.66C8.41003 16.63 8.37003 16.66 8.35003 16.73ZM9.77003 16.68C9.68003 16.68 9.62003 16.76 9.63003 16.84C9.64003 16.92 9.72003 16.95 9.82003 16.93C9.92003 16.91 9.97003 16.84 9.96003 16.77C9.95003 16.7 9.87003 16.67 9.77003 16.68ZM11.9 4.00002C10.8454 3.99009 9.79962 4.19333 8.82547 4.59754C7.85132 5.00175 6.96887 5.5986 6.23107 6.35227C5.49328 7.10594 4.91535 8.0009 4.53197 8.98343C4.14859 9.96597 3.96765 11.0158 4.00003 12.07C3.97211 13.7969 4.48426 15.4894 5.46493 16.9111C6.4456 18.3328 7.84582 19.4127 9.47003 20C9.88003 20.07 10.03 19.81 10.03 19.6C10.03 19.39 10.03 18.26 10.03 17.6C10.03 17.6 7.77003 18.1 7.29003 16.6C7.29003 16.6 6.93003 15.6 6.40003 15.39C6.40003 15.39 5.66003 14.87 6.45003 14.88C6.70877 14.9149 6.95573 15.01 7.17108 15.1576C7.38643 15.3052 7.56417 15.5013 7.69003 15.73C7.79466 15.9351 7.9401 16.1167 8.11742 16.2635C8.29473 16.4104 8.50019 16.5195 8.72118 16.5841C8.94218 16.6487 9.17404 16.6675 9.40255 16.6393C9.63106 16.6111 9.85139 16.5364 10.05 16.42C10.0879 16.0025 10.2679 15.6107 10.56 15.31C8.76003 15.1 6.94003 14.84 6.94003 11.65C6.92091 11.2896 6.97881 10.9293 7.10985 10.5931C7.2409 10.2569 7.44209 9.95241 7.70003 9.70002C7.45667 8.96799 7.48507 8.17282 7.78003 7.46002C8.46003 7.24002 10.01 8.35002 10.01 8.35002C11.3342 7.97655 12.7359 7.97655 14.06 8.35002C14.06 8.35002 15.61 7.24002 16.29 7.46002C16.5914 8.17142 16.6198 8.96894 16.37 9.70002C16.6371 9.94893 16.8489 10.2511 16.9919 10.587C17.1348 10.9229 17.2057 11.285 17.2 11.65C17.2 14.85 15.3 15.1 13.5 15.31C13.6809 15.5129 13.8186 15.7506 13.9046 16.0085C13.9905 16.2664 14.023 16.5391 14 16.81C14 17.93 14 19.31 14 19.58C13.9994 19.6475 14.015 19.7142 14.0456 19.7744C14.0763 19.8346 14.1209 19.8866 14.1759 19.9258C14.2308 19.9651 14.2945 19.9905 14.3613 19.9999C14.4282 20.0094 14.4964 20.0025 14.56 19.98C16.1813 19.3978 17.5786 18.321 18.5547 16.9017C19.5309 15.4824 20.0364 13.7922 20 12.07C20.0094 11.0051 19.8061 9.94902 19.402 8.96371C18.9979 7.9784 18.4011 7.08369 17.6467 6.33205C16.8923 5.58041 15.9953 4.98696 15.0085 4.58651C14.0217 4.18606 12.9649 3.98667 11.9 4.00002ZM7.14003 15.41C7.14003 15.41 7.14003 15.52 7.14003 15.58C7.15118 15.5912 7.16442 15.6001 7.17901 15.6061C7.1936 15.6122 7.20923 15.6153 7.22503 15.6153C7.24082 15.6153 7.25646 15.6122 7.27105 15.6061C7.28563 15.6001 7.29888 15.5912 7.31003 15.58C7.31003 15.58 7.31003 15.47 7.31003 15.4C7.31003 15.33 7.18003 15.37 7.14003 15.41ZM6.79003 15.14C6.79003 15.14 6.79003 15.24 6.86003 15.27C6.86846 15.2805 6.87913 15.2889 6.89124 15.2947C6.90335 15.3004 6.91661 15.3035 6.93003 15.3035C6.94345 15.3035 6.9567 15.3004 6.96881 15.2947C6.98093 15.2889 6.99159 15.2805 7.00003 15.27C7.00003 15.27 7.00003 15.17 6.93003 15.14C6.86003 15.11 6.81003 15.11 6.79003 15.14ZM7.79003 16.32C7.79003 16.32 7.79003 16.46 7.79003 16.53C7.79003 16.6 7.96003 16.61 8.00003 16.53C8.04003 16.45 8.00003 16.39 8.00003 16.32C8.00003 16.25 7.87003 16.27 7.83003 16.32H7.79003ZM7.42003 15.83C7.42003 15.83 7.42003 15.95 7.42003 16.03C7.42003 16.11 7.56003 16.14 7.61003 16.11C7.63535 16.0809 7.6493 16.0436 7.6493 16.005C7.6493 15.9664 7.63535 15.9291 7.61003 15.9C7.56003 15.82 7.48003 15.79 7.42003 15.83Z"
            fill="currentColor">
          </path>
        </g>
      </svg>
      main
    </span>

    <span class="text-base-content/20 mx-auto">Neovim Editor</span>

    <!-- Line Position -->
    <span class="mr-5 ml-auto">Ln 01, Col 01</span>

    <!-- Current Folder -->
    <span class="bg-accent rounded-l-full px-2 text-gray-800">
      <svg
        class="inline-block size-3"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <g
          id="SVGRepo_bgCarrier"
          stroke-width="0">
        </g>
        <g
          id="SVGRepo_tracurrentColorerCarrier"
          stroke-linecap="round"
          stroke-linejoin="round">
        </g>
        <g id="SVGRepo_icurrentColoronCarrier">
          <path
            d="M16 19C15.6218 17.2883 13.9747 16 12 16C10.0253 16 8.37818 17.2883 8 19M12 12H12.01M12.0627 6.06274L11.9373 5.93726C11.5914 5.59135 11.4184 5.4184 11.2166 5.29472C11.0376 5.18506 10.8425 5.10425 10.6385 5.05526C10.4083 5 10.1637 5 9.67452 5H6.2C5.0799 5 4.51984 5 4.09202 5.21799C3.71569 5.40973 3.40973 5.71569 3.21799 6.09202C3 6.51984 3 7.07989 3 8.2V15.8C3 16.9201 3 17.4802 3.21799 17.908C3.40973 18.2843 3.71569 18.5903 4.09202 18.782C4.51984 19 5.07989 19 6.2 19H17.8C18.9201 19 19.4802 19 19.908 18.782C20.2843 18.5903 20.5903 18.2843 20.782 17.908C21 17.4802 21 16.9201 21 15.8V10.2C21 9.0799 21 8.51984 20.782 8.09202C20.5903 7.71569 20.2843 7.40973 19.908 7.21799C19.4802 7 18.9201 7 17.8 7H14.3255C13.8363 7 13.5917 7 13.3615 6.94474C13.1575 6.89575 12.9624 6.81494 12.7834 6.70528C12.5816 6.5816 12.4086 6.40865 12.0627 6.06274ZM13 12C13 12.5523 12.5523 13 12 13C11.4477 13 11 12.5523 11 12C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12Z"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round">
          </path>
        </g>
      </svg>
      pinkmin
    </span>
    <span class="bg-secondary text-base-200 px-2">
      <svg
        class="inline-block size-3"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <g
          id="SVGRepo_bgCarrier"
          stroke-width="0">
        </g>
        <g
          id="SVGRepo_tracurrentColorerCarrier"
          stroke-linecap="round"
          stroke-linejoin="round">
        </g>
        <g id="SVGRepo_icurrentColoronCarrier">
          <path
            d="M3 5H21M10 10H21M10 14H21M3 19H21M3 9L6 12L3 15"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round">
          </path>
        </g>
      </svg>
      0%
    </span>
  </div>

  <!-- <input
    disabled
    type="text"
    class="input border-none bg-base-200 rounded-none w-full h-full"
  /> -->
  <span class="h-full w-full"># currently WIP</span>
</div>
