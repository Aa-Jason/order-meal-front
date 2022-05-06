<template>
	<view>
		<view class="checkPage">
			<view class="date">
				<view class="datetime" @tap="onShowDatePicker()">
					<!-- <image src="../../static/check/date.png" mode="" style="width: 40upx;height: 40upx;margin: 0 20upx;"/> -->
					<input v-model="selectDate" style="color: #FFFFFF;text-align:center;font-size:29rpx;width: 100%;">
				</view>
				<input  placeholder-class="name" placeholder="请输入查询姓名" type="text" 
				v-model="name" 
				style="color: #FFFFFF;text-align:center;font-size:29rpx;width: 70%;border-radius:20px; background: #5B57FC;height: 80rpx;margin-left: 10rpx;padding-left: -10rpx;" >
				<button class = "select" @click="selected">查询</button>
			</view>
			<mx-date-picker :show="showPickerDate" type='range' :show-tips="true"
			 @confirm="onSelected" @cancel="onSelected" />
		</view>
		<view>
			
			<view class="box-card" v-if="showSum">
				<view  class="text item" style="display: flex;">
					<text style="flex: 1;">
						日期
					</text >
					<text style="flex: 1;text-align:center;">
						早餐
					</text>
					<text style="flex: 1;text-align:center;">
						午餐
					</text>
					<text style="flex: 1;text-align:center;">
						晚餐
					</text>
				</view >
				
				<view v-for="(everyDay,index) in dataTable" :key="index" class="text item" style="display: flex; overflow-y: scroll;  ">
					<text style="flex: 1;">
						{{everyDay[0]}}
					</text >
					<text style="flex: 1;text-align:center;">
						{{everyDay[1]}}
					</text>
					<text style="flex: 1;text-align:center;">
						{{everyDay[2]}}
					</text>
					<text style="flex: 1;text-align:center;">
						{{everyDay[3]}}
					</text>
				</view>
				
				
			</view>
			<button style="width: 250rpx;margin-left: 60%;background-color: #0099ff;color: #FFFFFF;margin-bottom: 20rpx;font-size:29rpx;">
				导出表格
			</button>
		</view>
		
	</view>
	
	
</template>

<script>
	import MxDatePicker from '../../components/mx-datepicker/mx-datepicker.vue';
	export default {
			components: {
				MxDatePicker,
			},
			data() {
				return {
					showPickerDate:false,
					startDate: '',
					endDate: '',
					selectDate:'请选择查询范围',
					breakfastSum:0,
					lunchSum:0,
					dinnerSum:0,
					showSum:true,
					name:'',
					dataTable:[
						['04-01',8,8,8],
						['04-01',8,8,8],
						['04-01',8,8,8],
						['04-01',8,8,8],
						['04-01',8,8,8],
						['04-01',8,8,8],
						['04-01',8,8,8],
						['04-01',8,8,8],
						['04-01',8,8,8],
						['04-01',8,8,8],
						['04-01',8,8,8],
						['04-01',8,8,8],
						['04-01',8,8,8],
						['04-01',8,8,8],
						['04-01',8,8,8],
						['04-01',8,8,8],
						['04-01',8,8,8],
						
					]
				}
			},
			onLoad() {},
			methods: {
				onShowDatePicker(type) {
					//显示
					this.showPickerDate = true;
					this.value = this[type];
				},
				onSelected(e) {
					// console.log(e)
					//选择
					this.showPickerDate = false;
					if (e) {
						this[this.type] = e.value;
						this.startDate = e.value[0];
						this.endDate = e.value[1];
						this.selectDate = e.value[0] +' — '+e.value[1];
					}
				},
				cancel() {},
				selected(){
					// 传要查询的日期过去
					console.log(this.startDate,this.endDate)
					// 得到后台返回的数据 并给data里的数据赋值
					// uni.request({
					// 	url:"",
					// 	method:"",
					// 	success(res){
					// 		// 成功请求到的数据
					// 	}
					// })
					// h5和小程序要分开配置 因为小程序不存在跨域问题
					// //#ifndef H5
					// Vue.prototype.$url = 'http://xx.xx.xx.xx:xx'
					// //#endif
					 
					// //#ifdef H5
					// Vue.prototype.$url = '/api'
					// //#endif
					// 显示查询的结果
					this.showSum = true
				}
			}
		}
	
</script>

<style>
	.checkPage{
			width: 100%;
			overflow: hidden;
			/* position: relative; */
			text-align: center;
		}
		.date{
			background: #402EF1;
			padding: 10rpx;
			position: fixed;
			display: flex;
			/* justify-content: center; */
			/* align-items: center; */
			flex-wrap: wrap;
			width: 100%;
			height: 200rpx;
		}
		.datetime{
			width: 70%;
			border-radius: 40rpx;
			height: 80rpx;
			/* opacity: 0.5; */
			background: #5B57FC;
			display: flex;
			align-items: center;
			/* padding-left: 20rpx; */
			margin-left:10rpx;
			/* margin-bottom: 30rpx; */
			text-align: center;
			margin-bottom: 15rpx;
			margin-top: 10rpx;
		}
		.select {
			width:15%;
			height: 70rpx;
			font-size:29rpx;
			line-height:70rpx;
			color: #402EF1;
		}
		.text {
		    font-size: 36rpx;
		  }
		
		  .item {
		    padding: 24rpx 0;
		  }
		
		  .box-card {
		    width: 87%;
			/* position: fixed; */
			margin-top:250rpx;
			margin-left:4%;
			margin-right:7%;
			margin-bottom: 20rpx;
			border: 0.5rpx solid #d3d3d3;
			border-radius: 10rpx;
			box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
			padding: 0 20rpx 20rpx 20rpx;
			
		  }
		  .name {
			  color: #FFFFFF;
		  }
	
</style>