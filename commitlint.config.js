module.exports = {
  extends: ['@commitlint/config-conventional','cz'],
  rules: {
    'type-case': [2, 'always', 'lower-case'], // 默认配置，仅允许小写单词
    'type-enum': [
      2,
      'always',
      [
        'feat', // 新增功能
        'fix', // 修复功能bug
        'refactor', // 重构原有功能
        'test', // 功能中，增加了测试代码，后续这部分代码应删除或注释
        'revert', // 回滚功能，如：已有功能被覆盖，需要恢复

        'build', // 构建相关(与业务代码无关)，如：更新版本号、新增脚本、配置自动化工具等

        'style', // 仅格式化代码、添加注释，绕过规范需要重新提交代码等
        'docs', // 编辑文档

        'chore' // 以上分类中，无法对号入座，则使用
      ]
    ]
  }
};
