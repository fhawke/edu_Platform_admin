import request from '@/utils/request'

export default{

  //1. 讲师列表(条件查询分页)
  //current当前页 limit每页记录数  teacherQuery条件查询对象
  getTeacherListPage(current,limit,teacherQuery){
    return request({
      url: `/serviceedu/edu-teacher/pageTeacherCondition/${current}/${limit}`,
      method: 'post',
      //teacherQuery条件对象，后端使用RequestBody获取数据
      //data表示把对象转为json进行传递
      data: teacherQuery
    })
  },
  //删除讲师
  deleteTeacherId(id){
    return request({
      url: `/serviceedu/edu-teacher/${id}`,
      method: 'delete'
    })
  },
  //添加讲师
  addTeacher(teacher){
    return request({
      url: `/serviceedu/edu-teacher/addTeacher`,
      method: 'post',
      data: teacher
    })
  },
  //回显(根据ID查询讲师)
  getTeacherInfo(id){
    return request({
      url: `/serviceedu/edu-teacher/getTeacher/${id}`,
      method: 'get'
    })
  },
  //修改讲师
  updateTeacher(teacher){
    return request({
      url: `/serviceedu/edu-teacher/updateTeacher`,
      method: 'post',
      data: teacher
    })
  },
  getList(){
    return request({
      url: `/serviceedu/edu-teacher/findAll`,
      method: 'get'
    })
  }

}
