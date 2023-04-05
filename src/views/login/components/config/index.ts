import type { FormRules } from 'element-plus'
export const Accountrules: FormRules = {
  name: [
    {
      required: true,
      message: '帐号不能为空',
      trigger: 'blur'
    },
    {
      min: 3,
      max: 18,
      message: '帐号长度3-18位',
      trigger: 'blur'
    }
  ],
  password: [
    {
      required: true,
      message: '密码不能为空',
      trigger: 'blur'
    },
    {
      min: 3,
      max: 18,
      message: '密码长度3-18位',
      trigger: 'blur'
    }
  ]
}

export const Phonerules: FormRules = {
  phone: [
    {
      required: true,
      message: '手机不能为空',
      trigger: 'blur'
    },
    {
      min: 11,
      max: 11,
      message: '长度11位',
      trigger: 'blur'
    }
  ],
  code: [
    {
      required: true,
      message: '验证码不能为空',
      trigger: 'blur'
    },
    {
      min: 6,
      max: 6,
      message: '请输入六位验证码',
      trigger: 'blur'
    }
  ]
}
