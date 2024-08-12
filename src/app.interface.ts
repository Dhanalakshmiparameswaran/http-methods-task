export interface Band {
  name: string;
  recordLabel?: string;
}

export interface Festival {
  name: string;
  bands: Band[];
}

export interface RecordLabelBand {
  label: string;
  bands: {
    name: string;
    festivals: {
      name: string;
    }[];
  }[];
}
