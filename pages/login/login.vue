<template>
	<view>
		<!-- <view class="d-flex a-center j-sb py-2 px-3 text-light-muted" >
			<view class="iconfont icon-shanchu1" ></view>
			<view class="font-md" >忘记密码</view>
		</view> -->
		<view class="p-5" style="margin: 50rpx;">
			<view class="font-big mb-5" style="font-size: 60rpx;">密码登录</view>
			
			<input type="text" class="border-bottom mb-4 uni-input px-0"
			placeholder="请输入手机号" v-model="mobile"
			placeholder-class="text-light-muted" 
			style="border-bottom:1rpx solid #D3D3D3 ;margin: 50rpx 0;padding-bottom: 20rpx;"
			/>
			
			<input type="password" class="border-bottom mb-4 uni-input px-0"
			placeholder="请输入密码" v-model="password"
			placeholder-class="text-light-muted"
			style="border-bottom:1rpx solid #D3D3D3 ;margin: 50rpx 0;padding-bottom: 20rpx;"
			/>
			<button @click="goLogin" style="height: 90rpx;background-color: #0099ff;border-Radius: 0;color: #fff;">
				登&nbsp;&nbsp;录
			</button>  
			<view style="margin-top: 20rpx;">
				还没有账号？去<text @click="goRegister" style="color: #0099ff;">注册</text>
			</view>
		</view>
	</view>
</template>
<script>
	export default {
		data(){
			return {
				mobile:'',
				password:'',
				
			}
		},
		
		methods:{
			goLogin(){
				//#ifndef H5
				let url = 'http://localhost:8888/xboot/auth/login'
				//#endif
				 
				//#ifdef H5
				let url = '/dpc/xboot/auth/login'
				//#endif
				uni.request({
					url:url,
					method:"POST",
					header: {
						'content-type': 'application/x-www-form-urlencoded'
					},
					data:{
						username:this.mobile,
						// mobile:this.mobile,
						password:this.password,
					},
					success:(res)=>{
						// 存储token
						wx.setStorageSync('token',res.data.result)
						console.log(res)
						// 存储姓名
						// wx.setStorageSync('name',res.data.name)
						uni.switchTab({
							url:"/pages/personalCenter/personalCenter",
						})
					}
				})
				// wx.setStorageSync('token','lmk')
				
				
			},
			goRegister(){
				uni.navigateTo({
					url:"/pages/register/register"
				})
			},
			
		}
	}
</script>
