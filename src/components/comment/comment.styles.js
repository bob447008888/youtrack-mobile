import {StyleSheet} from 'react-native';
import {UNIT, COLOR_FONT, COLOR_FONT_GRAY, COLOR_PINK} from '../../components/variables/variables';

export default StyleSheet.create({
  commentWrapper: {
    flexDirection: 'row',
    marginBottom: UNIT,
    marginTop: UNIT,
    paddingLeft: UNIT,
    paddingRight: UNIT
  },

  authorName: {
    color: COLOR_FONT,
    fontWeight: 'bold'
  },
  comment: {
    marginLeft: UNIT,
    flex: 1
  },
  commentText: {
    marginTop: UNIT
  },
  deletedCommentText: {
    color: COLOR_FONT_GRAY
  },
  actionLink: {
    color: COLOR_PINK
  },

  swipeButton: {
    paddingTop: UNIT * 1,
    flex: 1,
    alignItems: 'center'
  },
  swipeButtonIcon: {
    marginTop: 4,
    width: UNIT * 2,
    height: UNIT * 2
  },
  swipeButtonText: {
    color: '#FFF',
    paddingTop: UNIT,
    fontSize: 10,
    fontFamily: 'System'
  }
});
