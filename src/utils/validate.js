export const isvalidPhone = (str) => /^1\d{10}$/.test(str)
export const required = {
  required: true,
  message: '必填项',
  trigger: 'blur'
}

export const phone = {
  pattern: /^1\d{10}$/,
  message: '手机号格式有误',
  trigger: 'blur'
}

export const mobile = {
  pattern: /^1\d{10}$/,
  message: '手机号格式有误',
  trigger: 'blur'
}

export const email = {
  pattern: /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/,
  message: '邮箱格式有误',
  trigger: 'blur'
}

// 6-24位长度任意字符
export const password = {
  pattern: /^.{6,24}$/,
  message: '请输入6-24位长度的密码',
  trigger: 'blur'
}

// 8-24位长度 数字 + 字母
export const passwordNumberAndLetter = {
  pattern: /^(?:(?=.*[0-9].*)(?=.*[A-Za-z].*)).{8,32}$/,
  message: '请输入8位数及以上字母+数字组合',
  trigger: 'blur'
}

// 传真电话
export const fax = {
  pattern: /^\d{1,5}([-]{1}\d{1,32})+$/,
  message: '请输入正确的传真/电话',
  trigger: 'blur'
}

// 不包含数字
export const noNumber = {
  pattern: /\D/,
  message: '不能包含数字',
  trigger: 'blur'
}

export const onOffRequired = {
  pattern: /true/,
  message: '必选项',
  trigger: 'change'
}
export const positiveInteger = {
  pattern: /^[1-9][0-9]*$/g,
  message: '大于0的正整数',
  trigger: 'blur'
}
function validateSecIdCard (value) {
  if (!value) { return true }
  var iSum = 0
  var sId = value
  var aCity = {
    11: '北京',
    12: '天津',
    13: '河北',
    14: '山西',
    15: '内蒙',
    21: '辽宁',
    22: '吉林',
    23: '黑龙',
    31: '上海',
    32: '江苏',
    33: '浙江',
    34: '安徽',
    35: '福建',
    36: '江西',
    37: '山东',
    41: '河南',
    42: '湖北',
    43: '湖南',
    44: '广东',
    45: '广西',
    46: '海南',
    50: '重庆',
    51: '四川',
    52: '贵州',
    53: '云南',
    54: '西藏',
    61: '陕西',
    62: '甘肃',
    63: '青海',
    64: '宁夏',
    65: '新疆',
    71: '台湾',
    81: '香港',
    82: '澳门',
    83: '台湾',
    91: '国外'
  }
  if (!/^\d{17}(\d|x)$/i.test(sId)) {
    return false
  }
  sId = sId.replace(/x$/i, 'a')
  // 非法地区
  if (aCity[parseInt(sId.substr(0, 2))] === null) {
    return false
  }
  var sBirthday = sId.substr(6, 4) + '-' + Number(sId.substr(10, 2)) +
    '-' + Number(sId.substr(12, 2))
  var d = new Date(sBirthday.replace(/-/g, '/'))
  // 非法生日
  if (sBirthday !== d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d
    .getDate()) {
    return false
  }
  for (let i = 17; i >= 0; i--) {
    iSum += Math.pow(2, i) % 11 * parseInt(sId.charAt(17 - i), 11)
  }
  if (iSum % 11 !== 1) {
    return false
  }
  return true
}
export const CertificateType = {
  '1': {
    // pattern: /^(([1][1-5])|([2][1-3])|([3][1-7])|([4][1-6])|([5][0-4])|([6][1-5])|([7][1])|([8][1-2]))\d{4}(([1][9]\d{2})|([2]\d{3}))(([0][1-9])|([1][0-2]))(([0][1-9])|([1-2][0-9])|([3][0-1]))\d{3}[0-9xX]$/,
    message: '二代身份证格式不正确',
    pattern: {
      test (value) {
        return validateSecIdCard(value)
      }
    }
  },
  '2': {
    pattern: /^[a-zA-Z0-9]{5,17}$/,
    message: '护照格式不正确'
  },
  '4': {
    pattern: {
      test (value) {
        return validateSecIdCard(value)
      }
    },
    message: '港澳台居住证格式不正确'
  },
  '16': {
    pattern: /^[HMhm]{1}([0-9]{8})$/,
    message: '港澳居民来往内地通行证格式不正确'
  },
  '64': {
    pattern: /^[0-9]{8}$/,
    message: '台湾居民来往大陆通行证格式不正确'
  },
  '128': {
    pattern: /^[a-zA-Z0-9]{7,21}$/,
    message: '军官证格式不正确'
  },
  '256': {
    pattern: /^[a-zA-Z]{3}[0-9]{12}$/,
    message: '外国人永久居留身份证 格式不正确'
  }
}

export const validateRules = {
  phone,
  mobile,
  email,
  password,
  fax,
  noNumber,
  onOffRequired,
  positiveInteger,
  passwordNumberAndLetter,
  CertificateType
}
