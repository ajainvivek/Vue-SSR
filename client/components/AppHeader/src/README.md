Default Header:

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
		return {
			theme: {
				primaryColor: "#fcda9a",
				secondaryColor: "#000000",
				tertiaryColor: "#ffffff",
				backgroundColor: "#efeff4",
				headerBackgroundColor: "#ffffff",
				primaryFontColor: "#000000",
				secondaryFontColor: "#ffffff",
				primaryButtonColor: "#fcda9a"
			},
			global: {
				companyName: "Chaicode",
				logo: "",
				contactNumber: "61 (07) 4946 7139",
				header: {
					menu: {
						items: [
							{
								"title": "Home",
								"page": "home"
							},
							{
								"title": "Projects",
								"page": "projects"
							}
						]
					}
				}
			}
		}
	}
}
</script>
```
##### Component Generator Usage:

```json
	{
		"node": "component",
		"type": "header",
		"properties": {
			":theme": "theme",
			":global": "global"
		}
	}
```