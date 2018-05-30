<template>
<div class="wrap">
  <div class="top">
  	 请选择账号类型
      <div class="top_right" @click="close"></div>
  </div>
  <div class="middle">
  	 <div class="line">
  	 	 <input type="radio" id="one" value="0" v-model="picked">
  	 	 <label for="one" style="color:white;padding-left:8px">手机账号</label>

  	 	 <input type="text" class="input_2" v-model="phone">
  	 </div>
  	 <div class="cue">请填写注册手机号</div>

  	 <div class="line">
  	 	 <input type="radio" id="two" value="1" v-model="picked">
  	 	 <label for="one" style="color:white;padding-left:8px">邮箱账号</label>

  	 	 <input type="text" class="input_2" v-model="email">
  	 </div>
  	 <div class="cue">请填写注册邮箱号</div>
  </div>
  <div class="down" @click="post">
  	 确定
  </div>
</div>
</template>
<script>
export default{
	data(){
		return{
			picked:'',
			phone:'',
			email:'',		
		}
	},
	methods:{
        close(){
           this.$router.push({path:'/'})
        },
        post(){
        	this.$http.post('xxxx.xxxx.xxx',{  
        	     picked:this.picked,
        	     phone:this.phone,
        	     email:this.email,
        	 })
        	 .then((res)=>{
        	      if(res.data.status == 200){
        	      	
        	      }else{
        	      	this.$alert('XXXXXXX', '错误', {
        	      	          confirmButtonText: '确定',
        	      	          callback: action => {
        	      	            this.$message({
        	      	              type: 'info',
        	      	              message: `action: ${ action }`
        	      	            });
        	      	          }
        	      	 });
        	      }
        	 })
        	 .catch( (error)=>{
        	      this.$alert(error.message, '错误', {
        	      	          confirmButtonText: '确定',
        	      	          callback: action => {
        	      	            this.$message({
        	      	              type: 'info',
        	      	              message: `action: ${ action }`
        	      	            });
        	      	          }
        	      	 });              
        	 })
        }
	}
}
</script>
<style lang="scss" scoped>
.wrap{
	width: 500px;
	height: 270px;
	background:#a3a3a3;
	.top{
    display: flex;
		height: 50px;
		color: white;
		font-weight: 500;
		padding-left: 55px;
		line-height: 50px;
		background:#9a9a9a;
    .top_right{
         width: 24px;
         height: 24px;
         background-image:url('/static/关闭.png');
         background-size:16px 16px;
         background-repeat: no-repeat;
         margin-left: 310px;
         margin-top: 10px;
    }
	}
	.middle{
		height: 170px;
		background:#6e6e6e;
		.line{
			display: flex;
			margin-left: 55px;
			padding-top: 20px;
			.input_2{
				margin-left: 22px;
				background:#d1d1d1;
			}
		}
		.cue{
			color: #d1d1d1;
			font-weight: bold;
			margin-left: 152px;
			margin-top: 5px;
		}
	}
	.down{
		margin-left: 149px;
		margin-top: 10px;
		width: 65px;
		height: 25px;
		cursor: pointer;
		border-radius: 4px;
		background-color: #446f86;
		text-align: center;
		color: #e0d5ce;
		font-size: 14px;
		line-height: 25px;
	}
}	
</style>








