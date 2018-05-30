<template>
<div class="wrap">
  <div class="top">
  	 <div class="top_left">选择注册账号类型</div>
     <div class="top_right" @click="close"></div>
  </div>
  <div class="middle">
      <div class="left">
          <div class="line_1" @click="go_person">个人</div>
          <div class="line_2">个人用户简介</div>
      </div>
      <div class="left">
          <div class="line_3" @click="go_compony">企业</div>
          <div class="line_2">企业用户简介</div>
      </div>
  </div>
</div>
</template>
<script>
export default{
	data(){
		return{
				
		}
	},
	methods:{
       close(){
          this.$router.push({path:'/'})
       },
       go_person(){
        this.$router.push(name="register_person")
       },
       go_compony(){
         this.$router.push(name="register_company")
       }
	}
}
</script>
<style lang="scss" scoped>
.wrap{
	width: 500px;
	height: 270px;
	background-image:url('/static/u25.png');
  background-size:500px 270px;
  background-repeat: no-repeat;
	.top{
		height: 50px;
    width: 100%;
		color: white;
		font-weight: 500;
		line-height: 50px;
    display: flex;
    .top_left{
        margin-left: 194px;
    }
		.top_right{
         width: 24px;
         height: 24px;
         background-image:url('/static/关闭.png');
         background-size:16px 16px;
         background-repeat: no-repeat;
         margin-left: 165px;
         margin-top: 10px;
    }
	}
  .middle{
    display: flex;
    .left{
       border:1px solid black;
       width: 50%;
       height: 137px;
       font-weight: bold;
       .line_1{
          background-image: url(/static/u29.png);
          background-size: 46px 44px;
          background-repeat: no-repeat;
          padding-top: 11px;
          height: 50px;
          margin-left: 50px;
          padding-left: 50px;
          margin-top: 9px;
          color: white;
          cursor: pointer;
       }
       .line_2{
         color: white;
         margin-left: 98px;
         cursor: pointer;
       }
       .line_3{
          background-image: url(/static/u34.png);
          background-size: 46px 44px;
          background-repeat: no-repeat;
          padding-top: 11px;
          height: 50px;
          margin-left: 50px;
          padding-left: 50px;
          margin-top: 9px;
          color: white;
          cursor: pointer;
       }
    }
  }
}	
</style>








