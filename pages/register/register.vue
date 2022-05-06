<template>
  <div class="register-container">
    <!-- 注册内容 -->
    <!-- <div class="register">
     
      <div class="content">
        <label class="label">手机号:</label>
        <input type="text" placeholder="请输入你的手机号" v-model="phone" class="inputbox" >
        
      </div>
      <div class="content">
        <label class="label">登录密码:</label>
        <input type="password" placeholder="请输入你的登录密码" v-model="password" class="inputbox">
        
      </div>
      <div class="content">
        <label class="label">确认密码:</label>
        <input type="password" placeholder="请输入确认密码" v-model="password1" class="inputbox">
        
      </div>
      
      <div class="btn">
        <button @click="userRegister">完成注册</button>
      </div>
    </div> -->
	<view>
		<!-- <view class="d-flex a-center j-sb py-2 px-3 text-light-muted" >
			<view class="iconfont icon-shanchu1" ></view>
			<view class="font-md" >忘记密码</view>
		</view> -->
		<view class="p-5" style="margin: 50rpx;">
			<view class="font-big mb-5" style="font-size: 60rpx;">注册新用户</view>
			
			<input type="text" class="border-bottom mb-4 uni-input px-0"
			placeholder="请输入你的姓名" v-model="nickname"
			placeholder-class="text-light-muted" 
			style="border-bottom:1rpx solid #D3D3D3 ;margin: 50rpx 0;padding-bottom: 20rpx;"
			/>
			
			<input type="text" class="border-bottom mb-4 uni-input px-0"
			placeholder="请选择你的部门" v-model="departmentId"
			placeholder-class="text-light-muted" 
			style="border-bottom:1rpx solid #D3D3D3 ;margin: 50rpx 0;padding-bottom: 20rpx;"
			/>
			
			<input type="text" class="border-bottom mb-4 uni-input px-0"
			placeholder="请输入你的手机号" v-model="mobile"
			placeholder-class="text-light-muted" 
			style="border-bottom:1rpx solid #D3D3D3 ;margin: 50rpx 0;padding-bottom: 20rpx;"
			/>
			
			<input type="text" class="border-bottom mb-4 uni-input px-0"
			placeholder="请输入你的登录密码" v-model="password"
			placeholder-class="text-light-muted"
			style="border-bottom:1rpx solid #D3D3D3 ;margin: 50rpx 0;padding-bottom: 20rpx;"
			/>
			<button @click="register" style="height: 90rpx;background-color: #0099ff;border-Radius: 0;color: #fff;">
				注&nbsp;&nbsp;册
			</button>  
			
		</view>
	</view>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        // 收集手机号
        mobile:'',
        // 验证码
        password:'',
        nickname:'',
		departmentId:''
      }
	  
    },
	methods:{
		register(){
			uni.request({
				url:"",
				data:{
					nickname:this.nickname,
					departmentId:this.departmentId,
					mobile:this.mobile,
					password:this.password
				}
			})
			// 注册成功之后回到登录页面
			uni.navigateBack({
				delta:1
			})
		}
	}
        
  }
</script>

<style scoped>
	
	  
	    .register {
	      width: 100%;
	      height: 445rpx;
	      // border: 1px solid rgb(223, 223, 223);
	      margin: 0 auto;
	      }
	
	      // div:nth-of-type(1) {
	      //   margin-top: 40rpx;
	      // }
	
	      .content {
	        margin-bottom: 28rpx;
	        position: relative;
			}
	
	        .label {
	          font-size: 14px;
	          width: 96px;
	          text-align: right;
	          // display: inline-block;
	        }
	
	        .inputbox {
	          width: 320rpx;
	          height: 70rpx;
	          padding-left: 8rpx;
	          box-sizing: border-box;
	          margin-left: 5rpx;
	          outline: none;
	          border: 1px solid #999;
	        }
	
	
	      .btn {
	        text-align: center;
	        line-height: 36px;
	        margin: 17px 0 0 55px;
			}
	
	        .button {
	          outline: none;
	          width: 270px;
	          height: 36px;
	          background: #e1251b;
	          color: #fff !important;
	          display: inline-block;
	          font-size: 16px;
	        }
	      
	    
	
	    .copyright {
	      width: 1200px;
	      margin: 0 auto;
	      text-align: center;
	      line-height: 24px;
		  }
	
	      
	        .li {
	          display: inline-block;
	          border-right: 1px solid #e4e4e4;
	          padding: 0 20px;
	          margin: 15px 0;
	        }
	</style>