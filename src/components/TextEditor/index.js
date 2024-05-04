import {Component} from 'react'
import {VscBold} from 'react-icons/vsc'
import {GoItalic} from 'react-icons/go'
import {AiOutlineUnderline} from 'react-icons/ai'
import {
  BoldButton,
  ItalicButton,
  UnderlineButton,
  ParagraphText,
} from './styledComponents'
import './index.css'

class TextEditor extends Component {
  state = {
    textInput: '',
    boldText: false,
    italicText: false,
    underlineText: false,
  }

  onChangeTextInput = event => {
    this.setState({textInput: event.target.value})
  }

  onToggleBold = () => {
    this.setState(prevState => ({
      boldText: !prevState.boldText,
    }))
  }

  onToggleItalic = () => {
    this.setState(prevState => ({
      italicText: !prevState.italicText,
    }))
  }

  onToggleUnderline = () => {
    this.setState(prevState => ({
      underlineText: !prevState.underlineText,
    }))
  }

  render() {
    const {textInput, boldText, italicText, underlineText} = this.state

    return (
      <div className="app-container">
        <div className="card-container">
          <div className="left-card">
            <h1 className="heading">Text Editor</h1>
            <img
              src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png"
              alt="text editor"
            />
          </div>
          <div className="right-card">
            <div>
              <ul className="list">
                <li>
                  <BoldButton
                    type="button"
                    data-testid="bold"
                    onClick={this.onToggleBold}
                    bold={boldText}
                  >
                    <VscBold size={25} />
                  </BoldButton>
                </li>
                <li>
                  <ItalicButton
                    type="button"
                    data-testid="italic"
                    onClick={this.onToggleItalic}
                    italic={italicText}
                  >
                    <GoItalic size={25} />
                  </ItalicButton>
                </li>
                <li>
                  <UnderlineButton
                    type="button"
                    data-testid="underline"
                    onClick={this.onToggleUnderline}
                    underline={underlineText}
                  >
                    <AiOutlineUnderline size={25} />
                  </UnderlineButton>
                </li>
              </ul>
            </div>
            <ParagraphText
              type="text"
              onChange={this.onChangeTextInput}
              value={textInput}
              bold={boldText}
              italic={italicText}
              underline={underlineText}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default TextEditor
