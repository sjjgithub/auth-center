<template>
	<div class="content">
		<el-card class="login-box">
			<div slot="header">
				<h1 class="login-title">登录</h1>
			</div>
			<el-form ref="login" :model="user" :rules="rules" label-position="right" label-width="70px" size="small" class="text-left"> 
				<el-form-item label="商户号" prop="merchantId">
					 <el-input v-model="user.merchantId" placeholder="请输入商户号"></el-input>
				</el-form-item> 
				<el-form-item label="用户名"  prop="loginNo">
					 <el-input v-model="user.loginNo" placeholder="请输入用户名"></el-input>
				</el-form-item> 
				<el-form-item label="密　码" prop="password">
					<el-input v-model="user.password" type="password" placeholder="请输入密码"
						@keyup.enter.native="login">
					</el-input> 
				</el-form-item>
				<el-form-item label="记住密码">
					<el-checkbox v-model="user.rememberNo"></el-checkbox>
				</el-form-item>
				<el-form-item>
					<el-button type="primary" :loading="status.loading" @click="login">{{status.loginBtnText}}</el-button>
					<el-button @click="reset">重置</el-button> 
				</el-form-item>
			</el-form>
		</el-card>
	</div>
</template>

<script>
export default{
	data(){
		return{
			user:{
				merchantId:"",
				loginNo:"",
				password:"",
				rememberNo:false,
			},
			rules:{
				merchantId:[{required:true,message:'请输入商户号'}],
				loginNo:[{required:true,message:'请输入用户名'}],
				password:[{required:true,message:'请输入密码'}],
			},
			status:{
				loading:false,
				loginBtnText:"登录"
			},
		}
	},
	methods:{
		switchLoginBtnStatus:function(loading){
			if(loading){
				this.status.loading=true;
				this.status.loginBtnText="加载中..."
			}else{
				this.status.loading=false;
				this.status.loginBtnText="登录"
			}
		},
		reset:function(){
			this.$refs.login.resetFields();
		},
		login:function(){
			this.$refs.login.validate((valid)=>{
				if(valid){
					this.switchLoginBtnStatus(true);
					this.$http.post("/api/auth/login",this.user)
					.then((response)=>{
						if(response.data.errcode==0){
							this.$message.success('登录成功')
						}else{
							this.$message.error(response.data.errmsg);
							this.switchLoginBtnStatus(false);
						}
					})
					.catch(()=>{
						this.switchLoginBtnStatus(false);
					})
				}
			})
		}
	}
}
</script>

<style scoped="scoped">
	.content{width: 100%;height: 100%;background: url(/src/assets/images/bg-login.jpg) no-repeat;background-size: cover;}
	.login-box{width: 450px;position: absolute;top:120px;left:calc(50% + 50px);}
	.login-title {
		font-weight: bolder;
		font-size: 16px;text-align: left;
	}
	.el-input{display: inherit;}
</style>