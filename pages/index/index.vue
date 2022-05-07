<template>
	<view>
		<!-- 页头 -->
		<view calss="pageHeader" style="display: flex;">
				<div class="headerDetail headerWeek">
					<text @click="lastWeek"> 上一周</text>
				</div>
			
				<div class="headerDetail">
					{{dateTable2[0].date}} - {{dateTable2[6].date}}
				</div>
			
				<div class="headerDetail headerWeek">
					<text @click="nextWeek">下一周 </text>
				</div>
		</view>
		<!-- <button>
					{{dateTable[0].date.monday}} - {{dateTable[6].date.sunday}}
				</button>
				<button @click="lastWeek">
					上一周
				</button>
				
				<button @click="nextWeek">
					下一周
				</button> -->

		<!-- 表头 -->
		<view class="tableHeader" style="display: flex;">
				<div style='flex:1;'>
					<view class="year-Week">
						<text>{{year}}年</text>
						<br />
						<text>第{{week}}周</text>
					</view>
					<!-- <el-date-picker v-model="value2" type="week" format="yyyy第WW周" placeholder="选择周"
						:picker-options="{ firstDayOfWeek: 1}" value-format="yyyy-MM-dd" v-if="false">
					</el-date-picker> -->
				</div>
				<div class="littleHeader">
					早餐
				</div>
			
				<div class="littleHeader">
					午餐
				</div>
			
				<div class="littleHeader">
					晚餐
				</div>
			
		</view>
		<!-- 表格主体 -->
		<!-- <view class="table">
			<view class="tableBody" v-for="(everyDay,index) in dateTable" :key="index" style="display: flex;">
					<div style="line-height: 40rpx;padding-top: 15rpx;padding-bottom: 15rpx;flex: 1;">
						<text>{{everyDay.week}}</text>
						<br />
						<text class="date">{{everyDay.date[Object.keys(everyDay.date)[0]]}}</text>

					</div>
					<div style="text-align: center;line-height: 110rpx;flex: 1;">
						<checkbox  :checked="everyDay.meal[0]" style="transform:scale(0.7);" color="#0099ff" :disabled="everyDay.date[Object.keys(everyDay.date)[0]] <= $moment(new Date()).format('MM-DD') ? true:false"
						@click="update(index,0)">
						</checkbox>
					</div>
					<div style="text-align: center;line-height: 110rpx;flex: 1;">
						<checkbox  :checked="everyDay.meal[1]" style="transform:scale(0.7);" color="#0099ff" :disabled="everyDay.date[Object.keys(everyDay.date)[0]] <= $moment(new Date()).format('MM-DD') ? true:false"
						@click="update(index,1)">
						</checkbox>
					</div>
				
					<div style="text-align: center;line-height: 110rpx;flex: 1;">
						<checkbox value="" :checked="everyDay.meal[2]" style="transform:scale(0.7);" color="#0099ff" :disabled="everyDay.date[Object.keys(everyDay.date)[0]] <= $moment(new Date()).format('MM-DD') ? true:false"
						@click="update(index,2)">
						</checkbox>
					</div>
				
			</view>
		</view> -->
		
		
		<!-- <view class="table">
			<view class="tableBody" v-for="(everyDay,index) in dateTable1" :key="index">
					<div class="weekDate">
						<text>{{weekData[index]}}</text>
						<br />
						<text class="date">{{everyDay[0]}}</text>
		
					</div>
					<div class="check">
						<checkbox  :checked="everyDay[1]" style="transform:scale(0.7);" color="#0099ff" :disabled="everyDay[0] <= $moment(new Date()).format('MM-DD') ? true:false"
						@click="update(index,1)">
						</checkbox>
					</div>
					<div class="check">
						<checkbox  :checked="everyDay[2]" style="transform:scale(0.7);" color="#0099ff" :disabled="everyDay[0]<= $moment(new Date()).format('MM-DD') ? true:false"
						@click="update(index,2)">
						</checkbox>
					</div>
				
					<div class="check">
						<checkbox value="" :checked="everyDay[3]" style="transform:scale(0.7);" color="#0099ff" :disabled="everyDay[0] <= $moment(new Date()).format('MM-DD') ? true:false"
						@click="update(index,3)">
						</checkbox>
					</div>
				
			</view>
		</view> -->
		
		
		
		<view class="table">
			<view class="tableBody" v-for="(everyDay,index) in dateTable2" :key="index">
					<div class="weekDate">
						<text>{{weekData[index]}}</text>
						<br />
						<text class="date">{{everyDay.date}}</text>
		
					</div>
					<div class="check">
						<checkbox  :checked="everyDay.breakfast" style="transform:scale(0.7);" color="#0099ff" :disabled="everyDay.date <= $moment(new Date()).format('MM-DD') ? true:false"
						@click="update(index,1)">
						</checkbox>
					</div>
					<div class="check">
						<checkbox  :checked="everyDay.lunch" style="transform:scale(0.7);" color="#0099ff" :disabled="everyDay.date<= $moment(new Date()).format('MM-DD') ? true:false"
						@click="update(index,2)">
						</checkbox>
					</div>
				
					<div class="check">
						<checkbox value="" :checked="everyDay.dinner" style="transform:scale(0.7);" color="#0099ff" :disabled="everyDay.date <= $moment(new Date()).format('MM-DD') ? true:false"
						@click="update(index,3)">
						</checkbox>
					</div>
				
			</view>
		</view>
		<!-- 报餐按钮 -->
		<view>
			<button @click="orderMeal" class="orderMeal">
				报餐
			</button>
		</view>
	</view>

