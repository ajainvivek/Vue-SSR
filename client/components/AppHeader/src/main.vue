<template>
    <header class="AppHeader">
        <div>
        	<router-link class="AppHeader__link" to="/">
				<div v-if="logo">
					<img class="AppHeader__logo" :src="logo" :alt="title" />
				</div>
				<div v-else>
					<h1 class="AppHeader__title" :style="titleStyle">
						{{title}}
					</h1>	
				</div>
        	</router-link>
        </div>   
    </header>
</template>

<style lang="scss">
.AppHeader {
	padding: 0 20px;
	font-size: 1.5rem;
	background-color: whitesmoke;

	&__link {
		text-decoration: none;
	}

	&__logo {
		vertical-align: middle;
		width: 2.5rem;
		margin-right: 0.5rem;
	}

	&__title {
		font-weight: 500;
		text-transform: uppercase;
	}
}
</style>

<script>
export default {
	name: "CvAppHeader",
	computed: {
		titleStyle() {
			const { primaryColor } = this.$store.state.theme
			return {
				color: primaryColor
			}
		}
	},
	props: {
		logo: {
			type: String,
			default: ""
		},
		title: {
			type: String,
			default: "Company Title"
		},
		theme: {
			type: Object
		}
	}
}
</script>
