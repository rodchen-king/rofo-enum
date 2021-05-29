/*
 * @Description:
 * @Author: rodchen
 * @Date: 2021-05-28 10:59:41
 * @LastEditTime: 2021-05-29 00:03:57
 * @LastEditors: rodchen
 */
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
