<template>
<el-container>
	<el-header>
		<el-col :gutter="10">
			<el-row :xs="12" :sm="8" :md="4" :lg="3" :xl="1">
				<el-button type="primary">Generated Button</el-button>
			</el-row>
		</el-col>
	</el-header>
</el-container>
</template>

<script>
export default {
	name: "Home",
	meta() {
		return {
			title: "Home",
			description: "This is the meta description for the home page"
		}
	}
}
</script>
