import request from '@/utils/request'

export default{

  //1. 添加课程
  addCourseInfo(courseInfo){
    return request({
      url: `/serviceedu/course/addCourseInfo`,
      method: 'post',
      data: courseInfo
    })
  },
  //2. 查询所有讲师
  getListTeacher(){
    return request({
      url: `/serviceedu/edu-teacher/findAll`,
      method: 'get',
    })
  },
  //根据课程id查询
  getCourseInfoId(id) {
    return request({
        url: `/serviceedu/course/getCourseInfo/${id}`,
        method: 'get'
    })
  },
  updateCourseInfo(courseInfo) {
    return request({
        url: `/serviceedu/course/updateCourseInfo`,
        method: 'post',
        data: courseInfo
    })
  },
  //课程确认信息显示
  getPublishCourseInfo(id) {
    return request({
        url: `/serviceedu/course/getPublishCourseInfo/${id}`,
        method: 'get'
    })
  },
  //课程最终发布
  publishCourse(id) {
    return request({
        url: `/serviceedu/course/publishCourse/${id}`,
        method: 'post'
    })
  },
  getPageList(page, limit, searchObj) {
    return request({
      url: `/serviceedu/course/${page}/${limit}`,
      method: 'get',
      params: searchObj
    })
  },
  removeById(id){
    return request({
      url: `/serviceedu/course/${id}`,
      method: 'delete'
    })
  }
}
