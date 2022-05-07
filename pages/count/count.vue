<template>
	<view>
		<view class="checkPage">
			<view class="date">
				<view class="datetime" @tap="onShowDatePicker()">
					<!-- <image src="../../static/check/date.png" mode="" style="width: 40upx;height: 40upx;margin: 0 20upx;"/> -->
					<input v-model="selectDate" style="color: #FFFFFF;text-align:center;font-size:29rpx;width: 100%;">
				</view>
				
				<picker @change="bindPickerChange":range="array" style="color: #FFFFFF;width: 70%;border-radius:20px; background: #5B57FC;height: 80rpx;margin-left: 10rpx;padding-left: -10rpx;">
				  <label style="font-size: 17px;color: #FFFFFF;text-align:center;line-height: 80rpx;font-size:29rpx;">{{departmentTitle}}</label>

				</picker>
				
				
				<input  placeholder-class="name" placeholder="请输入查询姓名" type="text" 
				v-model="name" 
				style="color: #FFFFFF;text-align:center;font-size:29rpx;width: 70%;border-radius:20px; background: #5B57FC;height: 80rpx;margin-left: 10rpx;padding-left: -10rpx;margin-top: 15rpx;" >
				<button class = "select" @click="selected">统计</button>
			</view>
			<mx-date-picker  :show="showPickerDate" type='range' :show-tips="true"
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
			<button v-if="showSum" style="width: 250rpx;margin-left: 60%;background-color: #0099ff;color: #FFFFFF;margin-bottom: 20rpx;font-size:29rpx;">
				导出表格
			</button>
		</view>
		
	</view>
	
	
</template>

<script>
	import MxDatePicker from '../../components/mx-datepicker/mx-datepicker.vue';
	import ldSelect from '@/components/ld-select/ld-select.vue'
	export default {
			components: {
				MxDatePicker,
			},
			data() {
				return {
					departmentTitle:'请选择统计部门',
					array:['请选择统计部门','部门一','部门二','部门三'],
					showPickerDate:false,
					startDate: '',
					endDate: '',
					selectDate:'请选择统计时间',
					showSum:false,
					name:'',
					dataTable:[]
				}
			},
			// onLoad() {
			// 	//#ifndef H5
			// 	let url = 'http://localhost:8888/xboot/order/getByStaffIDAndDate'
			// 	//#endif
				 
			// 	//#ifdef H5
			// 	let url = '/dpc/xboot/order/getByStaffIDAndDate'
			// 	//#endif
			// 	uni.request({
			// 		url:url,
			// 		success:(res)=>{
			// 			this.array = res.data
			// 			this.array.unshift('请选择统计部门')
			// 		}
			// 	})
			// },
			methods: {
				bindPickerChange:function(e){
				  this.index = e.target.value
				  this.departmentTitle = this.array[this.index]
				},
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
						let arr = this.startDate.split('/')
						this.startDate = arr.join('-')
						this.endDate = e.value[1];
						let arr1 = this.endDate.split('/')
						this.endDate = arr1.join('-')
						console.log(this.endDate)
						this.selectDate = this.startDate +' — '+ this.endDate;
					}
				},
				cancel() {},
				selected(){
					// 传要查询的日期过去
					this.dataTable = []
					let department = ''
					if (this.departmentTitle !== '请选择统计部门'){
						department = this.departmentTitle
					}
					let date = false
					if(!this.startDate){
						uni.showToast({
						  title: '请选择查询时间',
						  icon:'none',
						  duration:1000
						})
					}else{
						date = true
					}
					let name = false
					if(this.name && !this.department){
						uni.showToast({
						  title: '请选择查询姓名所属部门',
						  icon:'none',
						  duration:1000
						})
					}else{
						name = true
					}
					if(date&name){
						// 得到后台返回的数据 并给data里的数据赋值
						//#ifndef H5
						let url = 'http://localhost:8888/xboot/order/getSumByDate'
						//#endif
						 
						//#ifdef H5
						let url = '/dpc/xboot/order/getSumByDate'
						//#endif
						uni.request({
							url:url,
							method:"GET",
							data:{
								name:this.name,
								startDate:this.startDate,
								endDate:this.endDate,
								departmentTitle:department
							},
							header:{
								'accessToken':wx.getStorageSync('token')
							},
							success(res){
								if(res.data.code == '200'){
									// 成功请求到的数据
									// for (let i =0;i<res.data.result.length;i++){
									// 	if(res.data.result[i] !== null){
									// 		var everyday={}
									// 		everyday.date = res.data.result[i].date
									// 		everyday.breakfast = res.data.result[i].breakfast
									// 		everyday.lunch = res.data.result[i].lunch
									// 		everyday.dinner = res.data.result[i].dinner
									// 	}
									// 	this.dataTable.push(everyday)
									// }
									
									
									for (let i =0;i<res.data.result.length;i++){
										if(res.data.result[i] !== null){
											var everyday=[]
											everyday[0] = res.data.result[i].date
											everyday[1] = res.data.result[i].breakfast
											everyday[2] = res.data.result[i].lunch
											everyday[3] = res.data.result[i].dinner
										}
										this.dataTable.push(everyday)
									}
									
								}
								
							}
						})
						
						// 显示查询的结果
						this.showSum = true
					}
					
					
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
			height: 300rpx;
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
			margin-top: 20rpx;
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
			margin-top:350rpx;
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