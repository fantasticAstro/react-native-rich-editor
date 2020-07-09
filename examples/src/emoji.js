/**
 * @author tangzehua
 * @since 2020-07-09 16:02
 */
import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';

export function EmojiView(props) {
    const {onSelect} = props;
    return (
        <View style={styles.view}>
            <Text style={styles.item} onPress={() => onSelect('😃')}>
                😃
            </Text>
            <Text style={styles.item} onPress={() => onSelect('😄')}>
                😄
            </Text>
            <Text style={styles.item} onPress={() => onSelect('😁')}>
                😁
            </Text>
            <Text style={styles.item} onPress={() => onSelect('😆')}>
                😆
            </Text>
            <Text style={styles.item} onPress={() => onSelect('😅')}>
                😅
            </Text>
            <Text style={styles.item} onPress={() => onSelect('😂')}>
                😂
            </Text>
            <Text style={styles.item} onPress={() => onSelect('🤣')}>
                🤣
            </Text>
            <Text style={styles.item} onPress={() => onSelect('😊')}>
                😊
            </Text>
            <Text style={styles.item} onPress={() => onSelect('😇')}>
                😇
            </Text>
            <Text style={styles.item} onPress={() => onSelect('🙂')}>
                🙂
            </Text>
            <Text style={styles.item} onPress={() => onSelect('🙃')}>
                🙃
            </Text>
            <Text style={styles.item} onPress={() => onSelect('😉')}>
                😉
            </Text>
            <Text style={styles.item} onPress={() => onSelect('😌')}>
                😌
            </Text>
            <Text style={styles.item} onPress={() => onSelect('😍')}>
                😍
            </Text>
            <Text style={styles.item} onPress={() => onSelect('🥰')}>
                🥰
            </Text>
            <Text style={styles.item} onPress={() => onSelect('😘')}>
                😘
            </Text>
            <Text style={styles.item} onPress={() => onSelect('😗')}>
                😗
            </Text>
            <Text style={styles.item} onPress={() => onSelect('😙')}>
                😙
            </Text>
            <Text style={styles.item} onPress={() => onSelect('😚')}>
                😚
            </Text>
            <Text style={styles.item} onPress={() => onSelect('😋')}>
                😋
            </Text>
            <Text style={styles.item} onPress={() => onSelect('😛')}>
                😛
            </Text>
            <Text style={styles.item} onPress={() => onSelect('😝')}>
                😝
            </Text>
            <Text style={styles.item} onPress={() => onSelect('😜')}>
                😜
            </Text>
            <Text style={styles.item} onPress={() => onSelect('🤪')}>
                🤪
            </Text>
            <Text style={styles.item} onPress={() => onSelect('🤨')}>
                🤨
            </Text>
            <Text style={styles.item} onPress={() => onSelect('🧐')}>
                🧐
            </Text>
            <Text style={styles.item} onPress={() => onSelect('🤓')}>
                🤓
            </Text>
            <Text style={styles.item} onPress={() => onSelect('😎')}>
                😎
            </Text>
            <Text style={styles.item} onPress={() => onSelect('🤩')}>
                🤩
            </Text>
            <Text style={styles.item} onPress={() => onSelect('🥳')}>
                🥳
            </Text>
            <Text style={styles.item} onPress={() => onSelect('😏')}>
                😏
            </Text>
            <Text style={styles.item} onPress={() => onSelect('😒')}>
                😒
            </Text>
            <Text style={styles.item} onPress={() => onSelect('😞')}>
                😞
            </Text>
            <Text style={styles.item} onPress={() => onSelect('😔')}>
                😔
            </Text>
            <Text style={styles.item} onPress={() => onSelect('😟')}>
                😟
            </Text>
            <Text style={styles.item} onPress={() => onSelect('😕')}>
                😕
            </Text>
            <Text style={styles.item} onPress={() => onSelect('🙁')}>
                🙁
            </Text>
            <Text style={styles.item} onPress={() => onSelect('😣')}>
                😣
            </Text>
            <Text style={styles.item} onPress={() => onSelect('😖')}>
                😖
            </Text>
            <Text style={styles.item} onPress={() => onSelect('😫')}>
                😫
            </Text>
            <Text style={styles.item} onPress={() => onSelect('😩')}>
                😩
            </Text>
            <Text style={styles.item} onPress={() => onSelect('🥺')}>
                🥺
            </Text>
            <Text style={styles.item} onPress={() => onSelect('😢')}>
                😢
            </Text>
            <Text style={styles.item} onPress={() => onSelect('😭')}>
                😭
            </Text>
            <Text style={styles.item} onPress={() => onSelect('😤')}>
                😤
            </Text>
            <Text style={styles.item} onPress={() => onSelect('😠')}>
                😠
            </Text>
            <Text style={styles.item} onPress={() => onSelect('😡')}>
                😡
            </Text>
            <Text style={styles.item} onPress={() => onSelect('🤬')}>
                🤬
            </Text>
            <Text style={styles.item} onPress={() => onSelect('🤯')}>
                🤯
            </Text>
            <Text style={styles.item} onPress={() => onSelect('😳')}>
                😳
            </Text>
            <Text style={styles.item} onPress={() => onSelect('🥵')}>
                🥵
            </Text>
            <Text style={styles.item} onPress={() => onSelect('🥶')}>
                🥶
            </Text>
            <Text style={styles.item} onPress={() => onSelect('😱')}>
                😱
            </Text>
            <Text style={styles.item} onPress={() => onSelect('😨')}>
                😨
            </Text>
            <Text style={styles.item} onPress={() => onSelect('😰')}>
                😰
            </Text>
            <Text style={styles.item} onPress={() => onSelect('😥')}>
                😥
            </Text>
            <Text style={styles.item} onPress={() => onSelect('😓')}>
                😓
            </Text>
            <Text style={styles.item} onPress={() => onSelect('🤗')}>
                🤗
            </Text>
            <Text style={styles.item} onPress={() => onSelect('🤔')}>
                🤔
            </Text>
            <Text style={styles.item} onPress={() => onSelect('🤭')}>
                🤭
            </Text>
            <Text style={styles.item} onPress={() => onSelect('🤫')}>
                🤫
            </Text>
            <Text style={styles.item} onPress={() => onSelect('🤥')}>
                🤥
            </Text>
            <Text style={styles.item} onPress={() => onSelect('😶')}>
                😶
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    view: {
        alignSelf: 'center',
        flexWrap: 'wrap',
        flexDirection: 'row',
        width: Math.min(Dimensions.get('window').width, 32 * 12),
    },
    item: {
        // height: 25,
        // width: 25,
        fontSize: 20,
        paddingHorizontal: 3,
        paddingVertical: 5,
    },
});
