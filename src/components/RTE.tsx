import isHotkey from 'is-hotkey'
import React, { useCallback, useMemo, useState } from 'react'
import { createEditor, Editor, Transforms } from 'slate'
import { withHistory } from 'slate-history'
import { Editable, Slate, useSlate, withReact } from 'slate-react'
import Modal from './Modal'

import { Button, Icon, Toolbar } from '@/components/Components'

const HOTKEYS = {
  'mod+b': 'bold',
  'mod+i': 'italic'
}
const RichTextExample = () => {
  const [value, setValue] = useState(initialValue)
  const renderLeaf = useCallback(props => <Leaf {...props} />, [])
  const editor = useMemo(() => withHistory(withReact(createEditor())), [])

  return (
    <Slate editor={editor} value={value} onChange={value => setValue(value)}>
      <Toolbar>
        <MarkButton format="bold" icon="format_bold" />
        <MarkButton format="link-3" icon="format_link_3" />
        <MarkButton format="italic" icon="format_italic" />
<button  onClick={e => {
  this.showModal();
}}> show modal</button>
      </Toolbar>
      <Editable
        renderLeaf={renderLeaf}
        placeholder="Enter some rich text…"
        spellCheck
        autoFocus
        onKeyDown={event => {
          for (const hotkey in HOTKEYS) {
            if (isHotkey(hotkey, event)) {
              event.preventDefault()
              const mark = HOTKEYS[hotkey]
              toggleMark(editor, mark)
            }
          }
        }}
      />
      <Modal />
    </Slate>
  )
}

const toggleMark = (editor, format) => {
  const isActive = isMarkActive(editor, format)

  if (isActive) {
    Editor.removeMark(editor, format)
  } else {
    Editor.addMark(editor, format, true)
  }
}

const isMarkActive = (editor, format) => {
  const marks = Editor.marks(editor)
  return marks ? marks[format] === true : false
}

const Leaf = ({ attributes, children, leaf }) => {
  if (leaf.bold) {
    children = <strong>{children}</strong>
  }
  if (leaf['link-3']) {
    children = <span className="link-3">{children}</span>
  }

  if (leaf.italic) {
    children = <em>{children}</em>
  }

  return <span {...attributes}>{children}</span>
}

const MarkButton = ({ format, icon }) => {
  const editor = useSlate()
  return (
    <Button
      active={isMarkActive(editor, format)}
      onMouseDown={event => {
        event.preventDefault()
        toggleMark(editor, format)
      }}
    >
      <Icon>{icon}</Icon>
    </Button>
  )
}

const initialValue = [

  {
    type: 'paragraph',
    children: [
      {
        text:
          'Since rich text, you can do things like turn a selection of text '
      },
      { text: 'bold', bold: true },
      { text: ' jedan test', 'link-3': true },
      {
        text:
          ', or add a semantically rendered block quote in the middle of the page, like this:'
      }
    ]
  }

]

export default RichTextExample
