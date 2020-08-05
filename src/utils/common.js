/**
 * 加载模块,必须导出 default []
 * @param {*} directory 路径
 * @param {*} type 返回类型
 * @param {*} useSubdirectories 是否深度查找
 * @param {*} regExp 文件名称正则
 */

export function loadModules (context, type = 'object', regExp) {
  if (type === 'array') {
    return context.keys()
      .reduce((modules, path) => {
        if (context(path).default) {
          modules.push(context(path).default)
        }
        return modules
      }, [])
  }
  if (type === 'flattenArray') {
    return context.keys()
      .reduce((modules, path) => {
        if (context(path).default) {
          modules.push(...context(path).default)
        }
        return modules
      }, [])
  }
  if (type === 'object') {
    return context
      .keys()
      .map((key) => ({ key, name: key.match(regExp)[1] }))
      .reduce(
        (modules, { key, name }) => {
          if (context(key).default) {
            return {
              ...modules,
              [name]: context(key).default
            }
          } else {
            return modules
          }
        },
        {}
      )
  }
}

