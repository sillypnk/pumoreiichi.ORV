<script lang="ts">
	import type { Snippet } from "svelte"

	type AugmentedUIOptions = {
		topLeft?: string
		left?: string
		top?: string
		topRight?: string
		right?: string

		bottomLeft?: string
		bottom?: string
		bottomRight?: string
	}
	interface AugmentedUIProps {
		[key: string]: any
		children: Snippet
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
		topLeft = "",
		left = "",
		top = "",
		topRight = "",
		right = "",
		bottomLeft = "",
		bottom = "",
		bottomRight = "",
	} = options
</script>

<div
	data-augmented-ui={`${
		(border === true && " border ") || (inlay === true && " inlay ")
	} 
    ${topLeft && `tl-${topLeft}`} 
    ${left && `l-${left}`} 
    ${top && `t-${top}`} 
    ${topRight && `tr-${topRight}`} 
    ${right && `r-${right}`}
    ${bottomLeft && `bl-${bottomLeft}`}
    ${bottom && `b-${bottom} `}
    ${bottomRight && `br-${bottomRight}`}
`}
	{...props}>
	{@render children?.()}
</div>
