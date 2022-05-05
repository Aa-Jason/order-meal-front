<template>
	<view>
		<view  style="margin: 50rpx 30rpx;" @click="goLogin">
			<view  style="float: left;width: 100rpx;height: 100rpx;border-radius: 50%;border: #a9a9a9 solid 1rpx;overflow: hidden;">
				<img src="../../static/login.png" alt="" style="width: 100rpx;height: 100rpx;">
				<!-- <img url> -->
			</view>
			<view style="float: left;line-height: 100rpx;margin-left: 40rpx;font-size: 38rpx;">
				{{login}}
			</view>
		</view>
		<view class="box-card1" >
		  
		  <div class="text item1" @click="goCountPersonal">
			  <img src="../../static/countpersonal.png" class="img_count">
			  <text class="text_count">我的报餐</text>
			  <text class="jiantou">&gt</text>
		  </div>
		</view>
		<view class="box-card2"  v-if="isAdministrators">
		  <div class="text item2" @click="goCount" >
			  <img src="../../static/count.png" class="img_count">
			  <text class="text_count">统计报餐</text>
			  <text class="jiantou">&gt</text>
		  </div>
		  
		</view>
	</view>
</template>

<script >
	export default {
		data(){
			return {
				isAdministrators:false,
				login:"请登录",
				isLogin:false
				
			}
		},
		onLoad() {
			// 如果是管理员就显示统计报餐
			this.isAdministrators = true
		},
		methods:{
			goCount(){
				uni.navigateTo({
					url:"/pages/count/count"
				})
			},
			goCountPersonal(){
				uni.navigateTo({
					url:"/pages/count/countPersonal"
				})
			},
			goLogin(){
				
			}
		}
	}
</script>

<style scoped>
	.text {
	    font-size: 36rpx;
		line-height: 95rpx;
		
	  }
	
	  .box-card1 {
	    width: 650rpx;
		position: fixed;
		top: 180rpx;
		 /* #ifdef H5 */
		top:280rpx;
		/* #endif */
		left:30rpx;
		height: 100rpx;
		border: 0.5rpx solid #d3d3d3;
		border-radius: 10rpx;
		box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
		padding: 0 20rpx;
		
	  }
	  .box-card2 {
	    width: 650rpx;
		position: fixed;
		top: 310rpx;
		/* #ifdef H5 */
		top:410rpx;
		/* #endif */
		left:30rpx;
		height: 100rpx;
		border: 0.5rpx solid #d3d3d3;
		border-radius: 10rpx;
		box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
		padding: 0 20rpx;
		
	  }
	  .jiantou {
		  float: right;
		  
	  }
	  .img_count {
		  width: 50rpx;
		  height: 50rpx;
		  vertical-align: middle;
	  }
	  .text_count {
		  margin-left: 20rpx;
	  }
	  
</style>