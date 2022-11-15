import { windowSize } from '@/helpers'
import { StyleSheet } from 'react-native'

export const detailStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  modalContainer: {
    height: 300,
    width: '90%',
    elevation: 10,
    borderRadius: 10,
    position: 'relative',
    backgroundColor: 'rgba(255,255,255,1)'
  },
  modalTextStyle: {
    fontSize: 23,
    color: '#222',
    textAlign: 'center',
  },
  modalControlsContainer: {
    bottom: 0,
    height: 50,
    width: '100%',
    flexDirection: 'row',
    position: 'absolute',
    borderTopColor: '#999',
    borderTopWidth: StyleSheet.hairlineWidth,
  },
  modalControlBtn: {
    flex: 0.5,
    alignItems: 'center',
    justifyContent: 'center'
  },
  scrollContainer: {
    padding: 10,
  },
  titleStyle: {
    marginTop: 20,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  recoedItemStyle: {
    width: '100%',
    height: 50,
    position: 'relative',
    flexDirection: 'row',
    alignItems: 'center',
  },
  indctorContainer: {
    height: 10,
    position: 'relative'
  },
  circle: {
    width: 10,
    height: 10,
    borderRadius: 10,
    backgroundColor: 'rgb(2, 167, 240)'
  },
  line: {
    top: 30,
    left: 5,
    width: 1,
    height: '100%',
    position: 'absolute',
    backgroundColor: '#999'
  },
  red: {
    color: '#f30'
  }
})

export const schemStyles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative'
  },
  scrollContainer: {
    flex: 1,
    paddingTop: 20,
    paddingLeft: 20,
    paddingRight: 20,
    marginBottom: 80,
  },
  commonStyle: {
    width: '100%',
    marginBottom: 20,
  },
  selectItemStyle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  schemeText: {
    padding: 5,
    fontSize: 16,
    letterSpacing: 3,
    paddingHorizontal: 8,
  },
  select: {
    padding: 10,
    width: '75%',
    height: '100%',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#999',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'rgba(0,0,0,0.1)',
  },
  imageViewContainer: {
    flexWrap: 'wrap',
    marginBottom: 30,
    flexDirection: 'row'
  },
  imageItem: {
    margin: 7,
    height: 160,
    borderRadius: 10,
    width: windowSize.width * 0.45 - 20,
  },
  imageStyle: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
  btnStyle: {
    bottom: 0,
    height: 30,
    width: '100%',
    paddingLeft: 25,
    paddingRight: 25,
    marginBottom: 20,
    position: 'absolute',
  }
})
