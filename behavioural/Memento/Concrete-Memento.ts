import { MementoProtocol } from "./Memento-Protocol";

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
