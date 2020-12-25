import request from '@/utils/request'

const api_name = '/serviceedu/edu-chapter'

export default {
  //根据ID查询章节
  getNestedTreeList(courseId) {
    return request({
      url: `${api_name}/nested-list/${courseId}`,
      method: 'get'
    })
  },
  //添加章节
  addChapter(chapter) {
    return request({
      url: `${api_name}/addChapter`,
      method: 'post',
      data: chapter
    })
  },
  //根据ID查询章节
  getChapter(chapterId) {
    return request({
      url: `${api_name}/getChapterInfo/${chapterId}`,
      method: 'get'
    })
  },
  //修改章节
  updateChapter(chapter) {
    return request({
      url: `${api_name}/updateChapter`,
      method: 'post',
      data: chapter
    })
  },
  //删除章节
  deleteChapter(chapterId) {
    return request({
      url: `${api_name}/${chapterId}`,
      method: 'delete'
    })
  },
}