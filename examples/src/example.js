/**
 * Rich Editor Example
 * @author tangzehua
 * @since 2019-06-24 14:52
 */
import React from 'react';
import {
    StatusBar,
    Appearance,
    Button,
    Keyboard,
    KeyboardAvoidingView,
    Platform,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    View,
} from 'react-native';
import {RichEditor, RichToolbar, defaultActions} from 'react-native-pell-rich-editor';
import {InsertLinkModal} from './insertLink';
import {EmojiView} from './emoji';

const initHTML = `<br/>
<center><b>Pell.js Rich Editor</b></center>
<center>React Native</center>
<br/>
<img height="100px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1024px-React-icon.svg.png" />
<br/><br/>
`;

const phizIcon = require('./assets/phiz.png');
const htmlIcon = require('./assets/h5.png');
const videoIcon = require('./assets/video.png');

class Example extends React.Component {
    richText = React.createRef();
    linkModal = React.createRef();

    constructor(props) {
        super(props);
        const that = this;
        const theme = props.theme || Appearance.getColorScheme();
        const contentStyle = that.createContentStyle(theme);
        that.state = {theme: theme, contentStyle, emojiVisible: false};
        that.onHome = ::that.onHome;
        that.save = ::that.save;
        that.onTheme = ::that.onTheme;
        that.onPressAddImage = ::that.onPressAddImage;
        that.onInsertLink = ::that.onInsertLink;
        that.onLinkDone = ::that.onLinkDone;
        that.themeChange = ::that.themeChange;
        that.handleChange = ::that.handleChange;
        that.handleHeightChange = ::that.handleHeightChange;
        that.insertEmoji = ::that.insertEmoji;
        that.insertHTML = ::that.insertHTML;
        that.insertVideo = ::that.insertVideo;
        that.handleEmoji = ::that.handleEmoji;
    }

    componentDidMount() {
        Appearance.addChangeListener(this.themeChange);
        Keyboard.addListener('keyboardDidShow', this.onKeyBoard);
    }

    componentWillUnmount() {
        Appearance.removeChangeListener(this.themeChange);
        Keyboard.removeListener('keyboardDidShow', this.onKeyBoard);
    }

    onKeyBoard = () => {
        TextInput.State.currentlyFocusedField() && this.setState({emojiVisible: false});
    };

    /**
     * theme change to editor color
     * @param colorScheme
     */
    themeChange({colorScheme}) {
        const theme = colorScheme;
        const contentStyle = this.createContentStyle(theme);
        this.setState({theme, contentStyle});
    }

    async save() {
        // Get the data here and call the interface to save the data
        let html = await this.richText.current?.getContentHtml();
        // console.log(html);
        alert(html);
    }

    /**
     * editor change data
     * @param {string} html
     */
    handleChange(html) {
        console.log('editor data:', html);
    }

    /**
     * editor height change
     * @param {number} height
     */
    handleHeightChange(height) {
        console.log('editor height change:', height);
    }

    insertEmoji(emoji) {
        this.richText.current?.insertText(emoji);
        this.richText.current?.blurContentEditor();
    }

    handleEmoji() {
        const {emojiVisible} = this.state;
        Keyboard.dismiss();
        this.richText.current?.blurContentEditor();
        this.setState({emojiVisible: !emojiVisible});
    }

    insertVideo() {
        this.richText.current?.insertVideo(
            'https://mdn.github.io/learning-area/html/multimedia-and-embedding/video-and-audio-content/rabbit320.mp4',
        );
    }

    insertHTML() {
        this.richText.current?.insertHTML(`<span style="color: blue; padding:0 10px;">HTML</span>`);
    }

    onPressAddImage() {
        // insert URL
        this.richText.current?.insertImage(
            'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1024px-React-icon.svg.png',
        );
        // insert base64
        // this.richText.current?.insertImage(`data:${image.mime};base64,${image.data}`);
        this.richText.current?.blurContentEditor();
    }

    onInsertLink() {
        // this.richText.current?.insertLink('Google', 'http://google.com');
        this.linkModal.current?.setModalVisible(true);
    }

    onLinkDone({title, url}) {
        this.richText.current?.insertLink(title, url);
    }

