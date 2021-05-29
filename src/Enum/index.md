---
nav:
  title: Components
  path: /components
---

# Enum

## <span style="font-size:18px; color: #4569d4">方法说明</span>

| 属性名             | 说明                      | 类型        |
| ------------------ | ------------------------- | ----------- |
| initEnumSourceData | 初始化数据源              | `function`  |
| injectEnumFunction | 注册枚举类型数据          | `function`  |
| SourceData         | sourceData 的 ts 类型结构 | `interface` |

<br />

## <span style="font-size:18px; color: #4569d4">TS 类型结构</span>

```ts
export type TypeEnum = number | string;

export interface EnumItem {
  key: TypeEnum;
  label: TypeEnum;
  value: TypeEnum;
}

export interface EnumBase {
  [key: number]: TypeEnum;
  [key: string]: TypeEnum;
}

export interface InjectEnumItem {
  enum?: EnumBase;
  getLabelByValue?: Function;
}

export interface InjectEnumObject {
  [key: string]: InjectEnumItem;
}

export interface SourceData {
  [key: string]: EnumItem[];
}
```

<br />

## <span style="font-size:18px; color: #4569d4">注册返回的枚举项属性</span>

| 属性名          | 说明                              | 类型       |
| --------------- | --------------------------------- | ---------- |
| enum            | enum 枚举值                       | `EnumItem` |
| getLabelByValue | 用于通过 key 值获取对应的文本信息 | `function` |

<br />

## <span style="font-size:18px; color: #4569d4">demo 测试</span>

```tsx
import React from 'react';
import { injectEnumFunction, initEnumSourceData, SourceData } from 'rofo-enum';

const sourceData: SourceData = {
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

for (let i = 0; i < 10000; i++) {
  sourceData['userAccountTypeEnum' + i] = [
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
  ];
}

initEnumSourceData(sourceData);

console.time('test-start');
const { userAccountTypeEnum9999 } = injectEnumFunction([
  'userAccountTypeEnum9999',
]);

console.log(userAccountTypeEnum9999.enum);

console.log(userAccountTypeEnum9999.getLabelByValue(1));

console.timeEnd('test-start');
```

More skills for writing demo: https://d.umijs.org/guide/demo-principle
