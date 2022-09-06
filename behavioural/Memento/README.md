# Memento

O padrão memento sem violar a encapsulação, captura e externaliza um estado interno de um objeto, de modo que o mesmo possa posteriormente ser restaurado para este estado.

Exemplo em código:

```ts
// interface memento
export interface MementoProtocol {
  get name(): string;
  get date(): Date;
}

// concrete memento
export class ConcreteMemento implements MementoProtocol {
  constructor(
    private _name: string,
    private _date: Date,
    private _filePath: string,
    private _fileFormat: string
  ) {}

  get name(): string {
    return this._name;
  }
  get date(): Date {
    return this._date;
  }
  get filePath(): string {
    return this._filePath;
  }
  get fileFormat(): string {
    return this._fileFormat;
  }
}

// Originator
export class ImageEditor {
  constructor(private filePath: string, private fileFormat: string) {}

  convertFormatTo(format: string): void {
    this.fileFormat = format;
    this.filePath = this.filePath.split(".").slice(0, 1).join();
    this.filePath += "." + format;
  }

  save(): Readonly<MementoProtocol> {
    const date = new Date();

    return new ConcreteMemento(
      date.toISOString(),
      date,
      this.filePath,
      this.fileFormat
    );
  }

  restore(memento: MementoProtocol): void {
    const concreteMemento = memento as ConcreteMemento;
    this.filePath = concreteMemento.filePath;
    this.fileFormat = concreteMemento.fileFormat;
  }
}

// Caretaker
export class ImageEditorBackupManager {
  private mementos: MementoProtocol[] = [];

  constructor(private readonly imageEditor: ImageEditor) {}

  backup(): void {
    console.log(`Backup: salvando o estado de ImageEditor`);
    this.mementos.push(this.imageEditor.save());
  }

  undo(): void {
    const memento = this.mementos.pop();
    if (!memento) {
      console.log("Backup: no mementos");
      return;
    }

    this.imageEditor.restore(memento);
    console.log(`Backup: ${memento.name} foi restaurado com sucesso.`);
  }

  showMementos(): void {
    for (const memento of this.mementos) {
      console.log(memento);
    }
  }
}

// Client code

const imageEditor = new ImageEditor("/media/image.png", "png");
const backupManager = new ImageEditorBackupManager(imageEditor);

backupManager.backup();
imageEditor.convertFormatTo("gif");

console.log(imageEditor); //gif

backupManager.undo();
console.log(imageEditor); //png

backupManager.undo(); // no mementos
console.log(imageEditor); //png
```
