<script lang="ts">
  import type { Snippet } from "svelte"

  type AugmentedUIOptions = {
    tl?: string
    l?: string
    t?: string
    tr?: string
    r?: string

    bl?: string
    b?: string
    br?: string
  }
  interface AugmentedUIProps {
    [key: string]: any
    children?: Snippet
    border?: boolean
    inlay?: boolean
    options: AugmentedUIOptions
  }

  const {
    children,
    border = false,
    inlay = false,
    options,
    ...props
  }: AugmentedUIProps = $props()

  const {
    tl = "",
    l = "",
    t = "",
    tr = "",
    r = "",
    bl = "",
    b = "",
    br = "",
  } = options
</script>

<div
  data-augmented-ui={`${
    (border === true && " border ") || (inlay === true && " inlay ")
  } 
    ${tl && `tl-${tl}`} 
    ${l && `l-${l}`} 
    ${t && `t-${t}`} 
    ${tr && `tr-${tr}`} 
    ${r && `r-${r}`}
    ${bl && `bl-${bl}`}
    ${b && `b-${b} `}
    ${br && `br-${br}`}
`}
  {...props}>
  {@render children?.()}
</div>
