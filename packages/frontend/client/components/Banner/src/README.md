Default Banner:

```vue
<template>
    <div>
        <bg-banner :theme="theme"></bg-banner>
    </div>
</template>
<script>
export default {
	name: 'Banner',
	data: function () {
		return { theme: {
			primaryColor: "#000000",
			secondaryColor: "#232E39",
			tertiaryColor: "#efeff4"
		}}
	}
}
</script>
```
##### Component Generator Usage:

```json
	{
		"node": "component",
		"type": "banner",
		"properties": {
			":theme": "theme"
		}
	}
```