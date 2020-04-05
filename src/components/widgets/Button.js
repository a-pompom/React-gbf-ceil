import React from 'react'

/**
 * 貯金の加算ボタン用コンポーネント
 * 
 * @param {Object} props
 *     @property {Number} increase クリック時の増分
 *     @property {String} buttonClassName 表示スタイル用のクラス名
 *     @property {Function} clicked クリックイベント
 */
const Button = ({increase, buttonClassName, clicked}) => {

    const buttonClicked = () => {

        clicked(increase)
    }
    return (

        <button 
            onClick={buttonClicked}
            className={`CalcRow__button ${buttonClassName}`}
        >
            +{increase}
        </button>
    )
}

export default Button