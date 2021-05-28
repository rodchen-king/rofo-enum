/*
 * @Description:
 * @Author: rodchen
 * @Date: 2021-05-28 10:46:28
 * @LastEditTime: 2021-05-28 21:46:37
 * @LastEditors: rodchen
 */
import { EnumItem, EnumBase, TypeEnum, InjectEnumObject } from './Type';

const sourceData: {
  [key: string]: EnumItem[];
} = {
  userAccountTypeEnum: [
    {
      key: 'STAFF',
      value: 1,
      label: '员工',
    },
    {
      key: 'COMPANY',
      value: 2,
      label: '公司',
    },
  ],
};

export default sourceData;
