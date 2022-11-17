import React from 'react'
import { Colors, windowSize } from '@/helpers'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { View, Text, StyleSheet, TextInput, Pressable, Keyboard } from 'react-native'

interface IConditionBarProps {
  /** 当前任务值 */
  taskValue?: string
  /** 当前车间值 */
  selectValue?: string
  /** 筛选按钮 搜索条件包含两个部分 上面是下拉框跟输入框 下面是按钮筛选buttons代表下面内容 */
  buttons?: React.ReactNode
  /** 点击下拉框调用的函数 */
  onPressSelect?: () => void
  /** 当清空文本框内容的时候调用的函数 */
  onClearSearchText?: () => void
  /**
   * 当键盘隐藏的时候调用的此函数
   * @param {string} value 当前搜索框输入的值
   */
  onSearch?: (value: string) => void
}

const ConditionBar: React.FC<IConditionBarProps> = ({ taskValue, selectValue, buttons, onPressSelect, onSearch, onClearSearchText }) => {
  const [value, setValue] = React.useState('')
  const handleOnPressSelect = () => {
    onPressSelect && onPressSelect()
  }
  const handleClearSearchText = () => {
    setValue('')
    onClearSearchText && onClearSearchText()
  }
  React.useEffect(() => {
    const unlister = Keyboard.addListener('keyboardDidHide', () => {
      onSearch && onSearch(value)
    })
    return () => {
      unlister.remove()
    }
  }, [onSearch, value])

  return (
    <View style={{ ...styles.conditionStyle, height: buttons ? 120 : 60 }}>
      <Pressable style={{ ...styles.conditionOneStyle, height: buttons ? '50%' : '100%' }}>
        {/* 选择框 */}
        <Pressable style={styles.selectContainer} onPress={handleOnPressSelect}>
          <Text style={styles.textStyle}>{selectValue ?? '全部车间'}</Text>
          <AntDesign style={styles.textStyle} name='down' />
        </Pressable>
        <View style={styles.inputStyleContainer}>
          <AntDesign style={[styles.textStyle, styles.iconSearchStyle]} name="search1" />
          <TextInput
            value={value}
            onChangeText={setValue}
            placeholder="请输入机台编码"
            placeholderTextColor={Colors.textStyle.color}
            style={[styles.inputStyle, styles.textStyle]}
          />
          {value ? <Pressable onPress={handleClearSearchText} style={styles.iconCloseStyle}>
            <AntDesign style={[styles.textStyle]} name='close' />
          </Pressable> : null}
        </View>
      </Pressable>
      {buttons && <View style={styles.conditionBtnStyle}>
        <Text style={styles.textStyle}>{taskValue ?? '全部任务:'}</Text>
        <View style={styles.conditionBtnsContainerStyle}>
          {buttons}
        </View>
      </View>}
    </View>
  )
}

const styles = StyleSheet.create({
  conditionStyle: {
    padding: 5,
    width: windowSize.width,
  },
  conditionOneStyle: {
    height: '50%',
    width: '100%',
    marginBottom: 10,
    flexDirection: 'row'
  },
  conditionTwoStyle: {
    height: '50%',
    width: '100%',
    flexDirection: 'row'
  },
  selectContainer: {
    padding: 8,
    width: '40%',
    height: '100%',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#999',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.1)',
    justifyContent: 'space-between'
  },
  inputStyleContainer: {
    width: '58%',
    borderWidth: 1,
    height: '100%',
    marginLeft: 10,
    paddingLeft: 8,
    paddingRight: 8,
    borderRadius: 5,
    borderColor: '#999',
    position: 'relative',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.1)',
  },
  inputStyle: {
    paddingHorizontal: 25,
  },
  iconCloseStyle: {
    right: 8,
    zIndex: 1,
    position: 'absolute',
  },
  iconSearchStyle: {
    left: 8,
    position: 'absolute',
  },
  conditionBtnsContainerStyle: {
    flex: 1,
    flexDirection: 'row',
  },
  conditionBtnStyle: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  textStyle: {
    ...Colors.textStyle,
  }
})

export default ConditionBar
