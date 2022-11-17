# 数智维修工厂 App

## 项目架构

### 技术栈

> react-native + typescript + Android SDK RNCAMEAR SCANNER AVDDEVICES3.0

### 原生模块

对接口第二个版本的厂商 scanner

```tsx
import React from 'react';
import {truboModules} from 'react-native';
import {RNCamera} from 'react-native-camera';
export const truboModules = truboModules.scanner;

const Scanner: React.FC = () => {
  const cameraRef = React.useRef<RNCamera>(null!);
  return <Camera ref={cameraRef} />;
};
```
