<template>
    <header class="AppHeader" :style="headerStyle">
        <div class="AppHeader__logo">
        	<router-link class="AppHeader__link" to="/">
				<div v-if="logoIsPresent">
					<img class="AppHeader__img" :src="content.logo" :alt="content.title" />
				</div>
				<div v-else>
					<h1 class="AppHeader__title" :style="titleStyle">
						{{content.title}}
					</h1>
				</div>
        	</router-link>
        </div>
		<div class="AppHeader__right">
			<el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect" :style="menuStyle">
				<template v-for="option in menuOptions">
					<el-menu-item v-bind:key="option.page" v-bind:index="option.index">{{option.title}}</el-menu-item>
				</template>	
  			</el-menu>
		</div>
    </header>
</template>

<style lang="scss">
.AppHeader {
	display: flex;
	padding: 0 20px;
	height: 60px;
	width: 100%;
	align-items: center;
	justify-content: space-between;

	&__logo {
		float: left;
		height: 60px;
	}

	&__link {
		text-decoration: none;
		font-size: 16px;
	}

	&__img {
		vertical-align: middle;
		margin-right: 0.5rem;
		height: 60px;
	}

	&__title {
		font-weight: 400;
		line-height: 60px;
	}

	&__right {
		float: right;
	}
}
</style>

/**
 * Header
 */
<script>
import { isEmpty } from "lodash"

export default {
	props: {
		global: {
			type: Object
		},
		theme: {
			type: Object
		}
	},
	name: "CvAppHeader",
	activeIndex: 1,
	computed: {
		headerStyle () {
			const { primaryColor, headerBackgroundColor } = this.theme
			return {
				backgroundColor: headerBackgroundColor,
				borderBottomColor: primaryColor
			}
		},
		titleStyle () {
			const { primaryFontColor } = this.theme
			return {
				color: primaryFontColor
			}
		},
		navBtnStyle () {
			const { primaryButtonColor, secondaryFontColor } = this.theme
			return {
				backgroundColor: primaryButtonColor,
				borderColor: primaryButtonColor,
				color: secondaryFontColor
			}
		},
		content () {
			const { logo, companyName } = this.global
			return {
				logo,
				title: companyName
			}
		},
		logoIsPresent () {
			const { logo } = this.global
			return !isEmpty(logo)
		},
		menuStyle () {
			const { headerBackgroundColor } = this.theme
			return {
				backgroundColor: headerBackgroundColor
			}
		},
		menuOptions () {
			const { header } = this.global
			if (header && header.menu && header.menu.items) {
				return header.menu.items.map((item, index) => {
					return {
						index,
						title: item.title,
						page: item.page
					}
				})
			}
			return []
		}
	},
	handleSelect () {}
}
</script>
