<template>
<div class="wrap">
  <div class="top">
  	 <div class="left">个人</div>
  	 <div class="right">带*为必填项</div>
  	 <div class="top_right" @click="close"></div>
  </div>
  <div class="middle">
  	  <div class="line">
  	  	  <div class="left">
  	  	  	* 用户昵称
  	  	  </div>
  	  	  <input class="right_input" v-model='name'>
  	  </div>

  	  <div class="line">
  	  	  <div class="left">
  	  	  	* 邮箱
  	  	  </div>
  	  	  <input class="right_input" v-model='email'>
  	  	  <div class="line_button" @click="check_email">
  	  	  	 邮箱验证
  	  	  </div>
  	  </div>
  	  <div class="line">
  	  	  <div class="left">
  	  	  	邮箱验证码
  	  	  </div>
  	  	  <input class="right_input" v-model='email_code'>
  	  </div>

  	  <div class="line">
  	  	  <div class="left">
  	  	  	* 手机验证
  	  	  </div>
  	  	  <input class="right_input" v-model='phone'>
  	  	  <div class="line_button" @click="check_phone">
  	  	  	 发送验证
  	  	  </div>
  	  </div>

  	  <div class="line">
  	  	  <div class="left">
  	  	  	手机验证码
  	  	  </div>
  	  	  <input class="right_input" v-model='phone_code'>
  	  </div>

  	  <div class="line">
  	  	  <div class="left">
  	  	  	实名认证
  	  	  </div>
  	  	  <input class="right_input" v-model='idcard_name'>
  	  </div>
  	  <div class="line">
  	  	  <div class="left">
  	  	  	身份证号
  	  	  </div>
  	  	  <input class="right_input" v-model='idcard_number'>
  	  </div>
      <div style="height:30px;"></div>
  	  <div class="line">
  	  	  <div class="left">
  	  	  	* 密码
  	  	  </div>
  	  	  <input class="right_input" v-model='password'>
  	  </div>
  	  <div class="line">
  	  	  <div class="left">
  	  	  	* 确认密码
  	  	  </div>
  	  	  <input class="right_input" v-model='password_2'>
  	  </div>
  </div>
  <div class="down">
  	 <div class="down_left">
  	 	<input type="checkbox" id="per_abide" v-model="abide">
  	    <label for="per_abide">遵守用户协议</label>
  	 </div>
  	 

  	 <div class="down_besure" @click="register">注册</div>
  </div>
</div>
</template>
<script>
export default{
	data(){
		return{
			name:'',
			email:'',
			email_code:'',
			phone:'',
			phone_code:'',
			idcard_name:'',
			idcard_number:'',
			password:'',
			password_2:'',
			abide:false,
		}
	},
	methods:{
		close(){
          this.$router.push({path:'/'})
		},
		check_must(data,message){
          if(data == ''){
          	   let cc = message+'必填'
               this.$alert(cc, '提示', {
                         confirmButtonText: '确定',
                         callback: action => {
                           this.$message({
                             type: 'info',
                             message: `action: ${ action }`
                           });
                         }
                });
               throw new Error
          }
		},
		check_email(){
			this.$http.post('xxxx.xxxx.xxx',{  
			     email:this.email
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
		},
		check_phone(){
			this.$http.post('xxxx.xxxx.xxx',{  
			     phone:this.phone
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
		},
		register(){
			if(!this.abide){
				 this.$alert('遵守用户协议未勾选', '提示', {
				           confirmButtonText: '确定',
				           callback: action => {
				             this.$message({
				               type: 'info',
				               message: `action: ${ action }`
				             });
				           }
				  });
				  return
			}
			this.$http.post('xxxx.xxxx.xxx',{  
			     name:this.check_must(this.name,'用户昵称'),
			     email:this.check_must(this.email),
			     email_code:this.check_must(this.email_code),
			     phone:this.check_must(this.phone),
			     phone_code:this.check_must(this.phone_code),
                 idcard_name:this.check_must(this.idcard_name),
			     idcard_number:this.check_must(this.idcard_number),
			     password:this.check_must(this.password),
			     password_2:this.check_must(this.password_2),
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
	height:540px;
	background:#787878;
	.top{
		display: flex;
		height: 55px;
		background:#9f9f9f;
		font-weight: bold;
		.left{
			background-image: url(/static/u29.png);
			background-size: 46px 44px;
			background-repeat: no-repeat;
			padding-top: 11px;
			height: 50px;
			margin-left: 30px;
			padding-left: 50px;
			margin-top: 9px;
			color: #d1d1d1;
			cursor: pointer;
		}
		.right{
			color: #d1d1d1;
			margin-left: 20px;
			margin-top: 20px;
		}
		.top_right{
		     width: 24px;
		     height: 24px;
		     background-image:url('/static/关闭.png');
		     background-size:16px 16px;
		     background-repeat: no-repeat;
			 margin-left: 265px;
		     margin-top: 10px;
		}
	}
	.middle{
		.line{
			display: flex;
			margin-top: 8px;
			
			.left{
				width: 140px;
				height: 28px;
				color: #d1d1d1;
				padding-left: 30px;
				line-height: 28px;
				font-weight: bold;
			}
			.right_input{
				background-color: #d1d1d1;
				height: 24px;
				padding-left:5px;
				font-weight: bold;
			}
			.line_button{
				margin-left: 20px;
				width: 95px;
				height: 24px;
				border-radius:4px;
				color:black;
				text-align: center;
				line-height: 24px;
				background-color: #d1d1d1;
				cursor: pointer;
			}
		}
	}
	.down{
		margin-top: 50px;
		display: flex;
		height: 80px;
		background:#9f9f9f;
		
		color: #d1d1d1;
		.down_left{
			margin-left: 140px;
			margin-top: 17px;
			font-weight: bold;
		}
		.down_besure{
          width: 95px;
          height: 24px;
          text-align: center;
          line-height: 24px;
          cursor: pointer;
          color: black;
          background-color:#d1d1d1;
          border-radius:4px;
          margin-top: 41px;
          margin-left: 100px;
		}
	}
}
</style>












