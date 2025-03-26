'use client';

import { Editor } from '@monaco-editor/react';

interface CodeEditorProps {
  code: string;
  language?: string;
  onChange?: (value: string | undefined) => void;
  readOnly?: boolean;
}

export default function CodeEditor({
  code,
  language = 'typescript',
  onChange,
  readOnly = false,
}: CodeEditorProps) {
  return (
    <div className="relative h-[500px]">
      <div className="absolute inset-0" style={{ zIndex: 0 }}>
        <Editor
          height="100%"
          defaultLanguage={language}
          defaultValue={code}
          theme="vs-dark"
          options={{
            minimap: { enabled: false },
            fontSize: 14,
            lineNumbers: 'on',
            readOnly,
            scrollBeyondLastLine: false,
            automaticLayout: true,
            fixedOverflowWidgets: true,
            renderWhitespace: 'none',
            domReadOnly: true,
            contextmenu: false,
            scrollbar: {
              vertical: 'visible',
              horizontal: 'visible',
            },
            overviewRulerLanes: 0,
            overviewRulerBorder: false,
            hideCursorInOverviewRuler: true,
          }}
          onChange={onChange}
        />
      </div>
    </div>
  );
} 