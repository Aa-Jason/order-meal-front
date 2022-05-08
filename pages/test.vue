<template>
	<button @click="push">push</button>
</template>

<script>
	export default {
		data(){
			return {
				arr:[1]
			}
			
		},
		methods:{
			push(){
				let arr1 = [1,2]
				this.arr.push(arr1)
				console.log(this.arr)
				
				
				
				let arr2 = [null,null,{
					a:1,
					b:2
				}]
				if(arr2[0] == null){
					console.log(arr2[2].a)
				}
			}
		}
	}
</script>

<style>
</style>