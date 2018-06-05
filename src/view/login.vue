<template>
<div class="wrap">
	<div class="top">
    <div class="top_wrap">
          <select class="list_chose"  v-model="login_type">
              <option value='0'>个人用户</option>
              <option value='1'>企业用户</option>
          </select>
          <div class="top_right" @click="close"></div>
    </div>
		
	</div>


	<swipe  v-model="index" :autoplayTime="autime">

			  <swipe-item style="height: 200px; ">
			     
              <img :src="imag1" width="500" height="200">      
			  </swipe-item>


			  <swipe-item style="height: 200px; ">
			  	    <img :src="imag2" width="500" height="200">  
			  </swipe-item>
	</swipe>
  

	<div class="middle">
		<div class="left">
			  登录<br>测试
		</div>
		<div class="middle_middle">
			 <div class="middle_top">
			 	 <input type="text" class="top_input" v-model="account" placeholder="请输入账号">
			 	 <input type="password" class="top_input" v-model="password" placeholder="请输入密码">
			 </div>
			 <div class="middle_down">
			 	<input type="checkbox" id="re_auto" value="Jack" v-model="checkedtype">
			 	  <label for="re_auto">自动登录</label>
			 	  <input type="checkbox" id="re_try" value="John" v-model="checkedtype">
			 	  <label for="re_try">试用登录</label>
			 	  <input type="checkbox" id="re_rember" value="Mike" v-model="checkedtype">
			 	  <label for="re_rember">记住密码</label>
			 </div>
			 <div class="middle_button" @click="login">
			 	 登录
			 </div>
		</div>
		<div class="right">
			<div class="right_text" @click="register">注册账号</div>
			<div class="right_text" @click="find">找回密码</div>
		</div>
	</div>
</div>
</template>
<script>
import imag1 from './1.png';
import imag2 from './2.png';
export default{
	components: {
	    
	},
	data(){
		return{
           imag1:imag1,
           imag2:imag2,
           index:0,
           autime:2000,
           login_type:0,
           account:'',
           password:'',
           checkedtype:[]
		}
	},
	methods:{
		close(){
             this.$alert('你点了关闭', '提示', {
                       confirmButtonText: '确定',
                       callback: action => {
                         this.$message({
                           type: 'info',
                           message: `action: ${ action }`
                         });
                       }
              });
		},
		login(){
			this.$http.post('xxxx.xxxx.xxx',{  
			     login_type:this.login_type, 
			     account:this.account,          
			     password:this.password,
			     checkedtype:this.checkedtype,
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
		find(){
			this.$router.push(name="find_password")
		},
		register(){
			this.$router.push(name="register_chose")
		}
	}
}	
</script>
<style lang="scss" scoped>
.wrap{
  width: 500px;
  height: 340px;
  background:#a3a3a3;
  .top{
    position:absolute;
    z-index: 99;
    .top_wrap{
      display: flex;
      height: 35px;
      font-size: 12px;
      .list_chose{
         margin-left: 379px;
         width:80px;
         height:20px;
         margin-top: 8px;
         background-color: #d1d1d1;
         border: 1px solid #ddd;
         color:#666;
         outline: none;
         border-radius:4px;
      }
      .top_right{
           width: 24px;
           height: 24px;
           background-image:url('/static/关闭.png');
           background-size:16px 16px;
           background-repeat: no-repeat;
           margin-left: 13px;
           margin-top: 10px;
      }
    }
   
  }
  .middle{
  	display: flex;
  	height: 204px;;
  	width: 100%;
  	background-color: #6e6e6e;
  	.left{
           width: 100px;
           font-size: 35px;
           padding-left: 20px;
           padding-top: 20px;
           color: #c2c2c2;
  	}
  	.middle_middle{
  		//border:1px solid yellow;
        width: 263px;
        margin-left: 10px;
        .middle_top{
        	margin-top: 20px;
        	width: 242px;
        	height: 60px;
        	background-color:#c2c2c2;
        	border-radius:6px;
        	.top_input{
        		border-radius:8px;
        		margin-left: 5px;
        		margin-top: 5px;
        		width: 228px;
        		height: 24px;
        		padding-left:10px;
        		background-color:#c2c2c2;
        	}
        }
        .middle_down{
        	margin-top: 5px;

        }
        .middle_button{
        	margin-top: 30px;
        	width: 245px;
        	height: 30px;
        	cursor: pointer;
        	border-radius:4px;
        	background-color:#446f86;
        	text-align: center;
        	color: #e0d5ce;
        	font-size: 17px;
        	line-height: 29px;
        }
  	}
  	.right{
  		color: #c2c2c2;
  		margin-top: 20px;
  		.right_text{
  			font-size: 14px;
  			cursor: pointer;
  			margin-top: 10px;
  			font-weight:bold;
  		}
  	}
  }
}
</style>