</template>

<script>
	
	export default {
		data() {
			return {
				value2: new Date(),
				year: '',
				week: '',
				
				weekData:['周一','周二','周三','周四','周五','周六','周日'],
				
				dateTable2: [{
						date:'',
						breakfast: false,
						lunch: false,
						dinner: false
					},
					{
						date:'',
						breakfast: false,
						lunch: false,
						dinner: false
					},
					{
						date:'',
						breakfast: false,
						lunch: false,
						dinner: false
					},
					{
						date:'',
						breakfast: false,
						lunch: false,
						dinner: false
					},
					{
						date:'',
						breakfast: false,
						lunch: false,
						dinner: false
					},
					{
						date:'',
						breakfast: false,
						lunch: false,
						dinner: false
					},
					{
						date:'',
						breakfast: false,
						lunch: false,
						dinner: false
					}
				],
			}

		},
		computed: {
			// 这里可以写传到后台去的数据
			
			tableDate1(){
			
				let tabledate = []
				for (let i = 0;i < 7;i++){
					let data = {
						data:this.year + '-' + this.dateTable2[i].date,
						breakfast:this.dateTable2[i].breakfast==true?1:0,
						lunch:this.dateTable2[i].lunch==true?1:0,
						dinner:this.dateTable2[i].lunch==true?1:0
						
					}
					
					tabledate.push(data)
					
				}
				return tabledate
			}
		},
		onReady() {
			this.getDate1();
			let num = this.value2.getDay()
			if (num !== 2) {
				this.value2 = this.$moment(this.value2)
					.add(2 - num, 'days')
			}
			
		},
		watch: {
			// value2发生改变时重新获取日期
			value2() {
				this.getDate1()
			},


		},

		methods: {
			// getDate(e) {
			// 	this.data = this.$moment(e).format('YYYY-MM-DD')
			// 	console.log(this.value2)
			// },
			// 获取周一到周日是几号
			getDate1() {

				this.year = this.$moment(this.value2)
					.format("YYYY")
				this.week = this.$moment(this.value2)
					.format("WW")
				// this.dateTable[0].date.monday = this.$moment(this.value2)
				// 	.subtract(1, "days")
				// 	.format("MM-DD"); //获取周一
				// this.dateTable[6].date.sunday = this.$moment(this.value2)
				// 	.add(5, "days")
				// 	.format("MM-DD"); //获取周日
				// this.dateTable[1].date.Tuesday = this.$moment(this.value2)
				// 	.format("MM-DD");
				// this.dateTable[2].date.Wednesday = this.$moment(this.value2)
				// 	.add(1, "days")
				// 	.format("MM-DD");
				// this.dateTable[3].date.Thursday = this.$moment(this.value2)
				// 	.add(2, "days")
				// 	.format("MM-DD");
				// this.dateTable[4].date.Friday = this.$moment(this.value2)
				// 	.add(3, "days")
				// 	.format("MM-DD");
				// this.dateTable[5].date.Saturday = this.$moment(this.value2)
				// 	.add(4, "days")
				// 	.format("MM-DD");
					
					
				// this.dateTable1[0][0] = this.$moment(this.value2)
				// 	.subtract(1, "days")
				// 	.format("MM-DD"); //获取周一
				// this.dateTable1[6][0] = this.$moment(this.value2)
				// 	.add(5, "days")
				// 	.format("MM-DD"); //获取周日
				// this.dateTable1[1][0] = this.$moment(this.value2)
				// 	.format("MM-DD");
				// this.dateTable1[2][0] = this.$moment(this.value2)
				// 	.add(1, "days")
				// 	.format("MM-DD");
				// this.dateTable1[3][0] = this.$moment(this.value2)
				// 	.add(2, "days")
				// 	.format("MM-DD");
				// this.dateTable1[4][0] = this.$moment(this.value2)
				// 	.add(3, "days")
				// 	.format("MM-DD");
				// this.dateTable1[5][0] = this.$moment(this.value2)
				// 	.add(4, "days")
				// 	.format("MM-DD");
					
					
				this.dateTable2[0].date = this.$moment(this.value2)
					.subtract(1, "days")
					.format("MM-DD"); //获取周一
				this.dateTable2[6].date = this.$moment(this.value2)
					.add(5, "days")
					.format("MM-DD"); //获取周日
				this.dateTable2[1].date = this.$moment(this.value2)
					.format("MM-DD");
				this.dateTable2[2].date = this.$moment(this.value2)
					.add(1, "days")
					.format("MM-DD");
				this.dateTable2[3].date = this.$moment(this.value2)
					.add(2, "days")
					.format("MM-DD");
				this.dateTable2[4].date = this.$moment(this.value2)
					.add(3, "days")
					.format("MM-DD");
				this.dateTable2[5].date = this.$moment(this.value2)
					.add(4, "days")
					.format("MM-DD");
					

			},

			// 获取上一周的日期
			lastWeek() {
				this.value2 = this.$moment(this.value2)
					.subtract(7, "days").toDate()
				this.getDate1()
				//#ifndef H5
				let url = 'http://localhost:8888/xboot/order/getByStaffIDAndDate'
				//#endif
				 
				//#ifdef H5
				let url = '/dpc/xboot/order/getByStaffIDAndDate'
				//#endif
				uni.request({
					url:url,
					data:{
						startDate:this.year + '-' + this.dateTable2[0].date,
						endDate:this.year + '-' + this.dateTable2[6].date
					},
					
					header:{
						'accessToken':wx.getStorageSync('token')
					},
					success: (res) => {
						console.log(res)
						// for (let i = 0;i<7;i++){
						// 	if(res.data[i].date!==null){
						// 		this.dateTable2[i].breakfast = res.data[i].breakfast == 1?true:false
						// 		this.dateTable2[i].lunch = res.data[i].lunch == 1?true:false
						// 		this.dateTable2[i].dinner = res.data[i].dinner == 1?true:false
								
						// 	}else{
						// 		this.dateTable2[i].breakfast = false
						// 		this.dateTable2[i].lunch = false
						// 		this.dateTable2[i].dinner = false
						// 	}
						// }
						
					}
				})
				
				// 向服务器请求上一周的早午晚餐数据
				// 要判断一下数据库返回的数组是不是空的
				// 如果是空的要置空
				// 根据后台传过来的数据更改dateTable
				


			},
			// 获取下一周的日期
			nextWeek() {
				this.value2 = this.$moment(this.value2)
					.add(7, "days").toDate()
				this.getDate1()
				//#ifndef H5
				let url = 'http://localhost:8888/xboot/order/getByStaffIDAndDate'
				//#endif
				 
				//#ifdef H5
				let url = '/dpc/xboot/order/getByStaffIDAndDate'
				//#endif
				// uni.request({
				// 	url:url,
				// 	data:{
				// 		startDay:this.year + '-' + this.dateTable2[0].date,
				// 		endDay:this.year + '-' + this.dateTable2[6].date
				// 	},
				// 	header:{
				// 		'token':wx.getStorageSync('token')
				// 	},
				// 	success: (res) => {
				// 		for (let i = 0;i<7;i++){
				// 			if(res.data[i].date!==null){
				// 				this.dateTable2[i].breakfast = res.data[i].breakfast == 1?true:false
				// 				this.dateTable2[i].lunch = res.data[i].lunch == 1?true:false
				// 				this.dateTable2[i].dinner = res.data[i].dinner == 1?true:false
								
				// 			}else{
				// 				this.dateTable2[i].breakfast = false
				// 				this.dateTable2[i].lunch = false
				// 				this.dateTable2[i].dinner = false
				// 			}
				// 		}
						
				// 	}
				// })

			},
			orderMeal() {
				// 提交报餐数据到数据库(this.tableDate)
				// 要查询一下用户是否登录
				//#ifndef H5
				let url = 'http://localhost:8888/xboot/order/addOrder'
				//#endif
				 
				//#ifdef H5
				let url = '/dpc/xboot/order/addOrder'
				//#endif
				let token = wx.getStorageSync('token')
				if(token.length > 1){
					uni.request({
						url:url,
						data:
						{
							date:'2022-05-08',
							breakfast:0,
							lunch:1,
							dinner:0
						},
						method:"POST",
						      
						      header:{
						       'accessToken':wx.getStorageSync('token'),
						       'content-type': 'application/x-www-form-urlencoded'
						      },
						success: (res) => {
							uni.showToast({
							  title: '提交成功',
							  icon: 'none',
							  duration:2000
							})
							console.log(res)
						},
						fail() {
							
						}
					})
				}else{
					uni.navigateTo({
						url:"/pages/login/login"
					})
				}
				
				
				// console.log(this.dateTable2,this.tableDate1)
				
				
			},
			test() {
				// 可以修改对象的key值  可以考虑改成{4-1：[0,0,0]}的形式
				// //保存原来key对应的值
				// let departmentId= department.id;
			 // //删除key
				// delete department.id
				// //增加key
				// department.departmentId=departmentId


				// 得到key值
				// Object.keys(obj)

			},
			update(index,num){
				if(this.dateTable2[index].date > this.$moment(new Date()).format('MM-DD')){
					if(num===1){
						this.dateTable2[index].breakfast = !this.dateTable2[index].breakfast
					}else if(num===2){
						this.dateTable2[index].lunch = !this.dateTable2[index].lunch
					}else{
						this.dateTable2[index].dinner = !this.dateTable2[index].dinner
					}
				}
				// this.dateTable[index].meal[num] = !this.dateTable[index].meal[num]
				// if(num===1){
				// 	this.dateTable2[index].breakfast = !this.dateTable2[index].breakfast
				// }else if(num===2){
				// 	this.dateTable2[index].lunch = !this.dateTable2[index].lunch
				// }else{
				// 	this.dateTable2[index].dinner = !this.dateTable2[index].dinner
				// }
				
				
			}


		}
	}
