import Mock from 'mockjs'

Mock.mock(/api\/list/, 'get', {
    'list': ['吃饭', '睡觉', '打豆豆', '学习', '爱生活', '爱宝贝']
})
