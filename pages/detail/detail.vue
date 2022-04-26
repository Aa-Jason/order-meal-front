<template>
	<view>
		<view>
			<text>detail</text>
		</view>
		<view>
			<!-- selectable:文字是否可以选中 -->
			<text selectable="true">detail</text>
		</view>
		<view>
			<!-- space:显示空格 -->
			<text space="ensp">de tail</text>
		</view>
		<view>
			<!-- decode是否解码 -->
			<text decode="true">detail</text>
		</view>
		
		
		
		<view class="bigBox" hover-class="bigBox_active">
			<!-- hover-stop-propagation:阻止冒泡 -->
			<!-- hover-start-time:点击之后延迟出现效果 -->
			<!-- hover-stay-time:点击之后保持效果的时间 -->
			<view class="box" hover-class="box_active" hover-stop-propagation :hover-start-time="2000">
				我是一个大盒子，相当于div
			</view>
		</view>
		<view class="box1">
			
		</view>
		
		
		<button type="primary" >
			报餐
		</button>
		
	</view>
	
</template>

<script>
</script>

<style>
	.box{
		width: 200px;
		height: 200px;
		background-color: pink;
	}
	.box_active{
		background-color: red;
	}
	.bigBox{
		width: 300px;
		height: 300px;
		background-color: aquamarine;
	}
	.bigBox_active{
		background-color: brown;
	}
	.box1 {
		width: 375rpx;
		height: 375rpx;
		background-color: blueviolet;
	}
</style>