import * as vscode from "vscode";

export function activate({ subscriptions }: vscode.ExtensionContext) {
    const extractMethodCommand = "extract-method.extract-method";
    subscriptions.push(
        vscode.commands.registerCommand(extractMethodCommand, async () => {
            const editor: any = vscode.window.activeTextEditor;
            if (editor.document.languageId === "python") {
                if (editor) {
                    if (editor.selection.isEmpty) {
                        return vscode.window.showErrorMessage("Please Select Text before Extracting a Method");
                    } else if (editor.selection.start.line === editor.selection.end.line) {
                        const { selection } = editor;
                        const { document } = editor;
                        const text = document.getText(selection);
                        const position = selection.start;
                        const edit = new vscode.WorkspaceEdit();
                        const methodName = await vscode.window.showInputBox({ prompt: "Enter Method Name" });
                        if (methodName) {
                            const newText = `def ${methodName}():\n\t${text}`;
                            edit.delete(document.uri, selection);
                            edit.insert(document.uri, position, newText);
                            await vscode.workspace.applyEdit(edit);
                        } else {
                            return vscode.window.showErrorMessage("Method Name is Required");
                        }
                    } else if (editor.selection.start.line !== editor.selection.end.line) {
                        const { selection } = editor;
                        const { document } = editor;
                        let text = document.getText(selection);
                        const position = selection.start;
                        const edit = new vscode.WorkspaceEdit();
                        const methodName = await vscode.window.showInputBox({ prompt: "Enter Method Name" });
                        if (methodName) {
                            if (selection.start.line !== selection.end.line) {
                                if (selection.start.character === 0) {
                                    text = text.replace(/\n/g, "\n\t");
                                    text = `def ${methodName}():\n\t${text}`;
                                    edit.delete(document.uri, selection);
                                    edit.insert(document.uri, position, text);
                                    await vscode.workspace.applyEdit(edit);
                                } else {
                                    text = text.replace(/^\s+/, "");
                                    const newText = `def ${methodName}():\n\t${text}`;
                                    edit.delete(document.uri, selection);
                                    edit.insert(document.uri, position, newText);
                                    await vscode.workspace.applyEdit(edit);
                                }
                            } else {
                                const newText = `def ${methodName}():\n\t${text}`;
                                edit.delete(document.uri, selection);
                                edit.insert(document.uri, position, newText);
                                await vscode.workspace.applyEdit(edit);
                            }
                        } else {
                            return vscode.window.showErrorMessage("Method Name is Required");
                        }
                    }
                } else {
                    return vscode.window.showErrorMessage("Open an Active Editor before Extracting a Method");
                }
                return undefined;
            } else if (editor.document.languageId === "typescript" || editor.document.languageId === "javascript") {
                if (editor) {
                    if (editor.selection.isEmpty) {
                        return vscode.window.showErrorMessage("Please Select Text before Extracting a Method");
                    }
                    if (editor.selection.start.line === editor.selection.end.line) {
                        const { selection } = editor;
                        const { document } = editor;
                        const text = document.getText(selection);
                        const position = selection.start;
                        const edit = new vscode.WorkspaceEdit();
                        const methodName = await vscode.window.showInputBox({ prompt: "Enter Method Name" });
                        if (methodName) {
                            const newText = `function ${methodName}() {\n\t${text}\n}`;
                            edit.delete(document.uri, selection);
                            edit.insert(document.uri, position, newText);
                            await vscode.workspace.applyEdit(edit);
                        } else {
                            return vscode.window.showErrorMessage("Method Name is Required");
                        }
                    } else if (editor.selection.start.line !== editor.selection.end.line) {
                        const { selection } = editor;
                        const { document } = editor;
                        let text = document.getText(selection);
                        const position = selection.start;
                        const edit = new vscode.WorkspaceEdit();
                        const methodName = await vscode.window.showInputBox({ prompt: "Enter Method Name" });
                        if (methodName) {
                            if (selection.start.line !== selection.end.line) {
                                if (selection.start.character === 0) {
                                    text = text.replace(/\n/g, "\n\t");
                                    text = `function ${methodName}() {\n\t${text}\n}`;
                                    edit.delete(document.uri, selection);
                                    edit.insert(document.uri, position, text);
                                    await vscode.workspace.applyEdit(edit);
                                } else {
                                    text = text.replace(/^\s+/, "");
                                    const newText = `function ${methodName}() {\n\t${text}\n}`;
                                    edit.delete(document.uri, selection);
                                    edit.insert(document.uri, position, newText);
                                    await vscode.workspace.applyEdit(edit);
                                }
                            } else {
                                const newText = `function ${methodName}() {\n\t${text}\n}`;
                                edit.delete(document.uri, selection);
                                edit.insert(document.uri, position, newText);
                                await vscode.workspace.applyEdit(edit);
                            }
                        } else {
                            return vscode.window.showErrorMessage("Method Name is Required");
                        }
                    }
                } else {
                    return vscode.window.showErrorMessage("Open an Active Editor before Extracting a Method");
                }
                return undefined;
            } else if (editor.document.languageId === "c") {
                // indent the code to be extracted
                if (editor) {
                    if (editor.selection.isEmpty) {
                        return vscode.window.showErrorMessage("Please Select Text before Extracting a Method");
                    }
                    if (editor.selection.start.line === editor.selection.end.line) {
                        const { selection } = editor;
                        const { document } = editor;
                        const text = document.getText(selection);
                        const position = selection.start;
                        const edit = new vscode.WorkspaceEdit();
                        const methodName = await vscode.window.showInputBox({ prompt: "Enter Method Name" });
                        if (methodName) {
                            const newText = `void ${methodName}()\n{\n\t${text}\n}`;
                            edit.delete(document.uri, selection);
                            edit.insert(document.uri, position, newText);
                            await vscode.workspace.applyEdit(edit);
                        } else {
                            return vscode.window.showErrorMessage("Method Name is Required");
                        }
                    } else if (editor.selection.start.line !== editor.selection.end.line) {
                        const { selection } = editor;
                        const { document } = editor;
                        let text = document.getText(selection);
                        const position = selection.start;
                        const edit = new vscode.WorkspaceEdit();
                        const methodName = await vscode.window.showInputBox({ prompt: "Enter Method Name" });
                        if (methodName) {
                            if (selection.start.line !== selection.end.line) {
                                if (selection.start.character === 0) {
                                    text = text.replace(/\n/g, "\n\t");
                                    text = `void ${methodName}()\n{\n\t${text}\n}`;
                                    edit.delete(document.uri, selection);
                                    edit.insert(document.uri, position, text);
                                    await vscode.workspace.applyEdit(edit);
                                } else {
                                    text = text.replace(/^\s+/, "");
                                    const newText = `void ${methodName}()\n{\n\t${text}\n}`;
                                    edit.delete(document.uri, selection);
                                    edit.insert(document.uri, position, newText);
                                    await vscode.workspace.applyEdit(edit);
                                }
                            } else {
                                const newText = `void ${methodName}()\n{\n\t${text}\n}`;
                                edit.delete(document.uri, selection);
                                edit.insert(document.uri, position, newText);
                                await vscode.workspace.applyEdit(edit);
                            }
                        } else {
                            return vscode.window.showErrorMessage("Method Name is Required");
                        }
                    }
                } else {
                    return vscode.window.showErrorMessage("Open an Active Editor before Extracting a Method");
                }
                return undefined;
            }
        }),
    );
}
