import React from 'react';
import { TouchableWithoutFeedback, View, Text, StyleSheet } from 'react-native';
import type { ToolbarTheme } from '../../types';
import { useToolbar } from './toolbar-context';

interface Props {
  valueName: string;
  valueOn: string | number | boolean;
  valueOff?: string | number | boolean;
  name: string;
}

export const ToggleTextButton: React.FC<Props> = (props) => {
  const { apply, isSelected, theme, styles } = useToolbar();
  const { name, valueOff, valueOn, valueName } = props;
  const selected = isSelected(name, valueOn);
  const handlePresss = () => apply(name, selected ? valueOff : valueOn);
  const defaultStyles = makeStyles(theme);
  const toolStyle = styles?.selection?.iconToggle?.tool
    ? styles.selection.iconToggle.tool(defaultStyles.tool)
    : defaultStyles.tool;
  let overlayStyle = styles?.selection?.iconToggle?.overlay
    ? styles.selection.iconToggle.overlay(defaultStyles.overlay)
    : defaultStyles.overlay;
  let textStyle = styles?.selection?.iconToggle?.image
    ? styles.selection.iconToggle.image(defaultStyles.text)
    : defaultStyles.text;

  if (valueName === "Paragraph") {
    textStyle = defaultStyles.paragraph;
    overlayStyle = {
      ...overlayStyle,
      backgroundColor: "transparent"
    };
  } else if (valueName === "Heading 1") {
    textStyle = defaultStyles.heading1;
    overlayStyle = {
      ...overlayStyle,
      backgroundColor: "transparent"
    };
  } else if (valueName === "Heading 2") {
    textStyle = defaultStyles.heading2;
    overlayStyle = {
      ...overlayStyle,
      backgroundColor: "transparent"
    };
  } else if (valueName === "Heading 3") {
    textStyle = defaultStyles.heading3;
    overlayStyle = {
      ...overlayStyle,
      backgroundColor: "transparent"
    };
  } else if (valueName === "Heading 4") {
    textStyle = defaultStyles.heading4;
    overlayStyle = {
      ...overlayStyle,
      backgroundColor: "transparent"
    };
  } else if (valueName === "Heading 5") {
    textStyle = defaultStyles.heading5;
    overlayStyle = {
      ...overlayStyle,
      backgroundColor: "transparent"
    };
  } else if (valueName === "Heading 6") {
    textStyle = defaultStyles.heading6;
    overlayStyle = {
      ...overlayStyle,
      backgroundColor: "transparent"
    };
  }
  return (
    <TouchableWithoutFeedback onPress={handlePresss}>
      <View style={toolStyle}>
        <Text style={textStyle}>{valueName}</Text>
        {selected && <View style={overlayStyle} />}
      </View>
    </TouchableWithoutFeedback>
  );
};

const makeStyles = (theme: ToolbarTheme) =>
  StyleSheet.create({
    overlay: {
      ...StyleSheet.absoluteFillObject,
      backgroundColor: theme.overlay,
      // borderRadius: 3,
    },
    tool: {
      borderRadius: 3,
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: 4,
      paddingVertical: 10,
      marginRight: 20,
      marginLeft: 20,
      width: '100%',
      height: 60,
      borderBottomWidth: 1,
      borderBottomColor: "#e6e6e6"
    },
    text: {
      color: theme.color,
      fontWeight: 'bold',
    },
    paragraph: {
      color: theme.color,
    },
    heading1: {
      fontSize: 28,
      fontWeight: 'bold',
    },
    heading2: {
      fontSize: 24,
      fontWeight: 'bold',
    },
    heading3: {
      fontSize: 18,
      fontWeight: 'bold',
    },
    heading4: {
      fontSize: 14,
      fontWeight: 'bold',
    },
    heading5: {
      fontSize: 12,
      fontWeight: 'bold',
    },
    heading6: {
      fontSize: 10,
      fontWeight: 'bold',
    },
  });

ToggleTextButton.defaultProps = {
  valueOff: false,
};
