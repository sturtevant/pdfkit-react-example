import React from 'react'
import AceEditor from 'react-ace'

import 'ace-builds'
import 'ace-builds/webpack-resolver'
import 'ace-builds/src-noconflict/mode-javascript'
import 'ace-builds/src-noconflict/theme-monokai'

const Editor = ({value, onChange}) => {
    return (<AceEditor
        mode="javascript"
        theme="monokai"
        onChange={onChange}
        name="editor"
        value={value}
        editorProps={{ $blockScrolling: true }}
    />)
}

export default Editor