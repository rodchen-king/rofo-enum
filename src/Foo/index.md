---
nav:
  title: Components
  path: /components
---

## Foo

Demo:

```tsx
import React from 'react';
import { Foo } from 'react-calendar';
import injectEnumFunction from './Enum';
import sourceData from './Enum/sourceData';
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
console.time('test-start');
const { userAccountTypeEnum } = injectEnumFunction(['userAccountTypeEnum9999']);
console.log(userAccountTypeEnum);
console.timeEnd('test-start');

export default () => <Foo title="First Demo" />;
```

More skills for writing demo: https://d.umijs.org/guide/demo-principle