    onHome() {
        this.props.navigation.push('index');
    }

    createContentStyle(theme) {
        const contentStyle = {
            backgroundColor: '#000033',
            color: '#fff',
            placeholderColor: 'gray',
            cssText: '.pell {background-color: #eee', // initial valid
            contentCSSText: 'font-size: 20px; min-height: 200px; height: 100%;', // initial valid
        };
        if (theme === 'light') {
            contentStyle.backgroundColor = '#fff';
            contentStyle.color = '#000033';
            contentStyle.placeholderColor = '#a9a9a9';
        }
        return contentStyle;
    }

    onTheme() {
        let {theme} = this.state;
        theme = theme === 'light' ? 'dark' : 'light';
        let contentStyle = this.createContentStyle(theme);
        this.setState({theme, contentStyle});
    }

    render() {
        let that = this;
        const {contentStyle, theme, emojiVisible} = that.state;
        const {backgroundColor, color, placeholderColor} = contentStyle;
        const themeBg = {backgroundColor};
        return (
            <SafeAreaView style={[styles.container, themeBg]}>
                <StatusBar barStyle={theme !== 'dark' ? 'dark-content' : 'light-content'} />
                <InsertLinkModal
                    placeholderColor={placeholderColor}
                    color={color}
                    backgroundColor={backgroundColor}
                    onDone={that.onLinkDone}
                    ref={that.linkModal}
                />
                <View style={styles.nav}>
                    <Button title={'HOME'} onPress={that.onHome} />
                    <Button title={theme} onPress={that.onTheme} />
                    <Button title="Save" onPress={that.save} />
                </View>
                <ScrollView style={[styles.scroll, themeBg]} keyboardDismissMode={'none'}>
                    <View>
                        <View style={styles.item}>
                            <Text style={{color}}>To: </Text>
                            <TextInput
                                style={[styles.input, {color}]}
                                placeholderTextColor={placeholderColor}
                                placeholder={'stulip@126.com'}
                            />
                        </View>
                        <View style={styles.item}>
                            <Text style={{color}}>Subject: </Text>
                            <TextInput
                                style={[styles.input, {color}]}
                                placeholderTextColor={placeholderColor}
                                placeholder="Rich Editor Bug 😀"
                            />
                        </View>
                    </View>
                    <RichEditor
                        // initialFocus={true}
                        editorStyle={contentStyle}
                        containerStyle={themeBg}
                        ref={that.richText}
                        style={[styles.rich, themeBg]}
                        placeholder={'please input content'}
                        initialContentHTML={initHTML}
                        onChange={that.handleChange}
                        onHeightChange={that.handleHeightChange}
                    />
                </ScrollView>
                <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
                    <RichToolbar
                        style={[styles.richBar, themeBg]}
                        editor={that.richText}
                        iconTint={color}
                        selectedIconTint={'#2095F2'}
                        selectedButtonStyle={{backgroundColor: 'transparent'}}
                        onPressAddImage={that.onPressAddImage}
                        onInsertLink={that.onInsertLink}
                        iconSize={40}
                        actions={['insertVideo', ...defaultActions, 'insertEmoji', 'insertHTML']}
                        iconMap={{
                            insertEmoji: phizIcon,
                            // insertHTML: <Text style={styles.tib}>HTML</Text>,
                            insertHTML: htmlIcon,
                            insertVideo: videoIcon,
                        }}
                        insertEmoji={that.handleEmoji}
                        insertHTML={that.insertHTML}
                        insertVideo={that.insertVideo}
                    />
                    {emojiVisible && <EmojiView onSelect={that.insertEmoji} />}
                </KeyboardAvoidingView>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },
    nav: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 5,
    },
    rich: {
        minHeight: 300,
        flex: 1,
    },
    richBar: {
        height: 50,
        backgroundColor: '#F5FCFF',
    },
    scroll: {
        backgroundColor: '#ffffff',
    },
    item: {
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderColor: '#e8e8e8',
        flexDirection: 'row',
        height: 40,
        alignItems: 'center',
        paddingHorizontal: 15,
    },

    input: {
        flex: 1,
    },

    tib: {
        textAlign: 'center',
        color: '#000',
    },
});

export {Example};
