Basic App Header:

```vue
<template>
    <div>
        <cv-app-header :theme="theme" :global="global"></cv-app-header>
    </div>
</template>
<script>
export default {
	name: 'AppHeader',
	data: function () {
		return { theme: {
			primaryColor: "#000000",
			secondaryColor: "#232E39",
			tertiaryColor: "#efeff4"
		}, global: {
			companyName: "Travelmate",
			contactNumber: "61 (07) 4946 7139",
			bookingLink: "https://www.thebookingbutton.com.au/properties/cowracountrydirect"
		}}
	}
}
</script>
```
##### Theme Generator Usage:

```json
	{
		"node": "component",
		"type": "header"
	}
```