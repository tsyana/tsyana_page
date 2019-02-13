<template>
	<div class="qcorde-page">
		<div class="qcrode">
			<img :src="qcrode" alt="">
			<h3>请用手机预览</h3>
		</div>
	</div>
</template>
<script>
export default {
	data() {
		return {
			qcrode: require('../assets/qcrode.png')
		}
	}
}
</script>

<style lang="scss" scoped>
.qcorde-page{
	.qcrode{
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%,-50%);
		h3{
			text-align: center;
		}
	}
}
</style>

