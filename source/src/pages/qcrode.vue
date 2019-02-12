<template>
	<div class="qcorde-page">
		<img class="qcrode" :src="qcrode" alt="">
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
	}
}
</style>

