<template>
  <div class="app-container">
    添加首页
    <template>
  <div class="app-container">
    <el-form label-width="120px">
      <el-form-item label="首页名称">
        <el-input v-model="bannerList.title"/>
      </el-form-item>
       <el-form-item label="首页图像地址">
        <el-input v-model="bannerList.imageUrl"/>
      </el-form-item>
       <el-form-item label="首页图像链接">
        <el-input v-model="bannerList.linkUrl"/>
      </el-form-item>
      <el-form-item label="首页排序">
        <el-input-number v-model="bannerList.sort" controls-position="right" :min="0"/>
      </el-form-item>


      <el-form-item>
        <el-button :disabled="saveBtnDisabled" type="primary" @click="saveOrUpdate">保存</el-button>
      </el-form-item>
    </el-form>
  </div>  
  </template>
  </div>
</template>
<script>

import ImageCropper from '@/components/ImageCropper'
import PanThumb from '@/components/PanThumb'
import banner from '@/api/edu/banner'
export default {
  components: {ImageCropper,PanThumb},
  data(){
    return{
      bannerList: {
        title: '',
        sort: 0,
        imageUrl: '',
        linkUrl: '',
      },
      //上传弹框组件是否显示
      imagecropperShow:false,
      //上传组件key值
      imagecropperKey:0,
      //获取dev.env  
      BASE_API: process.env.BASE_API,
      saveBtnDisabled: false // 保存按钮是否禁用,
    }
  },
  created(){
    //判断路径是否有ID
    this.init()
  },
  //监听
  watch: {
    $route(to,from){
      this.init()  //路由跳转便执行
    }
  },
  methods:{
    close() { //关闭上传弹框
      this.imagecropperShow = false;
      //初始化
      this.imagecropperKey = this.imagecropperKey + 1;
    },
    //上传成功方法
    cropSuccess(data){
      this.imagecropperShow = false;
      this.imagecropperKey = this.imagecropperKey + 1;
    },
    //初始化
    init(){
      if (this.$route.params && this.$route.params.id) {
      const id = this.$route.params.id
      this.getInfo(id)
    }else{
      this.bannerList = {}
    }
    },
    //根据讲师ID查询的方法
    getInfo(id){
      banner.getBannerInfo(id)
      .then(response=>{
        this.bannerList = response.data.item
      })
    },
      saveOrUpdate(){
        this.saveBtnDisabled = true;
        if(!this.bannerList.id){
          this.saveBanner()
        }else{
          this.updateBanner()
        }
      },
      //修改讲师方法
      updateBanner(){
        banner.updateBanner(this.bannerList)
        .then(response => {
          //修改成功
          this.$message({
              type: 'success',
              message: '修改成功!'
              });
            this.$router.push({path: '/banner/table'})
        })
      },

      //添加讲师方法
      saveBanner(){
        banner.addBanner(this.bannerList)
        .then(response => {
          //添加成功
          this.$message({
              type: 'success',
              message: '添加成功!'
              });
          //回到列表页面 路由跳转
          this.$router.push({path: '/banner/table'})
        })
      }
  }
}
</script>