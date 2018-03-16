<template>
    <header class="AppHeader">
        <router-link class="AppHeader__link" to="/" />
        <img class="AppHeader__logo" src="~images/logo.png" alt="logo" />
        <div class="AppHeader__name">
            <h3 class="AppHeader__title">Site Name</h3>
            <div class="AppHeader__subtitle">$ts("site_subtitle")</div>
            <el-button>Default</el-button>
        </div>    
    </header>
</template>

<style lang="scss">
.AppHeader {
	padding: 1rem;
	font-size: 1.5rem;
	background-color: whitesmoke;

	&__link {
		color: black;
	}

	&__logo {
		vertical-align: middle;
		width: 2.5rem;
		margin-right: 0.5rem;
	}

	&__name,
	&__subtitle {
		display: inline-block;
	}

	&__name {
		vertical-align: middle;
		margin-right: 0.5rem;
	}

	&__title {
		margin-right: 0.5rem;
	}
}
</style>

<script>
export default {
	name: "AppHeader"
}
</script>
