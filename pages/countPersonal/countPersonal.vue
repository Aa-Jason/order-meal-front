<template>
	<view>
		<view class="checkPage">
			<view class="date">
				<view class="datetime" @tap="onShowDatePicker()">
					<!-- <image src="../../static/check/date.png" mode="" style="width: 40upx;height: 40upx;margin: 0 20upx;"/> -->
					<view  class="selectDate">{{ selectDate }}</view>
				</view>
				<button class = "select" @click="selected">查询</button>
			</view>
			<mx-date-picker :show="showPickerDate" type='range' :show-tips="true"
			 @confirm="onSelected" @cancel="onSelected" />
		</view>
		<view>
			
			<view class="box-card" v-if="showSum">
				<view  class="text">
					<text class="item">
						日期
					</text >
					<text class="item1">
						早餐
					</text>
					<text class="item1">
						午餐
					</text>
					<text class="item1">
						晚餐
					</text>
				</view >
				
				<view v-for="(everyDay,index) in dataTable" :key="index" class="text">
					<text class="item">
						{{everyDay.date}}
					</text >
					<text class="item1">
						{{everyDay.breakfast}}
					</text>
					<text class="item1">
						{{everyDay.lunch}}
					</text>
					<text class="item1">
						{{everyDay.dinner}}
					</text>
				</view>
				
				
			</view>
			<button v-if="showSum" class="excel">
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
					selectDate:'请选择查询时间范围',
					
					showSum:false,
					dataTable:[]
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
					this.dataTable = []
					console.log(this.startDate,this.endDate)
					// 得到后台返回的数据 并给data里的数据赋值
					//#ifndef H5
					let url = 'http://localhost:8888/xboot/order/getByStaffIDAndDate'
					//#endif
					 
					//#ifdef H5
					let url = '/dpc/xboot/order/getByStaffIDAndDate'
					//#endif
					uni.request({
						url:url,
						method:"GET",
						data:{
							startDate:this.startDate,
							endDate:this.endDate
						},
						header:{
							'token':wx.getStorage('token')
						},
						success(res){
							// 成功请求到的数据
							for (let i =0;i<res.data.length;i++){
								if(res.data[i].data !== null){
									var everyday={}
									everyday.data = res.data[i].data
									everyday.breakfast = res.data[i].breakfast
									everyday.lunch = res.data[i].lunch
									everyday.dinner = res.data[i].dinner
								}
								this.dataTable.push(everyday)
							}
						}
					})
					
					// 显示查询的结果
					this.showSum = true
				}
			}
		}
	
</script>

<style scoped>
	.checkPage{
			width: 100%;
			overflow: hidden;
			/* position: relative; */
			text-align: center;
		}
		.selectDate {
			color: #FFFFFF;
			text-align:center;
			font-size:29rpx;
		}
		.date{
			background: #402EF1;
			padding: 10rpx;
			position: fixed;
			display: flex;
			justify-content: center;
			align-items: center;
			flex-wrap: wrap;
			width: 100%;
			height: 150rpx;
		}
		.datetime{
			width: 70%;
			border-radius: 40rpx;
			height: 80rpx;
			/* opacity: 0.5; */
			background: #5B57FC;
			display: flex;
			align-items: center;
			padding-left: 30rpx;
			margin-left:20rpx;
			/* margin-bottom: 30rpx; */
			text-align: center;
		}
		.select {
			width:15%;
			height: 70rpx;
			font-size:29rpx;
			line-height:70rpx;
			color: #402EF1;
		}
		.text {
			padding: 24rpx 0;
		    font-size: 36rpx;
			display: flex;
			overflow-y: scroll;
		  }
		
		  .item {
		    flex:1;
		  }
		  .item1 {
			  flex: 1;
			  text-align:center;
		  }
		
		  .box-card {
		    width: 87%;
			/* position: fixed; */
			margin-top:190rpx;
			/* #ifdef H5 */
			/* margin-top:280rpx; */
			/* #endif */
			margin-left:4%;
			margin-right:7%;
			margin-bottom: 20rpx;
			border: 0.5rpx solid #d3d3d3;
			border-radius: 10rpx;
			box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
			padding: 0 20rpx 20rpx 20rpx;
			
		  }
		  .excel {
			  width: 250rpx;
			  margin-left: 60%;
			  background-color: #0099ff;
			  color: #FFFFFF;
			  margin-bottom: 20rpx;
			  font-size:29rpx;
		  }
	
</style>