</script>

<style>
	.table {
		padding: 20rpx;
		padding-top: 0;
	}

	.body {
		width: 100%;
		/* height: 100%; */
	}

	.pageHeader {
		min-height: 80rpx;
		line-height: 80rpx;
		text-align: center;
	}

	.headerDetail {
		line-height: 80rpx;
		text-align: center;
		flex:2;
		width: 187.5rpx;
	}

	.headerWeek {
		color: #0099ff;
		flex: 1;
	}

	.tableHeader {
		padding: 0 20rpx 0 20rpx;
		background: rgba(173, 216, 230, 0.2);
	}
	.tableBody {
		display: flex;
	}
	.weekDate {
		line-height: 40rpx;
		padding-top: 15rpx;
		padding-bottom: 15rpx;
		flex: 1;
	}
	.check {
		text-align: center;
		line-height: 110rpx;
		flex: 1;
	}

	.year-Week {
		line-height: 40rpx;
		padding-top: 15rpx;
		padding-bottom: 15rpx;
	}

	.littleHeader {
		text-align: center;
		line-height: 110rpx;
		flex: 1;

	}

	.date {
		color: #a9a9a9;
	}

	.orderMeal {
		width: 100%;
		background-color: #0099ff;
		border-Radius: 0;
		position: fixed;
		bottom: 0rpx;
		/* #ifdef H5 */
		bottom: 100rpx;
		/* #endif */
		
	}

	.selectWeek {
		width: 100%;
	}
</style>
