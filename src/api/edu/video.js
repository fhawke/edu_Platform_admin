import request from '@/utils/request'

const api_name = '/serviceedu/edu-video'

export default {
  //根据ID查询章节
  getNestedTreeList(courseId) {
    return request({
      url: `${api_name}/nested-list/${courseId}`,
      method: 'get'
    })
  },
  //添加章节
  addVideo(video) {
    return request({
      url: `${api_name}/addVideo`,
      method: 'post',
      data: video
    })
  },
  //根据ID查询章节
  getVideo(id) {
    return request({
      url: `${api_name}/getVideoInfo/${id}`,
      method: 'get'
    })
  },
  //修改章节
  updateVideo(video) {
    return request({
      url: `${api_name}/updateVideo`,
      method: 'post',
      data: video
    })
  },
  //删除章节
  deleteVideo(id) {
    return request({
      url: `${api_name}/${id}`,
      method: 'delete'
    })
  },
}