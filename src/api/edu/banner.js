import request from '@/utils/request'

export default{

  //1. 首页列表(条件查询分页)
  //current当前页 limit每页记录数
  getBannerListPage(current,limit){
    return request({
      url: `/educms/banneradmin/pageBanner/${current}/${limit}`,
      method: 'get'
    })
  },
  //删除讲师
  deleteBannerId(id){
    return request({
      url: `/educms/banneradmin/remove/${id}`,
      method: 'delete'
    })
  },
  //添加讲师
  addBanner(banner){
    return request({
      url: `/educms/banneradmin/addBanner`,
      method: 'post',
      data: banner
    })
  },
  //回显(根据ID查询讲师)
  getBannerInfo(id){
    return request({
      url: `/educms/banneradmin/get/${id}`,
      method: 'get'
    })
  },
  //修改首页
  updateBanner(banner){
    return request({
      url: `/educms/banneradmin/update`,
      method: 'put',
      data: banner
    })
  },
  getList(){
    return request({
      url: `/educms/banneradmin/getAllBanner`,
      method: 'get'
    })
  }

}
