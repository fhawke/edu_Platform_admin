<template>
  <div class="app-container">
    首页列表
 <el-table
      :data="list"
      border
      fit
      highlight-current-row>

      <el-table-column
        label="序号"
        width="70"
        align="center">
        <template slot-scope="scope">
          {{ (page - 1) * limit + scope.$index + 1 }}
        </template>
      </el-table-column>
      <el-table-column prop="title" label="标题" width="100" />
      <el-table-column prop="imageUrl" label="地址" width="1200" />
      <el-table-column prop="gmtCreate" label="添加时间" width="100"/>

      <el-table-column prop="sort" label="排序" width="40" />

      <el-table-column label="操作" width="185" align="center">
        <template slot-scope="scope">
          <router-link :to="'/banner/edit/'+scope.row.id">
            <el-button type="primary" size="mini" icon="el-icon-edit">修改</el-button>
          </router-link>
          <el-button type="danger" size="mini" icon="el-icon-delete" @click="removeDataById(scope.row.id)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

       <!-- 分页 -->
    <el-pagination
      :current-page="page"
      :page-size="limit"
      :total="total"
      style="padding: 30px 0; text-align: center;"
      layout="total, prev, pager, next, jumper"
      @current-change="getList"
    />
  </div>
</template>
<script>

//引入调用teacher.js文件
import banner from '@/api/edu/banner'
export default {
  data() {  //定义变量和初始值
    return {
      list: null, //查询后接口返回集合
      page:1, //当前页
      limit: 5,  //每页记录数
      total:0,  //总记录数
      bannerList:[],
    }
  },
  created() { //在页面渲染之前执行，调用methods方法
    this.getList()
    this.initDataBanner()
  },
  methods: {  //创建具体的方法，调用teacher.js具体方法
    //讲师列表
    getList(page = 1){
      this.page = page
      banner.getBannerListPage(this.page,this.limit)
             .then(response => {
               //接口返回的数据
               //console.log(response)
               this.list = response.data.items
               this.total = response.data.total
               //console.log(this.list)
               //console.log(this.total)
             })  //请求成功
             .catch(error => {
               console.log(error)
             }) //请求失败
    },
      resetData() {
          this.list = {}
          this.getList()
      },
      initDataBanner() {
      banner.getList().then(response => {
        this.list = response.data.bannerList
      })
      },
      //删除首页
      removeDataById(id){
            this.$confirm('此操作将永久删除该首页, 是否继续?', '提示', {
                      confirmButtonText: '确定',
                      cancelButtonText: '取消',
                      type: 'warning'
                    }).then(() => {
                      //调用删除方法
                      banner.deleteBannerId(id)
                      .then(response => {
                        //提示信息
                        this.$message({
                        type: 'success',
                        message: '删除成功!'
                      });
                        //回到列表页面
                        this.getList()      
                      })
                    })        

      }
  },
}
</script>