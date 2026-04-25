import { useEffect, useRef, useState } from "react";

// import "./styles.css";
//

// Require Editor JS files.
import "froala-editor/js/froala_editor.pkgd.min.js";
import "froala-editor/js/plugins.pkgd.min.js";
import "froala-editor/js/plugins/table.min.js";
import "froala-editor/js/third_party/embedly.min.js";
// import "froala-editor/js/plugins/fullscreen.min.js"

// Require Editor CSS files.
import "froala-editor/css/froala_editor.pkgd.min.css";
import "froala-editor/css/froala_style.min.css";
import "froala-editor/css/third_party/embedly.min.css";
// import "froala-editor/css/plugins/fullscreen.min.css";

import FroalaEditor from "froala-editor";
import ReactFroalaEditor from "react-froala-wysiwyg";
import FroalaEditorView from "react-froala-wysiwyg/FroalaEditorView";

import './froala.css';

const officePasteRegex =
  /(MSFontService|class="?Mso|class='?Mso|class="?Xl|class='?Xl|class=Xl|style="[^"]*\bmso-|style='[^']*\bmso-|w:WordDocument|LibreOffice)/gi

function isOfficePaste(htmlString?: string): boolean {
  if (!htmlString) return false
  return officePasteRegex.test(htmlString)
}

const removeTableColgroups = (html: string): string => {
  const temp = document.createElement("div");
  temp.innerHTML = html;

  for (const table of temp.querySelectorAll("table")) {
    const cols = table.querySelectorAll("colgroup col");

    if (cols.length > 0) {
      for (const tr of table.querySelectorAll("tr")) {
        for (const [index, cell] of Array.from(
          tr.querySelectorAll("td, th")
        ).entries()) {
          const width = cols[index]?.getAttribute("width");
          if (width) {
            (cell as HTMLElement).style.minWidth = `${width}px`;
          }
        }
      }
    }

    table.querySelector("colgroup")?.remove();

    const tableWidth = table.style.width;

    if (tableWidth === "0px") {
      table.style.width = "";
    }

    table.style.tableLayout = "";
  }

  return temp.innerHTML;
};

const wrapHtmlStringWithComment = (html: string, identifier: string) => {
  const randomNumber = Math.floor(Math.random() * 30);
  return `<!-- start${identifier} ${randomNumber} --> ${html} <!-- end${identifier} ${randomNumber} -->`;
};

export const Bugs= () => {
  const ref = useRef<ReactFroalaEditor | null>(null);
  const [isFroalaInitialized, setIsFroalaInitialized] = useState(false);
  const [editor, setEditor] = useState<any>(undefined);
  const [model, setModel] = useState<string>("");

  const handleModelChange = (model: any) => {
    setModel(model);
  };

  // Editor initialization
  useEffect(() => {
    setEditor(ref.current?.editor);
    editor && setIsFroalaInitialized(true);
    console.log("tes", <ReactFroalaEditor />);
  }, [ref.current]);

  // Do after initialization
  useEffect(() => {
    if (isFroalaInitialized && editor.html) {
      editor.html.set(model);
    }
  }, [isFroalaInitialized]);

  return (
    <div className="App">
      <ReactFroalaEditor
        ref={ref}
        model={model}
        onModelChange={handleModelChange}
        tag="textarea"
        config={{
          attribution: false,
          heightMin: 150,
          fontFamilyDefaultSelection: "Arial, sans-serif",
          lineHeight: 1,
          enableTableSelection: false,
          linkAlwaysBlank: true,
          enter: FroalaEditor.ENTER_P,
          useClasses: false,
          mobileIgnoreWidth: 768,
          tableResizingLimit: 15,
          tableInsertHelper: false,
          toolbarButtons: {
            moreText: {
              buttons: [
                "speechBubble",
                "bold",
                "italic",
                "underline",
                "strikeThrough",
                "fontFamily",
                "fontSize",
                "textColor",
                "backgroundColor",
                "inlineClass",
                "inlineStyle",
                "clearFormatting",
              ],
            },
            moreParagraph: {
              buttons: [
                "alignLeft",
                "alignCenter",
                "alignRight",
                "alignJustify",
                "formatOL",
                "formatUL",
                "paragraphFormat",
                "quote",
              ],
            },
            moreRich: {
              buttons: [
                "insertLink",
                "insertImage",
                "insertTable",
                "lineHeight",
              ],
            },
            moreMisc: {
              buttons: ["undo", "redo", "help"],
            },
          },
          defaultFontFamily: "Arial,Helvetica,sans-serif",
          wordPasteModal: true,
          iframe: true,
          iframeDefaultStyle: `
    table td.fr-thick {
      border-width: 2px !important;
    }
    body table td.fr-thick, body table th.fr-thick {
      border: 1px solid #333;
    }
    ::-webkit-scrollbar {
      width: 6px !important;
      height: 6px !important;
      cursor: default !important;
    }
    ::-webkit-scrollbar-track {
      background: #e4e4e7 !important;
      border-radius: 5px !important;
    }
    ::-webkit-scrollbar-thumb {
      background-color: #a1a1aa !important;
      border-radius: 14px !important;
    }
    @keyframes atwho-spin {
      to { transform: rotate(360deg); }
    }
    `,
          iframeStyle: `
      body {
        font-family: Arial, sans-serif;
        font-size: 14px;
        line-height: normal !important;
        overflow-x: auto !important;
        overflow-y: hidden !important;
      }
      table {
        border-collapse: collapse;
      }
      p {
        margin: 0 !important;
      }
      .fr-placeholder {
        font-family: inherit !important;
      }
      /* If the line bellow is commented the resize works but the layout shifts a lot. 
         If the line is commented it solves the layout when you paste it(at first glance) but if you try to resize 
      the column the Editor shrink all columns. */
       /* body table tr td, body table tr th { min-width: 0; border-collapse: collapse; } */
    `,
          charCounterCount: false,
          imageInsertButtons: ["imageUpload"],
          dragInline: false,
          toolbarSticky: false,
          fontFamilySelection: true,
          quickInsertEnabled: false,
          imageDefaultWidth: 0,
          lineBreakerTags: ["table", "hr", "form", "dl"],
          lineBreakerOffset: 15,
          placeholderText: "Write something here",
          imageMaxSize: 10 * 1024 * 1024,
          lineHeights: [
            { label: "Single", value: 1 },
            { label: "1.15", value: 1.15 },
            { label: "1.5", value: 1.5 },
            { label: "Double", value: 2 },
          ],
          fontFamily: {
            "Arial,Helvetica,sans-serif": "Arial",
            "Roboto,sans-serif": "Roboto",
            "Calibri,sans-serif": "Calibri",
            "Candara,sans-serif": "Candara",
            "Consolas,monospace": "Consolas",
            "'Dejavu Sans',sans-serif": "Dejavu Sans",
            "'Franklin Gothic',sans-serif": "Franklin Gothic",
            "Georgia,serif": "Georgia",
            "Helvetica,sans-serif": "Helvetica",
            "'MS Sans Serif',sans-serif": "MS Sans Serif",
            "'Segoe UI',sans-serif": "Segoe UI",
            "Tahoma,sans-serif": "Tahoma",
            "'Trebuchet MS',sans-serif": "Trebuchet MS",
            "Verdana,sans-serif": "Verdana",
          },
          proportionalTableResize: true,
          immediateReactModelUpdate: true,
          events: {
            initialized: function () {
              this.html.set(`<p id="initial-space"></p><br><br>`);
              this.events.focus();
              this.selection.setAtStart(this.$el.get(0));
              this.selection.restore();
            },
            "paste.before": function (
              this: FroalaEditor,
              event: ClipboardEvent
            ) {
              console.log("this", this);
              console.log("event", event);

              const clipboardData = event.clipboardData;
              const htmlString =
                clipboardData?.getData("text/html") ??
                clipboardData?.getData("text/plain");

                if (isOfficePaste(htmlString)) {return true;}

              //Removing or not the previous Colgroup doesnt do much
              const html = removeTableColgroups(htmlString);
              // const html = htmlString;
              //

              event.preventDefault();

              const result = wrapHtmlStringWithComment(html, "Paste");

              this.html.insert(result, true);
              return false;
            },
            "table.inserted": function (this: FroalaEditor, table: Element) {
              const tds = table.getElementsByTagName("td");
              for (let i = 0; i < tds.length; i++) {
                tds[i].style.border = "1px solid #333";
              }
            },
          },
          pluginsEnabled: [
            "table",
            "spell",
            "quote",
            "save",
            "quickInsert",
            "paragraphFormat",
            "paragraphStyle",
            "help",
            "draggable",
            "align",
            "link",
            "lists",
            "file",
            "image",
            "emoticons",
            "url",
            "video",
            "embedly",
            "colors",
            "entities",
            "inlineClass",
            "inlineStyle",
            // 'codeBeautif '
            // 'spellChecker',
            "imageTUI",
          ],
        }}
      />
      <br />
      <strong>Read only editor:</strong>
      <FroalaEditorView model={model} />
    </div>
  );
};
