<template>
  <div class="register-container">
    
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
      <view class="uni-form-item uni-column">
      <picker @change="bindPickerChange":range="array" style="border-bottom:1rpx solid #D3D3D3 ;margin: 50rpx 0;padding-bottom: 20rpx;">
		  <label style="font-size: 17px;color: gray;">请选择你的部门：</label>
		  <label  style="display: flex;">{{departmentId}}</label>
      </picker>
      
      </view>

			
		<!-- 	<input type="text" class="border-bottom mb-4 uni-input px-0"
			placeholder="请选择你的部门" v-model="departmentId"
			placeholder-class="text-light-muted" 
			style="border-bottom:1rpx solid #D3D3D3 ;margin: 50rpx 0;padding-bottom: 20rpx;"
			/> -->
			
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
        departmentId:'--请选择--',
        array:['--请选择--','部门一','部门二','部门三']
      }
	  
    },
	methods:{
		bindPickerChange:function(e){
		  this.index = e.target.value
		  this.departmentId = this.array[this.index]
		},
		register(){
			
		  let name = false
		  if(!this.nickname){
			uni.showToast({
			  title: '请输入姓名',
			  icon: 'none'
			})
			return
		  }else{
			  name = true
		  }
		  
		  let dep = false
		  if(this.departmentId === '--请选择--'){
			uni.showToast({
			  title: '请选择部门',
			  icon: 'none'
			})
		  }else{
			dep = true
		  }
		  
		  let mob = false
		  let reg = /^[1][3,4,5,7,8,9][0-9]{9}$/
		  if (!this.mobile) {      //判断如果手机号为空，提示用户输入手机号
			uni.showToast({
			  title: '请输入手机号',
			  icon: 'none'
			})
			return
		  } else if (!reg.test(this.mobile)) {        //判断手机号格式时候正确
			uni.showToast({
			  title: '请输入正确的手机号',
			  icon: 'none'
			})
			return
		  }else{
			mob = true
		  }
		  
		  let pd = false
		  let regpd = /^.{6,}$/
		  if (!this.password) {      
			uni.showToast({
			  title: '请输入密码',
			  icon: 'none'
			})
			return
		  } else if (!regpd.test(this.password)) {        
			uni.showToast({
			  title: '请输入正确的密码',
			  icon: 'none'
			})
			return
		  }else{
			pd = true
		  }
			// 注册成功之后回到登录页面
			if(name&mob&pd&dep){
			uni.showToast({
			  title: '注册成功',
			  icon: 'none'
			})
			uni.request({
				url:"",
				data:{
					nickname:this.nickname,
					departmentId:this.departmentId,
					mobile:this.mobile,
					password:this.password
				}
			})
			uni.navigateTo({
				url:"/pages/login/login"
			})
		  }
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