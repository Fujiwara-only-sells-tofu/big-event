import request from '@/utils/request.js'
// 获取列表信息
export const artGetChannelsService = () => request.get('/my/cate/list')
// 新增分类
export const artAddChannelService = (data) => request.post('my/cate/add', data)

// 编辑文章分类
export const artEditChannelService = (data) =>
  request.put('/my/cate/info', data)
// 删除文章分类
export const artDelChannelService = (id) =>
  request.delete('/my/cate/del', {
    params: { id }
  })

// 获取文章列表
export const artGetListService = (params) =>
  request.get('/my/article/list', {
    params
  })

// 添加文章  data是formData数据
export const artPublishService = (data) => request.post('/my/article/add', data)
// 获取文章详情
export const artGetDetailService = (id) =>
  request.get('my/article/info', { params: { id } })

// 更新文章
export const artEditService = (data) => request.put('/my/article/info', data)

// 文章删除
export const artDelService = (id) =>
  request.delete('my/article/info', { params: { id } })
